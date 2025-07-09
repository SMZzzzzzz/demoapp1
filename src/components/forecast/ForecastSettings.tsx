'use client'

import { useState } from 'react'
import { Settings, RefreshCw, Play } from 'lucide-react'

export default function ForecastSettings() {
  const [settings, setSettings] = useState({
    period: 'weekly',
    horizon: '4',
    includeSeasonality: true,
    includePromotions: false,
    autoUpdate: true,
  })

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Settings className="h-5 w-5 text-gray-400 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">予測設定</h3>
        </div>
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center">
            <RefreshCw className="h-4 w-4 mr-2" />
            再学習
          </button>
          <button className="btn-primary flex items-center">
            <Play className="h-4 w-4 mr-2" />
            予測実行
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            予測期間
          </label>
          <select
            value={settings.period}
            onChange={(e) => setSettings(prev => ({ ...prev, period: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="daily">日別</option>
            <option value="weekly">週別</option>
            <option value="monthly">月別</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            予測期間（週）
          </label>
          <select
            value={settings.horizon}
            onChange={(e) => setSettings(prev => ({ ...prev, horizon: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="2">2週間</option>
            <option value="4">4週間</option>
            <option value="8">8週間</option>
            <option value="12">12週間</option>
          </select>
        </div>

        <div className="flex items-center pt-6">
          <input
            type="checkbox"
            id="seasonality"
            checked={settings.includeSeasonality}
            onChange={(e) => setSettings(prev => ({ ...prev, includeSeasonality: e.target.checked }))}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="seasonality" className="ml-2 text-sm text-gray-700">
            季節性を考慮
          </label>
        </div>

        <div className="flex items-center pt-6">
          <input
            type="checkbox"
            id="promotions"
            checked={settings.includePromotions}
            onChange={(e) => setSettings(prev => ({ ...prev, includePromotions: e.target.checked }))}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="promotions" className="ml-2 text-sm text-gray-700">
            プロモーション効果
          </label>
        </div>

        <div className="flex items-center pt-6">
          <input
            type="checkbox"
            id="autoUpdate"
            checked={settings.autoUpdate}
            onChange={(e) => setSettings(prev => ({ ...prev, autoUpdate: e.target.checked }))}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="autoUpdate" className="ml-2 text-sm text-gray-700">
            自動更新
          </label>
        </div>
      </div>
    </div>
  )
} 