"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CinematicImageProps {
  src: string;
  alt: string;
  className?: string;
  parallax?: boolean;
  vignette?: boolean;
  priority?: boolean;
}

export function CinematicImage({
  src,
  alt,
  className,
  parallax = true,
  vignette = true,
  priority = false,
}: CinematicImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        style={parallax ? { scale, y } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
      {vignette && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 cinematic-vignette pointer-events-none" />
        </>
      )}
    </div>
  );
}
