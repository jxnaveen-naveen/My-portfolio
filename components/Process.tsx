"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { PROCESS_STEPS } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";
import {
  HelpCircle,
  DownloadCloud,
  Sparkles,
  Search,
  Cpu,
  BarChart,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export function Process() {
  const iconMap: Record<string, React.ReactNode> = {
    HelpCircle: <HelpCircle className="w-5 h-5 text-indigo-400" />,
    DownloadCloud: <DownloadCloud className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
    Search: <Search className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-300" />,
    BarChart: <BarChart className="w-5 h-5 text-cyan-300" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-yellow-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-300" />,
  };

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="SYSTEMATIC METHODOLOGY"
          title="My Data Analysis Process"
          subtitle="Structured 8-step framework ensuring data integrity, statistical rigor, and maximum business ROI."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div key={step.step} variants={fadeIn("up", index * 0.08)}>
              <GlassCard
                glowColor={
                  index % 4 === 0
                    ? "primary"
                    : index % 4 === 1
                    ? "accent"
                    : index % 4 === 2
                    ? "secondary"
                    : "dataGreen"
                }
                className="h-full p-6 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {iconMap[step.icon]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed">
                  {step.desc}
                </p>

                {/* Step Connector Line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 z-20 opacity-30 group-hover:opacity-100 transition-opacity" />
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
