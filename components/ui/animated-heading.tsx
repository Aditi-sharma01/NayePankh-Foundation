"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, viewportOnce } from "@/lib/motion";

interface AnimatedHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function AnimatedHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: AnimatedHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      className={cn("flex flex-col gap-4 mb-12 md:mb-16", alignClass, className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-secondary"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] gradient-text max-w-4xl",
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            "text-base md:text-lg text-muted max-w-2xl leading-relaxed",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        variants={fadeInUp}
        className={cn(
          "h-px w-16 bg-gradient-to-r from-primary to-secondary mt-2",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
