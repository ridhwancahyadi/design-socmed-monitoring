// src/components/charts/KeywordBarChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const KeywordBarChart = ({ data }) => {
  // sort descending by count
  const sorted = [...data].sort((a, b) => b.count - a.count)

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
      data: sorted.map((d) => d.term),
      axisLine: { lineStyle: { color: "#64748b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    series: [
      {
        type: "bar",
        data: sorted.map((d) => ({
          value: d.count,
          // optional: berbeda warna dikit antara explicit vs coded
          itemStyle: {
            opacity: d.type === "coded" ? 0.9 : 0.6,
          },
        })),
        barWidth: "60%",
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 300 }} />
}

export default KeywordBarChart
