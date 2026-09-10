"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { fadeIn } from "@/lib/animations";

interface SectionHeadingProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badgeText,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col mb-12 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Badge variant="cyan" className="mb-4">
        {badgeText}
      </Badge>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title.split(" ").map((word, index) => {
          // Highlight last 2 words or specified key phrase
          if (index >= title.split(" ").length - 2) {
            return (
              <span key={index} className="glow-gradient-purple ml-2">
                {word}{" "}
              </span>
            );
          }
          return <span key={index}>{word} </span>;
        })}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-6 opacity-80" />
    </motion.div>
  );
}
