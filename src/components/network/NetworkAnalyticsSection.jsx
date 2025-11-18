import React, { useMemo } from 'react';
import TopDegreeCard from './TopDegreeCard';
import ClusterAnalysisCard from './ClusterAnalysisCard';
import RoleDistributionCard from './RoleDistributionCard';
import TopBetweennessCard from './TopBetweennessCard';

const NetworkAnalyticsSection = ({ nodes, clusters, onSelectNode }) => {
  const topByDegree = useMemo(
    () => [...nodes].sort((a, b) => b.degree - a.degree).slice(0, 10),
    [nodes]
  );

  const topByBetweenness = useMemo(
    () =>
      [...nodes].sort((a, b) => b.betweenness - a.betweenness).slice(0, 10),
    [nodes]
  );

  const roleDistribution = useMemo(() => {
    const dist = {};
    nodes.forEach((node) => {
      dist[node.role] = (dist[node.role] || 0) + 1;
    });
    return Object.entries(dist).sort((a, b) => b[1] - a[1]);
  }, [nodes]);

  if (!nodes.length) return null;

  return (
    <div
      style={{
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px',
      }}
    >
      <TopDegreeCard topByDegree={topByDegree} onSelectNode={onSelectNode} />
      <ClusterAnalysisCard
        clusters={clusters}
        nodes={nodes}
        onSelectNode={onSelectNode}
      />
      <RoleDistributionCard
        roleDistribution={roleDistribution}
        totalNodes={nodes.length}
      />
      <TopBetweennessCard
        topByBetweenness={topByBetweenness}
        onSelectNode={onSelectNode}
      />
    </div>
  );
};

export default NetworkAnalyticsSection;
