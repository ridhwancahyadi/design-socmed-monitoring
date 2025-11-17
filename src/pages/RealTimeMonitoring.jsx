// src/pages/RealTimeMonitoring.jsx
import React from "react"

const RealTimeMonitoring = () => {
  return (
    <div className="page">
      {/* Row KPI */}
      <section className="section">
        <h2 className="section-title">Situation Overview</h2>
        <div className="grid grid-4">
          <div className="card">Total Posts (placeholder)</div>
          <div className="card">High-Risk Posts (placeholder)</div>
          <div className="card">Active Accounts (placeholder)</div>
          <div className="card">Youth Segment Share (placeholder)</div>
        </div>
      </section>

      {/* Row Timeline & Map */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Conversation Volume Over Time</h3>
            <div className="card-body">
              {/* nanti: line chart */}
              <div className="placeholder-chart">[Time-series chart]</div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Geo Heatmap by Region</h3>
            <div className="card-body">
              {/* nanti: map */}
              <div className="placeholder-chart">[Map / heatmap]</div>
            </div>
          </div>
        </div>
      </section>

      {/* Row Keyword & Feed */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Keyword & Coded Language Intelligence</h3>
            <div className="card-body">
              <div className="placeholder-table">[Top keywords / coded terms]</div>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Real-Time Content Feed</h3>
            <div className="card-body">
              <div className="placeholder-table">[Live posts table / stream]</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealTimeMonitoring
