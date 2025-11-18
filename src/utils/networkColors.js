// src/utils/networkColors.js
export const getRiskColor = (level) => {
  const colors = {
    low: '#00ff88',
    medium: '#ffaa00',
    high: '#ff6b00',
    critical: '#ff0066',
  };

  // jika numeric (0–1) → map ke level
  if (typeof level === 'number') {
    if (level > 0.8) return colors.critical;
    if (level > 0.6) return colors.high;
    if (level > 0.4) return colors.medium;
    return colors.low;
  }

  return colors[level] || '#888';
};
