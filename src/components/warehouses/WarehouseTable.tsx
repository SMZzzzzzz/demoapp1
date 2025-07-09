'use client'

import { useState } from 'react'
import { warehouses, inventoryItems } from '@/data/sampleData'
import { Edit, Eye, MoreHorizontal, RefreshCw, MapPin } from 'lucide-react'

export default function WarehouseTable() {
  const [sortField, setSortField] = useState<string>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedWarehouses = [...warehouses].sort((a, b) => {
    const aValue = a[sortField as keyof typeof a]
    const bValue = b[sortField as keyof typeof b]
    
    // Handle undefined values
    if (aValue == null && bValue == null) return 0
    if (aValue == null) return sortDirection === 'asc' ? 1 : -1
    if (bValue == null) return sortDirection === 'asc' ? -1 : 1
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? (
      <span className="badge badge-success">稼働中</span>
    ) : (
      <span className="badge badge-error">停止中</span>
    )
  }

  const getTypeBadge = (type: string) => {
    const typeColors = {
      'own': 'badge-primary',
      'rakuten': 'badge-error',
      'amazon': 'badge-warning',
      'zozo': 'badge-success'
    }
    const typeLabels = {
      'own': '自社',
      'rakuten': '楽天',
      'amazon': 'Amazon',
      'zozo': 'ZOZO'
    }
    return (
      <span className={`badge ${typeColors[type as keyof typeof typeColors] || 'badge-secondary'}`}>
        {typeLabels[type as keyof typeof typeLabels]}
      </span>
    )
  }

  const getSyncStatus = (lastSync?: Date) => {
    if (!lastSync) {
      return <span className="badge badge-secondary">未同期</span>
    }
    
    const hoursSinceSync = (new Date().getTime() - lastSync.getTime()) / (1000 * 60 * 60)
    
    if (hoursSinceSync < 1) {
      return <span className="badge badge-success">最新</span>
    } else if (hoursSinceSync < 24) {
      return <span className="badge badge-info">{Math.round(hoursSinceSync)}時間前</span>
    } else {
      return <span className="badge badge-warning">要同期</span>
    }
  }

  const getWarehouseInventoryStats = (warehouseId: string) => {
    const warehouseInventory = inventoryItems.filter(item => item.warehouseId === warehouseId)
    const totalQuantity = warehouseInventory.reduce((sum, item) => sum + item.quantity, 0)
    const totalValue = warehouseInventory.reduce((sum, item) => 
      sum + (item.quantity * item.product.price), 0
    )
    
    return { totalQuantity, totalValue, itemCount: warehouseInventory.length }
  }

  return (
    <div className="bg-white shadow-sm rounded-lg border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                拠点名
              </th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('type')}
              >
                タイプ
              </th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('location')}
              >
                場所
              </th>
              <th className="table-header">在庫統計</th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('lastSync')}
              >
                最終同期
              </th>
              <th className="table-header">API接続</th>
              <th className="table-header">ステータス</th>
              <th className="table-header">アクション</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedWarehouses.map((warehouse) => {
              const inventoryStats = getWarehouseInventoryStats(warehouse.id)
              
              return (
                <tr key={warehouse.id} className="hover:bg-gray-50">
                  <td className="table-cell">
                    <div className="font-medium text-gray-900">
                      {warehouse.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      ID: {warehouse.id}
                    </div>
                  </td>
                  <td className="table-cell">
                    {getTypeBadge(warehouse.type)}
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      {warehouse.location}
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="text-sm">
                      <div className="font-medium">{inventoryStats.itemCount}種類</div>
                      <div className="text-gray-500">{inventoryStats.totalQuantity.toLocaleString()}点</div>
                      <div className="text-gray-500">¥{inventoryStats.totalValue.toLocaleString()}</div>
                    </div>
                  </td>
                  <td className="table-cell">
                    {getSyncStatus(warehouse.lastSync)}
                    {warehouse.lastSync && (
                      <div className="text-xs text-gray-500 mt-1">
                        {warehouse.lastSync.toLocaleDateString('ja-JP', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    )}
                  </td>
                  <td className="table-cell">
                    {warehouse.apiEndpoint ? (
                      <span className="badge badge-success">接続済み</span>
                    ) : (
                      <span className="badge badge-error">未設定</span>
                    )}
                  </td>
                  <td className="table-cell">
                    {getStatusBadge(warehouse.isActive)}
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-blue-600" title="データ同期">
                        <RefreshCw className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600" title="詳細表示">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600" title="編集">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600" title="その他">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
} 