// src/pages/RealTimeMonitoring.jsx
import React from "react"
import ConversationVolumeChart from "../components/charts/ConversationVolumeChart"
import RoleDistributionChart from "../components/charts/RoleDistributionChart"
import RiskDistributionChart from "../components/charts/RiskDistributionChart"
import PlatformRoleChart from "../components/charts/PlatformRoleChart"
import KeywordBarChart from "../components/charts/KeywordBarChart"
import RealtimeFeedTable from "../components/FeedTable"
import {
  conversationVolumeData,
  roleDistributionData,
  riskDistributionData,
  platformRoleData,
  keywordData,
  realtimeFeedData,
} from "../data/realtimeDummyData"

const RealTimeMonitoring = () => {
  // hitung KPI sederhana dari dummy data
  const totalPosts =
    roleDistributionData.reduce((sum, r) => sum + r.value, 0) || 0

  const totalHighRisk =
    riskDistributionData
      .filter((r) => r.level === "High" || r.level === "Critical")
      .reduce((sum, r) => sum + r.value, 0) || 0

  const activeAccounts = 87 // dummy
  const youthShare = 0.38 // 38% dummy

  const dominantRole = roleDistributionData.reduce(
    (max, r) => (r.value > max.value ? r : max),
    roleDistributionData[0]
  )

  return (
    <div className="page">
      {/* Filter bar sederhana (nanti bisa dihubungkan dengan state & API) */}
      <section className="section section-filters">
        <div className="filters-row">
          <div className="filter-group">
            <label>Date Range</label>
            <select>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Platform</label>
            <select>
              <option>All</option>
              <option>Instagram</option>
              <option>TikTok</option>
              <option>X</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Region</label>
            <select>
              <option>All regions</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Surabaya</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Risk Level</label>
            <select>
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
        </div>
      </section>

      {/* KPI Summary */}
      <section className="section">
        <h2 className="section-title">Situation Overview</h2>
        <div className="grid grid-4">
          <div className="card">
            <div className="kpi-label">Total Posts</div>
            <div className="kpi-value">{totalPosts}</div>
            <div className="kpi-sub">within selected filters</div>
          </div>

          <div className="card">
            <div className="kpi-label">High-Risk Posts</div>
            <div className="kpi-value">{totalHighRisk}</div>
            <div className="kpi-sub">
              {(totalHighRisk / (totalPosts || 1) * 100).toFixed(1)}% of posts
            </div>
          </div>

          <div className="card">
            <div className="kpi-label">Active Accounts</div>
            <div className="kpi-value">{activeAccounts}</div>
            <div className="kpi-sub">in this period (dummy)</div>
          </div>

          <div className="card">
            <div className="kpi-label">Youth Segment Share</div>
            <div className="kpi-value">{(youthShare * 100).toFixed(0)}%</div>
            <div className="kpi-sub">estimated youth-related conversations</div>
          </div>
        </div>
      </section>

      {/* Volume & Role distribution */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Conversation Volume Over Time</h3>
            <div className="card-body">
              <ConversationVolumeChart data={conversationVolumeData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Content Role Distribution</h3>
            <div className="card-body">
              <RoleDistributionChart data={roleDistributionData} />
              <div className="card-footnote">
                Dominant role: <strong>{dominantRole.role}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Platform × Role */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Risk Level Distribution</h3>
            <div className="card-body">
              <RiskDistributionChart data={riskDistributionData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Platform vs Content Role</h3>
            <div className="card-body">
              <PlatformRoleChart data={platformRoleData} />
            </div>
          </div>
        </div>
      </section>

      {/* Keywords & Feed */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Top Keywords & Coded Terms</h3>
            <div className="card-body">
              <KeywordBarChart data={keywordData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Real-Time Content Feed</h3>
            <div className="card-body">
              <RealtimeFeedTable items={realtimeFeedData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealTimeMonitoring
