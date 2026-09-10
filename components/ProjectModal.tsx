"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  FileText,
  Database,
  BarChart,
  Lightbulb,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1120]/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-[#0f172a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="p-6 bg-[#1e293b]/90 border-b border-white/10 flex items-start justify-between">
            <div>
              <Badge variant="cyan" className="mb-2">
                PROJECT CASE STUDY
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto font-sans">
            
            {/* Project Metrics Summary Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center">
              {project.metrics.map((m, i) => (
                <div key={i}>
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-lg font-bold text-cyan-300 font-mono">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Problem Statement */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Problem Statement
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed pl-7">
                {caseStudy.problem}
              </p>
            </div>

            {/* Dataset Overview */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-400" />
                Dataset & Data Architecture
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed pl-7">
                {caseStudy.dataset}
              </p>
            </div>

            {/* Data Cleaning & Preprocessing */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                Data Cleaning & Feature Engineering
              </h3>
              <ul className="space-y-1.5 pl-7 text-slate-300 text-sm">
                {caseStudy.dataCleaning.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exploratory Data Analysis */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart className="w-5 h-5 text-cyan-400" />
                Exploratory Data Analysis (EDA) Findings
              </h3>
              <ul className="space-y-1.5 pl-7 text-slate-300 text-sm">
                {caseStudy.eda.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-base font-bold text-white mb-2">Tools & Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.toolsUsed.map((tool) => (
                  <Badge key={tool} variant="indigo">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Business Insights */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Key Business Insights
              </h3>
              <div className="grid grid-cols-1 gap-3 pl-7">
                {caseStudy.keyInsights.map((insight, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200">
                    💡 {insight}
                  </div>
                ))}
              </div>
            </div>

            {/* Business Recommendations & Impact */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <h3 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Strategic Recommendations & Business Impact
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {caseStudy.results}
              </p>
            </div>

          </div>

          {/* Modal Footer Links */}
          <div className="p-6 bg-[#1e293b]/90 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button href={project.githubUrl} variant="outline" size="sm" icon={<Github className="w-4 h-4" />}>
                View GitHub Code
              </Button>
              <Button href={project.demoUrl} variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                Live Demo / Dashboard
              </Button>
            </div>
            <Button onClick={onClose} variant="ghost" size="sm">
              Close Case Study
            </Button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
