"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 42000, target: 40000 },
  { month: "Feb", revenue: 48000, target: 45000 },
  { month: "Mar", revenue: 55000, target: 50000 },
  { month: "Apr", revenue: 62000, target: 55000 },
  { month: "May", revenue: 78000, target: 60000 },
  { month: "Jun", revenue: 95000, target: 70000 },
  { month: "Jul", revenue: 110000, target: 80000 },
  { month: "Aug", revenue: 128000, target: 95000 },
  { month: "Sep", revenue: 148500, target: 110000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0B1120]/90 border border-white/20 p-3 rounded-xl backdrop-blur-md shadow-2xl">
        <p className="text-xs font-mono text-slate-300 mb-1">{label}</p>
        <p className="text-sm font-bold text-cyan-400">
          Revenue: ${payload[0].value.toLocaleString()}
        </p>
        <p className="text-xs text-indigo-400">
          Target: ${payload[1]?.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
          <YAxis
            stroke="#94A3B8"
            fontSize={12}
            tickLine={false}
            tickFormatter={(val) => `$${val / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="url(#revenueGrad)"
            strokeWidth={3}
            dot={{ fill: "#06B6D4", r: 4 }}
            activeDot={{ r: 7, fill: "#22C55E", stroke: "#ffffff", strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
