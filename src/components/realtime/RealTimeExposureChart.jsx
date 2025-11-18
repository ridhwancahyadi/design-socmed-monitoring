// src/components/realtime/RealTimeExposureChart.jsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { TrendingUp } from 'lucide-react';

const RealTimeExposureChart = ({ data }) => {
  const option = {
    tooltip: { trigger: 'axis' },
    legend: { textStyle: { color: '#e5e7eb' } },
    grid: { left: '3%', right: '3%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: data.map(d => d.time),
      axisLine: { lineStyle: { color: '#9ca3af' } },
      axisLabel: { color: '#9ca3af' },
    },
    yAxis: [
      {
        type: 'value',
        name: 'Exposure',
        axisLine: { lineStyle: { color: '#9ca3af' } },
        axisLabel: { color: '#9ca3af' },
        splitLine: { lineStyle: { color: '#374151' } },
      },
      {
        type: 'value',
        name: 'Velocity',
        axisLine: { lineStyle: { color: '#9ca3af' } },
        axisLabel: { color: '#9ca3af' },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: 'Exposure (Posts)',
        type: 'line',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(59,130,246,0.6)' },
              { offset: 1, color: 'rgba(59,130,246,0.05)' },
            ],
          },
        },
        itemStyle: { color: '#3b82f6' },
        data: data.map(d => d.exposure),
        yAxisIndex: 0,
      },
      {
        name: 'Velocity (Interactions)',
        type: 'line',
        smooth: true,
        itemStyle: { color: '#10b981' },
        data: data.map(d => d.velocity),
        yAxisIndex: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-400">
        <TrendingUp className="w-5 h-5" />
        Exposure & Velocity Trend (24 Hours)
      </h3>
      <ReactECharts option={option} style={{ height: 280, width: '100%' }} />
    </div>
  );
};

export default RealTimeExposureChart;
