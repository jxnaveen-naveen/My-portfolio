"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { EXPERIENCE_TIMELINE } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { GraduationCap, Award, Code2, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="ACADEMIC & PRACTICAL ROADMAP"
          title="Professional Journey"
          subtitle="Education, analytical foundation, and project-based experience in data analytics and data science."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-50 -translate-x-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
          >
            {EXPERIENCE_TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn(isEven ? "right" : "left", 0.2)}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1120] border-2 border-cyan-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Content Glass Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0">
                    <GlassCard
                      glowColor={isEven ? "primary" : "secondary"}
                      className="p-6 relative"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="cyan">{item.year}</Badge>
                        <GraduationCap className="w-5 h-5 text-indigo-400" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-mono text-cyan-400 mb-3">
                        {item.institution}
                      </h4>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-white/10">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
