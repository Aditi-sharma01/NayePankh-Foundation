"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { LineReveal } from "@/components/ui/text-reveal";
import { siteConfig } from "@/lib/constants";
import { viewportOnce } from "@/lib/motion";

const social = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function GetInTouch() {
  return (
<section
id="contact"
className="section-padding bg-[#08111f] text-white"
>
        <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportOnce} transition={{ duration: 0.7 }}>
            <LineReveal>
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

Let&apos;s Stay

<span className="block text-cyan-400">

Connected

</span>

</h2>
<p className="text-slate-300 leading-relaxed max-w-lg mb-10">

Every conversation begins with hope.

Whether you want to volunteer,
support our mission, or simply know more,
we&apos;d love to hear from you

Together, let&apos;s create a brighter future.
</p>
            </LineReveal>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-slate-300">

<div className="
w-12
h-12

rounded-xl

bg-cyan-500/10

flex

items-center

justify-center
">

📍

</div>

<span className="text-lg">

India

</span>

</div>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 text-slate-300 hover:text-cyan-600 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="text-lg">{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 text-slate-300 hover:text-cyan-600 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="text-lg">{siteConfig.phone}</span>
              </a>
            </div>

            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="
w-12
h-12

rounded-2xl

bg-white/5

border

border-white/10

backdrop-blur-xl

flex

items-center

justify-center

text-slate-300

hover:text-cyan-400

hover:border-cyan-400

hover:scale-110

transition-all

duration-300
">
                  <Icon size={20} />
                </a>
              ))}
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="
w-12
h-12

rounded-2xl

bg-white/5

border

border-white/10

backdrop-blur-xl

flex

items-center

justify-center

text-slate-300

hover:text-cyan-400

hover:border-cyan-400

hover:scale-110

transition-all

duration-300
">
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image src="/teamphoto2.jpg" alt="NayePankh team" fill className="
object-cover

brightness-90

hover:scale-105

transition-all

duration-700
" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy"
 
 />
 <div className="
absolute
inset-0

bg-gradient-to-t

from-[#08111f]/70

via-transparent

to-transparent
"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
