"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, MapPin } from "lucide-react";
import { LineReveal } from "@/components/ui/text-reveal";
import { impactStats, images } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const icons = { Heart, Users, BookOpen, MapPin };

export function Impact() {
  return (
    <section id="impact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image src={images.impactAccent} alt="" fill className="object-cover blur-sm scale-110" sizes="100vw" aria-hidden />
      </div>
      <div className="absolute inset-0 bg-[#0b1220]/92" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <LineReveal>
            <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase mb-4">Our Impact</p>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Lives Changed, Hope Restored</h2>
          </LineReveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {impactStats.map((stat) => {
            const Icon = icons[stat.icon as keyof typeof icons];
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 md:p-8 text-center hover:border-cyan-500/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-2xl md:text-4xl font-bold text-white mb-2">{stat.display}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
