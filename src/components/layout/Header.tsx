'use client'

import { Bell, RefreshCw, User } from 'lucide-react'
import { dashboardStats } from '@/data/sampleData'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              アパレル在庫管理システム
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Last sync time */}
            <div className="flex items-center text-sm text-gray-500">
              <RefreshCw className="h-4 w-4 mr-1" />
              最終同期: {format(dashboardStats.lastSyncTime, 'MM/dd HH:mm', { locale: ja })}
            </div>
            
            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>
            
            {/* User menu */}
            <div className="flex items-center">
              <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                <User className="h-8 w-8 rounded-full bg-gray-300 p-1 text-gray-600" />
                <span className="ml-2 text-sm font-medium text-gray-700">管理者</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 