// Warehouse types
export type WarehouseType = 'own' | 'rakuten' | 'amazon' | 'zozo';

export interface Warehouse {
  id: string;
  name: string;
  type: WarehouseType;
  location: string;
  isActive: boolean;
  apiEndpoint?: string;
  lastSync?: Date;
}

// Product types
export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  brand: string;
  color: string;
  size: string;
  price: number;
  cost: number;
  season: 'SS' | 'AW' | 'ALL';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Inventory types
export type InventoryStatus = 'high' | 'medium' | 'low' | 'out';

export interface InventoryItem {
  id: string;
  productId: string;
  product: Product;
  warehouseId: string;
  warehouse: Warehouse;
  quantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  reorderPoint: number;
  maxStock: number;
  status: InventoryStatus;
  lastUpdated: Date;
}

// Sales data types
export interface SalesData {
  id: string;
  productId: string;
  warehouseId: string;
  date: Date;
  quantity: number;
  revenue: number;
  channel: string;
}

// Demand forecast types
export interface DemandForecast {
  id: string;
  productId: string;
  warehouseId: string;
  period: 'daily' | 'weekly' | 'monthly';
  forecastDate: Date;
  predictedDemand: number;
  confidence: number;
  actualDemand?: number;
  accuracy?: number;
}

// Dashboard stats types
export interface DashboardStats {
  totalProducts: number;
  totalInventoryValue: number;
  lowStockItems: number;
  outOfStockItems: number;
  totalWarehouses: number;
  lastSyncTime: Date;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Integration types
export interface IntegrationConfig {
  warehouseId: string;
  type: 'csv' | 'api';
  endpoint?: string;
  apiKey?: string;
  syncInterval: number;
  isEnabled: boolean;
  lastSync?: Date;
  lastError?: string;
}

// Filter and sort types
export interface InventoryFilters {
  warehouseId?: string;
  category?: string;
  status?: InventoryStatus;
  searchTerm?: string;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
} 