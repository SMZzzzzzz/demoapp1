'use client'

import { useState } from 'react'
import { Search, Plus, RefreshCw } from 'lucide-react'

export default function WarehouseFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [selectedSyncStatus, setSelectedSyncStatus] = useState('')

  const types = [
    { value: 'own', label: '自社倉庫' },
    { value: 'rakuten', label: '楽天モール' },
    { value: 'amazon', label: 'Amazon FBA' },
    { value: 'zozo', label: 'ZOZOTOWN' }
  ]

  const statuses = [
    { value: 'active', label: '稼働中' },
    { value: 'inactive', label: '停止中' }
  ]

  const syncStatuses = [
    { value: 'recent', label: '24時間以内' },
    { value: 'outdated', label: '要同期' },
    { value: 'error', label: 'エラー' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
        {/* Search */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            拠点検索
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              id="search"
              className="input pl-10"
              placeholder="拠点名、場所で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Type filter */}
        <div className="w-full lg:w-48">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
            拠点タイプ
          </label>
          <select
            id="type"
            className="input"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">すべてのタイプ</option>
            {types.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Status filter */}
        <div className="w-full lg:w-32">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
            稼働状況
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

        {/* Sync status filter */}
        <div className="w-full lg:w-32">
          <label htmlFor="syncStatus" className="block text-sm font-medium text-gray-700 mb-2">
            同期状況
          </label>
          <select
            id="syncStatus"
            className="input"
            value={selectedSyncStatus}
            onChange={(e) => setSelectedSyncStatus(e.target.value)}
          >
            <option value="">すべて</option>
            {syncStatuses.map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 w-full lg:w-auto">
          <button className="btn-secondary flex-1 lg:flex-none">
            <RefreshCw className="h-4 w-4 mr-2" />
            全同期
          </button>
          <button className="btn-primary flex-1 lg:flex-none">
            <Plus className="h-4 w-4 mr-2" />
            新規拠点登録
          </button>
        </div>
      </div>
    </div>
  )
} 