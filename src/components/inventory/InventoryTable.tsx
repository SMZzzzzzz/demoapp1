import { inventoryItems } from '@/data/sampleData'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { Package, Edit, Eye } from 'lucide-react'

const getStatusBadge = (status: string) => {
  const statusMap = {
    high: { label: '在庫十分', className: 'status-badge status-high' },
    medium: { label: '在庫普通', className: 'status-badge status-medium' },
    low: { label: '在庫少', className: 'status-badge status-low' },
    out: { label: '在庫切れ', className: 'status-badge status-out' },
  }
  return statusMap[status as keyof typeof statusMap] || statusMap.out
}

const getWarehouseColor = (type: string) => {
  const colorMap = {
    own: 'bg-purple-100 text-purple-800',
    rakuten: 'bg-red-100 text-red-800',
    amazon: 'bg-yellow-100 text-yellow-800',
    zozo: 'bg-green-100 text-green-800',
  }
  return colorMap[type as keyof typeof colorMap] || 'bg-gray-100 text-gray-800'
}

export default function InventoryTable() {
  return (
    <div className="card overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Package className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">在庫一覧</h3>
          </div>
          <div className="text-sm text-gray-500">
            {inventoryItems.length} 件の商品
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                商品情報
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                拠点
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                在庫数
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                予約済み
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                利用可能
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ステータス
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                最終更新
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryItems.map((item) => {
              const statusBadge = getStatusBadge(item.status)
              const warehouseColor = getWarehouseColor(item.warehouse.type)
              
              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {item.product.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.product.sku} • {item.product.color} • {item.product.size}
                      </div>
                      <div className="text-xs text-gray-400">
                        {item.product.category} • ¥{item.product.price.toLocaleString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${warehouseColor}`}>
                        {item.warehouse.type.toUpperCase()}
                      </span>
                      <div className="text-sm text-gray-900 mt-1">{item.warehouse.name}</div>
                      <div className="text-xs text-gray-500">{item.warehouse.location}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.quantity.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      最大: {item.maxStock.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.reservedQuantity.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.availableQuantity.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      再注文点: {item.reorderPoint}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={statusBadge.className}>
                      {statusBadge.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(item.lastUpdated, 'MM/dd HH:mm', { locale: ja })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {inventoryItems.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-sm text-gray-600">在庫データがありません</p>
        </div>
      )}
    </div>
  )
} 