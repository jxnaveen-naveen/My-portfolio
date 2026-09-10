"use client";

import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Loyal Champions", value: 35, color: "#22C55E" },
  { name: "Regular Buyers", value: 40, color: "#4F46E5" },
  { name: "At-Risk Churn", value: 15, color: "#F59E0B" },
  { name: "New Customers", value: 10, color: "#06B6D4" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0B1120]/90 border border-white/20 p-3 rounded-xl backdrop-blur-md shadow-2xl">
        <p className="text-xs font-mono text-slate-300 mb-1">{payload[0].name}</p>
        <p className="text-sm font-bold text-white">
          Share: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export function CustomerChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={95}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.1)" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => <span className="text-xs text-slate-300">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
