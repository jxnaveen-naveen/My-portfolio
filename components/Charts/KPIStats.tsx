"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TrendingUp, Users, ShoppingBag, DollarSign, Activity } from "lucide-react";

export function KPIStats() {
  const kpis = [
    {
      title: "Total Revenue",
      value: "$148,500",
      change: "+24.8%",
      isPositive: true,
      icon: DollarSign,
      color: "primary",
    },
    {
      title: "Active Customers",
      value: "2,840",
      change: "+18.4%",
      isPositive: true,
      icon: Users,
      color: "secondary",
    },
    {
      title: "Total Orders",
      value: "5,120",
      change: "+14.2%",
      isPositive: true,
      icon: ShoppingBag,
      color: "accent",
    },
    {
      title: "Avg Order Value",
      value: "$82.50",
      change: "+8.6%",
      isPositive: true,
      icon: Activity,
      color: "dataGreen",
    },
    {
      title: "Growth Rate",
      value: "+31.2%",
      change: "+5.4%",
      isPositive: true,
      icon: TrendingUp,
      color: "primary",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <GlassCard
            key={index}
            glowColor={kpi.color as any}
            className="p-4 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-400">{kpi.title}</span>
              <div className="p-2 rounded-lg bg-white/5 text-cyan-400">
                <Icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                {kpi.value}
              </div>
              <div className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{kpi.change} YoY</span>
              </div>
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}
