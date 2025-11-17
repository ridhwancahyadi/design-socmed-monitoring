import React from "react"
import { useLocation } from "react-router-dom"

const getTitle = (pathname) => {
  if (pathname.startsWith("/monitoring")) return "Real-Time Social Media Monitoring"
  if (pathname.startsWith("/account-risk-network")) return "Account Risk & Network Intelligence"
  if (pathname.startsWith("/transaction-logistics")) return "Transaction & Logistics Intelligence"
  return "Digital Intelligence Dashboard"
}

const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className="app-header">
      <div>
        <h1 className="page-title">{getTitle(pathname)}</h1>
        <p className="page-subtitle">
          Tactical x BNN · Digital Intelligence & Social Media Monitoring
        </p>
      </div>

      {/* Placeholder untuk global filters (date range, platform, dll) */}
      <div className="header-filters">
        <span className="filter-badge">Date: Last 7 days</span>
        <span className="filter-badge">Platform: All</span>
      </div>
    </header>
  )
}

export default Header
