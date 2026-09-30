"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  GraduationCap,
  Layers,
  Cpu,
  ShieldCheck,
  Download,
  Code2,
  Server,
  Database,
  Workflow,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { sound } from "@/lib/sound";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 w-full">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-start mb-8 sm:mb-14 space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-sans text-xs text-purple-300 font-semibold tracking-[0.2em] uppercase">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span>01 // DEVELOPER SNAPSHOT</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase max-w-4xl leading-[1.08] text-heading-fluid">
          I BUILD{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
            DIGITAL PRODUCTS
          </span>
          , NOT JUST WEBSITES.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Developer Profile / Engineering Snapshot Card (lg:col-span-5) */}
        <div className="lg:col-span-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative rounded-3xl p-6 sm:p-7 glass-panel bg-[#0d071a]/85 border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden text-left space-y-6"
          >
            {/* Top Card Ambient Gradient Highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Top Bar: Developer Profile Header + 2026 Graduate Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs tracking-wider">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="font-bold">ENGINEERING SNAPSHOT</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 text-[11px] font-mono font-semibold border border-purple-400/30 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                2026 Graduate
              </span>
            </div>

            {/* Primary Identity */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                NEELAKANTA GANJI
              </h3>
              <p className="text-sm font-semibold text-purple-300">
                Full-Stack Web &amp; App Developer
              </p>
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
                <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>B.Tech — Computer Science &amp; Engineering</span>
              </div>
            </div>

            {/* Core Technology Badges */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 font-semibold block">
                CORE TECHNICAL ARCHITECTURE
              </span>
              <div className="grid grid-cols-1 gap-2 text-xs">
                {/* Frontend */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Frontend</span>
                  </div>
                  <span className="font-semibold text-white">Next.js + React</span>
                </div>

                {/* Backend */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <Server className="w-3.5 h-3.5 text-purple-400" />
                    <span>Backend</span>
                  </div>
                  <span className="font-semibold text-white">Node.js + Supabase</span>
                </div>

                {/* Database */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Database</span>
                  </div>
                  <span className="font-semibold text-white">PostgreSQL + Supabase</span>
                </div>

                {/* Engineering */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Engineering</span>
                  </div>
                  <span className="font-semibold text-white text-right text-[11px] sm:text-xs">
                    APIs + Auth + Deployment
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status & Resume CTA */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Roles
              </span>
              <a
                href="/resume.pdf"
                download
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-xs font-bold text-white transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-purple-300" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio Introduction, Engineering Foundation & 3 Cards (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
          {/* Main Introduction Quotations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 space-y-3.5 bg-[#0c061a]/70"
          >
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              &ldquo;I approach development from both sides of the product &mdash; the experience users see and the systems that power it.&rdquo;
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              &ldquo;I build responsive web applications, mobile experiences and backend systems with a focus on clean architecture, performance, security and real-world usability.&rdquo;
            </p>
          </motion.div>

          {/* Engineering Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 flex items-start gap-4 bg-[#0c061a]/70"
          >
            <div className="p-3 rounded-2xl bg-purple-500/15 border border-purple-500/35 text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-purple-300 uppercase tracking-widest block font-mono">
                ENGINEERING FOUNDATION
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-normal">
                Built my foundation across data structures, algorithms, databases, computer networks, operating systems and software engineering.
              </p>
            </div>
          </motion.div>

          {/* 3 Core Competency Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5"
          >
            {/* Card 1: Product Development */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all bg-[#0c061a]/70 hover:bg-[#120926]/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4 text-purple-300" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  PRODUCT DEVELOPMENT
                </h4>
                <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                  Building complete digital products from frontend to backend and deployment.
                </p>
              </div>
            </div>

            {/* Card 2: Systems & APIs */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all bg-[#0c061a]/70 hover:bg-[#120926]/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4 text-indigo-300" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  SYSTEMS &amp; APIs
                </h4>
                <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                  Building APIs, authentication, integrations and backend services.
                </p>
              </div>
            </div>

            {/* Card 3: Security & Performance */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all bg-[#0c061a]/70 hover:bg-[#120926]/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  SECURITY &amp; PERFORMANCE
                </h4>
                <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed">
                  Focusing on secure, fast and reliable applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
