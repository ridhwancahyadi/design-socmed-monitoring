// src/pages/AccountRiskNetwork.jsx
import React, { useState, useMemo } from 'react';
import { generateAccountData } from '../data/accountRiskDummyData';
import RiskDistributionCards from '../components/account-risk/RiskDistributionCards';
import AccountSearchFilters from '../components/account-risk/AccountSearchFilters';
import HighRiskAccountsTable from '../components/account-risk/HighRiskAccountsTable';
import AccountDetailPanel from '../components/account-risk/AccountDetailPanel';
import NetworkOverview from '../components/account-risk/NetworkOverview';

// NEW: import analytics section
import NetworkAnalyticsSection from '../components/network/NetworkAnalyticsSection';

// Helper: bentuk network nodes + clusters dari accounts
const buildNetworkFromAccounts = (accounts) => {
  if (!accounts.length) {
    return { nodes: [], clusters: [] };
  }

  // Bentuk nodes dengan metric network sintetis
  const nodes = accounts.map((acc, index) => {
    const degree = Math.floor(Math.random() * 10) + 1;
    return {
      id: acc.id ?? index + 1,
      username: acc.username,
      role: acc.networkRole || acc.dominantRole || 'Reseller',
      platform: acc.platform,
      province: acc.region,   // untuk sekarang anggap region sebagai province
      city: acc.region,
      riskLevel: acc.riskLevel,
      riskScore: acc.riskScore,
      degree,
      betweenness: Math.random() * 10,
      eigenvector: Math.random(),
      cluster: (index % 5) + 1,
    };
  });

  // Hitung cluster aggregate
  const clusterMap = new Map();
  nodes.forEach((node) => {
    if (!clusterMap.has(node.cluster)) {
      clusterMap.set(node.cluster, {
        id: node.cluster,
        size: 0,
        members: [],
        leader: null,
        avgRisk: 0,
        province: node.province,
      });
    }
    const cluster = clusterMap.get(node.cluster);
    cluster.size += 1;
    cluster.members.push(node.id);
    cluster.avgRisk += node.riskScore;
  });

  const clusters = Array.from(clusterMap.values()).map((cluster) => {
    cluster.avgRisk = cluster.size ? cluster.avgRisk / cluster.size : 0;
    // pilih leader: degree tertinggi di cluster
    const leaderId = cluster.members.reduce((leaderId, memberId) => {
      const member = nodes.find((n) => n.id === memberId);
      const currentLeader = nodes.find((n) => n.id === leaderId);
      if (!currentLeader) return memberId;
      return member.degree > currentLeader.degree ? memberId : leaderId;
    }, cluster.members[0]);
    cluster.leader = leaderId;
    return cluster;
  });

  return { nodes, clusters };
};

const AccountRiskNetwork = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRisk, setFilterRisk] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');

  // Dummy data hanya dibuat sekali
  const accounts = useMemo(() => generateAccountData(50), []);

  // Distribusi risk
  const riskDistribution = useMemo(() => {
    const dist = { low: 0, medium: 0, high: 0, critical: 0 };
    accounts.forEach((acc) => {
      if (dist[acc.riskLevel] !== undefined) {
        dist[acc.riskLevel]++;
      }
    });
    return dist;
  }, [accounts]);

  // Filter utama
  const filteredAccounts = useMemo(() => {
    return accounts
      .filter((acc) => {
        const term = searchTerm.toLowerCase();
        const matchSearch =
          !term ||
          acc.username.toLowerCase().includes(term) ||
          acc.region.toLowerCase().includes(term);
        const matchRisk = filterRisk === 'all' || acc.riskLevel === filterRisk;
        const matchPlatform =
          filterPlatform === 'all' || acc.platform === filterPlatform;
        return matchSearch && matchRisk && matchPlatform;
      })
      .sort((a, b) => b.riskScore - a.riskScore);
  }, [accounts, searchTerm, filterRisk, filterPlatform]);

  const highRiskAccounts = useMemo(
    () => filteredAccounts.slice(0, 20),
    [filteredAccounts]
  );

  const hasActiveFilter =
    filterRisk !== 'all' || filterPlatform !== 'all' || searchTerm !== '';

  const handleClearFilters = () => {
    setFilterRisk('all');
    setFilterPlatform('all');
    setSearchTerm('');
  };

  // === NEW: bentuk network metrics dari filtered accounts ===
  const { nodes: networkNodes, clusters } = useMemo(
    () => buildNetworkFromAccounts(filteredAccounts),
    [filteredAccounts]
  );

  // Sinkron: klik chart → pilih account di detail
  const handleSelectNetworkNode = (node) => {
    const acc = filteredAccounts.find(
      (a) => a.username === node.username
    );
    if (acc) {
      setSelectedAccount(acc);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
        padding: '20px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '30px' }}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            background: 'linear-gradient(90deg, #00ff88 0%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px',
          }}
        >
          Account Risk & Network Intelligence
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>
          Tactical X BNN - Digital Intelligence & Social Media Monitoring
        </p>
      </div>

      {/* Risk Cards */}
      <RiskDistributionCards
        riskDistribution={riskDistribution}
        currentFilter={filterRisk}
        onChangeFilter={setFilterRisk}
      />

      {/* Search & Filters */}
      <AccountSearchFilters
        searchTerm={searchTerm}
        onChangeSearch={setSearchTerm}
        filterPlatform={filterPlatform}
        onChangePlatform={setFilterPlatform}
        hasActiveFilter={hasActiveFilter}
        onClearFilters={handleClearFilters}
      />

      {/* Main Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: selectedAccount ? '1fr 1fr' : '1fr',
          gap: '20px',
        }}
      >
        <HighRiskAccountsTable
          accounts={highRiskAccounts}
          filteredTotal={filteredAccounts.length}
          currentRiskFilter={filterRisk}
          selectedAccountId={selectedAccount?.id ?? null}
          onSelectAccount={setSelectedAccount}
        />

        {selectedAccount ? (
          <AccountDetailPanel
            account={selectedAccount}
            onClose={() => setSelectedAccount(null)}
          />
        ) : (
          <NetworkOverview
            accounts={filteredAccounts}
            riskDistribution={riskDistribution}
            onSelectAccount={setSelectedAccount}
          />
        )}
      </div>

      {/* NEW: Network Analytics Charts (pakai chart dari page sebelumnya) */}
      <NetworkAnalyticsSection
        nodes={networkNodes}
        clusters={clusters}
        onSelectNode={handleSelectNetworkNode}
      />

      {/* Footer Insight */}
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          background: 'rgba(0, 255, 136, 0.05)',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          borderRadius: '12px',
        }}
      >
        <h3
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#00ff88',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>💡</span> Intelligence Insight
        </h3>
        <p
          style={{
            fontSize: '13px',
            color: '#aaa',
            lineHeight: '1.8',
            margin: 0,
          }}
        >
          Dashboard ini mengidentifikasi akun berisiko tinggi berdasarkan analisis
          multi-dimensi: aktivitas posting, penggunaan bahasa ter-kodefikasi, pola
          logistik, dan pengaruh naratif. Network graph menunjukkan koneksi antar
          akun untuk mengidentifikasi struktur organisasi dan key players. Gunakan
          risk score dan network role untuk memprioritaskan investigasi dan operasi
          penindakan.
        </p>
      </div>
    </div>
  );
};

export default AccountRiskNetwork;
