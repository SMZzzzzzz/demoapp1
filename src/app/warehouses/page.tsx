import MainLayout from '@/components/layout/MainLayout'
import WarehouseFilters from '@/components/warehouses/WarehouseFilters'
import WarehouseTable from '@/components/warehouses/WarehouseTable'
import WarehouseStats from '@/components/warehouses/WarehouseStats'

export default function WarehousesPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">拠点管理</h1>
          <p className="mt-2 text-sm text-gray-600">
            全拠点の状況を一覧で確認・管理できます
          </p>
        </div>

        {/* Warehouse stats */}
        <WarehouseStats />

        {/* Filters */}
        <WarehouseFilters />

        {/* Warehouse table */}
        <WarehouseTable />
      </div>
    </MainLayout>
  )
} 