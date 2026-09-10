"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, TYPING_ROLES } from "@/lib/constants";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { GlassCard } from "./ui/GlassCard";
import {
  FileText,
  ChevronRight,
  Database,
  Code,
  LineChart,
  Cpu,
  Layers,
  Terminal as TerminalIcon,
  Sparkles,
  Download,
  FolderKanban,
  Mail,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"python" | "sql">("python");

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
      } else {
        setDisplayedText(
          currentRole.substring(0, isDeleting ? displayedText.length - 1 : displayedText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const pythonSnippet = `# Customer Analytics & Segmentation Pipeline
import pandas as pd
import numpy as np

# Load transaction data & clean missing values
df = pd.read_csv("retail_transactions.csv")
df_clean = df.dropna().query("purchase_amount > 0")

# Compute RFM metrics & revenue lift
rfm = df_clean.groupby('customer_id').agg({
    'recency': 'min',
    'frequency': 'count',
    'monetary': 'sum'
})

print(f"✅ Segmented {len(rfm)} customers with +24.8% revenue growth!")`;

  const sqlSnippet = `-- High-Value Customer Retention Query
WITH CustomerLifetimeValue AS (
    SELECT 
        customer_id,
        COUNT(order_id) AS total_orders,
        SUM(order_amount) AS lifetime_value,
        RANK() OVER (ORDER BY SUM(order_amount) DESC) AS CLV_Rank
    FROM sales_transactions
    WHERE order_date >= NOW() - INTERVAL '1 year'
    GROUP BY customer_id
)
SELECT * FROM CustomerLifetimeValue 
WHERE CLV_Rank <= 50;`;

  const floatingBadges = [
    "Python", "SQL", "PostgreSQL", "Excel", 
    "Power BI", "Pandas", "NumPy", "GitHub", 
    "Jupyter", "Machine Learning"
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-neon">
                <img
                  src="/images/profile.jpg"
                  alt="Naveen Jerald Xavier"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0B1120] animate-pulse" />
              </div>
              <Badge variant="indigo" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Available for Data Analyst & Data Science Roles
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-muted text-lg md:text-xl font-medium block mb-1">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3">
                {PERSONAL_INFO.name}
              </h1>
              
              {/* Dynamic Typing Title */}
              <div className="text-xl sm:text-3xl font-bold h-12 flex items-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                <span>{displayedText}</span>
                <span className="w-1 h-7 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
            >
              "{PERSONAL_INFO.heroBio}"
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<FolderKanban className="w-5 h-5" />}
              >
                View Projects
              </Button>
              <Button
                href={PERSONAL_INFO.resumePath}
                download="Naveen_Jerald_Xavier_Resume.pdf"
                variant="outline"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Floating Skill Pill Cloud */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2 items-center"
            >
              <span className="text-xs font-mono text-slate-400 mr-2">Core Tech:</span>
              {floatingBadges.map((skill, index) => (
                <Badge key={skill} variant="glass">
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Data Analytics Interactive Workspace Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Code Window Container */}
              <div className="rounded-2xl bg-[#0f172a]/90 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="px-4 py-3 bg-[#1e293b]/80 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2">analytics_workspace.py</span>
                  </div>

                  {/* Tab Selector */}
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg">
                    <button
                      onClick={() => setActiveCodeTab("python")}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                        activeCodeTab === "python"
                          ? "bg-primary text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Python
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("sql")}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                        activeCodeTab === "sql"
                          ? "bg-primary text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      SQL
                    </button>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[220px]">
                  <pre className="text-cyan-300">
                    <code>{activeCodeTab === "python" ? pythonSnippet : sqlSnippet}</code>
                  </pre>
                </div>

                {/* Mini Dashboard Widget Footer */}
                <div className="px-5 py-3 bg-[#0B1120]/90 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <LineChart className="w-4 h-4" />
                    <span>Live EDA Engine Active</span>
                  </div>
                  <span className="text-slate-400">Status: 200 OK</span>
                </div>
              </div>

              {/* Floating Data Insights Glass Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-6 sm:-left-10 z-20"
              >
                <GlassCard glowColor="accent" className="p-4 w-56 sm:w-64 backdrop-blur-2xl">
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                    <span className="text-xs font-bold font-mono tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-400" /> DATA INSIGHTS
                    </span>
                    <span className="text-[10px] text-slate-400">Sample</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Revenue</span>
                      <span className="text-emerald-400 font-bold">+24.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Customers</span>
                      <span className="text-cyan-400 font-bold">+18.4%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Retention</span>
                      <span className="text-indigo-400 font-bold">+12.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Growth</span>
                      <span className="text-purple-400 font-bold">+31.2%</span>
                    </div>
                  </div>
                  <div className="mt-2 text-[9px] text-slate-500 italic text-center">
                    Visual design demonstration numbers
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
