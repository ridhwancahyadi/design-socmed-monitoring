// src/components/transaction/DistributionModusChart.jsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Layers } from 'lucide-react';

const getRiskColorClass = (risk) => {
  switch (risk) {
    case 'High':
      return 'bg-red-500/20 text-red-400 border-red-500/50';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
    case 'Low':
      return 'bg-green-500/20 text-green-400 border-green-500/50';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
  }
};

const DistributionModusChart = ({ data }) => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: (p) =>
        `${p.data.modus}<br/>${p.data.value.toLocaleString()} cases (${p.percent.toFixed(
          1
        )}%)`,
    },
    series: [
      {
        name: 'Distribution Modus',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        data: data.map((d, idx) => ({
          value: d.count,
          name: d.modus,
          modus: d.modus,
          itemStyle: { color: `hsl(${idx * 45}, 70%, 50%)` },
        })),
        label: {
          show: true,
          formatter: (p) =>
            p.percent > 8 ? `${p.percent.toFixed(1)}%` : '',
          color: '#E5E7EB',
          fontSize: 11,
        },
        labelLine: { show: true, length: 10, length2: 6 },
      },
    ],
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-orange-400">
        <Layers className="w-5 h-5" />
        Distribution Modus - Storage & Drop Methods
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ReactECharts
            option={option}
            style={{ width: '100%', height: 300 }}
            notMerge
            lazyUpdate
          />
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-3">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl font-bold text-gray-500">
                      #{idx + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">
                        {item.modus}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold border ${getRiskColorClass(
                            item.risk
                          )}`}
                        >
                          {item.risk} Risk
                        </span>
                        <span className="text-xs text-gray-400">
                          {item.percentage}% of total
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-orange-400">
                      {item.count}
                    </span>
                    <p className="text-xs text-gray-400">cases</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-full h-2 mt-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-orange-400">
            Key Insight:
          </span>{' '}
          <strong>Pot Tanaman</strong> adalah modus paling populer (234 cases,
          18.2%), diikuti <strong>Tiang Listrik</strong> (198 cases, 15.4%).
          Metode <em>high-risk</em> mencakup 59.4% dari total cases.
        </p>
      </div>
    </div>
  );
};

export default DistributionModusChart;
