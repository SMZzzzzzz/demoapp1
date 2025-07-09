'use client'

import { useState } from 'react'
import { Search, Plus } from 'lucide-react'

export default function ProductFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')

  const categories = ['トップス', 'ボトムス', 'アウター', 'ワンピース', 'アクセサリー']
  const seasons = ['ALL', 'SS', 'AW']
  const statuses = [
    { value: 'active', label: '有効' },
    { value: 'inactive', label: '無効' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        {/* Search */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            商品検索
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              id="search"
              className="input pl-10"
              placeholder="商品名、SKU、ブランドで検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category filter */}
        <div className="w-full lg:w-48">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            カテゴリー
          </label>
          <select
            id="category"
            className="input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">すべてのカテゴリー</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Season filter */}
        <div className="w-full lg:w-32">
          <label htmlFor="season" className="block text-sm font-medium text-gray-700 mb-2">
            シーズン
          </label>
          <select
            id="season"
            className="input"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            <option value="">すべて</option>
            {seasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>

        {/* Status filter */}
        <div className="w-full lg:w-32">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
            ステータス
          </label>
          <select
            id="status"
            className="input"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">すべて</option>
            {statuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Add button */}
        <div className="w-full lg:w-auto">
          <button className="btn-primary w-full lg:w-auto">
            <Plus className="h-4 w-4 mr-2" />
            新規商品登録
          </button>
        </div>
      </div>
    </div>
  )
} 