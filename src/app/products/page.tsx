import MainLayout from '@/components/layout/MainLayout'
import ProductFilters from '@/components/products/ProductFilters'
import ProductTable from '@/components/products/ProductTable'
import ProductStats from '@/components/products/ProductStats'

export default function ProductsPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">商品マスタ管理</h1>
          <p className="mt-2 text-sm text-gray-600">
            全商品の登録情報を一覧で確認・管理できます
          </p>
        </div>

        {/* Product stats */}
        <ProductStats />

        {/* Filters */}
        <ProductFilters />

        {/* Product table */}
        <ProductTable />
      </div>
    </MainLayout>
  )
} 