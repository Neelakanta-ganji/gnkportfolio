"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ProjectsSection from "@/components/ProjectsSection";
import FreelanceSection from "@/components/FreelanceSection";
import ProcessSection from "@/components/ProcessSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import CinematicLoader from "@/components/CinematicLoader";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamic import for Three.js WebGL Cosmic Canvas with SSR disabled
const GlobalCanvas = dynamic(
  () => import("@/components/canvas/GlobalCanvas"),
  { ssr: false }
);

export default function Home() {
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#030508] text-white selection:bg-purple-500/30 selection:text-white">
        {/* 1. Cinematic Initial Loading Screen */}
        <CinematicLoader onComplete={() => setLoaderFinished(true)} />

        {/* 2. Custom Magnetic & Contextual Cursor */}
        <CustomCursor />

        {/* 3. Global Cosmic Starfield Canvas */}
        <GlobalCanvas />

        {/* 4. Floating Glass Navbar */}
        <Navbar />

        {/* 5. Main Content Assembly */}
        <main className="relative z-10 flex flex-col">
          {/* Hero Section with Cosmic Atmosphere and Skills Pack */}
          <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Technology Stack & Amber Constellation Pack */}
        <SkillsSection />

        {/* 8-Layer Systems Architecture */}
        <ArchitectureSection />

        {/* Engineering Projects */}
        <ProjectsSection />

        {/* Freelance & Web Experiences (3D Devices) */}
        <FreelanceSection />

        {/* 7-Stage Engineering Methodology */}
        <ProcessSection />

        {/* Cryptographic Hardened Systems */}
        <SecuritySection />

        {/* Contact & Transmission Form */}
        <ContactSection />
      </main>

      {/* 6. Minimal Premium Footer */}
      <Footer />
    </div>
  </SmoothScroll>
  );
}
