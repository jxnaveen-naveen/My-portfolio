"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";
import {
  BarChart3,
  Database,
  PieChart,
  BrainCircuit,
  Code2,
  Wrench,
  Sparkles,
} from "lucide-react";

export function Skills() {
  const iconMap: Record<string, React.ReactNode> = {
    BarChart3: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    Database: <Database className="w-6 h-6 text-indigo-400" />,
    PieChart: <PieChart className="w-6 h-6 text-purple-400" />,
    BrainCircuit: <BrainCircuit className="w-6 h-6 text-emerald-400" />,
    Code2: <Code2 className="w-6 h-6 text-cyan-300" />,
    Wrench: <Wrench className="w-6 h-6 text-yellow-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-purple-300" />,
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="TECHNICAL EXPERTISE"
          title="Skills & Technologies"
          subtitle="Categorized breakdown of analytical tools, programming languages, database systems, and BI software."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div key={cat.id} variants={fadeIn("up", index * 0.1)}>
              <GlassCard
                tiltEffect
                glowColor={
                  index % 4 === 0
                    ? "primary"
                    : index % 4 === 1
                    ? "secondary"
                    : index % 4 === 2
                    ? "accent"
                    : "dataGreen"
                }
                className="h-full flex flex-col justify-between p-6"
              >
                <div>
                  {/* Icon & Title Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {iconMap[cat.icon]}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <div className="text-xs text-slate-400 font-mono">
                        Proficiency: {cat.proficiency}%
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} variant="glass">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Proficiency Progress Indicator Bar */}
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${cat.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
