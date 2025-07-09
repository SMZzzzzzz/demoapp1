import MainLayout from '@/components/layout/MainLayout'
import DashboardStats from '@/components/dashboard/DashboardStats'
import WarehouseOverview from '@/components/dashboard/WarehouseOverview'
import InventoryAlerts from '@/components/dashboard/InventoryAlerts'
import RecentActivity from '@/components/dashboard/RecentActivity'

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ダッシュボード</h1>
          <p className="mt-2 text-sm text-gray-600">
            全拠点の在庫状況とシステム概要を確認できます
          </p>
        </div>

        {/* Stats cards */}
        <DashboardStats />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Warehouse overview */}
          <div className="lg:col-span-2">
            <WarehouseOverview />
          </div>
          
          {/* Inventory alerts */}
          <InventoryAlerts />
          
          {/* Recent activity */}
          <RecentActivity />
        </div>
      </div>
    </MainLayout>
  )
} 