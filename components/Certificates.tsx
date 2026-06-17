"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { LineReveal } from "@/components/ui/text-reveal";
import { certificates } from "@/lib/constants";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Certificates() {
  const [active, setActive] = useState<(typeof certificates)[0] | null>(null);

  return (
    <section id="certificates" className="section-padding bg-[#0a101c]">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <LineReveal>
            <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase mb-4">Trust & Transparency</p>
          </LineReveal>
          <LineReveal delay={0.1}>
  <h2 className="text-3xl md:text-5xl font-bold text-white">
    Our Certifications
  </h2>
</LineReveal>

<p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-relaxed">

  NayePankh Foundation is committed to transparency,
  accountability and ethical social service.

  Our certifications reflect our dedication to creating
  a positive impact while maintaining the highest standards
  of trust and integrity.

</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {certificates.map((cert) => (
            <motion.article
              key={cert.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
className="
glass-card

rounded-3xl

overflow-hidden

border

border-white/10

hover:border-cyan-400/40

hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]

transition-all

duration-500
"
            >
<div className="
relative

aspect-[3/4]

bg-white/5

p-4

overflow-hidden

group
">
                  <Image src={cert.image} alt={cert.title} fill 
                  className="
                  object-contain

                    p-3

                    group-hover:scale-105

                      transition-transform

                      duration-500
                      "
 sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{cert.description}</p>
                <div className="flex gap-2 mb-5">

<span
className="
text-xs
px-3
py-1
rounded-full

bg-cyan-500/10

text-cyan-400
"
>

Verified

</span>


<span

className="
text-xs
px-3
py-1
rounded-full

bg-white/5

text-slate-300
"
>

Registered NGO

</span>

</div>
                <button
                  type="button"
                  onClick={() => setActive(cert)}
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Certificate <ExternalLink size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
className="
fixed

inset-0

z-[200]

bg-[#08111f]/95

backdrop-blur-xl

flex

items-center

justify-center

p-4

md:p-8
"            onClick={() => setActive(null)}
          >
            <button type="button" className="absolute top-5 right-5 p-3 rounded-full glass text-white z-10" onClick={() => setActive(null)} aria-label="Close">
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-3xl max-h-[90vh] rounded-xl overflow-hidden bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[3/4] max-h-[85vh]">
                <Image src={active.image} alt={active.title} fill className="object-contain" sizes="90vw" priority />
              </div>
              <p className="text-center py-4 text-[#0b1220] font-semibold bg-white">{active.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
