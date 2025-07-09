import { Package, DollarSign, AlertTriangle, XCircle } from 'lucide-react'
import { dashboardStats } from '@/data/sampleData'

const stats = [
  {
    name: '総商品数',
    value: dashboardStats.totalProducts.toLocaleString(),
    icon: Package,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: '総在庫価値',
    value: `¥${(dashboardStats.totalInventoryValue / 1000000).toFixed(1)}M`,
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: '低在庫商品',
    value: dashboardStats.lowStockItems.toString(),
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    name: '欠品商品',
    value: dashboardStats.outOfStockItems.toString(),
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="card p-6">
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${stat.bgColor} p-3 rounded-lg`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 