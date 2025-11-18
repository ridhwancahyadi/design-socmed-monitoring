// src/components/account-risk/AccountDetailPanel.jsx
import React from 'react';
import {
  MapPin,
  Share2,
  Users,
  X,
  BarChart3,
  Activity,
  Hash,
  MessageSquare,
} from 'lucide-react';
import { getRiskColor, getRiskLabel } from './riskUtils';

const AccountDetailPanel = ({ account, onClose }) => {
  if (!account) return null;

  const color = getRiskColor(account.riskLevel);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #2a2a3e',
        position: 'sticky',
        top: '20px',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '25px',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '8px',
            }}
          >
            @{account.username}
          </h2>
          <div
            style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                color: '#888',
              }}
            >
              <MapPin
                size={12}
                style={{ display: 'inline', marginRight: '4px' }}
              />
              {account.region}
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#888',
              }}
            >
              <Share2
                size={12}
                style={{ display: 'inline', marginRight: '4px' }}
              />
              {account.platform}
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#888',
              }}
            >
              <Users
                size={12}
                style={{ display: 'inline', marginRight: '4px' }}
              />
              {account.followers.toLocaleString()} followers
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: '#ff006620',
            border: '1px solid #ff0066',
            borderRadius: '6px',
            padding: '8px',
            color: '#ff0066',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Risk Score Card */}
      <div
        style={{
          background: `${color}15`,
          border: `2px solid ${color}`,
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{ fontSize: '12px', color: '#888', marginBottom: '5px' }}
            >
              Risk Score
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: '700',
                color,
              }}
            >
              {(account.riskScore * 100).toFixed(0)}%
            </div>
          </div>
          <div
            style={{
              background: `${color}20`,
              borderRadius: '8px',
              padding: '12px 20px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                color: '#888',
                marginBottom: '4px',
              }}
            >
              Status
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '700',
                color,
                textTransform: 'uppercase',
              }}
            >
              {getRiskLabel(account.riskLevel)}
            </div>
          </div>
        </div>
      </div>

      {/* Risk Score Timeline (SVG) */}
      <div style={{ marginBottom: '25px' }}>
        <h3
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#00ff88',
            marginBottom: '15px',
          }}
        >
          Risk Score Timeline (30 Days)
        </h3>
        <div style={{ position: 'relative', height: '80px' }}>
          <svg
            width="100%"
            height="80"
            viewBox="0 0 100 80"
            preserveAspectRatio="none"
            style={{ display: 'block' }}
          >
            <defs>
              <linearGradient id="riskGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: color, stopOpacity: 0.3 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: color, stopOpacity: 0 }}
                />
              </linearGradient>
            </defs>

            <path
              d={`M 0 80 ${account.riskHistory
                .map((point, i) => {
                  const x = (i / (account.riskHistory.length - 1)) * 100;
                  const y = 80 - point.score * 70;
                  return `L ${x} ${y}`;
                })
                .join(' ')} L 100 80 Z`}
              fill="url(#riskGradient)"
            />

            <polyline
              points={account.riskHistory
                .map((point, i) => {
                  const x = (i / (account.riskHistory.length - 1)) * 100;
                  const y = 80 - point.score * 70;
                  return `${x},${y}`;
                })
                .join(' ')}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>

      {/* Activity Breakdown */}
      <div style={{ marginBottom: '25px' }}>
        <h3
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#00ff88',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <BarChart3 size={16} />
          Activity Breakdown
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            {
              label: 'Marketing Awareness',
              value: account.marketingAwareness,
              color: '#00d4ff',
            },
            {
              label: 'Product Evidence',
              value: account.productEvidence,
              color: '#ff0066',
            },
            {
              label: 'Logistics Operation',
              value: account.logisticsOperation,
              color: '#ffaa00',
            },
            {
              label: 'Narrative Influence',
              value: account.narrativeInfluence,
              color: '#00ff88',
            },
          ].map((item) => (
            <div key={item.label}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                }}
              >
                <span style={{ fontSize: '12px', color: '#aaa' }}>
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: item.color,
                  }}
                >
                  {item.value.toFixed(1)}%
                </span>
              </div>
              <div
                style={{
                  height: '8px',
                  background: '#0f0f1e',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${item.value}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${item.color}80 0%, ${item.color} 100%)`,
                    transition: 'width 0.5s ease',
                    borderRadius: '4px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity */}
      <div style={{ marginBottom: '25px' }}>
        <h3
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#00ff88',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Activity size={16} />
          Weekly Activity (Posts)
        </h3>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-between',
          }}
        >
          {account.activityTimeline.map((day) => {
            const maxPosts = Math.max(
              ...account.activityTimeline.map((d) => d.posts),
              1
            );
            const height = (day.posts / maxPosts) * 100;

            return (
              <div key={day.day} style={{ flex: 1, textAlign: 'center' }}>
                <div
                  style={{
                    height: '80px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    marginBottom: '8px',
                    background: '#1a1a2e',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: `${height}%`,
                      background:
                        'linear-gradient(180deg, #00ff88 0%, #088395 100%)',
                      position: 'relative',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                    }}
                    title={`${day.posts} posts`}
                  >
                    {day.posts > 0 && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '-20px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          fontSize: '10px',
                          fontWeight: '700',
                          color: '#00ff88',
                        }}
                      >
                        {day.posts}
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#888' }}>{day.day}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Keywords & Coded Language */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
        }}
      >
        {/* Keywords */}
        <div>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#00ff88',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Hash size={16} />
            Top Keywords
          </h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {account.keywords.map((kw) => (
              <div
                key={kw.word}
                style={{
                  background: 'rgba(0, 212, 255, 0.15)',
                  border: '1px solid #00d4ff',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: '#00d4ff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {kw.word}
                <span
                  style={{
                    background: '#00d4ff30',
                    borderRadius: '10px',
                    padding: '2px 6px',
                    fontSize: '10px',
                  }}
                >
                  {kw.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Coded Language */}
        <div>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#00ff88',
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <MessageSquare size={16} />
            Coded Language Usage
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {account.codedLanguage.map((code) => (
              <div
                key={code.code}
                style={{
                  background: 'rgba(255, 0, 102, 0.1)',
                  border: '1px solid rgba(255, 0, 102, 0.3)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{code.code}</span>
                  <div>
                    <div style={{ fontSize: '11px', color: '#888' }}>
                      {code.meaning}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    background: '#ff006620',
                    color: '#ff0066',
                    borderRadius: '12px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: '700',
                  }}
                >
                  {code.frequency}×
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailPanel;
