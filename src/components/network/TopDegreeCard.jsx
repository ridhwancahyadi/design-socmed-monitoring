import React from 'react';
import { Target } from 'lucide-react';
import { getRiskColor } from '../../utils/networkColors';

const TopDegreeCard = ({ topByDegree, onSelectNode }) => {
  if (!topByDegree?.length) return null;

  const maxDegree = topByDegree[0].degree || 1;

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
        <Target size={18} />
        Top by Degree Centrality
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {topByDegree.map((node) => {
          const riskColor = getRiskColor(node.riskLevel);

          return (
            <div
              key={node.id}
              onClick={() => onSelectNode?.(node)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                background: 'rgba(8, 131, 149, 0.05)',
                borderRadius: '8px',
                border: '1px solid transparent',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)';
                e.currentTarget.style.borderColor = '#00ff88';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(8, 131, 149, 0.05)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div
                style={{
                  height: '40px',
                  width: '4px',
                  background: `linear-gradient(to bottom, ${riskColor}, #1a1a2e)`,
                  opacity: (node.degree / maxDegree) * 0.8 + 0.2,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}
                >
                  @{node.username}
                </div>
                <div style={{ fontSize: '10px', color: '#888' }}>
                  {node.role} • {node.city}
                </div>
              </div>
              <div
                style={{
                  background: `${riskColor}20`,
                  color: riskColor,
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                {node.degree}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDegreeCard;
