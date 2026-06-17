"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  const spotlight = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(650px circle at ${x}px ${y}px, rgba(79,70,229,0.14), transparent 65%)`
  );

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const active = fine && !reduced;
    setEnabled(active);
    if (!active) return;

    document.body.classList.add("cursor-none");
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-none");
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {enabled && (
        <>
          <motion.div
            className="pointer-events-none fixed inset-0 z-[9998]"
            style={{ background: spotlight }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none fixed z-[9999] mix-blend-screen"
            style={{ left: springX, top: springY, x: "-50%", y: "-50%" }}
            aria-hidden
          >
            <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_24px_rgba(34,211,238,0.8)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-secondary/40" />
          </motion.div>
        </>
      )}
      {children}
    </>
  );
}
