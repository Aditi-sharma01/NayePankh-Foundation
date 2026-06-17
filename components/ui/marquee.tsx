"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
  separator?: string;
}

const speedMap = {
  slow: "animate-marquee-slow",
  normal: "animate-marquee",
  fast: "animate-marquee-fast",
};

export function Marquee({
  items,
  speed = "normal",
  className,
  separator = "·",
}: MarqueeProps) {
  const content = items.join(` ${separator} `);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className={cn("inline-flex gap-16", speedMap[speed])}>
        <span className="inline-block px-8">{content}</span>
        <span className="inline-block px-8" aria-hidden>
          {content}
        </span>
      </div>
    </div>
  );
}
