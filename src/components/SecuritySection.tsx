"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SECURITY_PILLARS } from "@/data/portfolioData";
import { sound } from "@/lib/sound";
import {
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function SecuritySection() {
  return (
    <section id="security" className="relative py-14 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-16 space-y-3">
        <div className="flex items-center gap-2 font-sans text-xs text-purple-400 font-semibold tracking-[0.25em] uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>07 // HARDENED SYSTEMS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase max-w-4xl text-heading-fluid">
          Built With <span className="text-gradient-purple">Security</span> In Mind
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed text-body-fluid">
          Defensive engineering across the stack: stateless cryptographic tokens, role middleware boundaries, parameterized queries, and strict environment isolation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: 3D Holographic Security Shield Visual */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] aspect-square flex items-center justify-center">
            {/* Ambient Radial Glow */}
            <div className="absolute inset-0 bg-purple-500/15 rounded-full blur-3xl -z-10 animate-ambient-glow" />

            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-purple-500/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-indigo-500/25"
            />

            {/* Center Glass Shield Container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => sound.playHover()}
              className="relative p-7 sm:p-10 rounded-3xl glass-panel-glow bg-[#0b0618]/90 border border-purple-400/40 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(168,85,247,0.25)] cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-400/30 flex items-center justify-center text-purple-400 mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                CRYPTOGRAPHIC DEFENSE
              </h3>
              <span className="text-[11px] text-purple-300 mt-1 font-medium">
                Zero Trust Architecture
              </span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Security Pillars List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
          {SECURITY_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              whileHover={{ y: -3 }}
              onMouseEnter={() => sound.playHover()}
              className="p-4 rounded-2xl glass-panel bg-[#080412]/80 border border-white/10 hover:border-purple-400/40 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-300">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {pillar.title}
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
