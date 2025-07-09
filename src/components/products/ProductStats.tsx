import { products } from '@/data/sampleData'

export default function ProductStats() {
  // Calculate product statistics
  const totalProducts = products.length
  const activeProducts = products.filter(product => product.isActive).length
  const inactiveProducts = totalProducts - activeProducts
  
  // Group by category
  const categoryStats = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = 0
    }
    acc[product.category]++
    return acc
  }, {} as Record<string, number>)

  // Group by season
  const seasonStats = products.reduce((acc, product) => {
    if (!acc[product.season]) {
      acc[product.season] = 0
    }
    acc[product.season]++
    return acc
  }, {} as Record<string, number>)

  const totalValue = products.reduce((sum, product) => sum + product.price, 0)
  const averagePrice = totalValue / totalProducts

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            総計
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">商品総数</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">全商品</span>
            <span className="text-sm font-medium">{totalProducts}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">有効</span>
            <span className="text-sm font-medium text-green-600">{activeProducts}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">無効</span>
            <span className="text-sm font-medium text-red-600">{inactiveProducts}</span>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            価格
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">価格統計</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">平均価格</span>
            <span className="text-sm font-medium">¥{Math.round(averagePrice).toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">総価値</span>
            <span className="text-sm font-medium">¥{totalValue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            カテゴリー
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">カテゴリー別</h3>
        
        <div className="space-y-2">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div key={category} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{category}</span>
              <span className="text-sm font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-3 h-3 rounded-full bg-orange-500" />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            シーズン
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">シーズン別</h3>
        
        <div className="space-y-2">
          {Object.entries(seasonStats).map(([season, count]) => (
            <div key={season} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{season}</span>
              <span className="text-sm font-medium">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 