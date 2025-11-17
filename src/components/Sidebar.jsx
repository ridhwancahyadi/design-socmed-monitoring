import React from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-title">Tactical x BNN</span>
        <span className="brand-subtitle">Digital Intelligence Console</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/monitoring"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Real-Time Social Media Monitoring
        </NavLink>

        <NavLink
          to="/account-risk-network"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Account Risk & Network Intelligence
        </NavLink>

        <NavLink
          to="/transaction-logistics"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Transaction & Logistics Intelligence
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
