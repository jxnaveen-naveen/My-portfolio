"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { SERVICES } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";
import {
  TrendingUp,
  LayoutDashboard,
  Database,
  Filter,
  PieChart,
  Brain,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-indigo-400" />,
    Database: <Database className="w-6 h-6 text-purple-400" />,
    Filter: <Filter className="w-6 h-6 text-emerald-400" />,
    PieChart: <PieChart className="w-6 h-6 text-amber-400" />,
    Brain: <Brain className="w-6 h-6 text-cyan-300" />,
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="WHAT I OFFER"
          title="Analytical Services & Solutions"
          subtitle="Tailored data engineering, dashboard creation, SQL optimization, and predictive modeling capabilities."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div key={service.id} variants={fadeIn("up", index * 0.1)}>
              <GlassCard
                tiltEffect
                glowColor={
                  index % 3 === 0
                    ? "primary"
                    : index % 3 === 1
                    ? "secondary"
                    : "accent"
                }
                className="h-full flex flex-col justify-between p-8 group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[service.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-mono text-cyan-400">
                  Tailored Business Intelligence
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
