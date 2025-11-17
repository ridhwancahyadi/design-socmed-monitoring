// src/pages/TransactionLogistics.jsx
import React from "react"
import TransactionTimelineChart from "../components/charts/TransactionTimelineChart"
import ModalityChart from "../components/charts/ModalityChart"
import PriceByRegionChart from "../components/charts/PriceByRegionChart"
import LogisticsCoverageChart from "../components/charts/LogisticsCoverageChart"
import RouteSankeyChart from "../components/charts/RouteSankeyChart"
import AnomalyBarChart from "../components/charts/AnomalyBarChart"

import {
  transactionTimelineData,
  priceByRegionData,
  modalityData,
  logisticsCoverageData,
  routeFlowData,
  anomalyData,
} from "../data/transactionDummyData"

const TransactionLogistics = () => {
  // KPI sederhana dari dummy data
  const totalTransactionPosts =
    transactionTimelineData.productEvidence.reduce((a, b) => a + b, 0) +
    transactionTimelineData.logisticsOperation.reduce((a, b) => a + b, 0)

  const uniqueSellerAccounts = 32 // dummy
  const regionsServed = logisticsCoverageData.length
  const dominantModality = modalityData.reduce(
    (max, m) => (m.count > max.count ? m : max),
    modalityData[0]
  )

  return (
    <div className="page">
      {/* KPI cards */}
      <section className="section">
        <h2 className="section-title">Transaction & Logistics Snapshot</h2>
        <div className="grid grid-4">
          <div className="card">
            <div className="kpi-label">Transaction-Like Posts</div>
            <div className="kpi-value">{totalTransactionPosts}</div>
            <div className="kpi-sub">Product Evidence + Logistics</div>
          </div>

          <div className="card">
            <div className="kpi-label">Seller / Operator Accounts</div>
            <div className="kpi-value">{uniqueSellerAccounts}</div>
            <div className="kpi-sub">estimated unique accounts</div>
          </div>

          <div className="card">
            <div className="kpi-label">Regions Covered</div>
            <div className="kpi-value">{regionsServed}</div>
            <div className="kpi-sub">with active logistics mentions</div>
          </div>

          <div className="card">
            <div className="kpi-label">Dominant Modality</div>
            <div className="kpi-value text-sm">
              {dominantModality.modality}
            </div>
            <div className="kpi-sub">
              {dominantModality.count} mentions (dummy)
            </div>
          </div>
        </div>
      </section>

      {/* Timeline + Modality */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Transaction Activity Over Time</h3>
            <div className="card-body">
              <TransactionTimelineChart data={transactionTimelineData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Transaction Modality Breakdown</h3>
            <div className="card-body">
              <ModalityChart data={modalityData} />
            </div>
          </div>
        </div>
      </section>

      {/* Price & Coverage */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Price Distribution by Region</h3>
            <div className="card-body">
              <PriceByRegionChart data={priceByRegionData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Logistics Coverage</h3>
            <div className="card-body">
              <LogisticsCoverageChart data={logisticsCoverageData} />
            </div>
          </div>
        </div>
      </section>

      {/* Routes & Anomalies */}
      <section className="section">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Distribution Routes (Origin → Destination)</h3>
            <div className="card-body">
              <RouteSankeyChart data={routeFlowData} />
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Anomalies in Transaction Activity</h3>
            <div className="card-body">
              <AnomalyBarChart data={anomalyData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TransactionLogistics
