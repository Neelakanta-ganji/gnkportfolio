"use client";

import React, { useState } from "react";
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
    <section id="skills" className="relative py-12 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10 text-center overflow-x-clip md:overflow-visible w-full max-w-full">
      {/* Center Amber Triangle Glow Reference */}
      <div className="relative flex flex-col items-center justify-center mb-6 sm:mb-10 max-w-full overflow-hidden">
        {/* Glowing Amber Triangle in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-56 h-32 sm:h-56 pointer-events-none -z-10 flex items-center justify-center max-w-full overflow-hidden">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.55)]"
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
        <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase mb-1.5 block">
          BETTER THAN YESTERDAY.
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-heading-fluid">
          My Tech Stack
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto leading-relaxed px-1 text-body-fluid">
          Production technologies, distributed persistence engines, and modern tooling powering digital experiences.
        </p>
      </div>

      {/* Control Bar: Categories & View Switcher (Flex-wrap on mobile) */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 max-w-5xl mx-auto mb-6 sm:mb-8 w-full px-1">
        {/* Filter Tabs - Wrapped into natural responsive rows (Frontend | Backend, etc.) */}
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-lg md:max-w-none mx-auto px-1">
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
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide transition-all shrink-0 ${
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
        <div className="flex flex-wrap items-center justify-center gap-1 p-1 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 max-w-full mx-auto sm:mx-0">
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
              setViewMode("grid");
            }}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
              viewMode === "grid"
                ? "bg-purple-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
            title="Technology Cards Grid"
          >
            <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Cards Grid</span>
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
        </div>
      </div>

      {/* Main Interactive Stage: Clean rendering with zero locks */}
      <div className="w-full max-w-full relative transition-all duration-300 overflow-hidden">
        {/* 1. 3D Logo Sphere (Tag Cloud Globe) */}
        {(viewMode === "showcase" || viewMode === "globe") && (
          <div className="w-full max-w-full my-1 sm:my-3 overflow-hidden">
            <TechSphere highlightCategory={activeTab} />
          </div>
        )}

        {/* 2. Infinite Logo Marquee (Logo Ticker) */}
        {(viewMode === "showcase" || viewMode === "marquee") && (
          <div className="w-full max-w-full overflow-hidden pt-4 sm:pt-6 pb-2 sm:pb-4">
            {/* Visual separator label */}
            {viewMode === "showcase" && (
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <div className="h-px w-8 sm:w-12 bg-white/10" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                  Continuous Stream Ticker
                </span>
                <div className="h-px w-8 sm:w-12 bg-white/10" />
              </div>
            )}
            <TechMarquee dualRow={true} />
          </div>
        )}

        {/* 3. Mobile Technology Cards in Showcase Mode (Under 768px) */}
        {viewMode === "showcase" && (
          <div className="w-full md:hidden pt-4 pb-2 px-1">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-mono tracking-widest text-purple-300/80 uppercase">
                {activeTab === "ALL" ? "Core Technologies" : `${activeTab.toUpperCase()} STACK`} ({displayedSkills.length})
              </span>
              <div className="h-px w-8 bg-white/10" />
            </div>
            {/* 2-column mobile grid on 375-430px, 1 column below 350px */}
            <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-2.5 w-full">
              {displayedSkills.map((tech) => {
                const { Icon, name, color, categoryLabel, description } = tech;
                const isHovered = hoveredBadge === name;

                return (
                  <div
                    key={name}
                    data-cursor-tech
                    onClick={() => {
                      sound.playClick();
                      setHoveredBadge(name);
                    }}
                    onMouseEnter={() => {
                      sound.playHover();
                      setHoveredBadge(name);
                    }}
                    onMouseLeave={() => setHoveredBadge(null)}
                    className={`group relative glass-panel p-3 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-between text-center overflow-hidden cursor-pointer select-none ${
                      isHovered
                        ? "bg-gradient-to-b from-[#180c33]/90 to-[#0e0720]/95 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                        : "bg-[#090514]/75 border-white/10 hover:border-purple-400/30 hover:bg-[#100924]/85 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    {/* Subtle Brand Accent Glow */}
                    <div
                      className="absolute -top-6 -right-6 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                      style={{ backgroundColor: color }}
                    />

                    {/* Centered Icon Container with 3D glowing frame */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 mb-2 shrink-0"
                      style={{
                        backgroundColor: `${color}15`,
                        borderColor: `${color}35`,
                        boxShadow: `0 0 12px ${color}15`,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Centered Technology Name */}
                    <h3 className="font-bold text-xs text-white tracking-tight group-hover:text-purple-200 transition-colors w-full truncate">
                      {name}
                    </h3>

                    {/* Centered Category Badge */}
                    <span className="text-[9px] font-mono text-purple-300/80 uppercase tracking-wider mt-0.5 truncate max-w-full">
                      {categoryLabel}
                    </span>

                    {/* Centered Technology Description */}
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-2 w-full text-center">
                      {description}
                    </p>

                    {/* Bottom Accent Indicator */}
                    <div
                      className="mt-2 w-5 h-0.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity shrink-0"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. Full Technology Cards Grid View (All Devices) */}
        {viewMode === "grid" && (
          <div className="w-full max-w-5xl mx-auto py-3 sm:py-6 px-1">
            {/* Proper responsive grid: 1 col < 350px, 2 cols on 375-430px, 3 cols on sm, 4 cols on lg */}
            <div className="grid grid-cols-1 min-[350px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
              {displayedSkills.map((tech) => {
                const { Icon, name, color, categoryLabel, description } = tech;
                const isHovered = hoveredBadge === name;

                return (
                  <div
                    key={name}
                    data-cursor-tech
                    onClick={() => {
                      sound.playClick();
                      setHoveredBadge(name);
                    }}
                    onMouseEnter={() => {
                      sound.playHover();
                      setHoveredBadge(name);
                    }}
                    onMouseLeave={() => setHoveredBadge(null)}
                    className={`group relative glass-panel p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-between text-center overflow-hidden cursor-pointer select-none ${
                      isHovered
                        ? "bg-gradient-to-b from-[#180c33]/90 to-[#0e0720]/95 border-purple-400/60 shadow-[0_0_22px_rgba(168,85,247,0.3)]"
                        : "bg-[#090514]/75 border-white/10 hover:border-purple-400/30 hover:bg-[#100924]/85 shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    {/* Subtle Brand Ambient Glow */}
                    <div
                      className="absolute -top-6 -right-6 w-16 sm:w-20 h-16 sm:h-20 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                      style={{ backgroundColor: color }}
                    />

                    {/* Centered Icon Container with 3D glowing frame */}
                    <div
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-110 mb-2 shrink-0"
                      style={{
                        backgroundColor: `${color}15`,
                        borderColor: `${color}35`,
                        boxShadow: `0 0 14px ${color}15`,
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Centered Technology Name */}
                    <h3 className="font-bold text-xs sm:text-sm text-white tracking-tight group-hover:text-purple-200 transition-colors w-full truncate">
                      {name}
                    </h3>

                    {/* Centered Category Badge */}
                    <span className="text-[9px] sm:text-[10px] font-mono text-purple-300/80 uppercase tracking-wider mt-0.5 truncate max-w-full">
                      {categoryLabel}
                    </span>

                    {/* Centered Technology Description */}
                    <p className="text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2 w-full text-center">
                      {description}
                    </p>

                    {/* Bottom Accent Indicator */}
                    <div
                      className="mt-2.5 w-5 sm:w-6 h-0.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity shrink-0"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Constellation Pipelines */}
      <div className="mt-8 sm:mt-14 glass-panel p-4 sm:p-7 rounded-2xl sm:rounded-3xl border-white/10 w-full max-w-5xl mx-auto text-left overflow-hidden">
        <div className="flex items-center gap-2 mb-3.5 text-xs font-semibold text-purple-400 uppercase tracking-widest">
          <Network className="w-4 h-4 shrink-0" />
          <span>Verified Production Pipelines</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] sm:text-[11px] font-bold text-purple-300 block mb-1.5 tracking-wider">
              FULL-STACK WEB
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono break-words">
              React → Next.js → REST API → Node.js → MongoDB / MySQL → Docker
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 block mb-1.5 tracking-wider">
              ML & THREAT DETECTION
            </span>
            <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono break-words">
              Chrome Ext → Flask REST API → XGBoost / scikit-learn → Threat Score
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-300 block mb-1.5 tracking-wider">
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
