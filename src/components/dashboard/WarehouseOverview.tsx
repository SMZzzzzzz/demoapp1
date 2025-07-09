import { Warehouse } from 'lucide-react'
import { warehouses, inventoryItems } from '@/data/sampleData'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

const warehouseColors = {
  own: 'bg-purple-100 text-purple-800',
  rakuten: 'bg-red-100 text-red-800',
  amazon: 'bg-yellow-100 text-yellow-800',
  zozo: 'bg-green-100 text-green-800',
}

export default function WarehouseOverview() {
  // Calculate inventory summary for each warehouse
  const warehouseSummary = warehouses.map(warehouse => {
    const warehouseInventory = inventoryItems.filter(item => item.warehouseId === warehouse.id)
    const totalItems = warehouseInventory.length
    const lowStockItems = warehouseInventory.filter(item => item.status === 'low').length
    const outOfStockItems = warehouseInventory.filter(item => item.status === 'out').length
    const totalQuantity = warehouseInventory.reduce((sum, item) => sum + item.quantity, 0)
    
    return {
      ...warehouse,
      totalItems,
      lowStockItems,
      outOfStockItems,
      totalQuantity,
    }
  })

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">拠点別在庫概要</h3>
        <Warehouse className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {warehouseSummary.map((warehouse) => (
          <div key={warehouse.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${warehouseColors[warehouse.type]}`}>
                {warehouse.type.toUpperCase()}
              </span>
              <div className={`w-3 h-3 rounded-full ${warehouse.isActive ? 'bg-green-400' : 'bg-gray-400'}`} />
            </div>
            
            <h4 className="font-medium text-gray-900 mb-1">{warehouse.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{warehouse.location}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">総商品数:</span>
                <span className="font-medium">{warehouse.totalItems}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">総在庫数:</span>
                <span className="font-medium">{warehouse.totalQuantity.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">低在庫:</span>
                <span className="font-medium text-yellow-600">{warehouse.lowStockItems}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">欠品:</span>
                <span className="font-medium text-red-600">{warehouse.outOfStockItems}</span>
              </div>
            </div>
            
            {warehouse.lastSync && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  最終同期: {format(warehouse.lastSync, 'MM/dd HH:mm', { locale: ja })}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 