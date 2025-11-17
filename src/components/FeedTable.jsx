import React from "react"

const riskColorClass = (level) => {
  switch (level) {
    case "Critical":
      return "badge-critical"
    case "High":
      return "badge-high"
    case "Medium":
      return "badge-medium"
    default:
      return "badge-low"
  }
}

const RealtimeFeedTable = ({ items }) => {
  return (
    <div className="feed-table-wrapper">
      <table className="feed-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Platform</th>
            <th>Region</th>
            <th>Account</th>
            <th>Role</th>
            <th>Risk</th>
            <th>Text</th>
            <th>Flags</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id}>
              <td>{row.timestamp}</td>
              <td>{row.platform}</td>
              <td>{row.region}</td>
              <td>{row.account}</td>
              <td>{row.role}</td>
              <td>
                <span className={`risk-badge ${riskColorClass(row.riskLevel)}`}>
                  {row.riskLevel}
                </span>
              </td>
              <td className="feed-text">{row.text}</td>
              <td>
                {row.flags?.map((f) => (
                  <span key={f} className="flag-badge">
                    {f}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RealtimeFeedTable
