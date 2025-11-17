// src/components/charts/RiskScoreTrendChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const RiskScoreTrendChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "axis" },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: data.dates,
      axisLine: { lineStyle: { color: "#64748b" } },
      axisLabel: { color: "#cbd5f5" },
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
        type: "line",
        smooth: true,
        data: data.avgRiskScores,
        areaStyle: {},
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 260 }} />
}

export default RiskScoreTrendChart
