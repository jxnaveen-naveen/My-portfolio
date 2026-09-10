"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { Badge } from "./ui/Badge";
import { PERSONAL_INFO, STATS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";
import { ArrowRight, CheckCircle2, Database, Brain, LineChart, FileSpreadsheet } from "lucide-react";

export function About() {
  const skillPills = [
    "Python", "SQL", "Excel", "Power BI", 
    "Pandas", "NumPy", "Matplotlib", "PostgreSQL", 
    "Statistics", "Machine Learning", "Data Visualization", "EDA"
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="ABOUT ME"
          title="Turning Data Into Decisions"
          subtitle="Combining analytical rigor with business strategy to transform complex datasets into clear, actionable intelligence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Narrative & Pipeline */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <GlassCard glowColor="primary" className="p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-cyan-400" />
                Analytical Thinking & Data Engineering
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {PERSONAL_INFO.aboutBio}
              </p>

              {/* Data Transformation Pipeline */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  The End-to-End Analytical Pipeline
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PERSONAL_INFO.pipeline.map((step, idx) => (
                    <div
                      key={step}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center text-[10px] text-white font-bold">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {skillPills.map((skill) => (
                <Badge key={skill} variant="purple">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Portrait Card & Stats Grid */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Profile Portrait Glass Card */}
            <GlassCard glowColor="accent" tiltEffect className="p-4 overflow-hidden relative group">
              <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Naveen Jerald Xavier"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h4>
                    <p className="text-xs font-mono text-cyan-400">Data Analyst & Developer</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-semibold">
                    Class of 2026
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <GlassCard
                  key={stat.label}
                  glowColor={idx % 2 === 0 ? "accent" : "secondary"}
                  className="p-5 text-center flex flex-col justify-center items-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold glow-gradient-text mb-1 font-mono">
                    <AnimatedCounter value={stat.value} numericTarget={stat.numeric} />
                  </div>
                  <div className="text-xs font-medium text-slate-400">
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
