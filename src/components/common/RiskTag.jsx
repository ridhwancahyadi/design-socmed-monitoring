// src/components/common/RiskTag.jsx
import React from 'react';

export const getRiskColor = (score) => {
  if (score >= 90) return 'text-red-400';
  if (score >= 70) return 'text-orange-400';
  if (score >= 50) return 'text-yellow-400';
  return 'text-green-400';
};

export const getRiskBg = (score) => {
  if (score >= 90) return 'bg-red-500/10 border-red-500/30';
  if (score >= 70) return 'bg-orange-500/10 border-orange-500/30';
  if (score >= 50) return 'bg-yellow-500/10 border-yellow-500/30';
  return 'bg-green-500/10 border-green-500/30';
};

export const RiskStatusTag = ({ risk }) => {
  let colorClass;
  if (risk === 'high') {
    colorClass = 'bg-red-500/20 text-red-400';
  } else if (risk === 'medium') {
    colorClass = 'bg-yellow-500/20 text-yellow-400';
  } else {
    colorClass = 'bg-gray-500/20 text-gray-400';
  }

  const label = risk
    ? risk.charAt(0).toUpperCase() + risk.slice(1)
    : 'Unknown';

  return (
    <span className={`px-2 py-1 rounded text-xs font-bold ${colorClass}`}>
      {label}
    </span>
  );
};
