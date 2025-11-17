// src/components/charts/PriceByRegionChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const PriceByRegionChart = ({ data }) => {
  const regions = data.map((d) => d.region)

  const option = {
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        const [avg, min, max] = params
        return [
          avg.name,
          `Avg: Rp ${avg.value.toLocaleString("id-ID")}`,
          `Min: Rp ${min.value.toLocaleString("id-ID")}`,
          `Max: Rp ${max.value.toLocaleString("id-ID")}`,
        ].join("<br/>")
      },
    },
    legend: {
      data: ["Avg", "Min", "Max"],
      textStyle: { color: "#e5e7eb" },
    },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: regions,
      axisLine: { lineStyle: { color: "#64748b" } },
      axisLabel: { color: "#cbd5f5" },
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#64748b" } },
      splitLine: { lineStyle: { color: "#1e293b" } },
      axisLabel: {
        color: "#cbd5f5",
        formatter: (val) => `Rp${(val / 1000).toFixed(0)}k`,
      },
    },
    series: [
      {
        name: "Avg",
        type: "bar",
        data: data.map((d) => d.avgPrice),
      },
      {
        name: "Min",
        type: "line",
        data: data.map((d) => d.minPrice),
      },
      {
        name: "Max",
        type: "line",
        data: data.map((d) => d.maxPrice),
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 320 }} />
}

export default PriceByRegionChart
