import MainLayout from '@/components/layout/MainLayout'
import ForecastCharts from '@/components/forecast/ForecastCharts'
import ForecastAccuracy from '@/components/forecast/ForecastAccuracy'
import ForecastTable from '@/components/forecast/ForecastTable'
import ForecastSettings from '@/components/forecast/ForecastSettings'

export default function ForecastPage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI需要予測</h1>
          <p className="mt-2 text-sm text-gray-600">
            過去の販売データを基にAIが自動的に需要を予測し、適切な在庫管理をサポートします
          </p>
        </div>

        {/* Forecast settings */}
        <ForecastSettings />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Charts */}
          <div className="lg:col-span-2">
            <ForecastCharts />
          </div>
          
          {/* Accuracy metrics */}
          <div>
            <ForecastAccuracy />
          </div>
        </div>

        {/* Forecast table */}
        <ForecastTable />
      </div>
    </MainLayout>
  )
} 