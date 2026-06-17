"use client";

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { FilmGrain } from "@/components/ui/film-grain";

/** NGO-focused providers — smooth scroll + subtle texture, no SaaS cursor effects */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <FilmGrain />
      {children}
    </SmoothScrollProvider>
  );
}
