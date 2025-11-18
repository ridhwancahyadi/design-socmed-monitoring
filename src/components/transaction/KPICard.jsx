// src/components/transaction/KPICard.jsx
import React from 'react';
import { TrendingUp } from 'lucide-react';

const KPICard = ({ title, value, subtitle, icon: Icon, trend, color = 'blue' }) => {
  const colorMap = {
    purple: { text: 'text-purple-400', bg: 'bg-purple-500/10' },
    blue:   { text: 'text-blue-400',   bg: 'bg-blue-500/10' },
    red:    { text: 'text-red-400',    bg: 'bg-red-500/10' },
    orange: { text: 'text-orange-400', bg: 'bg-orange-500/10' },
  };

  const { text, bg } = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-gray-600 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <h3 className={`text-3xl font-bold mt-2 ${text}`}>{value}</h3>
          {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg ${bg}`}>
          {Icon && <Icon className={`w-6 h-6 ${text}`} />}
        </div>
      </div>
      {trend && (
        <div className="mt-3 flex items-center text-xs">
          <TrendingUp className="w-3 h-3 text-green-400 mr-1" />
          <span className="text-green-400">{trend}</span>
        </div>
      )}
    </div>
  );
};

export default KPICard;
