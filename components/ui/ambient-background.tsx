"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none" aria-hidden>
      {/* Aurora layers */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-primary/20 blur-[120px] aurora-blob"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-secondary/12 blur-[100px] aurora-blob"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-1/4 left-1/3 w-[50vw] h-[50vw] rounded-full bg-indigo-600/15 blur-[110px] aurora-blob"
      />
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
    </div>
  );
}
