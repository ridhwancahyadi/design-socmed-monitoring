// src/components/transaction/ProductFormDistributionChart.jsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Layers } from 'lucide-react';

const ProductFormDistributionChart = ({ data }) => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['Drugs', 'Pharmaceutical', 'Paraphernalia'],
      textStyle: { color: '#9CA3AF', fontSize: 11 },
    },
    grid: { left: 40, right: 20, top: 40, bottom: 40 },
    xAxis: {
      type: 'category',
      data: data.map((d) => d.form),
      axisLine: { lineStyle: { color: '#4B5563' } },
      axisLabel: { color: '#9CA3AF' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#4B5563' } },
      splitLine: { lineStyle: { color: '#374151' } },
      axisLabel: { color: '#9CA3AF' },
    },
    series: [
      {
        name: 'Drugs',
        type: 'bar',
        data: data.map((d) => d.drugs),
        itemStyle: { color: '#EF4444' },
        emphasis: { focus: 'series' },
      },
      {
        name: 'Pharmaceutical',
        type: 'bar',
        data: data.map((d) => d.pharma),
        itemStyle: { color: '#F59E0B' },
        emphasis: { focus: 'series' },
      },
      {
        name: 'Paraphernalia',
        type: 'bar',
        data: data.map((d) => d.paraphernalia),
        itemStyle: { color: '#10B981' },
        emphasis: { focus: 'series' },
      },
    ],
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-400">
        <Layers className="w-5 h-5" />
        Product Form Distribution by Category
      </h3>

      <ReactECharts
        option={option}
        style={{ width: '100%', height: 400 }}
        notMerge
        lazyUpdate
      />

      <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-purple-400">Key Insight:</span>{' '}
          <strong>Herbal forms</strong> memiliki volume drugs tertinggi (512
          cases), sementara <strong>Tablet</strong> mendominasi kategori pharma
          (567 cases). <strong>Crystal forms</strong> paling sering dikaitkan
          dengan paraphernalia (234 cases).
        </p>
      </div>
    </div>
  );
};

export default ProductFormDistributionChart;
