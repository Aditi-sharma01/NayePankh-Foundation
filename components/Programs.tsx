"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Wrench, Heart, Sparkles, Megaphone } from "lucide-react";
import { LineReveal } from "@/components/ui/text-reveal";
import { programs } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const icons = { BookOpen, Users, Wrench, Heart, Sparkles, Megaphone };

export function Programs() {
  return (
    <section id="programs" className="section-padding bg-[#0a101c]">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <LineReveal>
            <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase mb-4">What We Do</p>
          </LineReveal>
          <LineReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Programs That Change Lives</h2>
          </LineReveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {programs.map((p) => {
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <motion.article
                key={p.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 md:p-8 group hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
