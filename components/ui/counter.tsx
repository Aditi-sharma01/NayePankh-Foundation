"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString("en-IN")
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-col gap-2", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-baseline gap-0.5">
        {prefix && (
          <span className="text-2xl md:text-3xl font-semibold text-secondary">{prefix}</span>
        )}
        <motion.span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight gradient-text-accent">
          {display}
        </motion.span>
        {suffix && (
          <span className="text-2xl md:text-3xl font-semibold text-secondary">{suffix}</span>
        )}
      </div>
      <span className="text-sm md:text-base text-muted">{label}</span>
    </motion.div>
  );
}
