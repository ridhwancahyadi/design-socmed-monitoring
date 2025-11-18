// src/components/account-risk/AccountSearchFilters.jsx
import React from 'react';
import { Search, X } from 'lucide-react';
import { PLATFORMS } from '../../data/accountRiskDummyData';

const AccountSearchFilters = ({
  searchTerm,
  onChangeSearch,
  filterPlatform,
  onChangePlatform,
  hasActiveFilter,
  onClearFilters,
}) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #2a2a3e',
        marginBottom: '20px',
        display: 'flex',
        gap: '15px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {/* Search */}
      <div style={{ flex: '1 1 300px', position: 'relative' }}>
        <Search
          size={18}
          style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888',
          }}
        />
        <input
          type="text"
          placeholder="Cari username atau region..."
          value={searchTerm}
          onChange={(e) => onChangeSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 15px 12px 45px',
            background: '#0f0f1e',
            border: '1px solid #2a2a3e',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '14px',
            outline: 'none',
          }}
        />
        {searchTerm && (
          <X
            size={18}
            style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#888',
              cursor: 'pointer',
            }}
            onClick={() => onChangeSearch('')}
          />
        )}
      </div>

      {/* Platform Filter */}
      <select
        value={filterPlatform}
        onChange={(e) => onChangePlatform(e.target.value)}
        style={{
          padding: '12px 15px',
          background: '#0f0f1e',
          border: '1px solid #2a2a3e',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '14px',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <option value="all">Semua Platform</option>
        {PLATFORMS.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      {/* Clear Filters */}
      {hasActiveFilter && (
        <button
          onClick={onClearFilters}
          style={{
            padding: '12px 20px',
            background: '#ff006620',
            border: '1px solid #ff0066',
            borderRadius: '8px',
            color: '#ff0066',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default AccountSearchFilters;
