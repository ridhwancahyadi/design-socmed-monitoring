// src/components/charts/RiskDistributionChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const RiskDistributionChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: data.map((d) => d.level),
      axisLine: { lineStyle: { color: "#64748b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#64748b" } },
      splitLine: { lineStyle: { color: "#1e293b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.value),
        barWidth: "50%",
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 260 }} />
}

export default RiskDistributionChart
