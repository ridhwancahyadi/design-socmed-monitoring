import React from 'react';
import { Users } from 'lucide-react';

const getRoleIcon = (role) => {
  return <Users size={14} />;
};

const RoleDistributionCard = ({ roleDistribution, totalNodes }) => {
  if (!roleDistribution?.length || !totalNodes) return null;

  const colors = {
    Kingpin: '#ffd700',
    Supplier: '#ff0066',
    Distributor: '#ff6b00',
    Reseller: '#ffaa00',
    Recruiter: '#00d4ff',
    Consumer: '#00ff88',
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #2a2a3e',
      }}
    >
      <h3
        style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#00ff88',
          marginBottom: '15px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Users size={18} />
        Role Distribution
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {roleDistribution.map(([role, count]) => {
          const percentage = (count / totalNodes) * 100;
          const color = colors[role] || '#00d4ff';

          return (
            <div key={role}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                  fontSize: '12px',
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <div style={{ color }}>{getRoleIcon(role)}</div>
                  <span style={{ color: '#fff', fontWeight: '600' }}>{role}</span>
                </div>
                <span style={{ color: '#888' }}>
                  {count} ({percentage.toFixed(1)}%)
                </span>
              </div>
              <div
                style={{
                  height: '8px',
                  background: '#2a2a3e',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: color,
                    transition: 'width 0.5s ease',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoleDistributionCard;
