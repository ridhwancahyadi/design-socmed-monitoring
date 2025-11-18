// src/components/account-risk/NetworkOverview.jsx
import React from 'react';
import { Network } from 'lucide-react';
import { getRiskColor, getRiskLabel } from './riskUtils';

const NetworkOverview = ({ accounts, riskDistribution, onSelectAccount }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #2a2a3e',
        minHeight: '600px',
        gridColumn: '1 / -1',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <Network size={20} style={{ color: '#00ff88' }} />
        <h2
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#00ff88',
            margin: 0,
          }}
        >
          Network Overview
        </h2>
      </div>

      <div
        style={{
          background: '#0f0f1e',
          borderRadius: '12px',
          padding: '40px',
          position: 'relative',
          height: '500px',
          border: '1px solid #2a2a3e',
          overflow: 'hidden',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <defs>
            <radialGradient id="bgGradient">
              <stop
                offset="0%"
                style={{ stopColor: '#088395', stopOpacity: 0.1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'transparent', stopOpacity: 0 }}
              />
            </radialGradient>
          </defs>

          <circle cx="50" cy="50" r="40" fill="url(#bgGradient)" />

          {accounts.slice(0, 30).map((account, idx) => {
            const totalNodes = Math.min(accounts.length, 30) || 1;
            const angle = (idx / totalNodes) * 2 * Math.PI;
            const radius = 30 + account.riskScore * 15;
            const cx = 50 + Math.cos(angle) * radius;
            const cy = 50 + Math.sin(angle) * radius;
            const nodeSize = 2 + account.riskScore * 5;
            const color = getRiskColor(account.riskLevel);

            return (
              <g
                key={account.id}
                onClick={() => onSelectAccount(account)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  cx={cx}
                  cy={cy}
                  r={nodeSize}
                  fill={color}
                  fillOpacity="0.7"
                  stroke={color}
                  strokeWidth="1.5"
                >
                  <title>
                    @{account.username} - {getRiskLabel(account.riskLevel)} Risk
                  </title>
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Center Info */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#00ff88',
              marginBottom: '8px',
            }}
          >
            {accounts.length}
          </div>
          <div style={{ fontSize: '14px', color: '#888' }}>Accounts Monitored</div>
        </div>

        {/* Legend */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '11px',
            color: '#aaa',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {Object.entries(riskDistribution).map(([level, count]) => (
            <div
              key={level}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: getRiskColor(level),
                }}
              />
              <span>
                {getRiskLabel(level)} ({count})
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          background: 'rgba(0, 212, 255, 0.05)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#888',
        }}
      >
        💡 Click pada node di grafik atau baris pada tabel di atas untuk melihat
        detail akun.
      </div>
    </div>
  );
};

export default NetworkOverview;
