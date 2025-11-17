// src/components/charts/TransactionTimelineChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const TransactionTimelineChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "axis" },
    legend: {
      data: ["Product Evidence", "Logistics Operation"],
      textStyle: { color: "#e5e7eb" },
    },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: data.timestamps,
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
        name: "Product Evidence",
        type: "line",
        smooth: true,
        data: data.productEvidence,
      },
      {
        name: "Logistics Operation",
        type: "line",
        smooth: true,
        data: data.logisticsOperation,
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 320 }} />
}

export default TransactionTimelineChart
