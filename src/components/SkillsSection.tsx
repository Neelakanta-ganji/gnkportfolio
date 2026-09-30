"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechSphere, { TECH_SKILLS_DATA, TechItem } from "./TechSphere";
import TechMarquee from "./TechMarquee";
import { sound } from "@/lib/sound";
import { Network, Globe2, SlidersHorizontal, Sparkles, LayoutGrid } from "lucide-react";

const FILTER_TABS = [
  { id: "ALL", label: "ALL TECH" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "database", label: "DATABASE" },
  { id: "ai_backend", label: "AI & ML" },
  { id: "mobile", label: "MOBILE" },
  { id: "devops", label: "DEVOPS & TOOLS" },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [viewMode, setViewMode] = useState<"showcase" | "globe" | "marquee" | "grid">("showcase");
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const displayedSkills =
    activeTab === "ALL"
      ? TECH_SKILLS_DATA
      : TECH_SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-3 sm:px-8 max-w-7xl mx-auto z-10 text-center overflow-hidden">
      {/* Center Amber Triangle Glow Reference */}
      <div className="relative flex flex-col items-center justify-center mb-8 sm:mb-12">
        {/* Glowing Amber Triangle in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 h-40 sm:h-60 pointer-events-none -z-10 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-amber-500 drop-shadow-[0_0_35px_rgba(245,158,11,0.6)]"
            fill="none"
          >
            <polygon
              points="50,15 90,85 10,85"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeLinejoin="round"
              className="opacity-80"
            />
          </svg>
          <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full" />
        </div>

        {/* Section Header */}
        <span className="font-sans text-[11px] sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase mb-2">
          BETTER THAN YESTERDAY.
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
          My Tech Stack
        </h2>
        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed px-2">
          Production technologies, distributed persistence engines, and modern tooling powering digital experiences.
        </p>
      </div>

      {/* Control Bar: Categories (Swipeable on mobile) & View Switcher */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4 max-w-5xl mx-auto mb-8 sm:mb-10 w-full px-1">
        {/* Filter Tabs - Horizontal swipe rail on mobile with no scrollbar */}
        <div className="w-full md:w-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none md:flex-wrap md:justify-center px-1">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(tab.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-3 py-1.5 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide transition-all shrink-0 whitespace-nowrap ${
                  isActive
                    ? "bg-purple-500/30 text-white border border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher - Compact fit on mobile */}
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 max-w-full overflow-x-auto scrollbar-none">
          <button
            onClick={() => {
              sound.playClick();
              setViewMode("showcase");
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
              viewMode === "showcase"
                ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
            title="Interactive 3D Sphere & Infinite Marquee"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Showcase</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setViewMode("globe");
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
              viewMode === "globe"
                ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
            title="3D Rotating Logo Sphere"
          >
            <Globe2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>3D Globe</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setViewMode("marquee");
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
              viewMode === "marquee"
                ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
            title="Infinite Logo Marquee Slider"
          >
            <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Marquee</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setViewMode("grid");
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
              viewMode === "grid"
                ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
            title="Grid Badges"
          >
            <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Grid</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <AnimatePresence mode="wait">
        {/* 1. 3D Logo Sphere (Tag Cloud Globe) */}
        {(viewMode === "showcase" || viewMode === "globe") && (
          <motion.div
            key="globe-display"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full my-2 sm:my-4"
          >
            <TechSphere highlightCategory={activeTab} />
          </motion.div>
        )}

        {/* 2. Infinite Logo Marquee (Logo Ticker) */}
        {(viewMode === "showcase" || viewMode === "marquee") && (
          <motion.div
            key="marquee-display"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.4 }}
            className="w-full pt-6 sm:pt-8 pb-2 sm:pb-4"
          >
            {/* Visual separator label */}
            {viewMode === "showcase" && (
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <div className="h-px w-8 sm:w-12 bg-white/10" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                  Continuous Stream Ticker
                </span>
                <div className="h-px w-8 sm:w-12 bg-white/10" />
              </div>
            )}
            <TechMarquee dualRow={true} />
          </motion.div>
        )}

        {/* 3. Static Grid View */}
        {viewMode === "grid" && (
          <motion.div
            key="grid-display"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto py-4 sm:py-6 px-1"
          >
            {displayedSkills.map((tech) => {
              const { Icon, name, color } = tech;
              const isHovered = hoveredBadge === name;

              return (
                <motion.div
                  key={name}
                  data-cursor-tech
                  onMouseEnter={() => {
                    sound.playHover();
                    setHoveredBadge(name);
                  }}
                  onMouseLeave={() => setHoveredBadge(null)}
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center gap-2 sm:gap-2.5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2.5 cursor-pointer transition-all duration-300 border ${
                    isHovered
                      ? "bg-[#1d1236] border-purple-400/70 shadow-[0_0_22px_rgba(168,85,247,0.4)]"
                      : "bg-[#0b0817]/90 border-white/10 hover:border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <span
                    className={`font-sans text-[11px] sm:text-[13px] font-semibold tracking-tight transition-colors ${
                      isHovered ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {name}
                  </span>
                  {color && (
                    <span
                      className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity shrink-0"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Constellation Pipelines */}
      <div className="mt-12 sm:mt-16 glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-white/10 max-w-5xl mx-auto text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-purple-400 uppercase tracking-widest">
          <Network className="w-4 h-4 shrink-0" />
          <span>Verified Production Pipelines</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] sm:text-[11px] font-bold text-purple-300 block mb-1.5 sm:mb-2 tracking-wider">
              FULL-STACK WEB
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono break-words">
              React → Next.js → REST API → Node.js → MongoDB / MySQL → Docker
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 block mb-1.5 sm:mb-2 tracking-wider">
              ML & THREAT DETECTION
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono break-words">
              Chrome Ext → Flask REST API → XGBoost / scikit-learn → Threat Score
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-300 block mb-1.5 sm:mb-2 tracking-wider">
              MICROSERVICES PLATFORM
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono break-words">
              Client → Spring Boot → PostgreSQL + Cassandra → Docker Compose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
