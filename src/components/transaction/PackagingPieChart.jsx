// src/components/transaction/PackagingPieChart.jsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Package } from 'lucide-react';

const PackagingPieChart = ({ title, accentColorClass, data }) => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: (params) =>
        `${params.data.method}<br/>${params.data.value.toLocaleString()} cases (${params.percent.toFixed(
          1
        )}%)`,
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#9CA3AF', fontSize: 11 },
      formatter: (name) => {
        const item = data.find((d) => d.method === name);
        return item ? `${name} (${item.count})` : name;
      },
    },
    series: [
      {
        name: title,
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['35%', '50%'],
        data: data.map((d) => ({
          value: d.count,
          name: d.method,
          method: d.method,
          itemStyle: { color: d.color },
        })),
        label: {
          show: true,
          formatter: (p) => (p.percent > 10 ? `${p.percent.toFixed(1)}%` : ''),
          color: '#E5E7EB',
          fontSize: 11,
        },
        labelLine: { show: true, length: 10, length2: 6 },
      },
    ],
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <h3
        className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
          accentColorClass || 'text-gray-100'
        }`}
      >
        <Package className="w-5 h-5" />
        {title}
      </h3>

      <ReactECharts
        option={option}
        style={{ width: '100%', height: 260 }}
        notMerge
        lazyUpdate
      />

      <div className="space-y-2 mt-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-300 flex items-center gap-2">
              <div
                style={{ backgroundColor: item.color }}
                className="w-3 h-3 rounded-full"
              />
              {item.method}
            </span>
            <span className={accentColorClass || 'text-gray-100'}>
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagingPieChart;
