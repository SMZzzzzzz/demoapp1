import MainLayout from '@/components/layout/MainLayout'
import InventoryFilters from '@/components/inventory/InventoryFilters'
import InventoryTable from '@/components/inventory/InventoryTable'
import InventoryStats from '@/components/inventory/InventoryStats'

export default function InventoryPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">在庫管理</h1>
          <p className="mt-2 text-sm text-gray-600">
            全拠点の在庫状況を一覧で確認・管理できます
          </p>
        </div>

        {/* Inventory stats */}
        <InventoryStats />

        {/* Filters */}
        <InventoryFilters />

        {/* Inventory table */}
        <InventoryTable />
      </div>
    </MainLayout>
  )
} 