"use client";

import { useEffect } from "react";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { WhatIsNayePankh } from "@/components/WhatIsNayePankh";
import { Story } from "@/components/Story";
import { Impact } from "@/components/Impact";
import { Programs } from "@/components/Programs";
import { Donate } from "@/components/Donate";
import { Gallery } from "@/components/Gallery";
import { Certificates } from "@/components/Certificates";
import { JoinUs } from "@/components/JoinUs";
import { GetInTouch } from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <AboutUs />
        <WhatIsNayePankh />
        <Story />
        <Impact />
        <Programs />
        <Donate />
        <Gallery />
        <Certificates />
        <JoinUs />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
