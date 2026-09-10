import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "indigo" | "purple" | "cyan" | "green" | "glass";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({ children, variant = "glass", className, icon }: BadgeProps) {
  const variantStyles = {
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    green: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    glass: "bg-white/[0.06] text-slate-300 border-white/10 hover:border-white/20 hover:text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full border backdrop-blur-md transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </span>
  );
}
