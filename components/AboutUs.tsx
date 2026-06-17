"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LineReveal } from "@/components/ui/text-reveal";
import { fadeInUp, viewportOnce } from "@/lib/motion";

export function AboutUs() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#0b1220]">
      <div className="container-wide">
        <LineReveal>
          <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase mb-4">About Us</p>
        </LineReveal>
        <LineReveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16">How It Started?</h2>
        </LineReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
<Image
  src="/photo1.jpg"
  alt="NayePankh Community Work"
  fill
className="
object-cover
brightness-90
hover:scale-105
transition-all
duration-700
"
  sizes="(max-width:1024px) 100vw, 50vw"
  
/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -right-4 md:-right-8 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-4 border-[#0b1220] shadow-2xl hidden sm:block"
            >
              <Image src="/photo2.jpg" alt="Food distribution" fill className="object-cover" sizes="176px" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.35 }}
              className="absolute -top-4 -left-4 w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-[#0b1220] shadow-xl hidden sm:block"
            >
              <Image src="/teamphoto.jpg" alt="Community support" fill className="object-cover" sizes="128px" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5 text-slate-300 leading-relaxed text-base md:text-lg"
          >
            {[
              "NayePankh Foundation was born during Covid — when hunger, fear, and uncertainty touched every corner of our country. A group of young students saw families struggling and decided they could not look away.",
              "What began as food distribution and emergency relief for the poorest among us slowly grew into something much larger. We started reaching women who needed empowerment, children who dreamed of education, and communities that had been forgotten.",
              "Today, NayePankh is a registered youth-led NGO with 80G and 12A certification. We have impacted over 2 lakh lives through education programs, women empowerment initiatives, skill development, and relentless community welfare.",
              "Every meal shared, every child taught, every woman empowered — is a step toward the India we believe in. One where no one is left behind. One where hope has wings.",
              
            ].map((para, i) => (
              <motion.p key={i} variants={fadeInUp}>{para}</motion.p>
            ))}
            <motion.div
variants={fadeInUp}
className="grid grid-cols-2 gap-4 pt-6"
>

<div className="glass-card p-5 rounded-2xl">

<h3 className="text-cyan-400 text-3xl font-bold">
2L+
</h3>

<p className="text-slate-400">
Lives Impacted
</p>

</div>


<div className="glass-card p-5 rounded-2xl">

<h3 className="text-cyan-400 text-3xl font-bold">
500+
</h3>

<p className="text-slate-400">
Volunteers
</p>

</div>

</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
