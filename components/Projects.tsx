"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { PROJECTS, Project } from "@/lib/projects";
import { ProjectModal } from "./ProjectModal";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Github, ExternalLink, ArrowRight, Layers, BarChart, Eye } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="FEATURED WORK"
          title="Data Analytics & Science Projects"
          subtitle="Real-world data analytical solutions demonstrating statistical modeling, SQL query optimization, machine learning, and BI dashboard engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={project.id} variants={fadeIn("up", index * 0.15)}>
              <GlassCard
                tiltEffect
                glowColor={index % 2 === 0 ? "primary" : "accent"}
                className="h-full flex flex-col justify-between p-8 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Top Subtitle & Case Study Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="cyan">{project.subtitle}</Badge>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                      <Eye className="w-3.5 h-3.5" /> Read Case Study
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 mb-6 text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] text-slate-400">{m.label}</div>
                        <div className="text-sm font-bold text-white font-mono">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-cyan-400">Click card for full report</span>
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                      title="Live Demo / Report"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Case Study Component */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
