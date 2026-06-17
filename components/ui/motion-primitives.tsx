"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  imageReveal,
  scaleHover,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  children: React.ReactNode;
}

export function FadeUp({ delay = 0, children, className, ...props }: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, fast = false }: {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fast ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } } : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

export function ImageReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={imageReveal}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={scaleHover}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function Parallax({ children, className, offset = 40 }: ParallaxProps) {
  return (
    <motion.div
      initial={{ y: offset, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
