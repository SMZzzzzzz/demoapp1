'use client'

import { useState } from 'react'
import { Search, Filter, Download } from 'lucide-react'
import { warehouses, products } from '@/data/sampleData'
import { InventoryFilters, InventoryStatus } from '@/types'

export default function InventoryFiltersComponent() {
  const [filters, setFilters] = useState<InventoryFilters>({
    warehouseId: '',
    category: '',
    status: undefined,
    searchTerm: '',
  })

  const categories = [...new Set(products.map(p => p.category))]
  const statusOptions: { value: InventoryStatus; label: string; color: string }[] = [
    { value: 'high', label: '在庫十分', color: 'text-green-600' },
    { value: 'medium', label: '在庫普通', color: 'text-yellow-600' },
    { value: 'low', label: '在庫少', color: 'text-orange-600' },
    { value: 'out', label: '在庫切れ', color: 'text-red-600' },
  ]

  const handleFilterChange = (key: keyof InventoryFilters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value === '' ? undefined : value,
    }))
  }

  const clearFilters = () => {
    setFilters({
      warehouseId: '',
      category: '',
      status: undefined,
      searchTerm: '',
    })
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Filter className="h-5 w-5 text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">フィルター・検索</h3>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            フィルターをクリア
          </button>
          <button className="btn-secondary flex items-center">
            <Download className="h-4 w-4 mr-2" />
            エクスポート
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            商品検索
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              placeholder="商品名、SKU、ブランドで検索..."
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        {/* Warehouse filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            拠点
          </label>
          <select
            value={filters.warehouseId}
            onChange={(e) => handleFilterChange('warehouseId', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">全拠点</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            カテゴリ
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">全カテゴリ</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Status filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            在庫ステータス
          </label>
          <select
            value={filters.status || ''}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">全ステータス</option>
            {statusOptions.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
} 