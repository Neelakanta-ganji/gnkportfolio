"use client";

import React, { useState } from "react";
import TechSphere, { TECH_SKILLS_DATA, TechItem } from "./TechSphere";
import TechMarquee from "./TechMarquee";
import { sound } from "@/lib/sound";
import { Globe2, Sparkles, SlidersHorizontal, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type { TechItem };
export { TECH_SKILLS_DATA, TechSphere, TechMarquee };
export const ALL_SKILLS_PACK = TECH_SKILLS_DATA;

interface TechPackProps {
  compact?: boolean;
  defaultView?: "globe" | "marquee" | "both" | "grid";
}

export default function TechPack({
  compact = false,
  defaultView = "both",
}: TechPackProps) {
  const [viewMode, setViewMode] = useState<"globe" | "marquee" | "both" | "grid">(defaultView);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const filterTabs = [
    { id: "ALL", label: "ALL TECH" },
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
    { id: "database", label: "DATABASE" },
    { id: "ai_backend", label: "AI & ML" },
    { id: "mobile", label: "MOBILE" },
    { id: "devops", label: "DEVOPS & TOOLS" },
  ];

  const displayedSkills =
    activeCategory === "ALL"
      ? TECH_SKILLS_DATA
      : TECH_SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full flex flex-col items-center select-none space-y-8">
      {/* Interactive Controls & Category Bar */}
      {!compact && (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl px-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategory(tab.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
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

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0">
            <button
              onClick={() => {
                sound.playClick();
                setViewMode("both");
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "both"
                  ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Show</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setViewMode("globe");
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "globe"
                  ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>3D Globe</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setViewMode("marquee");
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "marquee"
                  ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Marquee</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setViewMode("grid");
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                viewMode === "grid"
                  ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Showcase Stage */}
      <AnimatePresence mode="wait">
        {(viewMode === "both" || viewMode === "globe") && (
          <motion.div
            key="globe-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <TechSphere highlightCategory={activeCategory} />
          </motion.div>
        )}

        {(viewMode === "both" || viewMode === "marquee") && (
          <motion.div
            key="marquee-stage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="w-full pt-4"
          >
            <TechMarquee dualRow={true} />
          </motion.div>
        )}

        {viewMode === "grid" && (
          <motion.div
            key="grid-stage"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-5xl mx-auto px-4"
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
                  className={`group relative flex items-center gap-2.5 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5 cursor-pointer transition-all duration-300 border ${
                    isHovered
                      ? "bg-[#18112b] border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                      : "bg-[#0b0816]/80 border-white/10 hover:border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                  <span
                    className={`font-sans text-xs sm:text-[13px] font-medium tracking-tight transition-colors ${
                      isHovered ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {name}
                  </span>
                  {color && (
                    <span
                      className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
