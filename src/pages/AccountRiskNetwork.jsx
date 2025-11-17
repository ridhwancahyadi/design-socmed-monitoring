import React from "react"

const AccountRiskNetwork = () => {
  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Risk Overview</h2>
        <div className="grid grid-3">
          <div className="card">Risk Distribution (placeholder)</div>
          <div className="card">High-Risk Accounts (KPI)</div>
          <div className="card">Newly Escalated Accounts</div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">High-Risk Account List</h3>
            <div className="placeholder-table">[Accounts table]</div>
          </div>
          <div className="card">
            <h3 className="card-title">Network Graph</h3>
            <div className="placeholder-chart">[Network visualization]</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountRiskNetwork
