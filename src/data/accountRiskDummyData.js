// src/data/accountRiskDummyData.js

// Distribusi akun per risk level
export const accountRiskLevelData = [
  { level: "Low", value: 58 },
  { level: "Medium", value: 41 },
  { level: "High", value: 23 },
  { level: "Critical", value: 7 },
]

// Tren rata-rata risk score (misal 0–100)
export const riskScoreTrendData = {
  dates: [
    "2025-11-11",
    "2025-11-12",
    "2025-11-13",
    "2025-11-14",
    "2025-11-15",
    "2025-11-16",
    "2025-11-17",
  ],
  avgRiskScores: [38, 42, 45, 49, 47, 52, 55], // naik = eskalasi risiko
}

// Data network graph (node = akun, link = interaksi)
export const networkGraphData = {
  nodes: [
    { name: "@hubCenter", riskLevel: "Critical", category: "hub" },
    { name: "@sellerX", riskLevel: "High", category: "hub" },
    { name: "@sellerY", riskLevel: "High", category: "hub" },
    { name: "@promoGenZ", riskLevel: "Medium", category: "bridge" },
    { name: "@partyCampus", riskLevel: "Medium", category: "bridge" },
    { name: "@viewerA", riskLevel: "Low", category: "peripheral" },
    { name: "@viewerB", riskLevel: "Low", category: "peripheral" },
    { name: "@logisticNode", riskLevel: "High", category: "hub" },
  ],
  links: [
    { source: "@hubCenter", target: "@sellerX", value: 12 },
    { source: "@hubCenter", target: "@sellerY", value: 9 },
    { source: "@hubCenter", target: "@promoGenZ", value: 15 },
    { source: "@promoGenZ", target: "@partyCampus", value: 11 },
    { source: "@partyCampus", target: "@viewerA", value: 6 },
    { source: "@partyCampus", target: "@viewerB", value: 5 },
    { source: "@sellerX", target: "@logisticNode", value: 8 },
    { source: "@sellerY", target: "@logisticNode", value: 7 },
  ],
}

// Cluster komunitas digital
export const clusterData = [
  {
    id: "C1",
    name: "Urban Promo Cluster",
    accountCount: 26,
    avgRiskScore: 61,
    dominantRegion: "Jakarta",
    dominantRole: "Marketing Awareness",
    topHandles: ["@hubCenter", "@promoGenZ"],
  },
  {
    id: "C2",
    name: "Campus Party Cluster",
    accountCount: 18,
    avgRiskScore: 54,
    dominantRegion: "Yogyakarta",
    dominantRole: "Narrative Influence",
    topHandles: ["@partyCampus"],
  },
  {
    id: "C3",
    name: "Logistics Operator Cluster",
    accountCount: 14,
    avgRiskScore: 68,
    dominantRegion: "Jawa Timur",
    dominantRole: "Logistics Operation",
    topHandles: ["@sellerX", "@sellerY", "@logisticNode"],
  },
]

// High-risk accounts (untuk tabel prioritas)
export const highRiskAccounts = [
  {
    handle: "@hubCenter",
    platform: "Instagram",
    region: "Jakarta",
    riskScore: 92,
    riskLevel: "Critical",
    dominantRole: "Marketing Awareness",
    posts30d: 84,
    networkRole: "Hub",
    cluster: "Urban Promo Cluster",
  },
  {
    handle: "@sellerX",
    platform: "TikTok",
    region: "Surabaya",
    riskScore: 88,
    riskLevel: "High",
    dominantRole: "Product Evidence",
    posts30d: 63,
    networkRole: "Hub",
    cluster: "Logistics Operator Cluster",
  },
  {
    handle: "@sellerY",
    platform: "TikTok",
    region: "Sidoarjo",
    riskScore: 85,
    riskLevel: "High",
    dominantRole: "Product Evidence",
    posts30d: 57,
    networkRole: "Hub",
    cluster: "Logistics Operator Cluster",
  },
  {
    handle: "@promoGenZ",
    platform: "Instagram",
    region: "Jakarta",
    riskScore: 76,
    riskLevel: "High",
    dominantRole: "Narrative Influence",
    posts30d: 49,
    networkRole: "Bridge",
    cluster: "Urban Promo Cluster",
  },
  {
    handle: "@partyCampus",
    platform: "TikTok",
    region: "Yogyakarta",
    riskScore: 73,
    riskLevel: "High",
    dominantRole: "Narrative Influence",
    posts30d: 41,
    networkRole: "Bridge",
    cluster: "Campus Party Cluster",
  },
]
