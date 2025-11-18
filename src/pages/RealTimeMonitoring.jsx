// src/pages/RealTimeMonitoring.jsx
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import {
  AlertTriangle,
  Users,
  MessageSquare,
  MapPin,
  Activity,
  Hash,
  Globe,
  Clock,
  Shield,
  TrendingUp,
} from 'lucide-react';

import KPICard from '../components/common/KPICard';
import { getRiskBg, getRiskColor, RiskStatusTag } from '../components/common/RiskTag';

import {
  realtimeKpiData,
  realtimeTimeSeriesData,
  realtimeKeywordData,
  realtimeHashtagData,
  realtimeEmotionData,
  realtimePlatformData,
  realtimeGeoData,
  realtimeYouthData,
  realtimeContentFeed,
  realtimeCodedLanguageData,
  realtimeRiskLevelData,
} from '../data/realtimeDummyData';

const RealTimeMonitoring = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ---- ECharts Options ----

  const exposureVelocityOption = {
    textStyle: { color: '#E5E7EB' },
    tooltip: { trigger: 'axis' },
    legend: {
      data: ['Exposure (Posts)', 'Velocity (Interactions)'],
      textStyle: { color: '#9CA3AF' },
    },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: realtimeTimeSeriesData.map((d) => d.time),
      axisLine: { lineStyle: { color: '#6B7280' } },
      axisLabel: { color: '#9CA3AF' },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#6B7280' } },
      axisLabel: { color: '#9CA3AF' },
      splitLine: { lineStyle: { color: '#374151' } },
    },
    series: [
      {
        name: 'Exposure (Posts)',
        type: 'line',
        smooth: true,
        areaStyle: { opacity: 0.3 },
        itemStyle: { color: '#3B82F6' },
        data: realtimeTimeSeriesData.map((d) => d.exposure),
      },
      {
        name: 'Velocity (Interactions)',
        type: 'line',
        smooth: true,
        areaStyle: { opacity: 0.3 },
        itemStyle: { color: '#10B981' },
        data: realtimeTimeSeriesData.map((d) => d.velocity),
      },
    ],
  };

  const riskLevelOption = {
    tooltip: {
      trigger: 'item',
      formatter: ({ name, value, percent }) =>
        `${name}: ${value.toLocaleString()} posts (${percent}%)`,
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#9CA3AF' },
    },
    series: [
      {
        name: 'Risk Level',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: { show: true, formatter: '{b}: {d}%' },
        labelLine: { show: false },
        itemStyle: { borderColor: '#111827', borderWidth: 2 },
        data: realtimeRiskLevelData.map((d) => ({
          name: d.level,
          value: d.value,
          itemStyle: { color: d.color },
        })),
      },
    ],
  };

  const sentimentOption = {
    tooltip: { trigger: 'item', formatter: '{b}: {c}%' },
    legend: { bottom: 0, textStyle: { color: '#9CA3AF' } },
    series: [
      {
        name: 'Sentiment',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: { show: true, formatter: '{d}%' },
        labelLine: { show: false },
        itemStyle: { borderColor: '#111827', borderWidth: 2 },
        data: realtimeEmotionData.map((d) => ({
          name: d.emotion,
          value: d.value,
          itemStyle: { color: d.color },
        })),
      },
    ],
  };

  const platformOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params) => {
        const lines = params.map(
          (p) => `${p.marker} ${p.seriesName}: ${p.value.toLocaleString()} posts`,
        );
        return `<strong>${params[0].axisValue}</strong><br/>${lines.join('<br/>')}`;
      },
    },
    legend: { textStyle: { color: '#9CA3AF' } },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: realtimePlatformData.map((d) => d.platform),
      axisLabel: { color: '#9CA3AF' },
      axisLine: { lineStyle: { color: '#6B7280' } },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#9CA3AF' },
      axisLine: { lineStyle: { color: '#6B7280' } },
      splitLine: { lineStyle: { color: '#374151' } },
    },
    series: [
      {
        name: 'Posts',
        type: 'bar',
        itemStyle: { color: '#3B82F6' },
        barGap: 0,
        data: realtimePlatformData.map((d) => d.posts),
      },
      {
        name: 'Stories',
        type: 'bar',
        itemStyle: { color: '#10B981' },
        data: realtimePlatformData.map((d) => d.stories),
      },
      {
        name: 'Reels/Videos',
        type: 'bar',
        itemStyle: { color: '#F59E0B' },
        data: realtimePlatformData.map((d) => d.reels),
      },
    ],
  };

  const youthOption = {
    tooltip: { trigger: 'item', formatter: '{b}: {c}%' },
    legend: { bottom: 0, textStyle: { color: '#9CA3AF' } },
    series: [
      {
        name: 'Youth Segment',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: { show: true, formatter: '{d}%' },
        labelLine: { show: false },
        itemStyle: { borderColor: '#111827', borderWidth: 2 },
        data: realtimeYouthData.map((d) => ({
          name: d.category,
          value: d.value,
          itemStyle: { color: d.color },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-500" />
              TACTICAL X BNN - Social Media Monitoring
            </h1>
            <p className="text-gray-400 mt-2">
              Digital Intelligence &amp; Real-Time Surveillance System
            </p>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-green-400 mb-1 justify-end">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-semibold">LIVE MONITORING</span>
            </div>
            <div className="text-gray-400 text-sm">
              <Clock className="w-4 h-4 inline-block mr-1 text-gray-500" />
              {currentTime.toLocaleString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })}
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <KPICard
          title="Total Posts Today"
          value={realtimeKpiData.totalPosts.toLocaleString()}
          icon={MessageSquare}
          trend="+12.5% from yesterday"
          color="blue"
        />
        <KPICard
          title="High Risk Posts"
          value={realtimeKpiData.highRiskPosts}
          subtitle="Requires immediate action"
          icon={AlertTriangle}
          trend="+8.3% from yesterday"
          color="red"
        />
        <KPICard
          title="Active High-Risk Accounts"
          value={realtimeKpiData.activeHighRiskAccounts}
          subtitle="Currently monitored"
          icon={Users}
          color="orange"
        />
        <KPICard
          title="Youth Segment"
          value={`${realtimeKpiData.youthPercentage}%`}
          subtitle="Of total conversations"
          icon={Users}
          color="purple"
        />
        <KPICard
          title="High Risk Cities"
          value={realtimeKpiData.highRiskCities}
          subtitle="Priority areas"
          icon={MapPin}
          color="yellow"
        />
      </div>

      {/* Time Series & Risk Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-400">
            <TrendingUp className="w-5 h-5" />
            Exposure &amp; Velocity Trend (24 Hours)
          </h3>
          <ReactECharts option={exposureVelocityOption} style={{ height: 280 }} />
        </div>

        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
            <AlertTriangle className="w-5 h-5" />
            Risk Level Distribution
          </h3>
          <ReactECharts option={riskLevelOption} style={{ height: 280 }} />
        </div>
      </div>

      {/* Keywords, Hashtags & Emotions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Keywords */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-400">
            <Hash className="w-5 h-5" />
            Top Keywords &amp; Risk Score
          </h3>
          <div className="space-y-3">
            {realtimeKeywordData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-mono text-sm">#{idx + 1}</span>
                  <span className="font-medium">{item.keyword}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{item.count}</span>
                  <RiskStatusTag risk={item.risk} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hashtags */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-blue-400">
            <Hash className="w-5 h-5" />
            Top Hashtags
          </h3>
          <div className="space-y-3">
            {realtimeHashtagData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <span className="font-medium text-blue-400">{item.tag}</span>
                <span className="text-gray-400 text-sm">{item.count} posts</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-yellow-400">
            <MessageSquare className="w-5 h-5" />
            Sentiment Distribution
          </h3>
          <ReactECharts option={sentimentOption} style={{ height: 200 }} />
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {realtimeEmotionData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  style={{ backgroundColor: item.color }}
                  className="w-3 h-3 rounded-full"
                />
                <span className="text-gray-400">{item.emotion}: </span>
                <span className="font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Distribution & Coded Language */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Platforms */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-400">
            <Globe className="w-5 h-5" />
            Platform Distribution
          </h3>
          <ReactECharts option={platformOption} style={{ height: 300 }} />
        </div>

        {/* Coded Language */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-orange-400">
            <MessageSquare className="w-5 h-5" />
            Trending Coded Language
          </h3>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {realtimeCodedLanguageData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-orange-500/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.code}</span>
                  <div>
                    <p className="font-medium text-white">{item.meaning}</p>
                    <p className="text-gray-400 text-xs">Detected in context</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-orange-400 font-bold text-xl">
                    {item.frequency}
                  </span>
                  <p className="text-gray-400 text-xs">occurrences</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographical & Youth */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Geo */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
            <MapPin className="w-5 h-5" />
            Geographical Distribution - High Risk Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {realtimeGeoData.map((item, idx) => (
              <div key={idx} className={`p-4 ${getRiskBg(item.risk)} rounded-lg border`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{item.city}</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${getRiskColor(
                      item.risk,
                    )}`}
                  >
                    {item.risk}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Posts:</span>
                  <span className="text-blue-400 font-bold">
                    {item.count.toLocaleString()}
                  </span>
                </div>
                <div className="mt-2 bg-gray-800 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.risk >= 80
                        ? 'bg-red-500'
                        : item.risk >= 70
                        ? 'bg-orange-500'
                        : 'bg-yellow-500'
                    }`}
                    style={{ width: `${item.risk}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Youth */}
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-400">
            <Users className="w-5 h-5" />
            Youth Segment Analysis
          </h3>
          <ReactECharts option={youthOption} style={{ height: 200 }} />
          <div className="mt-4 space-y-2">
            {realtimeYouthData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    style={{ backgroundColor: item.color }}
                    className="w-3 h-3 rounded-full"
                  />
                  <span className="text-gray-400">{item.category}</span>
                </div>
                <span className="font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-Time Feed */}
      <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2 text-green-400">
            <Clock className="w-5 h-5" />
            Real-Time Content Feed
          </h3>
          <div className="flex items-center gap-2 text-green-400">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="text-sm">Live Updates</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {realtimeContentFeed.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg border-2 ${getRiskBg(item.riskScore)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{item.thumbnail}</span>
                  <div>
                    <p className="text-xs text-gray-400">{item.platform}</p>
                    <p className="text-sm font-semibold text-white">{item.account}</p>
                  </div>
                </div>
                <div
                  className={`px-2 py-1 rounded text-xs font-bold ${getRiskColor(
                    item.riskScore,
                  )}`}
                >
                  {item.riskScore}
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-3 line-clamp-3 overflow-hidden">
                {item.text}
              </p>

              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">{item.time}</span>
                <span
                  className={`px-2 py-1 rounded ${
                    item.role === 'Distributor' || item.role === 'Supplier'
                      ? 'bg-red-500/20 text-red-400'
                      : item.role === 'Seller'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>
          BNN Tactical X - Digital Intelligence System | Confidential | For Authorized
          Personnel Only
        </p>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;
