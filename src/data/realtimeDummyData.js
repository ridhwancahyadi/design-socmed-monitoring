// src/data/realtimeDummyData.js

// 4 roles utama
export const CONTENT_ROLES = [
  "Marketing Awareness",
  "Product Evidence",
  "Logistics Operation",
  "Narrative Influence",
]

// 1) Time-series volume per role (misal per jam)
export const conversationVolumeData = {
  timestamps: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
  marketingAwareness: [20, 32, 28, 40, 35, 30],
  productEvidence: [12, 18, 15, 22, 20, 19],
  logisticsOperation: [5, 7, 6, 9, 11, 10],
  narrativeInfluence: [10, 14, 18, 25, 24, 22],
}

// 2) Distribution per role (snapshot)
export const roleDistributionData = [
  { role: "Marketing Awareness", value: 155 },
  { role: "Product Evidence", value: 106 },
  { role: "Logistics Operation", value: 48 },
  { role: "Narrative Influence", value: 113 },
]

// 3) Risk level distribution (per posting)
export const riskDistributionData = [
  { level: "Low", value: 120 },
  { level: "Medium", value: 90 },
  { level: "High", value: 55 },
  { level: "Critical", value: 18 },
]

// 4) Platform × role (stacked bar)
export const platformRoleData = [
  {
    platform: "Instagram",
    marketingAwareness: 80,
    productEvidence: 60,
    logisticsOperation: 15,
    narrativeInfluence: 30,
  },
  {
    platform: "TikTok",
    marketingAwareness: 45,
    productEvidence: 25,
    logisticsOperation: 10,
    narrativeInfluence: 60,
  },
  {
    platform: "X",
    marketingAwareness: 30,
    productEvidence: 12,
    logisticsOperation: 18,
    narrativeInfluence: 20,
  },
]

// 5) Top keywords / coded language
export const keywordData = [
  { term: "#party", count: 34, type: "explicit" },
  { term: "vitaminX", count: 27, type: "coded" },
  { term: "malam-malam", count: 22, type: "coded" },
  { term: "#healing", count: 19, type: "explicit" },
  { term: "paket hemat", count: 16, type: "coded" },
  { term: "ready stock", count: 13, type: "explicit" },
]

// 6) Real-time feed dummy
export const realtimeFeedData = [
  {
    id: "1",
    timestamp: "2025-11-17 13:42",
    platform: "Instagram",
    region: "Jakarta",
    account: "@userA",
    role: "Marketing Awareness",
    riskLevel: "Medium",
    text: "Diskon varian terbaru malam ini, DM untuk info lengkap.",
    flags: ["transaction_hint"],
  },
  {
    id: "2",
    timestamp: "2025-11-17 13:38",
    platform: "TikTok",
    region: "Bandung",
    account: "@genZparty",
    role: "Narrative Influence",
    riskLevel: "High",
    text: "Kemarin malam vibes-nya parah sih, bikin melayang 🤯",
    flags: ["youth_segment", "coded_language"],
  },
  {
    id: "3",
    timestamp: "2025-11-17 13:30",
    platform: "X",
    region: "Surabaya",
    account: "@logistikX",
    role: "Logistics Operation",
    riskLevel: "High",
    text: "Pengiriman ready dari SBY ke area Jawa Timur, chat aja.",
    flags: ["transaction_hint"],
  },
  {
    id: "4",
    timestamp: "2025-11-17 13:25",
    platform: "Instagram",
    region: "Yogyakarta",
    account: "@testimoni_store",
    role: "Product Evidence",
    riskLevel: "Medium",
    text: "Kemarin pesen paket di sini, aman dan cepat.",
    flags: ["testimonial"],
  },
]
