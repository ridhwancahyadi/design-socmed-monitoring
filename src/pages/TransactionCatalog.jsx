// src/pages/TransactionCatalog.jsx
import React, { useState } from 'react';
import { Shield, FileText, Box, MapPin, AlertTriangle, Package } from 'lucide-react';

import KPICard from '../components/transaction/KPICard';
import ProductFormDistributionChart from '../components/transaction/ProductFormDistributionChart';
import PackagingPieChart from '../components/transaction/PackagingPieChart';
import DistributionModusChart from '../components/transaction/DistributionModusChart';
import BrandCityHeatmapTable from '../components/transaction/BrandCityHeatmapTable';
import ParaphernaliaSuppliersList from '../components/transaction/ParaphernaliaSuppliersList';
import ContainerEnvironmentMatrix from '../components/transaction/ContainerEnvironmentMatrix';

const TransactionCatalog = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7days');

  // === DATA DUMMY (sama seperti sebelumnya) ===
  const kpiData = {
    totalProductPosts: 1847,
    estimatedUnits: 34567,
    uniqueDropPoints: 156, 
    affectedCities: 28,
  };

  const productFormData = [
    { form: 'Crystal', drugs: 456, pharma: 89, paraphernalia: 234 },
    { form: 'Powder', drugs: 389, pharma: 145, paraphernalia: 178 },
    { form: 'Tablet', drugs: 267, pharma: 567, paraphernalia: 45 },
    { form: 'Capsule', drugs: 178, pharma: 432, paraphernalia: 23 },
    { form: 'Herbal', drugs: 512, pharma: 34, paraphernalia: 89 },
  ];

  const packagingDataDrugs = [
    { method: 'Aluminium Foil', count: 456, percentage: 42.2, color: '#EF4444' },
    { method: 'Plastik Klip', count: 389, percentage: 36.0, color: '#DC2626' },
    { method: 'Botol Kecil', count: 234, percentage: 21.8, color: '#B91C1C' },
  ];

  const packagingDataPharma = [
    { method: 'Strip Original', count: 567, percentage: 47.2, color: '#F59E0B' },
    { method: 'Botol Vitamin', count: 345, percentage: 28.7, color: '#D97706' },
    { method: 'Plastik Resealable', count: 289, percentage: 24.1, color: '#B45309' },
  ];

  const packagingDataParaphernalia = [
    { method: 'Kotak Teh', count: 345, percentage: 38.1, color: '#10B981' },
    { method: 'Tas Kecil', count: 289, percentage: 31.9, color: '#059669' },
    { method: 'Bubble Wrap', count: 271, percentage: 30.0, color: '#047857' },
  ];

  const misusedBrandsData = [
    { brand: 'Tramadol', count: 892, risk: 95, trend: '+23%', category: 'Analgesic' },
    { brand: 'Alprazolam', count: 756, risk: 92, trend: '+18%', category: 'Benzodiazepine' },
    { brand: 'Dextromethorphan', count: 634, risk: 88, trend: '+15%', category: 'Cough Suppressant' },
    { brand: 'Carnophen', count: 523, risk: 85, trend: '+12%', category: 'Muscle Relaxant' },
    { brand: 'Trihexyphenidyl', count: 467, risk: 82, trend: '+9%', category: 'Anticholinergic' },
    { brand: 'Clonazepam', count: 423, risk: 79, trend: '+11%', category: 'Benzodiazepine' },
    { brand: 'Ritalin', count: 389, risk: 76, trend: '+7%', category: 'Stimulant' },
    { brand: 'Xanax', count: 367, risk: 88, trend: '+14%', category: 'Benzodiazepine' },
  ];

  const cities = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar'];
  const brandCityHeatmap = [
    { brand: 'Tramadol', Jakarta: 234, Surabaya: 156, Bandung: 189, Medan: 123, Semarang: 98, Makassar: 87 },
    { brand: 'Alprazolam', Jakarta: 198, Surabaya: 167, Bandung: 145, Medan: 98, Semarang: 89, Makassar: 76 },
    { brand: 'Dextromethorphan', Jakarta: 167, Surabaya: 134, Bandung: 156, Medan: 89, Semarang: 67, Makassar: 54 },
    { brand: 'Carnophen', Jakarta: 145, Surabaya: 112, Bandung: 98, Medan: 78, Semarang: 56, Makassar: 45 },
    { brand: 'Trihexyphenidyl', Jakarta: 123, Surabaya: 98, Bandung: 87, Medan: 67, Semarang: 54, Makassar: 38 },
  ];

  const paraphernaliaSuppliers = [
    { id: 'SUP-001', supplier: '@vape_***_jkt', region: 'Jakarta & Surrounding', mainProducts: ['Bong Glass', 'E-Vaporizer', 'Papers'], transactions: 234, risk: 89, monthlyVolume: '~500 units', platforms: ['Instagram', 'Telegram'] },
    { id: 'SUP-002', supplier: '@tools_***_sby', region: 'Surabaya, Malang, Jember', mainProducts: ['Metal Pipes', 'Herb Grinders', 'Precision Scales'], transactions: 189, risk: 85, monthlyVolume: '~380 units', platforms: ['TikTok', 'Telegram'] },
    { id: 'SUP-003', supplier: '@supply_***_bdg', region: 'Bandung, Cimahi, Tasikmalaya', mainProducts: ['Rolling Papers', 'Activated Carbon Filters'], transactions: 167, risk: 78, monthlyVolume: '~420 units', platforms: ['Instagram', 'WhatsApp'] },
    { id: 'SUP-004', supplier: '@gear_***_mdn', region: 'Medan, Binjai', mainProducts: ['Starter Kits', 'Storage Containers'], transactions: 145, risk: 82, monthlyVolume: '~290 units', platforms: ['Telegram', 'Instagram'] },
    { id: 'SUP-005', supplier: '@smoke_***_smg', region: 'Semarang, Solo', mainProducts: ['Ceramic Pipes', 'Mini Bongs'], transactions: 123, risk: 75, monthlyVolume: '~250 units', platforms: ['Instagram', 'TikTok'] },
    { id: 'SUP-006', supplier: '@tools_***_mks', region: 'Makassar, Parepare', mainProducts: ['Electric Grinders', 'Pocket Scales'], transactions: 98, risk: 71, monthlyVolume: '~180 units', platforms: ['Telegram', 'WhatsApp'] },
  ];

  const distributionModusData = [
    { modus: 'Pot Tanaman', count: 234, percentage: 18.2, risk: 'High' },
    { modus: 'Tiang Listrik', count: 198, percentage: 15.4, risk: 'High' },
    { modus: 'Bawah Batu', count: 178, percentage: 13.8, risk: 'Medium' },
    { modus: 'Lubang Tembok', count: 156, percentage: 12.1, risk: 'High' },
    { modus: 'Pagar Besi', count: 134, percentage: 10.4, risk: 'Medium' },
    { modus: 'Kotak Sampah', count: 123, percentage: 9.6, risk: 'Low' },
    { modus: 'Dalam Pipa', count: 112, percentage: 8.7, risk: 'High' },
    { modus: 'Lainnya', count: 152, percentage: 11.8, risk: 'Medium' },
  ];

  const environments = ['Taman/Halaman', 'Jembatan', 'Warung', 'Parkiran', 'ATM Area', 'Halte', 'SPBU'];
  const containerEnvironmentMatrix = [
    { container: 'Plastik Klip', 'Taman/Halaman': 156, 'Jembatan': 89, 'Warung': 134, 'Parkiran': 78, 'ATM Area': 45, 'Halte': 67, 'SPBU': 34 },
    { container: 'Botol Kecil', 'Taman/Halaman': 123, 'Jembatan': 67, 'Warung': 98, 'Parkiran': 112, 'ATM Area': 56, 'Halte': 43, 'SPBU': 51 },
    { container: 'Aluminium Foil', 'Taman/Halaman': 98, 'Jembatan': 134, 'Warung': 145, 'Parkiran': 76, 'ATM Area': 34, 'Halte': 89, 'SPBU': 23 },
    { container: 'Kotak', 'Taman/Halaman': 67, 'Jembatan': 45, 'Warung': 78, 'Parkiran': 98, 'ATM Area': 87, 'Halte': 54, 'SPBU': 67 },
    { container: 'Kantong Ziplock', 'Taman/Halaman': 89, 'Jembatan': 56, 'Warung': 67, 'Parkiran': 89, 'ATM Area': 67, 'Halte': 78, 'SPBU': 45 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-500" />
              TRANSACTION &amp; LOGISTICS INTELLIGENCE
            </h1>
            <p className="text-gray-400 mt-2">
              Product Distribution &amp; Supply Chain Analysis
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none focus:border-purple-400"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KPICard
          title="Product Evidence Posts"
          value={kpiData.totalProductPosts.toLocaleString()}
          subtitle="Last 7 days"
          icon={FileText}
          trend="+15.3% from last period"
          color="purple"
        />
        <KPICard
          title="Estimated Units"
          value={kpiData.estimatedUnits.toLocaleString()}
          subtitle="Total seized/tracked"
          icon={Box}
          trend="+23.7% from last period"
          color="blue"
        />
        <KPICard
          title="Unique Drop Points"
          value={kpiData.uniqueDropPoints}
          subtitle="With valid coordinates"
          icon={MapPin}
          trend="+8.2% from last period"
          color="red"
        />
        <KPICard
          title="Affected Cities"
          value={kpiData.affectedCities}
          subtitle="Across provinces"
          icon={MapPin}
          color="orange"
        />
      </div>

      {/* Product Form Distribution (Bar, ECharts) */}
      <ProductFormDistributionChart data={productFormData} />

      {/* Packaging Pie Charts (ECharts) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <PackagingPieChart
          title="Drugs Packaging"
          accentColorClass="text-red-400"
          data={packagingDataDrugs}
        />
        <PackagingPieChart
          title="Pharma Packaging"
          accentColorClass="text-orange-400"
          data={packagingDataPharma}
        />
        <PackagingPieChart
          title="Paraphernalia Packaging"
          accentColorClass="text-green-400"
          data={packagingDataParaphernalia}
        />
      </div>

      {/* Top Misused Pharmaceutical Brands (cards) */}
      <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
          <AlertTriangle className="w-5 h-5" />
          Top Misused Pharmaceutical Brands
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {misusedBrandsData.map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg border-2 border-red-500/30 hover:border-red-500/60 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-bold text-gray-400">
                  #{idx + 1}
                </span>
                <span className="text-red-400 text-xs font-bold px-2 py-1 bg-red-500/20 rounded">
                  RISK: {item.risk}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {item.brand}
              </h4>
              <p className="text-xs text-gray-400 mb-2">{item.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-400">
                  {item.count}
                </span>
                <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                  {item.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand x City Heatmap (table, komponen) */}
      <BrandCityHeatmapTable cities={cities} data={brandCityHeatmap} />

      {/* Paraphernalia Suppliers (komponen) */}
      <ParaphernaliaSuppliersList suppliers={paraphernaliaSuppliers} />

      {/* Distribution Modus (Pie + list, ECharts) */}
      <DistributionModusChart data={distributionModusData} />

      {/* Container × Environment Matrix (komponen) */}
      <ContainerEnvironmentMatrix
        environments={environments}
        matrix={containerEnvironmentMatrix}
      />

      {/* Summary Statistics */}
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

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>
          BNN Tactical X - Transaction &amp; Logistics Intelligence (Part 1) |
          Confidential | For Authorized Personnel Only
        </p>
      </div>
    </div>
  );
};

export default TransactionCatalog;
