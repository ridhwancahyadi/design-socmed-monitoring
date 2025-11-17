// src/pages/AccountRiskNetwork.jsx
import React from "react"
import AccountRiskLevelChart from "../components/charts/AccountRiskLevelChart"
import RiskScoreTrendChart from "../components/charts/RiskScoreTrendChart"
import AccountNetworkGraph from "../components/charts/AccountNetworkGraph"
import ClusterRiskChart from "../components/charts/ClusterRiskChart"
import HighRiskAccountsTable from "../components/HighRiskAccountsTable"

import {
  accountRiskLevelData,
  riskScoreTrendData,
  networkGraphData,
  clusterData,
  highRiskAccounts,
} from "../data/accountRiskDummyData"

const AccountRiskNetwork = () => {
  const totalAccounts = accountRiskLevelData.reduce(
    (sum, r) => sum + r.value,
    0
  )
  const highCriticalAccounts = accountRiskLevelData
    .filter((r) => r.level === "High" || r.level === "Critical")
    .reduce((sum, r) => sum + r.value, 0)

  const latestAvgRisk =
    riskScoreTrendData.avgRiskScores[
      riskScoreTrendData.avgRiskScores.length - 1
    ]
  const earliestAvgRisk = riskScoreTrendData.avgRiskScores[0]
  const riskDrift = latestAvgRisk - earliestAvgRisk

  const highestCluster = clusterData.reduce(
    (max, c) => (c.avgRiskScore > max.avgRiskScore ? c : max),
    clusterData[0]
  )

  return (
    <div className="page">
      {/* KPI Ringkas */}
      <section className="section">
        <h2 className="section-title">Account Risk Overview</h2>
        <div className="grid grid-4">
          <div className="card">
            <div className="kpi-label">Accounts Monitored</div>
            <div className="kpi-value">{totalAccounts}</div>
            <div className="kpi-sub">across current filters</div>
          </div>

          <div className="card">
            <div className="kpi-label">High & Critical Accounts</div>
            <div className="kpi-value">{highCriticalAccounts}</div>
            <div className="kpi-sub">
              {(highCriticalAccounts / (totalAccounts || 1) * 100).toFixed(1)}%
              of monitored accounts
            </div>
          </div>

          <div className="card">
            <div className="kpi-label">Risk Drift (7d)</div>
            <div className="kpi-value">
              {riskDrift >= 0 ? "+" : ""}
              {riskDrift.toFixed(1)}
            </div>
            <div className="kpi-sub">
              change in avg risk score vs last week
            </div>
          </div>

          <div className="card">
            <div className="kpi-label">Most Critical Cluster</div>
            <div className="kpi-value text-sm">{highestCluster.name}</div>
            <div className="kpi-sub">
              Avg risk {highestCluster.avgRiskScore} ·{" "}
              {highestCluster.accountCount} accounts
            </div>
          </div>
        </div>
      </section>

      {/* Distribusi & Tren */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Risk Level Distribution (Accounts)</h3>
            <div className="card-body">
              <AccountRiskLevelChart data={accountRiskLevelData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Average Risk Score Trend</h3>
            <div className="card-body">
              <RiskScoreTrendChart data={riskScoreTrendData} />
            </div>
          </div>
        </div>
      </section>

      {/* Network Graph & High-Risk List */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Risk Network Graph</h3>
            <div className="card-body">
              <AccountNetworkGraph data={networkGraphData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Priority High-Risk Accounts</h3>
            <div className="card-body">
              <HighRiskAccountsTable rows={highRiskAccounts} />
            </div>
          </div>
        </div>
      </section>

      {/* Cluster Risk Insight */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Cluster Risk Profile</h3>
            <div className="card-body">
              <ClusterRiskChart data={clusterData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Cluster Summary</h3>
            <div className="card-body">
              <ul className="text-sm space-y-3">
                {clusterData.map((c) => (
                  <li key={c.id}>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-xs text-slate-400">
                      Accounts: {c.accountCount} · Avg risk{" "}
                      {c.avgRiskScore} · Dominant: {c.dominantRole} (
                      {c.dominantRegion})
                    </div>
                    <div className="text-xs text-slate-400">
                      Key handles: {c.topHandles.join(", ")}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountRiskNetwork
