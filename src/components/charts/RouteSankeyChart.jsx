// src/components/charts/RouteSankeyChart.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const RouteSankeyChart = ({ data }) => {
  const option = {
    tooltip: { trigger: "item", triggerOn: "mousemove" },
    series: [
      {
        type: "sankey",
        data: data.nodes,
        links: data.links,
        emphasis: { focus: "adjacency" },
        lineStyle: {
          color: "gradient",
          curveness: 0.5,
        },
        label: {
          color: "#e5e7eb",
        },
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 320 }} />
}

export default RouteSankeyChart
