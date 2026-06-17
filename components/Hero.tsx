"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, HandHeart } from "lucide-react";
import { TextReveal, LineReveal } from "@/components/ui/text-reveal";
import { heroStats } from "@/lib/constants";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
    id="hero"
    ref={ref} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
<Image
  src="/firstphoto.jpg"
  alt="NayePankh Foundation"
  fill
  priority
  className="object-cover object-center"
  sizes="100vw"
/>
      </motion.div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/45 via-[#0b1220]/30 to-[#0b1220]/70" />
<div className="absolute inset-0 bg-gradient-to-r from-[#0b1220]/75 via-[#0b1220]/20 to-transparent" />
      <div className="absolute inset-0 cinematic-vignette" />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full container-wide section-padding pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400/90 text-sm tracking-[0.2em] uppercase mb-6"
          >
            Student-led · India · Since 2020
          </motion.p>

          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-white mb-6">
            <TextReveal text="Giving Wings" className="block" delay={0.3} as="span" />
            <TextReveal text="To Hope" className="block text-cyan-400 mt-1" delay={0.55} as="span" />
          </h1>

          <LineReveal delay={0.75}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
Let&apos;s Make a Difference
Every helping hand creates hope.
NayePankh Foundation empowers communities through
education, healthcare, food distribution,
women empowerment and youth-led social initiatives,
bringing smiles and opportunities to thousands of lives.
            </p>
          </LineReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              href="#donate"
className="
inline-flex
items-center
justify-center
gap-2

px-5
sm:px-6
md:px-8

py-3
md:py-4

text-sm
md:text-base

rounded-full

bg-cyan-500

hover:bg-cyan-400

text-[#08111f]

font-semibold

whitespace-nowrap

shadow-[0_0_28px_rgba(34,211,238,0.45)]

hover:shadow-[0_0_40px_rgba(34,211,238,0.55)]

transition-all
"
            >
              <Heart size={18} fill="currentColor" />
              Donate Now
            </Link>
            <Link
              href="#join-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
            >
              <HandHeart size={18} />
              Become a Volunteer
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-card px-6 py-4 rounded-2xl min-w-[140px]">
                <p className="text-2xl md:text-3xl font-bold text-cyan-400">{stat.display}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
