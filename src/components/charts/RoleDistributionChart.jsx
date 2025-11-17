// src/components/charts/RoleDistributionChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const RoleDistributionChart = ({ data }) => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: { color: "#e5e7eb" },
    },
    series: [
      {
        name: "Content Role",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#020617",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        labelLine: { show: false },
        data: data.map((d) => ({ name: d.role, value: d.value })),
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 280 }} />
}

export default RoleDistributionChart
