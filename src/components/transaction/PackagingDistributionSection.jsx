// src/components/transaction/PackagingDistributionSection.jsx
import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Package } from 'lucide-react';

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percentage,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  if (percentage > 10) {
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${percentage.toFixed(1)}%`}
      </text>
    );
  }
  return null;
};

const PackagingCard = ({ title, colorTitleClass, iconColorClass, data }) => (
  <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
    <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${colorTitleClass}`}>
      <Package className="w-5 h-5" />
      {title}
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          cx="50%"
          cy="50%"
          outerRadius={80}
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#1F2937',
            border: '1px solid #374151',
            borderRadius: '8px',
            padding: '10px',
          }}
          formatter={(value, name, props) => [
            `${value.toLocaleString()} cases`,
            props.payload.method,
          ]}
        />
      </PieChart>
    </ResponsiveContainer>
    <div className="space-y-2 mt-4">
      {data.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between text-sm">
          <span className="text-gray-300 flex items-center gap-2">
            <div
              style={{ backgroundColor: item.color }}
              className="w-3 h-3 rounded-full"
            />
            {item.method}
          </span>
          <span className={`${iconColorClass} font-bold`}>{item.count}</span>
        </div>
      ))}
    </div>
  </div>
);

const PackagingDistributionSection = ({
  packagingDataDrugs,
  packagingDataPharma,
  packagingDataParaphernalia,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <PackagingCard
        title="Drugs Packaging"
        colorTitleClass="text-red-400"
        iconColorClass="text-red-400"
        data={packagingDataDrugs}
      />
      <PackagingCard
        title="Pharma Packaging"
        colorTitleClass="text-orange-400"
        iconColorClass="text-orange-400"
        data={packagingDataPharma}
      />
      <PackagingCard
        title="Paraphernalia Packaging"
        colorTitleClass="text-green-400"
        iconColorClass="text-green-400"
        data={packagingDataParaphernalia}
      />
    </div>
  );
};

export default PackagingDistributionSection;
