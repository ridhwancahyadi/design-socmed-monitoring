// src/components/charts/LogisticsCoverageChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const LogisticsCoverageChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#64748b" } },
      splitLine: { lineStyle: { color: "#1e293b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    yAxis: {
      type: "category",
      data: data.map((d) => d.region),
      axisLine: { lineStyle: { color: "#64748b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    series: [
      {
        type: "bar",
        data: data.map((d) => d.count),
        barWidth: "60%",
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 300 }} />
}

export default LogisticsCoverageChart
