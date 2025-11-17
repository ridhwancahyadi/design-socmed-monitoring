// src/components/charts/AnomalyBarChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const AnomalyBarChart = ({ data }) => {
  const option = {
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        const posts = params.find((p) => p.seriesName === "Posts")
        const baseline = params.find((p) => p.seriesName === "Baseline")
        return [
          posts.axisValue,
          `Posts: ${posts.value}`,
          `Baseline: ${baseline.value}`,
          `Δ: ${(posts.value - baseline.value).toFixed(0)}`,
        ].join("<br/>")
      },
    },
    legend: {
      data: ["Posts", "Baseline"],
      textStyle: { color: "#e5e7eb" },
    },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: data.map((d) => d.date),
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
        name: "Posts",
        type: "bar",
        data: data.map((d) => d.posts),
      },
      {
        name: "Baseline",
        type: "line",
        data: data.map((d) => d.baseline),
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 280 }} />
}

export default AnomalyBarChart
