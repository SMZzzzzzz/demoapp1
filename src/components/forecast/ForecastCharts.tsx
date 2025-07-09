'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { demandForecastData, salesData } from '@/data/sampleData'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

// Sample data for charts
const forecastChartData = [
  { month: '10月', actual: 120, forecast: 115, confidence: 0.92 },
  { month: '11月', actual: 135, forecast: 128, confidence: 0.88 },
  { month: '12月', actual: 180, forecast: 175, confidence: 0.85 },
  { month: '1月', actual: 95, forecast: 98, confidence: 0.90 },
  { month: '2月', actual: null, forecast: 110, confidence: 0.87 },
  { month: '3月', actual: null, forecast: 125, confidence: 0.84 },
  { month: '4月', actual: null, forecast: 140, confidence: 0.82 },
]

const salesTrendData = [
  { date: '1/1', sales: 25, revenue: 74500 },
  { date: '1/2', sales: 18, revenue: 53640 },
  { date: '1/3', sales: 22, revenue: 65560 },
  { date: '1/4', sales: 30, revenue: 89400 },
  { date: '1/5', sales: 15, revenue: 44700 },
  { date: '1/6', sales: 28, revenue: 83440 },
  { date: '1/7', sales: 35, revenue: 104300 },
]

export default function ForecastCharts() {
  return (
    <div className="space-y-8">
      {/* Demand forecast chart */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">需要予測</h3>
          </div>
          <div className="text-sm text-gray-500">月別予測 vs 実績</div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  value,
                  name === 'actual' ? '実績' : name === 'forecast' ? '予測' : name
                ]}
              />
              <Legend
                formatter={(value) => 
                  value === 'actual' ? '実績' : value === 'forecast' ? '予測' : value
                }
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#dc2626"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#dc2626', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sales trend chart */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">売上推移</h3>
          <div className="text-sm text-gray-500">直近7日間</div>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  name === 'sales' ? `${value}個` : `¥${value.toLocaleString()}`,
                  name === 'sales' ? '販売数' : '売上'
                ]}
              />
              <Legend
                formatter={(value) => value === 'sales' ? '販売数' : '売上'}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#059669"
                strokeWidth={2}
                dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 