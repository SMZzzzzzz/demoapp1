import { Activity, ArrowUp, ArrowDown, Package } from 'lucide-react'
import { salesData, inventoryItems } from '@/data/sampleData'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export default function RecentActivity() {
  // Create activity items from sales data and inventory updates
  const recentActivities = [
    ...salesData.map(sale => ({
      id: `sale-${sale.id}`,
      type: 'sale' as const,
      title: '売上発生',
      description: `${sale.quantity}個の商品が販売されました (${sale.channel})`,
      value: `¥${sale.revenue.toLocaleString()}`,
      timestamp: sale.date,
      icon: ArrowUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    })),
    ...inventoryItems.slice(0, 2).map(item => ({
      id: `inventory-${item.id}`,
      type: 'inventory' as const,
      title: '在庫更新',
      description: `${item.product.name}の在庫が更新されました`,
      value: `${item.quantity}個`,
      timestamp: item.lastUpdated,
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    })),
  ]

  // Sort by timestamp
  const sortedActivities = recentActivities
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 5)

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">最近のアクティビティ</h3>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {sortedActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`flex-shrink-0 ${activity.bgColor} p-2 rounded-lg`}>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm font-medium text-gray-900">{activity.value}</p>
              </div>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">
                {format(activity.timestamp, 'MM/dd HH:mm', { locale: ja })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {sortedActivities.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">
            <Activity className="h-12 w-12 mx-auto" />
          </div>
          <p className="text-sm text-gray-600">最近のアクティビティはありません</p>
        </div>
      )}
    </div>
  )
} 