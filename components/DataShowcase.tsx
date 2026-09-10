"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { KPIStats } from "./Charts/KPIStats";
import { RevenueChart } from "./Charts/RevenueChart";
import { SalesChart } from "./Charts/SalesChart";
import { CustomerChart } from "./Charts/CustomerChart";
import { MonthlyGrowthChart } from "./Charts/MonthlyGrowthChart";
import { fadeIn } from "@/lib/animations";
import { LineChart, BarChart2, PieChart, TrendingUp, Info } from "lucide-react";

export function DataShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "revenue" | "sales" | "segmentation" | "growth">("all");

  return (
    <section id="showcase" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="INTERACTIVE ANALYTICS DEMO"
          title="Data In Action"
          subtitle="Live interactive visual dashboard demonstrating executive KPI tracking, revenue growth modeling, and customer segmentation analytics."
        />

        {/* Disclaimer Notice */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Info className="w-4 h-4 text-cyan-400" />
          <span>Interactive data visualizations below utilize sample demo datasets for visual demonstration.</span>
        </div>

        {/* Live KPI Cards Summary */}
        <KPIStats />

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Revenue Trend Line Chart */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-8"
          >
            <GlassCard glowColor="primary" className="p-6 h-full">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Badge variant="cyan" icon={<LineChart className="w-3.5 h-3.5" />}>
                    REVENUE TREND
                  </Badge>
                  <h3 className="text-xl font-bold text-white mt-2">
                    Annual Revenue vs Target Projection
                  </h3>
                </div>
                <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                  +31.2% YoY Growth
                </div>
              </div>
              <RevenueChart />
            </GlassCard>
          </motion.div>

          {/* Customer Segmentation Donut Chart */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4"
          >
            <GlassCard glowColor="secondary" className="p-6 h-full">
              <div className="mb-6">
                <Badge variant="purple" icon={<PieChart className="w-3.5 h-3.5" />}>
                  SEGMENTATION
                </Badge>
                <h3 className="text-xl font-bold text-white mt-2">
                  Customer Loyalty Cohorts
                </h3>
              </div>
              <CustomerChart />
            </GlassCard>
          </motion.div>

          {/* Sales By Category Bar Chart */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            <GlassCard glowColor="accent" className="p-6 h-full">
              <div className="mb-6">
                <Badge variant="cyan" icon={<BarChart2 className="w-3.5 h-3.5" />}>
                  CATEGORY DISTRIBUTION
                </Badge>
                <h3 className="text-xl font-bold text-white mt-2">
                  Sales Breakdown by Category ($)
                </h3>
              </div>
              <SalesChart />
            </GlassCard>
          </motion.div>

          {/* Quarterly Growth Area Chart */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6"
          >
            <GlassCard glowColor="dataGreen" className="p-6 h-full">
              <div className="mb-6">
                <Badge variant="green" icon={<TrendingUp className="w-3.5 h-3.5" />}>
                  QUARTERLY EXPANSION
                </Badge>
                <h3 className="text-xl font-bold text-white mt-2">
                  Quarterly Compound Growth (%)
                </h3>
              </div>
              <MonthlyGrowthChart />
            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
