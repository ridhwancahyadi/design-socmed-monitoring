import React, { useState, useMemo, useRef } from 'react'

const riskOptions = ['critical', 'high', 'medium', 'low']

const getRiskColor = (level) => {
  const colors = {
    low: '#00ff88',
    medium: '#ffaa00',
    high: '#ff6b00',
    critical: '#ff0066',
  }

  if (typeof level === 'number') {
    if (level > 0.8) return colors.critical
    if (level > 0.6) return colors.high
    if (level > 0.4) return colors.medium
    return colors.low
  }

  return colors[level] || '#888'
}

/**
 * Force-directed style network (hanya mode FORCE dari page Digital Mapping).
 * Props:
 * - nodes: [{ id, username, riskLevel, riskScore, degree, x, y, ... }]
 * - edges: [{ id, source, target, strength, type }]
 * - onSelectNode?: (node) => void
 */
const ForceDirectedNetwork = ({ nodes = [], edges = [], onSelectNode }) => {
  const [selectedNode, setSelectedNode] = useState(null)
  const [hoveredNode, setHoveredNode] = useState(null)
  const [showLabels, setShowLabels] = useState(false)

  const svgRef = useRef(null)

  const connectedNodes = useMemo(() => {
    if (!selectedNode) return new Set()
    const set = new Set([selectedNode.id])
    edges.forEach((edge) => {
      if (edge.source === selectedNode.id) set.add(edge.target)
      if (edge.target === selectedNode.id) set.add(edge.source)
    })
    return set
  }, [selectedNode, edges])

  const handleClickNode = (node) => {
    setSelectedNode(node)
    if (onSelectNode) {
      onSelectNode(node)
    }
  }

  return (
    <div
      style={{
        marginTop: '30px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #2a2a3e',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#00ff88',
              margin: 0,
            }}
          >
            Force-Directed Account Network
          </h2>
          <p
            style={{
              fontSize: '12px',
              color: '#888',
              marginTop: '4px',
            }}
          >
            Visualisasi struktur koneksi akun berisiko (node besar = banyak
            koneksi, warna = level risiko).
          </p>
        </div>

        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '12px',
            color: '#aaa',
          }}
        >
          <input
            type="checkbox"
            checked={showLabels}
            onChange={(e) => setShowLabels(e.target.checked)}
            style={{ cursor: 'pointer' }}
          />
          Show Labels
        </label>
      </div>

      <div
        style={{
          background: '#0f0f1e',
          borderRadius: '12px',
          position: 'relative',
          height: '500px',
          border: '1px solid #2a2a3e',
          overflow: 'hidden',
        }}
      >
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        >
          <defs>
            <radialGradient id="forceBgGradient">
              <stop
                offset="0%"
                style={{ stopColor: '#088395', stopOpacity: 0.05 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: 'transparent', stopOpacity: 0 }}
              />
            </radialGradient>

            <marker
              id="forceArrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#088395"
                fillOpacity="0.6"
              />
            </marker>
          </defs>

          {/* background halo */}
          <circle cx="50%" cy="50%" r="250" fill="url(#forceBgGradient)" />

          {/* edges */}
          <g>
            {edges.map((edge) => {
              const source = nodes.find((n) => n.id === edge.source)
              const target = nodes.find((n) => n.id === edge.target)
              if (!source || !target) return null

              const isHighlighted =
                selectedNode &&
                (connectedNodes.has(edge.source) ||
                  connectedNodes.has(edge.target))
              const isDimmed = selectedNode && !isHighlighted

              return (
                <line
                  key={edge.id}
                  x1={`${source.x}%`}
                  y1={`${source.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={isHighlighted ? '#00ff88' : '#088395'}
                  strokeWidth={isHighlighted ? 2 : edge.strength * 2}
                  strokeOpacity={
                    isDimmed ? 0.1 : isHighlighted ? 0.8 : 0.3
                  }
                  markerEnd={
                    edge.type === 'transaction'
                      ? 'url(#forceArrowhead)'
                      : ''
                  }
                />
              )
            })}
          </g>

          {/* nodes */}
          <g>
            {nodes.map((node) => {
              const size = 5 + node.degree * 1.5
              const isSelected = selectedNode?.id === node.id
              const isConnected = connectedNodes.has(node.id)
              const isDimmed = selectedNode && !isConnected
              const isHovered = hoveredNode?.id === node.id

              return (
                <g
                  key={node.id}
                  onClick={() => handleClickNode(node)}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {(isSelected || isHovered) && (
                    <circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r={size + 8}
                      fill={getRiskColor(node.riskLevel)}
                      fillOpacity="0.2"
                    />
                  )}

                  <circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={isSelected ? size + 3 : size}
                    fill={getRiskColor(node.riskLevel)}
                    fillOpacity={
                      isDimmed ? 0.2 : isSelected ? 1 : 0.8
                    }
                    stroke={
                      isSelected
                        ? '#ffffff'
                        : getRiskColor(node.riskLevel)
                    }
                    strokeWidth={isSelected ? 3 : isConnected ? 2 : 1}
                  />

                  {(showLabels ||
                    isSelected ||
                    (isHovered && !selectedNode)) && (
                    <text
                      x={`${node.x}%`}
                      y={`${node.y - 2}%`}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#ffffff"
                      fontWeight="600"
                      style={{
                        pointerEvents: 'none',
                        userSelect: 'none',
                      }}
                    >
                      {node.username}
                    </text>
                  )}
                </g>
              )
            })}
          </g>
        </svg>

        {/* Hover tooltip */}
        {hoveredNode && !selectedNode && (
          <div
            style={{
              position: 'absolute',
              left: `${hoveredNode.x}%`,
              top: `${hoveredNode.y}%`,
              transform: 'translate(-50%, -120%)',
              background: 'rgba(0, 0, 0, 0.9)',
              border: `2px solid ${getRiskColor(hoveredNode.riskLevel)}`,
              borderRadius: '8px',
              padding: '10px 15px',
              fontSize: '12px',
              pointerEvents: 'none',
              zIndex: 100,
              minWidth: '150px',
            }}
          >
            <div
              style={{
                fontWeight: '700',
                color: '#fff',
                marginBottom: '5px',
              }}
            >
              @{hoveredNode.username}
            </div>
            <div style={{ color: '#888', fontSize: '10px' }}>
              {hoveredNode.role} • {hoveredNode.platform}
            </div>
            <div
              style={{
                color: '#888',
                fontSize: '10px',
                marginTop: '3px',
              }}
            >
              {hoveredNode.city}, {hoveredNode.province}
            </div>
            <div
              style={{
                marginTop: '8px',
                paddingTop: '8px',
                borderTop: '1px solid #333',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10px',
                }}
              >
                <span style={{ color: '#888' }}>Risk:</span>
                <span
                  style={{
                    color: getRiskColor(hoveredNode.riskLevel),
                    fontWeight: '700',
                  }}
                >
                  {(hoveredNode.riskScore * 100).toFixed(0)}%
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10px',
                  marginTop: '3px',
                }}
              >
                <span style={{ color: '#888' }}>Connections:</span>
                <span
                  style={{
                    color: '#00d4ff',
                    fontWeight: '700',
                  }}
                >
                  {hoveredNode.degree}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div
          style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid #2a2a3e',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '11px',
          }}
        >
          <div
            style={{
              fontWeight: '700',
              color: '#00ff88',
              marginBottom: '8px',
            }}
          >
            Legend
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {riskOptions.map((level) => (
              <div
                key={level}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: getRiskColor(level),
                  }}
                />
                <span style={{ color: '#aaa' }}>
                  {level.charAt(0).toUpperCase() + level.slice(1)} Risk
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForceDirectedNetwork
