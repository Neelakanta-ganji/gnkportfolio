"use client";

import React from "react";
import { motion } from "framer-motion";
import { FREELANCE_PROJECTS } from "@/data/portfolioData";
import { sound } from "@/lib/sound";
import {
  ExternalLink,
  Globe,
  CheckCircle2,
  Dumbbell,
  UtensilsCrossed,
  Crown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function FreelanceSection() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "gnk-gym":
        return Dumbbell;
      case "savoria-food":
        return UtensilsCrossed;
      case "gnk-luxury":
        return Crown;
      default:
        return Globe;
    }
  };

  return (
    <section id="freelance" className="relative py-14 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-16 space-y-3">
        <div className="flex items-center gap-2 font-sans text-xs text-purple-400 font-semibold tracking-[0.25em] uppercase">
          <Globe className="w-4 h-4" />
          <span>05 // COMMERCIAL DEMOS & CLIENT EXPERIENCES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase max-w-4xl text-heading-fluid">
          Freelance & Web <span className="text-gradient-purple">Experiences</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed text-body-fluid">
          Designing and developing modern digital experiences for businesses. (Clearly designated as verified freelance showcase demos).
        </p>
      </div>

      {/* 3 Direct Showcase Cards (No View Modes, Direct Links Only) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {FREELANCE_PROJECTS.map((proj, idx) => {
          const IconComponent = getProjectIcon(proj.id);

          return (
            <motion.div
              key={proj.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="group relative rounded-3xl glass-panel bg-gradient-to-b from-[#0e071e]/90 to-[#05020a]/95 border border-white/10 hover:border-purple-400/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)] transition-all p-5 sm:p-7 flex flex-col justify-between overflow-hidden text-left w-full"
            >
              {/* Top ambient color glow matching project */}
              <div
                className="absolute top-0 right-0 w-44 h-44 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: proj.themeColor }}
              />

              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-purple-300 font-mono">
                      DEMO 0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-purple-500/20 text-purple-200 border border-purple-500/30">
                      {proj.type}
                    </span>
                  </div>

                  <div
                    className="w-9 h-9 rounded-2xl flex items-center justify-center border shadow-sm transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${proj.themeColor}15`,
                      borderColor: `${proj.themeColor}40`,
                      color: proj.themeColor,
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Category */}
                <div className="mt-5 space-y-1">
                  <h3 className="text-2xl font-black text-white group-hover:text-purple-200 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    {proj.category}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                  {proj.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  {proj.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: proj.themeColor }}
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Section with Direct Link */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col space-y-3">
                {/* Live URL Snippet */}
                <span className="text-[11px] font-mono text-slate-400 truncate">
                  {proj.liveUrl.replace("https://", "")}
                </span>

                {/* Direct Link Action Button */}
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="glass-button-primary w-full py-3.5 px-5 rounded-full flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase text-white shadow-lg transition-transform group-hover:scale-[1.02]"
                >
                  <span>OPEN LIVE DEMO</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-200" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
