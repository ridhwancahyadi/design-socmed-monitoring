import React from 'react';
import { Layers } from 'lucide-react';
import { getRiskColor } from '../../utils/networkColors';

const ClusterAnalysisCard = ({ clusters, nodes, onSelectNode }) => {
  if (!clusters?.length) return null;

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
        <Layers size={18} />
        Cluster Analysis
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {clusters.slice(0, 5).map((cluster) => {
          const leader = nodes.find((n) => n.id === cluster.leader);
          const riskColor = getRiskColor(cluster.avgRisk);
          const riskText =
            cluster.avgRisk > 0.7
              ? 'critical'
              : cluster.avgRisk > 0.5
              ? 'high'
              : 'medium';

          return (
            <div
              key={cluster.id}
              style={{
                background: 'rgba(8, 131, 149, 0.05)',
                border: '1px solid #08839530',
                borderRadius: '10px',
                padding: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}
                >
                  Cluster {cluster.id}
                </div>
                <div
                  style={{
                    background: `${riskColor}20`,
                    color: riskColor,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                  }}
                >
                  Risk: {(cluster.avgRisk * 100).toFixed(0)}% ({riskText})
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  fontSize: '11px',
                }}
              >
                <div>
                  <div style={{ color: '#888' }}>Members</div>
                  <div
                    style={{
                      color: '#00d4ff',
                      fontWeight: '700',
                      fontSize: '16px',
                    }}
                  >
                    {cluster.size}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#888' }}>Location</div>
                  <div
                    style={{
                      color: '#fff',
                      fontWeight: '600',
                      fontSize: '12px',
                    }}
                  >
                    {cluster.province}
                  </div>
                </div>
              </div>

              {leader && (
                <div
                  style={{
                    marginTop: '10px',
                    paddingTop: '10px',
                    borderTop: '1px solid #2a2a3e',
                    cursor: 'pointer',
                  }}
                  onClick={() => onSelectNode?.(leader)}
                >
                  <div
                    style={{ fontSize: '10px', color: '#888', marginBottom: '4px' }}
                  >
                    Leader
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#ffd700',
                    }}
                  >
                    @{leader.username}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClusterAnalysisCard;
