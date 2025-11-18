// src/components/account-risk/riskUtils.js

export const getRiskColor = (level) => {
  const colors = {
    low: '#00ff88',
    medium: '#ffaa00',
    high: '#ff6b00',
    critical: '#ff0066',
  };
  return colors[level] || '#888';
};

export const getRiskLabel = (level) => {
  const labels = {
    low: 'Rendah',
    medium: 'Sedang',
    high: 'Tinggi',
    critical: 'Kritis',
  };
  if (level === 'all') return 'Semua';
  return labels[level] || level;
};

// Opsional: kalau nanti mau pakai kelas teks/bg (Tailwind)
export const getRiskTextClass = (level) => {
  if (level === 'critical') return 'text-red-400';
  if (level === 'high') return 'text-orange-400';
  if (level === 'medium') return 'text-yellow-400';
  return 'text-green-400';
};

export const getRiskBgClass = (level) => {
  if (level === 'critical') return 'bg-red-500/10 border-red-500/30';
  if (level === 'high') return 'bg-orange-500/10 border-orange-500/30';
  if (level === 'medium') return 'bg-yellow-500/10 border-yellow-500/30';
  return 'bg-green-500/10 border-green-500/30';
};
