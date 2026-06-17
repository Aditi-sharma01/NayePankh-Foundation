"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/constants";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function WhatIsNayePankh() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <Image src={images.whatIsBg} alt="" fill className="object-cover" sizes="100vw" loading="lazy" aria-hidden />
      <div className="absolute inset-0 bg-[#0b1220]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1220]/40 to-[#0b1220]" />

      <div className="relative z-10 container-wide section-padding w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto glass-strong rounded-3xl p-8 md:p-12 lg:p-14 text-center border border-white/10"
        >
          <p className="text-cyan-400/90 text-xs tracking-[0.25em] uppercase mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">What is NayePankh?</h2>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 text-slate-300 leading-relaxed text-left md:text-center md:text-lg"
          >
            {[
              "NayePankh — meaning \"new wings\" — is a mission to give hope, education, and dignity to those who need it most.",
              "Our vision is an India where every child learns, every woman stands strong, and every community thrives.",
              "Born from the Covid crisis, we are a youth-led movement that has grown into a trusted NGO impacting 2 lakh+ lives.",
              "From women empowerment to education, from feeding the hungry to building future leaders — we show up, every single day.",
              "Our future mission: reach every corner of India where a smile can still be saved, a dream can still take flight.",
            ].map((text, i) => (
              <motion.p key={i} variants={fadeInUp}>{text}</motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
