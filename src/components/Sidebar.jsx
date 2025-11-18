// src/components/Sidebar.jsx
import React from "react"
import { NavLink } from "react-router-dom"
import {
  Activity,
  Share2,
  PackageSearch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const Sidebar = ({ isCollapsed, onToggle }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-30 flex flex-col border-r border-slate-800 bg-slate-950/95 px-3 py-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Brand + Toggle */}
      <div className="mb-6 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-400 text-xs font-semibold text-slate-900">
            TX
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-slate-100">
                Tactical x BNN
              </p>
              <p className="text-[10px] leading-tight text-slate-500">
                Digital Intelligence Console
              </p>
            </div>
          )}
        </div>

        {/* Toggle button */}
        <button
          type="button"
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-100"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {/* Real-Time Monitoring */}
        <NavLink to="/monitoring" end>
          {({ isActive }) => (
            <div
              className={`group flex items-center rounded-xl px-3 py-2 text-sm transition-colors ${
                isCollapsed ? "justify-center" : "gap-3"
              } ${
                isActive
                  ? "bg-sky-500/15 text-slate-50"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-50"
              }`}
            >
              <Activity
                className={`h-5 w-5 flex-shrink-0 transition-colors ${
                  isActive
                    ? "text-sky-400"
                    : "text-slate-400 group-hover:text-sky-300"
                }`}
              />
              <span
                className={`whitespace-nowrap text-[11px] font-medium transition-all duration-200 ${
                  isCollapsed
                    ? "max-w-0 -translate-x-2 opacity-0 overflow-hidden"
                    : "max-w-[180px] translate-x-0 opacity-100"
                }`}
              >
                Real-Time Monitoring
              </span>
            </div>
          )}
        </NavLink>

        {/* Account Risk & Network Profiling */}
        <NavLink to="/account-risk-network">
          {({ isActive }) => (
            <div
              className={`group flex items-center rounded-xl px-3 py-2 text-sm transition-colors ${
                isCollapsed ? "justify-center" : "gap-3"
              } ${
                isActive
                  ? "bg-emerald-500/15 text-slate-50"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-50"
              }`}
            >
              <Share2
                className={`h-5 w-5 flex-shrink-0 transition-colors ${
                  isActive
                    ? "text-emerald-400"
                    : "text-slate-400 group-hover:text-emerald-300"
                }`}
              />
              <span
                className={`whitespace-nowrap text-[11px] font-medium transition-all duration-200 ${
                  isCollapsed
                    ? "max-w-0 -translate-x-2 opacity-0 overflow-hidden"
                    : "max-w-[220px] translate-x-0 opacity-100"
                }`}
              >
                Account Risk &amp; Network Profiling
              </span>
            </div>
          )}
        </NavLink>

        {/* Transaction Catalog */}
        <NavLink to="/transaction-catalog">
          {({ isActive }) => (
            <div
              className={`group flex items-center rounded-xl px-3 py-2 text-sm transition-colors ${
                isCollapsed ? "justify-center" : "gap-3"
              } ${
                isActive
                  ? "bg-violet-500/15 text-slate-50"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-50"
              }`}
            >
              <PackageSearch
                className={`h-5 w-5 flex-shrink-0 transition-colors ${
                  isActive
                    ? "text-violet-400"
                    : "text-slate-400 group-hover:text-violet-300"
                }`}
              />
              <span
                className={`whitespace-nowrap text-[11px] font-medium transition-all duration-200 ${
                  isCollapsed
                    ? "max-w-0 -translate-x-2 opacity-0 overflow-hidden"
                    : "max-w-[180px] translate-x-0 opacity-100"
                }`}
              >
                Transaction Catalog
              </span>
            </div>
          )}
        </NavLink>
      </nav>

      {/* Footer kecil */}
      {!isCollapsed && (
        <div className="mt-4 border-t border-slate-800 pt-3 text-[10px] text-slate-500">
          v0.1 · intel prototype
        </div>
      )}
    </aside>
  )
}

export default Sidebar
