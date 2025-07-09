import { warehouses, inventoryItems } from '@/data/sampleData'

export default function WarehouseStats() {
  // Calculate warehouse statistics
  const totalWarehouses = warehouses.length
  const activeWarehouses = warehouses.filter(warehouse => warehouse.isActive).length
  const inactiveWarehouses = totalWarehouses - activeWarehouses

  // Group by type
  const typeStats = warehouses.reduce((acc, warehouse) => {
    if (!acc[warehouse.type]) {
      acc[warehouse.type] = 0
    }
    acc[warehouse.type]++
    return acc
  }, {} as Record<string, number>)

  // Calculate total inventory across all warehouses
  const totalInventoryValue = inventoryItems.reduce((sum, item) => 
    sum + (item.quantity * item.product.price), 0
  )
  
  const totalInventoryQuantity = inventoryItems.reduce((sum, item) => 
    sum + item.quantity, 0
  )

  // Recent sync status
  const recentSyncs = warehouses.filter(warehouse => {
    if (!warehouse.lastSync) return false
    const hoursSinceSync = (new Date().getTime() - warehouse.lastSync.getTime()) / (1000 * 60 * 60)
    return hoursSinceSync < 24
  }).length

  const warehouseTypeLabels = {
    own: '自社倉庫',
    rakuten: '楽天',
    amazon: 'Amazon',
    zozo: 'ZOZO'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            総計
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">拠点総数</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">全拠点</span>
            <span className="text-sm font-medium">{totalWarehouses}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">稼働中</span>
            <span className="text-sm font-medium text-green-600">{activeWarehouses}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">停止中</span>
            <span className="text-sm font-medium text-red-600">{inactiveWarehouses}</span>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            在庫統計
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">総在庫</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">総数量</span>
            <span className="text-sm font-medium">{totalInventoryQuantity.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">総価値</span>
            <span className="text-sm font-medium">¥{totalInventoryValue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            拠点タイプ
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">タイプ別</h3>
        
        <div className="space-y-2">
          {Object.entries(typeStats).map(([type, count]) => (
            <div key={type} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {warehouseTypeLabels[type as keyof typeof warehouseTypeLabels]}
              </span>
              <span className="text-sm font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            同期状況
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">データ同期</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">24時間以内</span>
            <span className="text-sm font-medium text-green-600">{recentSyncs}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">要同期</span>
            <span className="text-sm font-medium text-red-600">{activeWarehouses - recentSyncs}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 