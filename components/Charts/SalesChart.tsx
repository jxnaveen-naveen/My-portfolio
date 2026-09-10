"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";

const data = [
  { category: "Electronics", sales: 48500, color: "#4F46E5" },
  { category: "Clothing", sales: 36200, color: "#7C3AED" },
  { category: "Accessories", sales: 28400, color: "#06B6D4" },
  { category: "Footwear", sales: 22100, color: "#22C55E" },
  { category: "Home Goods", sales: 13300, color: "#F59E0B" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0B1120]/90 border border-white/20 p-3 rounded-xl backdrop-blur-md shadow-2xl">
        <p className="text-xs font-mono text-slate-300 mb-1">{payload[0].payload.category}</p>
        <p className="text-sm font-bold text-white">
          Sales: ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function SalesChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="category" stroke="#94A3B8" fontSize={11} tickLine={false} />
          <YAxis
            stroke="#94A3B8"
            fontSize={12}
            tickLine={false}
            tickFormatter={(val) => `$${val / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="sales" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
