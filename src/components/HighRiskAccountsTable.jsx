// src/components/HighRiskAccountsTable.jsx
import React from "react"

const riskBadgeClass = (level) => {
  switch (level) {
    case "Critical":
      return "risk-badge badge-critical"
    case "High":
      return "risk-badge badge-high"
    case "Medium":
      return "risk-badge badge-medium"
    default:
      return "risk-badge badge-low"
  }
}

const HighRiskAccountsTable = ({ rows }) => {
  return (
    <div className="feed-table-wrapper">
      <table className="feed-table">
        <thead>
          <tr>
            <th>Account</th>
            <th>Platform</th>
            <th>Region</th>
            <th>Risk</th>
            <th>Dominant Role</th>
            <th>Posts (30d)</th>
            <th>Network Role</th>
            <th>Cluster</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((acc) => (
            <tr key={acc.handle}>
              <td>{acc.handle}</td>
              <td>{acc.platform}</td>
              <td>{acc.region}</td>
              <td>
                <span className={riskBadgeClass(acc.riskLevel)}>
                  {acc.riskLevel} ({acc.riskScore})
                </span>
              </td>
              <td>{acc.dominantRole}</td>
              <td>{acc.posts30d}</td>
              <td>{acc.networkRole}</td>
              <td>{acc.cluster}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HighRiskAccountsTable
