// src/components/transaction/MisusedPharmaBrandsGrid.jsx
import React from 'react';
import { AlertTriangle, TrendingUp } from 'lucide-react';

const MisusedPharmaBrandsGrid = ({ data }) => (
  <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
      <AlertTriangle className="w-5 h-5" />
      Top Misused Pharmaceutical Brands
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="p-4 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg border-2 border-red-500/30 hover:border-red-500/60 transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold text-gray-400">#{idx + 1}</span>
            <span className="text-red-400 text-xs font-bold px-2 py-1 bg-red-500/20 rounded">
              RISK: {item.risk}
            </span>
          </div>
          <h4 className="text-lg font-bold text-white mb-1">{item.brand}</h4>
          <p className="text-xs text-gray-400 mb-2">{item.category}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-red-400">{item.count}</span>
            <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {item.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MisusedPharmaBrandsGrid;
