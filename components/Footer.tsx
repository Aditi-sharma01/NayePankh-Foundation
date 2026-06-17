"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { siteConfig, footerLinks, images } from "@/lib/constants";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#08111f] border-t border-white/10 pt-16 pb-8">
      <div className="container-wide px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">

  <Image
    src={images.logo}
    alt="NayePankh Foundation"
    width={56}
    height={56}
    className="object-contain"
  />

  <div>
    <p className="text-white font-semibold text-lg">
      NayePankh Foundation
    </p>

    <p className="text-slate-500 text-sm">
      Giving Wings To Hope
    </p>
  </div>

</Link>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-6 font-light">

Giving Wings To Hope,

<span className="block text-cyan-400 font-semibold mt-2">
One Life At A Time.
</span>

</p>
<div className="flex gap-8 mb-8">

  <div>
    <p className="text-cyan-400 text-2xl font-bold">
      2L+
    </p>

    <p className="text-slate-500 text-sm">
      Lives Impacted
    </p>
  </div>

  <div>
    <p className="text-cyan-400 text-2xl font-bold">
      500+
    </p>

    <p className="text-slate-500 text-sm">
      Volunteers
    </p>
  </div>

</div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: siteConfig.social.instagram },
                { Icon: Facebook, href: siteConfig.social.facebook },
                { Icon: Linkedin, href: siteConfig.social.linkedin },
                { Icon: Youtube, href: siteConfig.social.youtube },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="
w-10
h-10

rounded-xl

glass

flex

items-center

justify-center

text-slate-400

hover:text-cyan-400

hover:scale-110

hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]

transition-all

duration-300
">
                  <Icon size={18} />
                </a>
              ))}
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="
w-10
h-10

rounded-xl

glass

flex

items-center

justify-center

text-slate-400

hover:text-cyan-400

hover:scale-110

hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]

transition-all

duration-300
">
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-400 transition-colors">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-cyan-400 transition-colors">{siteConfig.phone}</a></li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NayePankh Foundation. All rights reserved.</p>
          <p>80G &amp; 12A Certified · Registered NGO</p>
        </div>
      </div>
    </footer>
  );
}
