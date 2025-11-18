// src/data/accountRiskDummyData.js

export const PLATFORMS = ['Instagram', 'Telegram', 'Twitter', 'WhatsApp', 'TikTok', 'Facebook'];
export const REGIONS = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Makassar', 'Semarang'];
export const ROLES = ['Influencer', 'Reseller', 'Distributor', 'Coordinator', 'Consumer', 'Recruiter'];

const FIRST_NAMES = ['Ahmad', 'Budi', 'Citra', 'Deni', 'Eka', 'Fauzi', 'Gita', 'Hadi', 'Indra', 'Joko'];

export const generateAccountData = (count = 50) => {
  return Array.from({ length: count }, (_, i) => {
    const riskScore = Math.random();
    const riskLevel =
      riskScore > 0.85
        ? 'critical'
        : riskScore > 0.65
        ? 'high'
        : riskScore > 0.45
        ? 'medium'
        : 'low';

    // Risk history 30 hari
    const riskHistory = Array.from({ length: 30 }, (_, d) => ({
      date: new Date(Date.now() - (29 - d) * 24 * 60 * 60 * 1000),
      score: Math.max(0, Math.min(1, riskScore + (Math.random() - 0.5) * 0.15)),
    }));

    return {
      id: i + 1,
      username: `${FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]}${Math.floor(
        Math.random() * 9999
      )}`,
      platform: PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)],
      region: REGIONS[Math.floor(Math.random() * REGIONS.length)],
      riskScore,
      riskLevel,
      dominantRole: ROLES[Math.floor(Math.random() * ROLES.length)],
      totalPosts: Math.floor(Math.random() * 500) + 50,
      networkRole: ROLES[Math.floor(Math.random() * ROLES.length)],
      followers: Math.floor(Math.random() * 10000) + 100,
      connections: Math.floor(Math.random() * 50) + 5,
      // Activity breakdown
      marketingAwareness: Math.random() * 100,
      productEvidence: Math.random() * 100,
      logisticsOperation: Math.random() * 100,
      narrativeInfluence: Math.random() * 100,
      riskHistory,
      activityTimeline: Array.from({ length: 7 }, (_, d) => ({
        day: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][d],
        posts: Math.floor(Math.random() * 30),
      })),
      keywords: ['crystal', 'paket', 'ready', 'drop', 'COD'].map((k) => ({
        word: k,
        count: Math.floor(Math.random() * 50) + 5,
      })),
      codedLanguage: ['🍬', '📦', '💊', '🎁', '🔥'].map((c) => ({
        code: c,
        meaning: 'substance reference',
        frequency: Math.floor(Math.random() * 30) + 2,
      })),
    };
  });
};
