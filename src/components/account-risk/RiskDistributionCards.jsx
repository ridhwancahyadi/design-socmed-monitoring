// src/components/account-risk/RiskDistributionCards.jsx
import React from 'react';
import { Shield, AlertTriangle, Target } from 'lucide-react';
import { getRiskColor, getRiskLabel } from './riskUtils';

const iconByLevel = {
  low: Shield,
  medium: AlertTriangle,
  high: AlertTriangle,
  critical: Target,
};

const RiskDistributionCards = ({ riskDistribution, currentFilter, onChangeFilter }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px',
      }}
    >
      {Object.entries(riskDistribution).map(([level, count]) => {
        const color = getRiskColor(level);
        const Icon = iconByLevel[level] || Shield;
        const isActive = currentFilter === level;

        return (
          <div
            key={level}
            onClick={() => onChangeFilter(isActive ? 'all' : level)}
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              padding: '25px',
              borderRadius: '12px',
              border: `2px solid ${isActive ? color : '#2a2a3e'}`,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 8px 20px ${color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: `radialGradient(circle, ${color}20 0%, transparent 70%)`,
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                color,
                marginBottom: '15px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Icon size={24} />
            </div>
            <div
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '8px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {count}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#888',
                position: 'relative',
                zIndex: 1,
                textTransform: 'uppercase',
                fontWeight: '600',
              }}
            >
              Risk {getRiskLabel(level)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RiskDistributionCards;
