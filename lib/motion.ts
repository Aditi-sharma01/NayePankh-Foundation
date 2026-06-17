import type { Variants, Transition } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};

export const viewportAlways = {
  once: false,
  margin: "-50px" as const,
  amount: 0.3 as const,
};

export function createStaggerDelay(index: number, base = 0.1): number {
  return base + index * 0.08;
}

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const scaleHover = { scale: 1.03, y: -4 };

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08, clipPath: "inset(100% 0 0 0 round 1rem)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0% 0 0 0 round 1rem)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const timelineReveal: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const viewportOnceTight = {
  once: true,
  margin: "-40px" as const,
  amount: 0.15 as const,
};

export const pulseGlow = {
  opacity: [0.4, 0.8, 0.4],
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
