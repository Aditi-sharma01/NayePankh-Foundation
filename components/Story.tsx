"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LineReveal } from "@/components/ui/text-reveal";
import { images, storyTimeline } from "@/lib/constants";
import { timelineReveal, staggerContainer, viewportOnce } from "@/lib/motion";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="story" className="section-padding bg-[#0a101c] overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden sticky top-28"
          >
            
<Image
  src="/photo4.jpg"
  alt="NayePankh Journey"
  fill
  className="
    object-cover
    brightness-90
    hover:scale-105
    transition-all
    duration-700
  "
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a101c]/70 to-transparent" />
            
          </motion.div>

          <div ref={ref}>
            <LineReveal>
              <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase mb-4">Our Journey</p>
            </LineReveal>
            <LineReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">

From a Few Students

<span className="block text-cyan-400 mt-2">
To a Movement
</span>

</h2>
            </LineReveal>
            <LineReveal delay={0.15}>
              <p className="text-slate-400 mb-10 leading-relaxed">Started during the Covid crisis, NayePankh Foundation began as a small initiative by passionate students determined to help those in need.

Today, it has grown into a youth-led movement impacting over 2 lakh lives through education, women empowerment, food distribution and social welfare across India.</p>
            </LineReveal>

            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10">
                <motion.div className="w-full bg-gradient-to-b from-cyan-500 to-blue-600 origin-top" style={{ height: lineHeight }} />
              </div>
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                {storyTimeline.map((item, i) => (
                  <motion.div key={item.year} custom={i} variants={timelineReveal} className="relative pb-10 last:pb-0">
                    <div className="absolute -left-5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-[#0a101c]" />
                    <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                    <h3 className="text-white font-semibold text-xl mt-1 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
