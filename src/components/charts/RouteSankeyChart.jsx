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
        nodeAlign: "left",       // semua origin start dari kiri
        nodeWidth: 18,
        nodeGap: 16,
        layoutIterations: 32,
        emphasis: { focus: "adjacency" },
        lineStyle: {
          opacity: 0.5,
          curveness: 0.4,
        },
        label: {
          color: "#e5e7eb",
          fontSize: 10,
        },
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 320 }} />
}

export default RouteSankeyChart
