// src/components/transaction/BrandCityHeatmapTable.jsx
import React from 'react';
import { MapPin } from 'lucide-react';

const getHeatmapColor = (value, max) => {
  const intensity = value / max;
  if (intensity > 0.8) return 'bg-red-600 text-white';
  if (intensity > 0.6) return 'bg-orange-500 text-white';
  if (intensity > 0.4) return 'bg-yellow-500 text-gray-900';
  if (intensity > 0.2) return 'bg-green-500 text-white';
  return 'bg-blue-500 text-white';
};

const BrandCityHeatmapTable = ({ cities, data }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-yellow-400">
        <MapPin className="w-5 h-5" />
        Brand Promotion Heatmap by City
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-3 text-gray-400 font-semibold sticky left-0 bg-gray-800">
                Brand
              </th>
              {cities.map((city) => (
                <th
                  key={city}
                  className="text-center p-3 text-gray-400 font-semibold"
                >
                  {city}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              const values = cities.map((city) => row[city]);
              const maxValue = Math.max(...values);

              return (
                <tr
                  key={idx}
                  className="border-b border-gray-700/50 hover:bg-gray-700/30"
                >
                  <td className="p-3 font-semibold sticky left-0 bg-gray-800">
                    {row.brand}
                  </td>
                  {cities.map((city) => {
                    const value = row[city];
                    return (
                      <td key={city} className="text-center p-3">
                        <div
                          className={`inline-block px-4 py-2 rounded font-bold ${getHeatmapColor(
                            value,
                            maxValue
                          )}`}
                        >
                          {value}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-yellow-400">Key Insight:</span>{' '}
          <strong>Jakarta</strong> memiliki promosi tertinggi untuk semua brand
          (rata-rata 177 posts), diikuti <strong>Bandung</strong> (159 posts)
          dan <strong>Surabaya</strong> (133 posts).{' '}
          <strong>Tramadol</strong> mendominasi di semua kota dengan total 887
          mentions.
        </p>
      </div>
    </div>
  );
};

export default BrandCityHeatmapTable;
