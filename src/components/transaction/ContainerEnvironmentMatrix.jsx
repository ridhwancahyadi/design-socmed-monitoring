// src/components/transaction/ContainerEnvironmentMatrix.jsx
import React from 'react';
import { Package } from 'lucide-react';

const getHeatmapColor = (value, max) => {
  const intensity = value / max;
  if (intensity > 0.8) return 'bg-red-600 text-white';
  if (intensity > 0.6) return 'bg-orange-500 text-white';
  if (intensity > 0.4) return 'bg-yellow-500 text-gray-900';
  if (intensity > 0.2) return 'bg-green-500 text-white';
  return 'bg-blue-500 text-white';
};

const ContainerEnvironmentMatrix = ({ environments, matrix }) => {
  // summary untuk highlight cards
  const totalPerEnv = environments.map((env) =>
    matrix.reduce((sum, row) => sum + row[env], 0)
  );
  const grandTotal = totalPerEnv.reduce((a, b) => a + b, 0);

  const mostCommonContainer = matrix
    .map((row) => ({
      name: row.container,
      total: environments.reduce((sum, env) => sum + row[env], 0),
    }))
    .sort((a, b) => b.total - a.total)[0];

  const mostUsedEnv = environments
    .map((env, idx) => ({
      name: env,
      total: totalPerEnv[idx],
    }))
    .sort((a, b) => b.total - a.total)[0];

  // kombinasi tertinggi (container-env)
  let highestCombo = { container: '', env: '', value: 0 };
  matrix.forEach((row) => {
    environments.forEach((env) => {
      const v = row[env];
      if (v > highestCombo.value) {
        highestCombo = { container: row.container, env, value: v };
      }
    });
  });

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 mb-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-cyan-400">
        <Package className="w-5 h-5" />
        Container Type × Drop Environment Matrix (Total Cases)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[1000px]">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-3 text-gray-400 font-semibold sticky left-0 bg-gray-800">
                Container
              </th>
              {environments.map((env) => (
                <th
                  key={env}
                  className="text-center p-3 text-gray-400 font-semibold whitespace-nowrap"
                >
                  {env}
                </th>
              ))}
              <th className="text-center p-3 text-gray-400 font-semibold">
                Row Total
              </th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, idx) => {
              const allValues = environments.map((env) => row[env]);
              const maxValue = Math.max(...allValues);
              const totalRow = allValues.reduce((a, b) => a + b, 0);

              return (
                <tr
                  key={idx}
                  className="border-b border-gray-700/50 hover:bg-gray-700/30"
                >
                  <td className="p-3 font-semibold sticky left-0 bg-gray-800">
                    {row.container}
                  </td>
                  {environments.map((env) => {
                    const value = row[env];
                    return (
                      <td key={env} className="text-center p-3">
                        <div
                          className={`inline-block px-3 py-2 rounded font-bold ${getHeatmapColor(
                            value,
                            maxValue
                          )}`}
                        >
                          {value}
                        </div>
                      </td>
                    );
                  })}
                  <td className="text-center p-3">
                    <span className="px-3 py-2 bg-purple-500/20 text-purple-400 rounded font-bold">
                      {totalRow}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-gray-600 bg-gray-700/30">
              <td className="p-3 font-semibold sticky left-0 bg-gray-700/50">
                Total per Environment
              </td>
              {environments.map((env, idx) => (
                <td
                  key={env}
                  className="text-center p-3 font-bold text-cyan-400"
                >
                  {totalPerEnv[idx]}
                </td>
              ))}
              <td className="text-center p-3 font-bold text-purple-400 text-lg">
                {grandTotal}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* highlight cards */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
          <p className="text-xs text-gray-400 mb-1">Most Common Container</p>
          <p className="text-lg font-bold text-blue-400">
            {mostCommonContainer?.name || '-'}
          </p>
          <p className="text-xs text-gray-500">
            {mostCommonContainer ? `${mostCommonContainer.total} total cases` : ''}
          </p>
        </div>
        <div className="p-3 bg-purple-900/20 border border-purple-500/30 rounded-lg">
          <p className="text-xs text-gray-400 mb-1">Most Used Environment</p>
          <p className="text-lg font-bold text-purple-400">
            {mostUsedEnv?.name || '-'}
          </p>
          <p className="text-xs text-gray-500">
            {mostUsedEnv ? `${mostUsedEnv.total} total cases` : ''}
          </p>
        </div>
        <div className="p-3 bg-orange-900/20 border border-orange-500/30 rounded-lg">
          <p className="text-xs text-gray-400 mb-1">Highest Combination</p>
          <p className="text-lg font-bold text-orange-400">
            {highestCombo.container && highestCombo.env
              ? `${highestCombo.container} + ${highestCombo.env}`
              : '-'}
          </p>
          <p className="text-xs text-gray-500">
            {highestCombo.value ? `${highestCombo.value} cases` : ''}
          </p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-700/30 rounded-lg">
        <p className="text-sm text-gray-300">
          <span className="font-semibold text-cyan-400">
            Pattern Analysis:
          </span>{' '}
          <strong>Plastik Klip</strong> dominan di <strong>Warung</strong>{' '}
          (134 cases) dan <strong>Taman/Halaman</strong> (156 cases),
          menunjukkan preferensi untuk container yang mudah disembunyikan di
          lokasi publik. <strong>Aluminium Foil</strong> lebih sering di Warung
          dan Jembatan, mengindikasikan <em>quick-drop scenarios</em>.
        </p>
      </div>
    </div>
  );
};

export default ContainerEnvironmentMatrix;
