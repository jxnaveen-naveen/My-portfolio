"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent" | "dataGreen";
  tiltEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  glowColor = "primary",
  tiltEffect = false,
  ...props
}: GlassCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -6;
    const rotateYValue = ((x - centerX) / centerX) * 6;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    if (!tiltEffect) return;
    setRotateX(0);
    setRotateY(0);
  };

  const glowClasses = {
    primary: "hover:border-primary/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.25)]",
    secondary: "hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]",
    accent: "hover:border-accent/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
    dataGreen: "hover:border-dataGreen/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: tiltEffect ? "preserve-3d" : "flat" }}
      className={cn(
        "relative rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 p-6 transition-all duration-300",
        glowClasses[glowColor],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
