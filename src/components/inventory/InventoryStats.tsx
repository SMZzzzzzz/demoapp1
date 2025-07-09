import { inventoryItems, warehouses } from '@/data/sampleData'

export default function InventoryStats() {
  // Calculate stats by warehouse
  const warehouseStats = warehouses.map(warehouse => {
    const warehouseInventory = inventoryItems.filter(item => item.warehouseId === warehouse.id)
    const totalValue = warehouseInventory.reduce((sum, item) => 
      sum + (item.quantity * item.product.price), 0
    )
    const totalQuantity = warehouseInventory.reduce((sum, item) => sum + item.quantity, 0)
    
    return {
      warehouse,
      totalValue,
      totalQuantity,
      itemCount: warehouseInventory.length,
    }
  })

  const warehouseColors = {
    own: 'bg-purple-500',
    rakuten: 'bg-red-500',
    amazon: 'bg-yellow-500',
    zozo: 'bg-green-500',
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {warehouseStats.map(({ warehouse, totalValue, totalQuantity, itemCount }) => (
        <div key={warehouse.id} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-3 h-3 rounded-full ${warehouseColors[warehouse.type]}`} />
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {warehouse.type}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{warehouse.name}</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">商品種類</span>
              <span className="text-sm font-medium">{itemCount}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">総在庫数</span>
              <span className="text-sm font-medium">{totalQuantity.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">在庫価値</span>
              <span className="text-sm font-medium">¥{totalValue.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 