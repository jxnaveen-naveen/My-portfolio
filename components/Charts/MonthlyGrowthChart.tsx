"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Q1", growth: 12.4 },
  { month: "Q2", growth: 18.2 },
  { month: "Q3", growth: 24.6 },
  { month: "Q4", growth: 31.2 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0B1120]/90 border border-white/20 p-3 rounded-xl backdrop-blur-md shadow-2xl">
        <p className="text-xs font-mono text-slate-300 mb-1">{label}</p>
        <p className="text-sm font-bold text-emerald-400">
          Growth Rate: +{payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export function MonthlyGrowthChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
          <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} tickFormatter={(val) => `+${val}%`} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="growth"
            stroke="#22C55E"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#growthGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
