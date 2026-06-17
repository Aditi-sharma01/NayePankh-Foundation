"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { LineReveal } from "@/components/ui/text-reveal";
import { galleryItems } from "@/lib/constants";
import { viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section id="gallery" className="section-padding overflow-hidden">
      <div className="container-wide mb-12">
        <LineReveal>
          <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase mb-4">Gallery</p>
        </LineReveal>
        <LineReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-bold text-white">

  Moments That

  <span className="block text-cyan-400">
    Matter
  </span>

</h2>
         
        </LineReveal>
         <p className="text-slate-400 max-w-2xl mt-6 leading-relaxed">

Every smile, every helping hand and every dream fulfilled
reflects the spirit of NayePankh Foundation.

These moments remind us that even small acts of kindness
can create a lasting impact on thousands of lives.

</p>
      </div>

      <div className="container-wide px-4 sm:px-0">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              onClick={() => setSelected(item)}
              className={cn(
                "relative block w-full break-inside-avoid mb-4 md:mb-5 rounded-2xl overflow-hidden group text-left",
                i % 3 === 0 ? "h-72 md:h-80" : i % 3 === 1 ? "h-56 md:h-64" : "h-64 md:h-72"
              )}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                loading={i < 3 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="
absolute

inset-0

bg-gradient-to-t

from-[#08111f]/20

to-transparent

group-hover:from-[#08111f]/90

group-hover:to-[#08111f]/40

transition-all

duration-500

flex

flex-col

items-center

justify-center

p-4
">
                <span className="text-cyan-400 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">{item.category}</span>
                <span className="text-white font-medium mt-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-75 flex items-center gap-1">
                  <ZoomIn size={14} /> {item.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#08111f]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button type="button" className="absolute top-5 right-5 p-3 rounded-full glass text-white z-10" onClick={() => setSelected(null)} aria-label="Close">
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 28 }}
              className="relative w-full max-w-5xl h-[75vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selected.src} alt={selected.title} fill className="object-contain bg-black" sizes="100vw" priority />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-cyan-400 text-sm">{selected.category}</p>
                <p className="text-white text-xl font-semibold">{selected.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
