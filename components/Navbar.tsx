"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { images, navLinks } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo({
    top: 0,
    behavior: "instant" as ScrollBehavior,
  });
}, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`max-w-7xl mx-auto flex items-center gap-4 rounded-2xl px-4 sm:px-6 py-3 border backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "bg-[#08111f]/92 border-white/10 shadow-lg shadow-black/20" : "bg-[#08111f]/75 border-white/5"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src={images.logo} alt="NayePankh Foundation" width={48} height={48} className="object-contain" priority />
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm leading-tight">NayePankh</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Foundation</p>
            </div>
          </Link>

          <ul className="hidden xl:flex items-center gap-1 flex-1 justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                <Link href={link.href} className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#donate"
            className="hidden xl:inline-flex items-center gap-2 ml-auto px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#08111f] font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(34,211,238,0.45)] hover:shadow-[0_0_32px_rgba(34,211,238,0.6)]"
          >
            <Heart size={16} fill="currentColor" />
            Donate
          </Link>

          <button type="button" className="xl:hidden ml-auto p-2 text-white rounded-lg hover:bg-white/10" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#08111f]/90 backdrop-blur-xl xl:hidden" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0b1220] border-l border-white/10 p-8 pt-24 xl:hidden"
            >
              <button type="button" className="absolute top-6 right-6 p-2 text-white" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={link.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-slate-200 hover:text-cyan-400 transition-colors">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                href="#donate"
                onClick={() => setOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-full bg-cyan-500 text-[#08111f] font-semibold shadow-[0_0_24px_rgba(34,211,238,0.4)]"
              >
                <Heart size={18} fill="currentColor" />
                Donate Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
