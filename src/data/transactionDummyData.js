// src/data/transactionDummyData.js

// Timeline: jumlah posting yang mengandung sinyal transaksi / logistik
export const transactionTimelineData = {
  timestamps: [
    "2025-11-17 09:00",
    "2025-11-17 10:00",
    "2025-11-17 11:00",
    "2025-11-17 12:00",
    "2025-11-17 13:00",
    "2025-11-17 14:00",
  ],
  productEvidence: [8, 10, 13, 16, 18, 15],   // post dengan price/testimoni
  logisticsOperation: [3, 4, 5, 7, 9, 8],     // post dengan shipping / coverage
}

// Distribusi harga per region (agregasi dari price_tiers / unit_hint)
export const priceByRegionData = [
  { region: "Jakarta", avgPrice: 450000, minPrice: 350000, maxPrice: 600000 },
  { region: "Bandung", avgPrice: 380000, minPrice: 300000, maxPrice: 500000 },
  { region: "Surabaya", avgPrice: 410000, minPrice: 320000, maxPrice: 550000 },
  { region: "Yogyakarta", avgPrice: 360000, minPrice: 280000, maxPrice: 480000 },
]

// Modality transaksi – hasil mapping dari shipping_note / caption
export const modalityData = [
  { modality: "COD", count: 42 },
  { modality: "Courier Delivery", count: 55 },
  { modality: "Meetup Point", count: 27 },
  { modality: "Digital Payment", count: 18 },
]

// Coverage logistik per region – dari shipping_note / regions
export const logisticsCoverageData = [
  { region: "Jakarta", count: 35 },
  { region: "Bodetabek", count: 28 },
  { region: "Bandung Raya", count: 22 },
  { region: "Jawa Tengah", count: 19 },
  { region: "Jawa Timur", count: 25 },
]

// Flow asal–tujuan (dummy, seolah-olah diekstrak dari pattern kirim)
export const routeFlowData = {
  nodes: [
    { name: "Jakarta" },
    { name: "Bandung" },
    { name: "Surabaya" },
    { name: "Jawa Tengah" },
    { name: "Jawa Timur" },
  ],
  links: [
    { source: "Jakarta", target: "Bandung", value: 12 },
    { source: "Jakarta", target: "Jawa Tengah", value: 16 },
    { source: "Jakarta", target: "Jawa Timur", value: 10 },
    { source: "Bandung", target: "Jakarta", value: 8 },
    { source: "Surabaya", target: "Jawa Timur", value: 14 },
    { source: "Jawa Tengah", target: "Jawa Timur", value: 9 },
  ],
}

// Anomali aktivitas transaksi per hari
export const anomalyData = [
  { date: "2025-11-11", posts: 34, baseline: 30 },
  { date: "2025-11-12", posts: 42, baseline: 31 }, // spike
  { date: "2025-11-13", posts: 29, baseline: 30 },
  { date: "2025-11-14", posts: 55, baseline: 32 }, // spike
  { date: "2025-11-15", posts: 33, baseline: 31 },
  { date: "2025-11-16", posts: 30, baseline: 30 },
  { date: "2025-11-17", posts: 48, baseline: 33 }, // spike
]
