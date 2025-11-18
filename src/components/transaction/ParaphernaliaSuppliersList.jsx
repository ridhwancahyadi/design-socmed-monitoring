// src/components/transaction/ParaphernaliaSuppliersList.jsx
import React from 'react';
import { Box, MapPin } from 'lucide-react';

const ParaphernaliaSuppliersList = ({ suppliers }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-400">
        <Box className="w-5 h-5" />
        Identified Paraphernalia Suppliers &amp; Operations
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {suppliers.map((supplier, idx) => (
          <div
            key={idx}
            className="p-5 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-green-500/50 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-xs text-gray-500 font-mono">
                  {supplier.id}
                </span>
                <h4 className="font-bold text-green-400 text-xl">
                  {supplier.supplier}
                </h4>
                <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {supplier.region}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded text-sm font-bold ${
                  supplier.risk >= 85
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                    : 'bg-orange-500/20 text-orange-400 border border-orange-500/50'
                }`}
              >
                Risk: {supplier.risk}
              </span>
            </div>

            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Main Products:</p>
              <div className="flex flex-wrap gap-2">
                {supplier.mainProducts.map((product, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-400">Transactions</p>
                <p className="text-lg font-bold text-blue-400">
                  {supplier.transactions}
                </p>
              </div>
              <div className="p-2 bg-gray-800/50 rounded">
                <p className="text-xs text-gray-400">Monthly Volume</p>
                <p className="text-lg font-bold text-purple-400">
                  {supplier.monthlyVolume}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Active Platforms:</p>
              <div className="flex gap-2">
                {supplier.platforms.map((platform, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParaphernaliaSuppliersList;
