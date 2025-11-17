import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import RealTimeMonitoring from "./pages/RealTimeMonitoring"
import AccountRiskNetwork from "./pages/AccountRiskNetwork"
import TransactionLogistics from "./pages/TransactionLogistics"

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* Default redirect ke Real-Time */}
        <Route path="/" element={<Navigate to="/monitoring" replace />} />

        <Route path="/monitoring" element={<RealTimeMonitoring />} />
        <Route path="/account-risk-network" element={<AccountRiskNetwork />} />
        <Route path="/transaction-logistics" element={<TransactionLogistics />} />

        {/* Fallback simple */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Layout>
  )
}

export default App
