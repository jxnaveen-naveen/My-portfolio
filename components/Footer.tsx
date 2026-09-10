"use client";

import React from "react";
import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";
import { Linkedin, Github, Youtube, Mail, ArrowUp, BarChart2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[#070b14] border-t border-white/10 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Left Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-cyanNeon">
                <img
                  src="/images/profile.jpg"
                  alt="Naveen Jerald Xavier"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "{PERSONAL_INFO.heroBio}"
            </p>
          </div>

          {/* Center Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Social & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider mb-3">
                Social Profiles
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-red-400 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-slate-300 hover:text-emerald-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Copyright Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono">
          <div>
            © 2026 Naveen Jerald Xavier. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0">
            Engineered with Next.js, React, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
