"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowProps {
  color?: "primary" | "secondary" | "mixed";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

const colorMap = {
  primary: "rgba(79, 70, 229, 0.4)",
  secondary: "rgba(34, 211, 238, 0.4)",
  mixed: "rgba(79, 70, 229, 0.3)",
};

const sizeMap = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
};

export function Glow({
  color = "primary",
  size = "md",
  className,
  animate = true,
}: GlowProps) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none -z-10",
        sizeMap[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
      }}
      animate={
        animate
          ? {
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  );
}

interface GlowOrbProps {
  className?: string;
  children?: React.ReactNode;
}

export function GlowOrb({ className, children }: GlowOrbProps) {
  return (
    <div className={cn("relative", className)}>
      <Glow color="mixed" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {children}
    </div>
  );
}
