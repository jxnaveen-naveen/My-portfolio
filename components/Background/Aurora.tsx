"use client";

import React from "react";

export function Aurora() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Glowing Blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      
      {/* Center Purple Blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] animate-aurora-flow" />
      
      {/* Bottom Right Cyan Blob */}
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[130px] animate-pulse-glow" />

      {/* Radial overlay gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#0B1120]/80 to-[#0B1120]" />
    </div>
  );
}
