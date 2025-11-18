// src/components/transaction/TransactionCatalogSection.jsx
import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  Filter,
  MapPin,
  AlertTriangle,
  Hash,
} from 'lucide-react';

const riskBadgeClass = (riskLevel) => {
  switch (riskLevel) {
    case 'critical':
      return 'bg-red-500/20 text-red-400 border-red-500/50';
    case 'high':
      return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
    case 'low':
      return 'bg-green-500/20 text-green-400 border-green-500/50';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/40';
  }
};

const statusBadgeClass = (status) => {
  switch (status) {
    case 'completed':
      return 'bg-green-500/10 text-green-400 border border-green-500/40';
    case 'pending':
      return 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/40';
    case 'flagged':
      return 'bg-red-500/10 text-red-400 border border-red-500/40';
    default:
      return 'bg-gray-500/10 text-gray-300 border border-gray-500/40';
  }
};

const platformBadgeClass = (platform) => {
  switch (platform) {
    case 'Instagram':
      return 'bg-pink-500/10 text-pink-400 border border-pink-500/40';
    case 'TikTok':
      return 'bg-purple-500/10 text-purple-400 border border-purple-500/40';
    case 'Telegram':
      return 'bg-blue-500/10 text-blue-400 border border-blue-500/40';
    case 'WhatsApp':
      return 'bg-green-500/10 text-green-400 border border-green-500/40';
    default:
      return 'bg-gray-500/10 text-gray-300 border border-gray-500/40';
  }
};

const TransactionCatalogSection = () => {
  const [search, setSearch] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [filterRisk, setFilterRisk] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Dummy katalog transaksi (bisa nanti diganti data API)
  const transactions = useMemo(
    () => [
      {
        id: 'TX-2025-001',
        date: '2025-11-10 21:45',
        account: '@meds_***_jkt',
        platform: 'Instagram',
        channel: 'DM → WhatsApp',
        productType: 'product_pharma',
        productLabel: 'Tramadol 100mg',
        quantity: 3,
        unit: 'strip',
        city: 'Jakarta',
        province: 'DKI Jakarta',
        dropMethod: 'Pot Tanaman',
        container: 'Plastik Klip',
        payment: 'Transfer Bank',
        riskScore: 94,
        riskLevel: 'critical',
        status: 'flagged',
      },
      {
        id: 'TX-2025-002',
        date: '2025-11-10 20:17',
        account: '@gear_***_bdg',
        platform: 'Telegram',
        channel: 'Channel → PM',
        productType: 'product_paraphernalia',
        productLabel: 'Bong kaca + torch',
        quantity: 1,
        unit: 'set',
        city: 'Bandung',
        province: 'Jawa Barat',
        dropMethod: 'Tiang Listrik',
        container: 'Kotak',
        payment: 'E-Wallet',
        riskScore: 88,
        riskLevel: 'high',
        status: 'completed',
      },
      {
        id: 'TX-2025-003',
        date: '2025-11-09 23:02',
        account: '@herbal_***_sby',
        platform: 'TikTok',
        channel: 'Live Comment → DM',
        productType: 'product_drugs',
        productLabel: 'Ganja kering (herbal)',
        quantity: 50,
        unit: 'gram',
        city: 'Surabaya',
        province: 'Jawa Timur',
        dropMethod: 'Bawah Batu',
        container: 'Kantong Ziplock',
        payment: 'COD',
        riskScore: 81,
        riskLevel: 'high',
        status: 'pending',
      },
      {
        id: 'TX-2025-004',
        date: '2025-11-09 19:15',
        account: '@pharma_***_mdn',
        platform: 'WhatsApp',
        channel: 'Status → Chat',
        productType: 'product_pharma',
        productLabel: 'Alprazolam 0.5mg',
        quantity: 2,
        unit: 'strip',
        city: 'Medan',
        province: 'Sumatera Utara',
        dropMethod: 'Kotak Sampah',
        container: 'Aluminium Foil',
        payment: 'Transfer Bank',
        riskScore: 76,
        riskLevel: 'medium',
        status: 'completed',
      },
      {
        id: 'TX-2025-005',
        date: '2025-11-08 21:58',
        account: '@tools_***_smg',
        platform: 'Instagram',
        channel: 'Story → DM',
        productType: 'product_paraphernalia',
        productLabel: 'Mini bong + papers',
        quantity: 2,
        unit: 'set',
        city: 'Semarang',
        province: 'Jawa Tengah',
        dropMethod: 'Pagar Besi',
        container: 'Kotak',
        payment: 'QRIS',
        riskScore: 72,
        riskLevel: 'medium',
        status: 'completed',
      },
      {
        id: 'TX-2025-006',
        date: '2025-11-08 18:30',
        account: '@mix_***_mks',
        platform: 'Telegram',
        channel: 'Group → PM',
        productType: 'product_drugs',
        productLabel: 'Crystal (sabu)',
        quantity: 5,
        unit: 'gram',
        city: 'Makassar',
        province: 'Sulawesi Selatan',
        dropMethod: 'Dalam Pipa',
        container: 'Plastik Klip',
        payment: 'Crypto',
        riskScore: 91,
        riskLevel: 'critical',
        status: 'flagged',
      },
      {
        id: 'TX-2025-007',
        date: '2025-11-07 22:11',
        account: '@pharma_***_bdg',
        platform: 'TikTok',
        channel: 'Live PM',
        productType: 'product_pharma',
        productLabel: 'Dextromethorphan sirup',
        quantity: 4,
        unit: 'bottle',
        city: 'Bandung',
        province: 'Jawa Barat',
        dropMethod: 'Warung',
        container: 'Botol Kecil',
        payment: 'COD',
        riskScore: 68,
        riskLevel: 'medium',
        status: 'pending',
      },
      {
        id: 'TX-2025-008',
        date: '2025-11-07 16:40',
        account: '@vape_***_jkt',
        platform: 'Instagram',
        channel: 'DM',
        productType: 'product_paraphernalia',
        productLabel: 'E-vaporizer + liquid',
        quantity: 1,
        unit: 'set',
        city: 'Jakarta',
        province: 'DKI Jakarta',
        dropMethod: 'Parkiran',
        container: 'Kotak',
        payment: 'Transfer Bank',
        riskScore: 62,
        riskLevel: 'low',
        status: 'completed',
      },
      {
        id: 'TX-2025-009',
        date: '2025-11-06 20:05',
        account: '@mix_***_sby',
        platform: 'WhatsApp',
        channel: 'Forwarded Chat',
        productType: 'product_drugs',
        productLabel: 'Kombinasi pil + serbuk',
        quantity: 20,
        unit: 'tablet',
        city: 'Surabaya',
        province: 'Jawa Timur',
        dropMethod: 'ATM Area',
        container: 'Kantong Ziplock',
        payment: 'Transfer Bank',
        riskScore: 84,
        riskLevel: 'high',
        status: 'completed',
      },
      {
        id: 'TX-2025-010',
        date: '2025-11-06 17:22',
        account: '@herbal_***_smg',
        platform: 'Instagram',
        channel: 'DM',
        productType: 'product_drugs',
        productLabel: 'Herbal blend',
        quantity: 30,
        unit: 'gram',
        city: 'Semarang',
        province: 'Jawa Tengah',
        dropMethod: 'Taman/Halaman',
        container: 'Plastik Klip',
        payment: 'COD',
        riskScore: 71,
        riskLevel: 'medium',
        status: 'pending',
      },
    ],
    []
  );

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const term = search.toLowerCase().trim();

      const matchSearch =
        !term ||
        tx.id.toLowerCase().includes(term) ||
        tx.account.toLowerCase().includes(term) ||
        tx.city.toLowerCase().includes(term) ||
        tx.productLabel.toLowerCase().includes(term);

      const matchPlatform =
        filterPlatform === 'all' || tx.platform === filterPlatform;

      const matchRisk =
        filterRisk === 'all' || tx.riskLevel === filterRisk;

      const matchStatus =
        filterStatus === 'all' || tx.status === filterStatus;

      return matchSearch && matchPlatform && matchRisk && matchStatus;
    });
  }, [transactions, search, filterPlatform, filterRisk, filterStatus]);

  const stats = useMemo(() => {
    const total = filteredTransactions.length;
    const totalUnits = filteredTransactions.reduce(
      (sum, t) => sum + (t.quantity || 0),
      0
    );
    const highOrCritical = filteredTransactions.filter((t) =>
      ['high', 'critical'].includes(t.riskLevel)
    ).length;
    const uniqueAccounts = new Set(filteredTransactions.map((t) => t.account))
      .size;

    return {
      total,
      totalUnits,
      highOrCritical,
      uniqueAccounts,
    };
  }, [filteredTransactions]);

  const resetFilters = () => {
    setSearch('');
    setFilterPlatform('all');
    setFilterRisk('all');
    setFilterStatus('all');
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2 text-cyan-400">
            <FileText className="w-5 h-5" />
            Transaction Catalog (Post-Level & Order-Level)
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Rekap transaksi yang terdeteksi di kanal digital (DM, live, grup,
            forwarding) dengan konteks produk, lokasi drop, dan tingkat risiko.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 bg-gray-900/60 rounded border border-gray-600">
            <p className="text-gray-400 mb-1 flex items-center gap-1">
              <Hash className="w-3 h-3" />
              Total Transactions
            </p>
            <p className="text-lg font-bold text-white">
              {stats.total.toLocaleString()}
            </p>
          </div>
          <div className="p-2.5 bg-gray-900/60 rounded border border-gray-600">
            <p className="text-gray-400 mb-1 text-[11px]">
              Total Units / Items
            </p>
            <p className="text-lg font-bold text-blue-400">
              {stats.totalUnits.toLocaleString()}
            </p>
          </div>
          <div className="p-2.5 bg-gray-900/60 rounded border border-gray-600">
            <p className="text-gray-400 mb-1 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-red-400" />
              High & Critical
            </p>
            <p className="text-lg font-bold text-red-400">
              {stats.highOrCritical.toLocaleString()}
            </p>
          </div>
          <div className="p-2.5 bg-gray-900/60 rounded border border-gray-600">
            <p className="text-gray-400 mb-1 text-[11px]">
              Unique Accounts
            </p>
            <p className="text-lg font-bold text-purple-400">
              {stats.uniqueAccounts.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
        <div className="flex-1 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari ID transaksi, account, kota, atau produk..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1">
            <Filter className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400">Platform</span>
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white focus:border-cyan-400 outline-none"
            >
              <option value="all">All</option>
              <option value="Instagram">Instagram</option>
              <option value="TikTok">TikTok</option>
              <option value="Telegram">Telegram</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">Risk</span>
            <select
              value={filterRisk}
              onChange={(e) => setFilterRisk(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white focus:border-cyan-400 outline-none"
            >
              <option value="all">All</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">Status</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-white focus:border-cyan-400 outline-none"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="flagged">Flagged</option>
            </select>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="px-3 py-1 rounded bg-gray-900 border border-gray-700 text-gray-300 hover:border-cyan-400 transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-xs md:text-sm">
          <thead className="bg-gray-900">
            <tr className="border-b border-gray-700">
              <th className="p-3 text-left text-gray-400 font-semibold sticky left-0 bg-gray-900 z-10">
                ID & Time
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Account / Channel
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Product
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Qty
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Location
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Drop Method
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Container
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Payment
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Risk
              </th>
              <th className="p-3 text-left text-gray-400 font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-gray-800 hover:bg-gray-900/70 transition-colors"
              >
                <td className="p-3 align-top sticky left-0 bg-gray-900/90">
                  <div className="font-mono text-[11px] text-gray-400 mb-1">
                    {tx.id}
                  </div>
                  <div className="text-[11px] text-gray-500">{tx.date}</div>
                </td>
                <td className="p-3 align-top">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">
                      {tx.account}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${platformBadgeClass(
                        tx.platform
                      )}`}
                    >
                      {tx.platform}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Channel: {tx.channel}
                  </div>
                </td>
                <td className="p-3 align-top">
                  <div className="text-white text-[13px] font-semibold mb-1">
                    {tx.productLabel}
                  </div>
                  <div className="text-[11px] text-gray-400 italic">
                    {tx.productType}
                  </div>
                </td>
                <td className="p-3 align-top">
                  <div className="font-bold text-cyan-400">
                    {tx.quantity} {tx.unit}
                  </div>
                </td>
                <td className="p-3 align-top">
                  <div className="flex items-center gap-1 text-[12px] text-gray-200 mb-1">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    {tx.city}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    {tx.province}
                  </div>
                </td>
                <td className="p-3 align-top">
                  <div className="text-[12px] text-white font-semibold">
                    {tx.dropMethod}
                  </div>
                </td>
                <td className="p-3 align-top">
                  <div className="text-[12px] text-gray-200">{tx.container}</div>
                </td>
                <td className="p-3 align-top">
                  <div className="text-[12px] text-gray-200">
                    {tx.payment}
                  </div>
                </td>
                <td className="p-3 align-top">
                  <div
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold border ${riskBadgeClass(
                      tx.riskLevel
                    )}`}
                  >
                    <AlertTriangle className="w-3 h-3" />
                    <span>{tx.riskLevel.toUpperCase()}</span>
                    <span className="text-xs opacity-80">
                      ({tx.riskScore})
                    </span>
                  </div>
                </td>
                <td className="p-3 align-top">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold ${statusBadgeClass(
                      tx.status
                    )}`}
                  >
                    {tx.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
            {filteredTransactions.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="p-4 text-center text-gray-500 text-xs"
                >
                  Tidak ada transaksi yang cocok dengan filter saat ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Insight block */}
      <div className="mt-4 p-3 bg-gray-700/30 rounded-lg text-xs text-gray-300">
        <p>
          <span className="font-semibold text-cyan-400">Analisis cepat:</span>{' '}
          gunakan katalog ini untuk mengidentifikasi{' '}
          <span className="text-red-400 font-semibold">
            pola transaksi berulang
          </span>{' '}
          (akun dan kota yang sama), channel yang paling sering dipakai (DM,
          live, grup), dan kombinasi{' '}
          <span className="text-yellow-300">
            drop method + container + payment
          </span>{' '}
          yang berulang pada kasus risiko tinggi. Bagian ini bisa dihubungkan ke
          menu investigasi lapangan dan penindakan.
        </p>
      </div>
    </div>
  );
};

export default TransactionCatalogSection;
