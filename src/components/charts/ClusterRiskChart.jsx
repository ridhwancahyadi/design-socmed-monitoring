// src/components/charts/ClusterRiskChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const ClusterRiskChart = ({ data }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        const p = params[0]
        const cluster = data[p.dataIndex]
        return [
          cluster.name,
          `Avg risk: ${cluster.avgRiskScore}`,
          `Accounts: ${cluster.accountCount}`,
          `Dominant role: ${cluster.dominantRole}`,
        ].join("<br/>")
      },
    },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: data.map((c) => c.name),
      axisLabel: {
        color: "#cbd5f5",
        formatter: (val) => (val.length > 12 ? val.slice(0, 12) + "…" : val),
      },
      axisLine: { lineStyle: { color: "#64748b" } },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLine: { lineStyle: { color: "#64748b" } },
      splitLine: { lineStyle: { color: "#1e293b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    series: [
      {
        name: "Avg Risk Score",
        type: "bar",
        data: data.map((c) => c.avgRiskScore),
        barWidth: "50%",
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 260 }} />
}

export default ClusterRiskChart
