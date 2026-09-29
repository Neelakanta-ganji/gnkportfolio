"use client";

import React from "react";
import { motion } from "framer-motion";
import { DEVELOPMENT_STAGES } from "@/data/portfolioData";
import { sound } from "@/lib/sound";
import { GitPullRequest, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="flex items-center gap-2 font-sans text-xs text-purple-400 font-semibold tracking-[0.25em] uppercase">
          <GitPullRequest className="w-4 h-4" />
          <span>06 // ENGINEERING METHODOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase max-w-4xl">
          From Idea To <span className="text-gradient-purple">Production</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Disciplined 7-stage engineering lifecycle transforming conceptual requirements into resilient, tested, and containerized digital products.
        </p>
      </div>

      {/* Cinematic Horizontal Timeline / Staged Cards */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/20 via-indigo-500/30 to-purple-500/20 -translate-y-1/2 -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {DEVELOPMENT_STAGES.map((stage) => (
            <motion.div
              key={stage.step}
              whileHover={{ y: -8 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel p-5 rounded-3xl border border-white/10 bg-[#080312]/85 hover:border-purple-400/50 hover:shadow-[0_15px_30px_rgba(168,85,247,0.2)] transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-purple-300 px-2.5 py-0.5 rounded-full bg-purple-950/60 border border-purple-500/30 font-mono">
                    {stage.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-purple-400 transition-colors" />
                </div>

                {/* Stage Title */}
                <h3 className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-purple-300 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-[11px] text-purple-300/80 mt-0.5 font-medium">
                  {stage.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Progress Pin */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-slate-500 group-hover:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Verified Stage</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
