// src/components/account-risk/HighRiskAccountsTable.jsx
import React from 'react';
import { Target, ChevronRight, MapPin } from 'lucide-react';
import { getRiskColor, getRiskLabel } from './riskUtils';

const HighRiskAccountsTable = ({
  accounts,
  filteredTotal,
  currentRiskFilter,
  selectedAccountId,
  onSelectAccount,
}) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #2a2a3e',
        minHeight: '600px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Target size={20} style={{ color: '#ff0066' }} />
          <h2
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#ff0066',
              margin: 0,
            }}
          >
            High Priority Accounts ({getRiskLabel(currentRiskFilter)} Risk Filter)
          </h2>
        </div>
        <span style={{ fontSize: '12px', color: '#888' }}>
          Showing {accounts.length} of {filteredTotal} accounts
        </span>
      </div>

      <div style={{ overflowY: 'auto', maxHeight: '600px' }}>
        <table
          style={{
            width: '100%',
            fontSize: '12px',
            borderCollapse: 'separate',
            borderSpacing: '0 8px',
          }}
        >
          <thead
            style={{
              position: 'sticky',
              top: 0,
              background: '#16213e',
              zIndex: 1,
            }}
          >
            <tr>
              <th
                style={{
                  padding: '12px 10px',
                  textAlign: 'left',
                  color: '#00ff88',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}
              >
                Account
              </th>
              <th
                style={{
                  padding: '12px 10px',
                  textAlign: 'left',
                  color: '#00ff88',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}
              >
                Platform
              </th>
              <th
                style={{
                  padding: '12px 10px',
                  textAlign: 'center',
                  color: '#00ff88',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}
              >
                Risk
              </th>
              <th
                style={{
                  padding: '12px 10px',
                  textAlign: 'left',
                  color: '#00ff88',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}
              >
                Role
              </th>
              <th
                style={{
                  padding: '12px 10px',
                  textAlign: 'center',
                  color: '#00ff88',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}
              >
                Posts
              </th>
              <th
                style={{
                  padding: '12px 10px',
                  textAlign: 'center',
                  color: '#00ff88',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => {
              const isSelected = selectedAccountId === account.id;
              const baseBg = 'rgba(8, 131, 149, 0.1)';
              const hoverBg = 'rgba(8, 131, 149, 0.2)';
              const selectedBg = 'rgba(0, 255, 136, 0.15)';

              return (
                <tr
                  key={account.id}
                  style={{
                    background: isSelected ? selectedBg : baseBg,
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }}
                  onClick={() => onSelectAccount(account)}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = baseBg;
                  }}
                >
                  <td style={{ padding: '14px 10px', borderRadius: '8px 0 0 8px' }}>
                    <div style={{ fontWeight: '600', color: '#fff' }}>
                      @{account.username}
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: '#888',
                        marginTop: '2px',
                      }}
                    >
                      <MapPin
                        size={10}
                        style={{ display: 'inline', marginRight: '4px' }}
                      />
                      {account.region}
                    </div>
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <span
                      style={{
                        background: '#08839520',
                        color: '#00d4ff',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: '600',
                      }}
                    >
                      {account.platform}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px', textAlign: 'center' }}>
                    <div
                      style={{
                        background: `${getRiskColor(account.riskLevel)}20`,
                        color: getRiskColor(account.riskLevel),
                        padding: '6px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '700',
                        display: 'inline-block',
                      }}
                    >
                      {(account.riskScore * 100).toFixed(0)}%
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '14px 10px',
                      color: '#aaa',
                      fontSize: '12px',
                    }}
                  >
                    <span
                      style={{
                        color: getRiskColor(account.riskLevel),
                        fontWeight: '600',
                      }}
                    >
                      {account.networkRole}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: '14px 10px',
                      textAlign: 'center',
                      color: '#00d4ff',
                      fontWeight: '600',
                    }}
                  >
                    {account.totalPosts}
                  </td>
                  <td
                    style={{
                      padding: '14px 10px',
                      textAlign: 'center',
                      borderRadius: '0 8px 8px 0',
                    }}
                  >
                    <ChevronRight size={16} style={{ color: '#00ff88' }} />
                  </td>
                </tr>
              );
            })}

            {accounts.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  style={{
                    textAlign: 'center',
                    padding: '30px',
                    color: '#888',
                  }}
                >
                  No accounts found matching the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighRiskAccountsTable;
