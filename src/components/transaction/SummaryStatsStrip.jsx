// src/components/transaction/SummaryStatsStrip.jsx
import React from 'react';
import { AlertTriangle, Package, MapPin, Box } from 'lucide-react';

const SummaryStatsStrip = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="w-6 h-6 text-red-400" />
        <h4 className="font-semibold text-red-400">High Risk Areas</h4>
      </div>
      <p className="text-3xl font-bold text-white mb-1">59.4%</p>
      <p className="text-xs text-gray-400">
        of distribution uses high-risk storage methods
      </p>
    </div>

    <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/30 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-2">
        <Package className="w-6 h-6 text-orange-400" />
        <h4 className="font-semibold text-orange-400">Top Container</h4>
      </div>
      <p className="text-3xl font-bold text-white mb-1">603</p>
      <p className="text-xs text-gray-400">
        Plastik Klip cases across all environments
      </p>
    </div>

    <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-2">
        <MapPin className="w-6 h-6 text-purple-400" />
        <h4 className="font-semibold text-purple-400">Primary Location</h4>
      </div>
      <p className="text-3xl font-bold text-white mb-1">522</p>
      <p className="text-xs text-gray-400">
        drop points in Warung environments
      </p>
    </div>

    <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-2">
        <Box className="w-6 h-6 text-green-400" />
        <h4 className="font-semibold text-green-400">Active Suppliers</h4>
      </div>
      <p className="text-3xl font-bold text-white mb-1">6</p>
      <p className="text-xs text-gray-400">
        identified paraphernalia suppliers
      </p>
    </div>
  </div>
);

export default SummaryStatsStrip;
