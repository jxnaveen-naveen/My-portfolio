"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  download?: string | boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  href,
  download,
  onClick,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-neon border border-indigo-400/30",
    secondary:
      "bg-secondary hover:bg-secondary-hover text-white shadow-purpleNeon border border-purple-400/30",
    accent:
      "bg-accent hover:bg-accent-hover text-white shadow-cyanNeon border border-cyan-400/30",
    outline:
      "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/20 backdrop-blur-md",
    ghost:
      "bg-transparent hover:bg-white/10 text-muted hover:text-white border border-transparent",
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 font-medium tracking-wide"
    >
      {children}
      {icon && <span className="transition-transform duration-200 group-hover:translate-x-1">{icon}</span>}
    </motion.span>
  );

  const baseStyles = cn(
    "group inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer select-none",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={baseStyles}
        onClick={onClick as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseStyles} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
