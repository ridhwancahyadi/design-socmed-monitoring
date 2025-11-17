// src/components/charts/ConversationVolumeChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"
import { CONTENT_ROLES } from "../../data/realtimeDummyData"

const ConversationVolumeChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "axis" },
    legend: {
      data: CONTENT_ROLES,
      textStyle: { color: "#e5e7eb" },
    },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      boundaryGap: false,
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
        name: "Marketing Awareness",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: data.marketingAwareness,
      },
      {
        name: "Product Evidence",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: data.productEvidence,
      },
      {
        name: "Logistics Operation",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: data.logisticsOperation,
      },
      {
        name: "Narrative Influence",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: data.narrativeInfluence,
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 320 }} />
}

export default ConversationVolumeChart
