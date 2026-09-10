"use client";

import React, { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedCounterProps {
  value: string; // e.g. "10+", "Fresher", "20+"
  numericTarget?: number;
  duration?: number;
}

export function AnimatedCounter({ value, numericTarget, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useIntersectionObserver(ref as any, { threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (!isVisible || numericTarget === undefined || numericTarget === 0) return;

    let start = 0;
    const end = numericTarget;
    const totalSteps = 40;
    const stepTime = duration / totalSteps;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, numericTarget, duration]);

  if (numericTarget === undefined || numericTarget === 0) {
    return <span ref={ref}>{value}</span>;
  }

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
