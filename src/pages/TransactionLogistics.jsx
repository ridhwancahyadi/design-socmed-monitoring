import React from "react"

const TransactionLogistics = () => {
  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Transaction Activity</h2>
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Transaction Timeline</h3>
            <div className="placeholder-chart">[Timeline chart]</div>
          </div>
          <div className="card">
            <h3 className="card-title">KPI Snapshot</h3>
            <div className="placeholder-chart">[KPIs / summary]</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Price Distribution</h3>
            <div className="placeholder-chart">[Boxplot / price]</div>
          </div>
          <div className="card">
            <h3 className="card-title">Logistics Coverage & Routes</h3>
            <div className="placeholder-chart">[Map / flow]</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TransactionLogistics
