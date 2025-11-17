// src/components/charts/ModalityChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const ModalityChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: { color: "#e5e7eb" },
    },
    series: [
      {
        name: "Transaction Modality",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#020617",
          borderWidth: 2,
        },
        label: { show: false, position: "center" },
        emphasis: {
          label: { show: true, fontSize: 14, fontWeight: "bold" },
        },
        labelLine: { show: false },
        data: data.map((d) => ({ name: d.modality, value: d.count })),
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 280 }} />
}

export default ModalityChart
