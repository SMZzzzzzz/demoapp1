import { demandForecastData } from '@/data/sampleData'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { TrendingUp } from 'lucide-react'

export default function ForecastTable() {
  return (
    <div className="card overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-gray-400 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">需要予測結果</h3>
          </div>
          <div className="text-sm text-gray-500">
            {demandForecastData.length} 件の予測
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                商品・拠点
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                予測期間
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                予測需要
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                信頼度
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                実績
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                精度
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {demandForecastData.map((forecast) => (
              <tr key={forecast.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    商品ID: {forecast.productId}
                  </div>
                  <div className="text-sm text-gray-500">
                    拠点ID: {forecast.warehouseId}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {forecast.period === 'weekly' ? '週別' : 
                     forecast.period === 'monthly' ? '月別' : '日別'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {format(forecast.forecastDate, 'yyyy/MM/dd', { locale: ja })}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {forecast.predictedDemand} 個
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900 mr-2">
                      {(forecast.confidence * 100).toFixed(1)}%
                    </div>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${forecast.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {forecast.actualDemand ? `${forecast.actualDemand} 個` : '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {forecast.accuracy ? (
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {(forecast.accuracy * 100).toFixed(1)}%
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 