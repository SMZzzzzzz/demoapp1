import { AlertTriangle, XCircle } from 'lucide-react'
import { inventoryItems } from '@/data/sampleData'

export default function InventoryAlerts() {
  const lowStockItems = inventoryItems.filter(item => item.status === 'low')
  const outOfStockItems = inventoryItems.filter(item => item.status === 'out')

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">在庫アラート</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {lowStockItems.length + outOfStockItems.length} 件の問題
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Low stock items */}
        {lowStockItems.length > 0 && (
          <div>
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
              <h4 className="text-sm font-medium text-gray-900">低在庫商品</h4>
            </div>
            <div className="space-y-2">
              {lowStockItems.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                    <p className="text-xs text-gray-600">
                      {item.product.sku} • {item.warehouse.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-yellow-700">
                      {item.availableQuantity} / {item.maxStock}
                    </p>
                    <p className="text-xs text-gray-600">在庫 / 最大</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Out of stock items */}
        {outOfStockItems.length > 0 && (
          <div>
            <div className="flex items-center mb-3">
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
              <h4 className="text-sm font-medium text-gray-900">欠品商品</h4>
            </div>
            <div className="space-y-2">
              {outOfStockItems.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
                    <p className="text-xs text-gray-600">
                      {item.product.sku} • {item.warehouse.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-700">在庫切れ</p>
                    <p className="text-xs text-gray-600">要発注</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No alerts */}
        {lowStockItems.length === 0 && outOfStockItems.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">
              <AlertTriangle className="h-12 w-12 mx-auto" />
            </div>
            <p className="text-sm text-gray-600">現在、在庫アラートはありません</p>
          </div>
        )}
      </div>
    </div>
  )
} 