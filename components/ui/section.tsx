"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  id?: string;
  container?: "narrow" | "wide" | "full";
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  container = "narrow",
  className,
  children,
  ...props
}: SectionProps) {
  const containerClass =
    container === "wide"
      ? "container-wide"
      : container === "full"
        ? "w-full"
        : "container-narrow";

  return (
    <motion.section
      id={id}
      className={cn("section-padding relative", className)}
      {...props}
    >
      <div className={containerClass}>{children}</div>
    </motion.section>
  );
}
