import MainLayout from '@/components/layout/MainLayout'
import { integrationConfigs, warehouses } from '@/data/sampleData'
import { Settings, Database, Upload, Download, Check, AlertCircle } from 'lucide-react'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export default function IntegrationsPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">システム連携</h1>
          <p className="mt-2 text-sm text-gray-600">
            各拠点システムとの連携設定を管理します
          </p>
        </div>

        {/* Integration overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {warehouses.map((warehouse) => {
            const config = integrationConfigs.find(c => c.warehouseId === warehouse.id)
            const isConnected = config?.isEnabled || false
            
            return (
              <div key={warehouse.id} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-gray-400'}`} />
                  <span className="text-xs font-medium text-gray-500 uppercase">
                    {warehouse.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{warehouse.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">接続方式</span>
                    <span className="text-sm font-medium">
                      {config?.type === 'api' ? 'API連携' : 'CSV連携'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">同期間隔</span>
                    <span className="text-sm font-medium">{config?.syncInterval || 60}分</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ステータス</span>
                    <span className={`text-sm font-medium ${isConnected ? 'text-green-600' : 'text-gray-600'}`}>
                      {isConnected ? '接続中' : '未接続'}
                    </span>
                  </div>
                </div>
                
                {config?.lastSync && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      最終同期: {format(config.lastSync, 'MM/dd HH:mm', { locale: ja })}
                    </p>
                  </div>
                )}
                
                <button className="w-full mt-4 btn-primary">
                  設定変更
                </button>
              </div>
            )
          })}
        </div>

        {/* Integration logs */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Database className="h-5 w-5 text-gray-400 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">連携ログ</h3>
            </div>
            <button className="btn-secondary flex items-center">
              <Download className="h-4 w-4 mr-2" />
              ログエクスポート
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <Check className="h-5 w-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">自社ECサイト倉庫との同期完了</p>
                <p className="text-xs text-gray-500">2024/01/15 10:30 - 150件のデータを更新</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <Check className="h-5 w-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Amazon FBA倉庫との同期完了</p>
                <p className="text-xs text-gray-500">2024/01/15 11:15 - 89件のデータを更新</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">楽天モール倉庫の接続遅延</p>
                <p className="text-xs text-gray-500">2024/01/15 09:45 - 再試行中...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 