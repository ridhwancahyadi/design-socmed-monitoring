// src/data/transactionDummyData.js

export const transactionKpi = {
  totalProductPosts: 1847,
  estimatedUnits: 34567,
  uniqueDropPoints: 156,
  affectedCities: 28,
};

export const productFormData = [
  { form: 'Crystal', drugs: 456, pharma: 89, paraphernalia: 234 },
  { form: 'Powder', drugs: 389, pharma: 145, paraphernalia: 178 },
  { form: 'Tablet', drugs: 267, pharma: 567, paraphernalia: 45 },
  { form: 'Capsule', drugs: 178, pharma: 432, paraphernalia: 23 },
  { form: 'Herbal', drugs: 512, pharma: 34, paraphernalia: 89 },
];

export const packagingDataDrugs = [
  { method: 'Aluminium Foil', count: 456, percentage: 42.2, color: '#EF4444' },
  { method: 'Plastik Klip', count: 389, percentage: 36.0, color: '#DC2626' },
  { method: 'Botol Kecil', count: 234, percentage: 21.8, color: '#B91C1C' },
];

export const packagingDataPharma = [
  { method: 'Strip Original', count: 567, percentage: 47.2, color: '#F59E0B' },
  { method: 'Botol Vitamin', count: 345, percentage: 28.7, color: '#D97706' },
  { method: 'Plastik Resealable', count: 289, percentage: 24.1, color: '#B45309' },
];

export const packagingDataParaphernalia = [
  { method: 'Kotak Teh', count: 345, percentage: 38.1, color: '#10B981' },
  { method: 'Tas Kecil', count: 289, percentage: 31.9, color: '#059669' },
  { method: 'Bubble Wrap', count: 271, percentage: 30.0, color: '#047857' },
];

export const misusedBrandsData = [
  { brand: 'Tramadol', count: 892, risk: 95, trend: '+23%', category: 'Analgesic' },
  { brand: 'Alprazolam', count: 756, risk: 92, trend: '+18%', category: 'Benzodiazepine' },
  { brand: 'Dextromethorphan', count: 634, risk: 88, trend: '+15%', category: 'Cough Suppressant' },
  { brand: 'Carnophen', count: 523, risk: 85, trend: '+12%', category: 'Muscle Relaxant' },
  { brand: 'Trihexyphenidyl', count: 467, risk: 82, trend: '+9%', category: 'Anticholinergic' },
  { brand: 'Clonazepam', count: 423, risk: 79, trend: '+11%', category: 'Benzodiazepine' },
  { brand: 'Ritalin', count: 389, risk: 76, trend: '+7%', category: 'Stimulant' },
  { brand: 'Xanax', count: 367, risk: 88, trend: '+14%', category: 'Benzodiazepine' },
];

export const cities = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar'];

export const brandCityHeatmap = [
  { brand: 'Tramadol', Jakarta: 234, Surabaya: 156, Bandung: 189, Medan: 123, Semarang: 98, Makassar: 87 },
  { brand: 'Alprazolam', Jakarta: 198, Surabaya: 167, Bandung: 145, Medan: 98, Semarang: 89, Makassar: 76 },
  { brand: 'Dextromethorphan', Jakarta: 167, Surabaya: 134, Bandung: 156, Medan: 89, Semarang: 67, Makassar: 54 },
  { brand: 'Carnophen', Jakarta: 145, Surabaya: 112, Bandung: 98, Medan: 78, Semarang: 56, Makassar: 45 },
  { brand: 'Trihexyphenidyl', Jakarta: 123, Surabaya: 98, Bandung: 87, Medan: 67, Semarang: 54, Makassar: 38 },
];

export const paraphernaliaSuppliers = [
  { id: 'SUP-001', supplier: '@vape_***_jkt', region: 'Jakarta & Surrounding', mainProducts: ['Bong Glass', 'E-Vaporizer', 'Papers'], transactions: 234, risk: 89, monthlyVolume: '~500 units', platforms: ['Instagram', 'Telegram'] },
  { id: 'SUP-002', supplier: '@tools_***_sby', region: 'Surabaya, Malang, Jember', mainProducts: ['Metal Pipes', 'Herb Grinders', 'Precision Scales'], transactions: 189, risk: 85, monthlyVolume: '~380 units', platforms: ['TikTok', 'Telegram'] },
  { id: 'SUP-003', supplier: '@supply_***_bdg', region: 'Bandung, Cimahi, Tasikmalaya', mainProducts: ['Rolling Papers', 'Activated Carbon Filters'], transactions: 167, risk: 78, monthlyVolume: '~420 units', platforms: ['Instagram', 'WhatsApp'] },
  { id: 'SUP-004', supplier: '@gear_***_mdn', region: 'Medan, Binjai', mainProducts: ['Starter Kits', 'Storage Containers'], transactions: 145, risk: 82, monthlyVolume: '~290 units', platforms: ['Telegram', 'Instagram'] },
  { id: 'SUP-005', supplier: '@smoke_***_smg', region: 'Semarang, Solo', mainProducts: ['Ceramic Pipes', 'Mini Bongs'], transactions: 123, risk: 75, monthlyVolume: '~250 units', platforms: ['Instagram', 'TikTok'] },
  { id: 'SUP-006', supplier: '@tools_***_mks', region: 'Makassar, Parepare', mainProducts: ['Electric Grinders', 'Pocket Scales'], transactions: 98, risk: 71, monthlyVolume: '~180 units', platforms: ['Telegram', 'WhatsApp'] },
];

export const distributionModusData = [
  { modus: 'Pot Tanaman', count: 234, percentage: 18.2, risk: 'High' },
  { modus: 'Tiang Listrik', count: 198, percentage: 15.4, risk: 'High' },
  { modus: 'Bawah Batu', count: 178, percentage: 13.8, risk: 'Medium' },
  { modus: 'Lubang Tembok', count: 156, percentage: 12.1, risk: 'High' },
  { modus: 'Pagar Besi', count: 134, percentage: 10.4, risk: 'Medium' },
  { modus: 'Kotak Sampah', count: 123, percentage: 9.6, risk: 'Low' },
  { modus: 'Dalam Pipa', count: 112, percentage: 8.7, risk: 'High' },
  { modus: 'Lainnya', count: 152, percentage: 11.8, risk: 'Medium' },
];

export const environments = ['Taman/Halaman', 'Jembatan', 'Warung', 'Parkiran', 'ATM Area', 'Halte', 'SPBU'];

export const containerEnvironmentMatrix = [
  { container: 'Plastik Klip', 'Taman/Halaman': 156, 'Jembatan': 89, 'Warung': 134, 'Parkiran': 78, 'ATM Area': 45, 'Halte': 67, 'SPBU': 34 },
  { container: 'Botol Kecil', 'Taman/Halaman': 123, 'Jembatan': 67, 'Warung': 98, 'Parkiran': 112, 'ATM Area': 56, 'Halte': 43, 'SPBU': 51 },
  { container: 'Aluminium Foil', 'Taman/Halaman': 98, 'Jembatan': 134, 'Warung': 145, 'Parkiran': 76, 'ATM Area': 34, 'Halte': 89, 'SPBU': 23 },
  { container: 'Kotak', 'Taman/Halaman': 67, 'Jembatan': 45, 'Warung': 78, 'Parkiran': 98, 'ATM Area': 87, 'Halte': 54, 'SPBU': 67 },
  { container: 'Kantong Ziplock', 'Taman/Halaman': 89, 'Jembatan': 56, 'Warung': 67, 'Parkiran': 89, 'ATM Area': 67, 'Halte': 78, 'SPBU': 45 },
];
