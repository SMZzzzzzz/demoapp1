import { 
  Warehouse, 
  Product, 
  InventoryItem, 
  SalesData, 
  DemandForecast, 
  DashboardStats,
  IntegrationConfig 
} from '@/types';

// Warehouses data
export const warehouses: Warehouse[] = [
  {
    id: 'wh-001',
    name: '自社ECサイト倉庫',
    type: 'own',
    location: '東京都江東区',
    isActive: true,
    apiEndpoint: 'https://api.our-warehouse.com/v1',
    lastSync: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: 'wh-002',
    name: '楽天モール倉庫',
    type: 'rakuten',
    location: '千葉県市川市',
    isActive: true,
    apiEndpoint: 'https://api.rakuten-warehouse.com/v2',
    lastSync: new Date('2024-01-15T09:45:00Z')
  },
  {
    id: 'wh-003',
    name: 'Amazon FBA倉庫',
    type: 'amazon',
    location: '大阪府茨木市',
    isActive: true,
    apiEndpoint: 'https://api.amazon-fba.com/v1',
    lastSync: new Date('2024-01-15T11:15:00Z')
  },
  {
    id: 'wh-004',
    name: 'ZOZOTOWN倉庫',
    type: 'zozo',
    location: '千葉県習志野市',
    isActive: true,
    apiEndpoint: 'https://api.zozotown.com/v1',
    lastSync: new Date('2024-01-15T08:30:00Z')
  }
];

// Products data
export const products: Product[] = [
  {
    id: 'prod-001',
    sku: 'TSH-001-WH-S',
    name: 'ベーシックTシャツ',
    category: 'トップス',
    brand: 'OurBrand',
    color: 'ホワイト',
    size: 'S',
    price: 2980,
    cost: 1200,
    season: 'ALL',
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: 'prod-002',
    sku: 'TSH-001-WH-M',
    name: 'ベーシックTシャツ',
    category: 'トップス',
    brand: 'OurBrand',
    color: 'ホワイト',
    size: 'M',
    price: 2980,
    cost: 1200,
    season: 'ALL',
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: 'prod-003',
    sku: 'TSH-001-BK-M',
    name: 'ベーシックTシャツ',
    category: 'トップス',
    brand: 'OurBrand',
    color: 'ブラック',
    size: 'M',
    price: 2980,
    cost: 1200,
    season: 'ALL',
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: 'prod-004',
    sku: 'JKT-002-NV-M',
    name: 'デニムジャケット',
    category: 'アウター',
    brand: 'OurBrand',
    color: 'ネイビー',
    size: 'M',
    price: 12800,
    cost: 6400,
    season: 'AW',
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: 'prod-005',
    sku: 'PNT-003-BK-32',
    name: 'スキニーパンツ',
    category: 'ボトムス',
    brand: 'OurBrand',
    color: 'ブラック',
    size: '32',
    price: 8900,
    cost: 4200,
    season: 'ALL',
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  },
  {
    id: 'prod-006',
    sku: 'DRS-004-RD-M',
    name: 'ワンピース',
    category: 'ワンピース',
    brand: 'OurBrand',
    color: 'レッド',
    size: 'M',
    price: 15800,
    cost: 7900,
    season: 'SS',
    isActive: true,
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-10T00:00:00Z')
  }
];

// Inventory data
export const inventoryItems: InventoryItem[] = [
  {
    id: 'inv-001',
    productId: 'prod-001',
    product: products[0],
    warehouseId: 'wh-001',
    warehouse: warehouses[0],
    quantity: 150,
    reservedQuantity: 25,
    availableQuantity: 125,
    reorderPoint: 50,
    maxStock: 200,
    status: 'high',
    lastUpdated: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: 'inv-002',
    productId: 'prod-001',
    product: products[0],
    warehouseId: 'wh-002',
    warehouse: warehouses[1],
    quantity: 45,
    reservedQuantity: 15,
    availableQuantity: 30,
    reorderPoint: 50,
    maxStock: 200,
    status: 'low',
    lastUpdated: new Date('2024-01-15T09:45:00Z')
  },
  {
    id: 'inv-003',
    productId: 'prod-002',
    product: products[1],
    warehouseId: 'wh-001',
    warehouse: warehouses[0],
    quantity: 89,
    reservedQuantity: 12,
    availableQuantity: 77,
    reorderPoint: 50,
    maxStock: 200,
    status: 'medium',
    lastUpdated: new Date('2024-01-15T10:30:00Z')
  },
  {
    id: 'inv-004',
    productId: 'prod-003',
    product: products[2],
    warehouseId: 'wh-003',
    warehouse: warehouses[2],
    quantity: 0,
    reservedQuantity: 0,
    availableQuantity: 0,
    reorderPoint: 50,
    maxStock: 200,
    status: 'out',
    lastUpdated: new Date('2024-01-15T11:15:00Z')
  },
  {
    id: 'inv-005',
    productId: 'prod-004',
    product: products[3],
    warehouseId: 'wh-004',
    warehouse: warehouses[3],
    quantity: 32,
    reservedQuantity: 8,
    availableQuantity: 24,
    reorderPoint: 30,
    maxStock: 100,
    status: 'low',
    lastUpdated: new Date('2024-01-15T08:30:00Z')
  }
];

// Sales data
export const salesData: SalesData[] = [
  {
    id: 'sale-001',
    productId: 'prod-001',
    warehouseId: 'wh-001',
    date: new Date('2024-01-14T00:00:00Z'),
    quantity: 25,
    revenue: 74500,
    channel: '自社EC'
  },
  {
    id: 'sale-002',
    productId: 'prod-002',
    warehouseId: 'wh-002',
    date: new Date('2024-01-14T00:00:00Z'),
    quantity: 18,
    revenue: 53640,
    channel: '楽天'
  },
  {
    id: 'sale-003',
    productId: 'prod-004',
    warehouseId: 'wh-003',
    date: new Date('2024-01-13T00:00:00Z'),
    quantity: 8,
    revenue: 102400,
    channel: 'Amazon'
  }
];

// Demand forecast data
export const demandForecastData: DemandForecast[] = [
  {
    id: 'forecast-001',
    productId: 'prod-001',
    warehouseId: 'wh-001',
    period: 'weekly',
    forecastDate: new Date('2024-01-22T00:00:00Z'),
    predictedDemand: 85,
    confidence: 0.87,
    actualDemand: 82,
    accuracy: 0.96
  },
  {
    id: 'forecast-002',
    productId: 'prod-002',
    warehouseId: 'wh-002',
    period: 'weekly',
    forecastDate: new Date('2024-01-22T00:00:00Z'),
    predictedDemand: 45,
    confidence: 0.92,
    actualDemand: 48,
    accuracy: 0.94
  }
];

// Dashboard stats
export const dashboardStats: DashboardStats = {
  totalProducts: 156,
  totalInventoryValue: 2850000,
  lowStockItems: 23,
  outOfStockItems: 8,
  totalWarehouses: 4,
  lastSyncTime: new Date('2024-01-15T11:15:00Z')
};

// Integration configs
export const integrationConfigs: IntegrationConfig[] = [
  {
    warehouseId: 'wh-001',
    type: 'api',
    endpoint: 'https://api.our-warehouse.com/v1/inventory',
    apiKey: 'our-api-key-xxxx',
    syncInterval: 15,
    isEnabled: true,
    lastSync: new Date('2024-01-15T10:30:00Z')
  },
  {
    warehouseId: 'wh-002',
    type: 'csv',
    syncInterval: 60,
    isEnabled: true,
    lastSync: new Date('2024-01-15T09:45:00Z')
  }
]; 