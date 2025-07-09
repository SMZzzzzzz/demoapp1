import { Target, TrendingUp, Brain, CheckCircle } from 'lucide-react'
import { demandForecastData } from '@/data/sampleData'

export default function ForecastAccuracy() {
  // Calculate average accuracy from forecast data
  const accuracyData = demandForecastData.filter(item => item.accuracy)
  const avgAccuracy = accuracyData.length > 0 
    ? accuracyData.reduce((sum, item) => sum + (item.accuracy || 0), 0) / accuracyData.length 
    : 0.92

  const avgConfidence = demandForecastData.length > 0
    ? demandForecastData.reduce((sum, item) => sum + item.confidence, 0) / demandForecastData.length
    : 0.89

  const metrics = [
    {
      label: '予測精度',
      value: `${(avgAccuracy * 100).toFixed(1)}%`,
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: '実績との一致度'
    },
    {
      label: 'モデル信頼度',
      value: `${(avgConfidence * 100).toFixed(1)}%`,
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'AIモデルの確信度'
    },
    {
      label: '予測対象商品',
      value: `${demandForecastData.length}`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: '予測中の商品数'
    },
    {
      label: 'モデル更新',
      value: '毎日',
      icon: CheckCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: '学習データ更新頻度'
    }
  ]

  return (
    <div className="card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">予測精度指標</h3>
        <p className="text-sm text-gray-600">
          AIモデルのパフォーマンスと信頼性を監視
        </p>
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`flex-shrink-0 ${metric.bgColor} p-2 rounded-lg`}>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-900">{metric.label}</p>
                <p className="text-lg font-bold text-gray-900">{metric.value}</p>
              </div>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Model performance indicator */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">全体パフォーマンス</span>
          <span className="text-sm text-green-600 font-medium">良好</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${avgAccuracy * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          過去30日間の予測精度
        </p>
      </div>

      {/* AI insights */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">AI分析結果</h4>
        <div className="space-y-2">
          <div className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">季節性パターンを検出</span>
          </div>
          <div className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">トレンド変化に適応済み</span>
          </div>
          <div className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">外部要因を学習中</span>
          </div>
        </div>
      </div>
    </div>
  )
} 