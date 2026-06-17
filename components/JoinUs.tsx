"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LineReveal } from "@/components/ui/text-reveal";
import { joinRoles } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function JoinUs() {
  return (
    <section id="join-us" className="relative overflow-hidden">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-end">
        <Image src="/teamphoto.jpg" alt="NayePankh team" fill className="
object-cover

brightness-75

hover:scale-105

transition-all

duration-700
" sizes="100vw" loading="lazy" priority={false} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/60 to-[#0b1220]/30" />

        <div className="relative z-10 container-wide section-padding w-full pb-16 md:pb-24">
          <LineReveal>
            <p className="text-cyan-400/90 text-xs tracking-[0.25em] uppercase mb-4">Join Us</p>
          </LineReveal>
          <LineReveal delay={0.1}>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">

Join The

<span className="block text-cyan-400">

NayePankh Family

</span>

</h2>          </LineReveal>
          <LineReveal delay={0.2}>
            <p className="text-slate-300 text-lg max-w-xl mb-10 leading-relaxed">
Become a volunteer, mentor, leader or changemaker.

Together, we can build a society where every child has hope,
every woman has opportunities and every dream has wings.

Join us and be part of something bigger than yourself.            </p>
          </LineReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {joinRoles.map((role) => (
              <motion.div key={role.title} variants={fadeInUp} className="
glass-card

rounded-3xl

p-6

hover:scale-105

hover:border-cyan-400/40

hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]

transition-all

duration-500
">
                <h3 className="text-white font-semibold mb-2">{role.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <Link
            href="mailto:hello@nayepankh.org?subject=Become A Changemaker"
className="
inline-flex

items-center

gap-2

px-10

py-5

rounded-full

bg-cyan-500

hover:bg-cyan-400

font-bold

shadow-[0_0_35px_rgba(34,211,238,0.45)]

hover:scale-105

transition-all
"          >
Become A Changemaker
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
