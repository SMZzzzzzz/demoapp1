'use client'

import { useState } from 'react'
import { products } from '@/data/sampleData'
import { Edit, Eye, MoreHorizontal } from 'lucide-react'

export default function ProductTable() {
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

  const sortedProducts = [...products].sort((a, b) => {
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
      <span className="badge badge-success">有効</span>
    ) : (
      <span className="badge badge-error">無効</span>
    )
  }

  const getSeasonBadge = (season: string) => {
    const seasonColors = {
      'ALL': 'badge-primary',
      'SS': 'badge-warning',
      'AW': 'badge-info'
    }
    return (
      <span className={`badge ${seasonColors[season as keyof typeof seasonColors] || 'badge-secondary'}`}>
        {season}
      </span>
    )
  }

  return (
    <div className="bg-white shadow-sm rounded-lg border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('sku')}
              >
                SKU
              </th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                商品名
              </th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('category')}
              >
                カテゴリー
              </th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('brand')}
              >
                ブランド
              </th>
              <th className="table-header">色・サイズ</th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('price')}
              >
                価格
              </th>
              <th 
                className="table-header cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('cost')}
              >
                原価
              </th>
              <th className="table-header">シーズン</th>
              <th className="table-header">ステータス</th>
              <th className="table-header">アクション</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="table-cell font-mono text-sm">
                  {product.sku}
                </td>
                <td className="table-cell">
                  <div className="font-medium text-gray-900">
                    {product.name}
                  </div>
                </td>
                <td className="table-cell">
                  {product.category}
                </td>
                <td className="table-cell">
                  {product.brand}
                </td>
                <td className="table-cell">
                  <div className="text-sm">
                    <div>{product.color}</div>
                    <div className="text-gray-500">{product.size}</div>
                  </div>
                </td>
                <td className="table-cell font-medium">
                  ¥{product.price.toLocaleString()}
                </td>
                <td className="table-cell text-gray-600">
                  ¥{product.cost.toLocaleString()}
                </td>
                <td className="table-cell">
                  {getSeasonBadge(product.season)}
                </td>
                <td className="table-cell">
                  {getStatusBadge(product.isActive)}
                </td>
                <td className="table-cell">
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 