// src/components/charts/AccountNetworkGraph.jsx
import React from "react"
import ReactECharts from "echarts-for-react"

const AccountNetworkGraph = ({ data }) => {
  // kategori berdasarkan role di jaringan
  const categories = [
    { name: "hub" },
    { name: "bridge" },
    { name: "peripheral" },
  ]

  const option = {
    tooltip: {
      formatter: (params) => {
        if (params.dataType === "node") {
          return [
            params.data.name,
            `Role: ${params.data.category}`,
            `Risk: ${params.data.riskLevel}`,
          ].join("<br/>")
        }
        if (params.dataType === "edge") {
          return `${params.data.source} → ${params.data.target}<br/>Interactions: ${params.data.value}`
        }
        return ""
      },
    },
    legend: {
      data: categories.map((c) => c.name),
      textStyle: { color: "#e5e7eb" },
    },
    series: [
      {
        type: "graph",
        layout: "force",
        roam: true,
        focusNodeAdjacency: true,
        categories,
        data: data.nodes.map((n) => ({
          ...n,
          value: 1,
          symbolSize:
            n.riskLevel === "Critical"
              ? 36
              : n.riskLevel === "High"
              ? 30
              : n.riskLevel === "Medium"
              ? 24
              : 18,
          category: n.category,
        })),
        links: data.links,
        label: {
          show: true,
          position: "right",
          formatter: (p) => p.data.name,
          color: "#e5e7eb",
        },
        lineStyle: {
          color: "#64748b",
          curveness: 0.25,
        },
        force: {
          repulsion: 180,
          edgeLength: 90,
        },
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 360 }} />
}

export default AccountNetworkGraph
