import React from 'react';
import { GitBranch } from 'lucide-react';

const TopBetweennessCard = ({ topByBetweenness, onSelectNode }) => {
  if (!topByBetweenness?.length) return null;

  const maxScore = (topByBetweenness[0].betweenness || 1) * 100;

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
        <GitBranch size={18} />
        Top Bridge Accounts (Betweenness)
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {topByBetweenness.map((node) => {
          const score = node.betweenness * 100;

          return (
            <div
              key={node.id}
              onClick={() => onSelectNode?.(node)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '8px',
                background: 'rgba(255, 170, 0, 0.05)',
                borderRadius: '8px',
                border: '1px solid transparent',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ffaa00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#fff',
                  }}
                >
                  @{node.username}
                </span>
                <span
                  style={{
                    fontSize: '11px',
                    color: '#ffaa00',
                    fontWeight: '700',
                  }}
                >
                  {score.toFixed(1)}
                </span>
              </div>
              <div
                style={{
                  height: '4px',
                  background: '#2a2a3e',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${(score / maxScore) * 100}%`,
                    height: '100%',
                    background: '#ffaa00',
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

export default TopBetweennessCard;
