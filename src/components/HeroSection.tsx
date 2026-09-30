"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Send,
  Code2,
  Database,
  Shield,
  Rocket,
  Smartphone,
  Server,
  Cloud,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { sound } from "@/lib/sound";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Top Ceiling Ambient Spot / Pill Light */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none -z-10">
        <div className="w-20 h-1 rounded-full bg-white/90 shadow-[0_0_25px_rgba(255,255,255,1)]" />
        <div className="w-80 h-20 bg-purple-500/25 blur-3xl rounded-full" />
      </div>

      {/* Main 2-Column Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center my-auto py-4 sm:py-10 w-full max-w-full">
        {/* LEFT COLUMN: Typography, Badges, CTAs, Tech Pills (lg:col-span-7) */}
        <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6 z-20 w-full max-w-full">
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#1b0d36]/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.25)] select-none"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping shrink-0" />
            <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-wider text-purple-200">
              ● AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

          {/* Subheading & Massive Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1.5 sm:space-y-2"
          >
            <span className="font-sans text-[11px] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-purple-300/80 block">
              ARCHITECTING MODERN DIGITAL PRODUCTS
            </span>
            <h1 className="text-hero-fluid font-black tracking-tight text-white leading-[1.02]">
              NEELAKANTA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                GANJI
              </span>
            </h1>
          </motion.div>

          {/* Dual Badges with Real Photo Avatar in Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center flex-wrap gap-2 sm:gap-3 py-1"
          >
            {/* Backend Core Badge */}
            <div className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl glass-panel bg-[#120824]/85 border border-purple-500/35 shadow-[0_0_18px_rgba(168,85,247,0.2)]">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300" />
              </div>
              <div className="text-left">
                <span className="text-[9px] sm:text-[10px] text-purple-300 font-bold uppercase tracking-wider block leading-tight">
                  BACKEND CORE
                </span>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Node.js &amp; Supabase
                </span>
              </div>
            </div>

            {/* Circular Avatar */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-[0_0_22px_rgba(168,85,247,0.55)] shrink-0 group">
              <Image
                src="/neelakanta-ganji.jpg"
                alt="Neelakanta Ganji"
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                priority
                sizes="48px"
              />
            </div>

            {/* Frontend Engine Badge */}
            <div className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl glass-panel bg-[#0d152b]/85 border border-cyan-500/35 shadow-[0_0_18px_rgba(56,189,248,0.2)]">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300" />
              </div>
              <div className="text-left">
                <span className="text-[9px] sm:text-[10px] text-cyan-300 font-bold uppercase tracking-wider block leading-tight">
                  FRONTEND ENGINE
                </span>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Next.js &amp; React
                </span>
              </div>
            </div>
          </motion.div>

          {/* Supporting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 max-w-[92vw] sm:max-w-xl text-left"
          >
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-purple-300 uppercase">
              FULL-STACK WEB &amp; APP DEVELOPER
            </h3>
            <p className="text-body-fluid text-slate-300 leading-relaxed font-normal">
              Building responsive interfaces, powerful APIs and scalable applications.
            </p>
          </motion.div>

          {/* Action CTAs in a sleek row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 w-full"
          >
            {/* View My Work Button */}
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_28px_rgba(168,85,247,0.55)] hover:shadow-[0_0_38px_rgba(168,85,247,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>VIEW MY WORK</span>
              <ArrowDownRight className="w-4 h-4 text-purple-200" />
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="w-[calc(50%-5px)] sm:w-auto justify-center glass-button flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-slate-200 hover:text-white"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
              <span className="truncate">RESUME</span>
            </a>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="w-[calc(50%-5px)] sm:w-auto justify-center glass-button flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-slate-300 hover:text-purple-300"
            >
              <Send className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span className="truncate">LET&apos;S TALK</span>
            </a>
          </motion.div>

          {/* Bottom Tech Pills Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2 pt-1 max-w-full"
          >
            {[
              { label: "Node.js & Supabase", icon: Server },
              { label: "Next.js & React", icon: Code2 },
              { label: "Hybrid SQL / NoSQL", icon: Database },
              { label: "Cybersecurity & More", icon: Shield },
            ].map((pill) => {
              const Icon = pill.icon;
              return (
                <div
                  key={pill.label}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs text-slate-300 font-medium select-none shadow-sm hover:border-purple-400/40 hover:bg-white/[0.07] transition-colors"
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Cinematic Developer Portrait, Cosmic Planet (lg:col-span-5) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[350px] sm:min-h-[480px] lg:min-h-[580px] w-full max-w-full overflow-hidden">
          {/* Background Cosmic Planet */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[380px] lg:w-[460px] h-[260px] sm:h-[380px] lg:h-[460px] rounded-full pointer-events-none -z-10">
            {/* Planet Sphere Body */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a0c3b] via-[#090317] to-[#04010a] shadow-[inset_0_0_80px_rgba(168,85,247,0.35),0_0_90px_rgba(168,85,247,0.45)] border border-purple-500/30 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:18px_18px] opacity-35" />
            </div>

            {/* Glowing Atmospheric Violet Rim Light */}
            <div className="absolute -inset-4 rounded-full bg-purple-600/20 blur-2xl pointer-events-none" />

            {/* Glowing Neon Elliptical Orbital Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[108%] h-[52%] rounded-[100%] border-2 border-purple-400/60 shadow-[0_0_30px_#a855f7] -rotate-12 pointer-events-none" />
          </div>

          {/* Floating 3D Holographic Card 1: Top-Left (Code </>) */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-4, 2, -4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 sm:top-12 left-2 sm:left-4 z-30 p-2 sm:p-4 rounded-xl sm:rounded-2xl glass-panel bg-[#170a30]/80 border border-purple-400/50 shadow-[0_0_24px_rgba(168,85,247,0.4)] backdrop-blur-xl pointer-events-none select-none"
          >
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/25 flex items-center justify-center text-purple-200 font-mono font-bold text-sm sm:text-lg">
              &lt;/&gt;
            </div>
          </motion.div>

          {/* Floating 3D Holographic Card 2: Mid-Left (Cloud / DB) */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [3, -3, 3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-16 sm:bottom-32 left-3 sm:left-6 z-30 p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-panel bg-[#170a30]/80 border border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-xl pointer-events-none select-none"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-indigo-500/25 flex items-center justify-center text-indigo-300">
              <Cloud className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-purple-300" />
            </div>
          </motion.div>

          {/* Floating 3D Holographic Card 3: Top-Right (Analytics) */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [4, -2, 4],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-8 sm:top-16 right-2 sm:right-6 z-30 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl glass-panel bg-[#170a30]/80 border border-purple-400/40 shadow-[0_0_22px_rgba(168,85,247,0.35)] backdrop-blur-xl pointer-events-none select-none"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300">
              <BarChart3 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-purple-300" />
            </div>
          </motion.div>

          {/* Glowing Neon Handwritten Script */}
          <motion.div
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute top-28 sm:top-36 right-0 sm:-right-4 z-30 select-none pointer-events-none transform rotate-[-8deg]"
          >
            <div className="flex items-center gap-1.5 text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.85)] font-serif italic text-base sm:text-lg font-semibold tracking-wide">
              <span>Full Stack</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
            </div>
            <div className="text-right text-purple-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.85)] font-serif italic text-sm sm:text-base font-semibold">
              Developer ✦
            </div>
          </motion.div>

          {/* Cinematic High-Res Portrait of Neelakanta Ganji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[260px] sm:w-[380px] lg:w-[440px] h-[360px] sm:h-[480px] lg:h-[540px] z-20 flex items-end justify-center select-none"
          >
            <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
              <Image
                src="/neelakanta-hero-portrait.jpg"
                alt="Neelakanta Ganji - Full-Stack & App Developer"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 420px, 480px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating 3D Wireframe Octahedron on Far Left (Matching Reference Image) */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
        }}
        className="hidden 2xl:block absolute left-4 top-1/3 -translate-y-1/2 w-28 h-28 pointer-events-none -z-10 opacity-70"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-purple-400 drop-shadow-[0_0_18px_#a855f7]" fill="none">
          <polygon points="50,10 90,50 50,90 10,50" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1.5" strokeOpacity="0.7" />
          <line x1="50" y1="10" x2="50" y2="90" strokeWidth="1.5" strokeOpacity="0.7" />
          <line x1="50" y1="10" x2="30" y2="50" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="50" y1="90" x2="30" y2="50" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="50" y1="10" x2="70" y2="50" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="50" y1="90" x2="70" y2="50" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      </motion.div>

      {/* BOTTOM SHOWCASE DOCK (The 4 Feature Cards Spanning Across Bottom of Reference Image) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-4 sm:mt-6 rounded-3xl glass-panel bg-[#0d071a]/85 border border-purple-500/25 p-4 sm:p-5 shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {/* Card 1: Modern Web Apps */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.35)]">
              <Rocket className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                Modern Web Apps
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                Scalable &amp; High Performance
              </p>
            </div>
          </div>

          {/* Card 2: Mobile Experiences */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.35)]">
              <Smartphone className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                Mobile Experiences
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                Responsive &amp; User Friendly
              </p>
            </div>
          </div>

          {/* Card 3: Backend Systems */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
              <Database className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                Backend Systems
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                Robust &amp; Secure
              </p>
            </div>
          </div>

          {/* Card 4: Cybersecurity Focus */}
          <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 text-left">
            <div className="w-10 h-10 rounded-2xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-violet-300 shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.35)]">
              <Shield className="w-5 h-5 text-violet-300" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                Cybersecurity Focus
              </h4>
              <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                Safe &amp; Reliable Solutions
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
