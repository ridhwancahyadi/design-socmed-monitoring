// src/components/charts/PlatformRoleChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"
import { CONTENT_ROLES } from "../../data/realtimeDummyData"

const PlatformRoleChart = ({ data }) => {
  const platforms = data.map((d) => d.platform)

  const series = [
    {
      name: "Marketing Awareness",
      key: "marketingAwareness",
    },
    {
      name: "Product Evidence",
      key: "productEvidence",
    },
    {
      name: "Logistics Operation",
      key: "logisticsOperation",
    },
    {
      name: "Narrative Influence",
      key: "narrativeInfluence",
    },
  ].map((s) => ({
    name: s.name,
    type: "bar",
    stack: "total",
    emphasis: { focus: "series" },
    data: data.map((row) => row[s.key]),
  }))

  const option = {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    legend: {
      data: CONTENT_ROLES,
      textStyle: { color: "#e5e7eb" },
    },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: platforms,
      axisLine: { lineStyle: { color: "#64748b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#64748b" } },
      splitLine: { lineStyle: { color: "#1e293b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    series,
  }

  return <ReactECharts option={option} style={{ height: 300 }} />
}

export default PlatformRoleChart
