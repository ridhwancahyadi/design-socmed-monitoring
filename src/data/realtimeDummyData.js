// src/data/realtimeDummyData.js

export const realtimeKpiData = {
  totalPosts: 24847,
  highRiskPosts: 342,
  activeHighRiskAccounts: 89,
  youthPercentage: 67.8,
  highRiskCities: 12,
};

export const realtimeTimeSeriesData = [
  { time: '00:00', exposure: 3200, velocity: 45 },
  { time: '04:00', exposure: 2100, velocity: 28 },
  { time: '08:00', exposure: 5600, velocity: 78 },
  { time: '12:00', exposure: 8900, velocity: 124 },
  { time: '16:00', exposure: 7200, velocity: 98 },
  { time: '20:00', exposure: 9500, velocity: 145 },
  { time: '23:59', exposure: 6800, velocity: 89 },
];

export const realtimeKeywordData = [
  { keyword: 'ganja premium', count: 234, risk: 'high' },
  { keyword: 'cod tersedia', count: 189, risk: 'high' },
  { keyword: 'ready stok', count: 167, risk: 'medium' },
  { keyword: 'dm for price', count: 145, risk: 'high' },
  { keyword: 'plug terpercaya', count: 128, risk: 'high' },
];

export const realtimeHashtagData = [
  { tag: '#420friendly', count: 567 },
  { tag: '#pluglife', count: 423 },
  { tag: '#cannabisindo', count: 389 },
  { tag: '#readystok', count: 312 },
  { tag: '#fastresponse', count: 289 },
];

export const realtimeEmotionData = [
  { emotion: 'Netral', value: 45, color: '#6B7280' },
  { emotion: 'Positif', value: 32, color: '#10B981' },
  { emotion: 'Negatif', value: 15, color: '#EF4444' },
];

export const realtimePlatformData = [
  { platform: 'Instagram', video: 8942, image: 3421, text: 2134 },
  { platform: 'TikTok', video: 7823, image: 0, text: 5621 },
  { platform: 'Twitter/X', video: 4532, image: 0, text: 0 },
  { platform: 'Facebook', video: 2341, image: 891, text: 456 },
  { platform: 'Telegram', video: 1209, image: 0, text: 0 },
];

export const realtimeGeoData = [
  { city: 'Jakarta', count: 4521, risk: 92 },
  { city: 'Surabaya', count: 2834, risk: 78 },
  { city: 'Bandung', count: 2145, risk: 85 },
  { city: 'Medan', count: 1867, risk: 71 },
  { city: 'Bekasi', count: 1543, risk: 68 },
  { city: 'Tangerang', count: 1432, risk: 73 },
  { city: 'Depok', count: 1289, risk: 65 },
  { city: 'Semarang', count: 1156, risk: 62 },
];

export const realtimeYouthData = [
  { category: 'Remaja (13-17)', value: 34, color: '#8B5CF6' },
  { category: 'Dewasa Muda (18-25)', value: 43, color: '#EC4899' },
  { category: 'Dewasa (26-35)', value: 18, color: '#F59E0B' },
  { category: 'Lainnya', value: 5, color: '#6B7280' },
];

export const realtimeContentFeed = [
  {
    id: 1,
    time: '2 menit lalu',
    platform: 'Instagram',
    account: '@user_***23',
    text: 'Ready stok premium quality, dm for price list. Fast response 24/7 #plug #ready',
    riskScore: 94,
    role: 'Distributor',
    thumbnail: '📸',
  },
  {
    id: 2,
    time: '5 menit lalu',
    platform: 'TikTok',
    account: '@dealer_***45',
    text: 'COD Jakarta area, trusted seller since 2020. Check bio for contact',
    riskScore: 89,
    role: 'Seller',
    thumbnail: '🎥',
  },
  {
    id: 3,
    time: '8 menit lalu',
    platform: 'Telegram',
    account: '@plug_***67',
    text: 'New batch arrived. Quality guaranteed. Delivery available all area',
    riskScore: 96,
    role: 'Supplier',
    thumbnail: '💬',
  },
  {
    id: 4,
    time: '12 menit lalu',
    platform: 'Twitter/X',
    account: '@***_indo89',
    text: 'Looking for reliable plug in Bandung area. Please dm recommendations',
    riskScore: 67,
    role: 'Buyer',
    thumbnail: '🐦',
  },
  {
    id: 5,
    time: '15 menit lalu',
    platform: 'Instagram',
    account: '@green_***12',
    text: 'Best quality in town. Testimoni available. Safe transaction guaranteed',
    riskScore: 91,
    role: 'Distributor',
    thumbnail: '📸',
  },
  {
    id: 6,
    time: '18 menit lalu',
    platform: 'TikTok',
    account: '@***_supply',
    text: 'Limited stock! Order now before its gone. Special price today only',
    riskScore: 88,
    role: 'Seller',
    thumbnail: '🎥',
  },
];

export const realtimeCodedLanguageData = [
  { code: '🌿 + 💵', meaning: 'Ganja + Harga', frequency: 234 },
  { code: '❄️', meaning: 'Sabu/Methamphetamine', frequency: 189 },
  { code: '🔌', meaning: 'Supplier/Dealer', frequency: 167 },
  { code: '🚀', meaning: 'Pengiriman Cepat', frequency: 145 },
  { code: '🔥', meaning: 'Stok Baru/Premium', frequency: 128 },
];

export const realtimeRiskLevelData = [
  { level: 'Critical', value: 342, color: '#DC2626' },
  { level: 'High', value: 789, color: '#F59E0B' },
  { level: 'Medium', value: 1456, color: '#FBBF24' },
  { level: 'Low', value: 3234, color: '#10B981' },
];
