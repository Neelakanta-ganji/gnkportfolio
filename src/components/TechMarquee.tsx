"use client";

import React from "react";
import { TECH_SKILLS_DATA, TechItem } from "./TechSphere";
import { sound } from "@/lib/sound";

interface TechMarqueeProps {
  skills?: TechItem[];
  speed?: "normal" | "slow" | "fast";
  dualRow?: boolean;
  className?: string;
  showCategoryTag?: boolean;
}

export default function TechMarquee({
  skills = TECH_SKILLS_DATA,
  speed = "normal",
  dualRow = true,
  className = "",
  showCategoryTag = true,
}: TechMarqueeProps) {
  // Split skills into two balanced sets if dualRow is enabled
  const row1Skills = dualRow
    ? skills.slice(0, Math.ceil(skills.length / 2))
    : skills;
  const row2Skills = dualRow
    ? skills.slice(Math.ceil(skills.length / 2))
    : [];

  const renderBadge = (tech: TechItem, index: number, prefix: string) => {
    const { Icon, name, color, categoryLabel } = tech;

    return (
      <div
        key={`${prefix}-${name}-${index}`}
        data-cursor-tech
        onClick={() => sound.playClick()}
        onMouseEnter={() => sound.playHover()}
        className="group relative flex items-center gap-2.5 sm:gap-3 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 cursor-pointer select-none transition-all duration-300 border bg-[#0a0717]/85 border-white/10 hover:border-purple-400/60 hover:bg-[#191038] shadow-[0_4px_18px_rgba(0,0,0,0.5)] shrink-0"
      >
        {/* Brand Ambient Glow on Hover */}
        <div
          className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle, ${color}35 0%, transparent 70%)`,
          }}
        />

        {/* Crisp SVG Tech Icon */}
        <div className="shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Tech Label in Apple SF Pro */}
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors whitespace-nowrap">
          {name}
        </span>

        {/* Category Pill Tag */}
        {showCategoryTag && (
          <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-slate-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors border border-white/5">
            {categoryLabel}
          </span>
        )}

        {/* Ambient Brand Color Accent Dot */}
        <span
          className="w-1.5 h-1.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity shrink-0 shadow-sm"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  };

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 marquee-pause-hover ${className}`}
      aria-label="Infinite Tech Stack Logo Marquee"
    >
      {/* Edge Fade Masks: CSS Gradient Mask + Edge Atmospheric Blends */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-[#030508] via-[#030508]/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-[#030508] via-[#030508]/80 to-transparent z-20" />

      <div className="marquee-fade-mask space-y-3.5 sm:space-y-4">
        {/* ROW 1: Glides Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left flex items-center gap-3 sm:gap-4 shrink-0">
            {/* First Set */}
            {row1Skills.map((tech, i) => renderBadge(tech, i, "row1-a"))}
            {/* Duplicated for seamless loop */}
            {row1Skills.map((tech, i) => renderBadge(tech, i, "row1-b"))}
          </div>
        </div>

        {/* ROW 2 (Optional Dual Direction): Glides Right */}
        {dualRow && row2Skills.length > 0 && (
          <div className="overflow-hidden flex">
            <div className="animate-marquee-right flex items-center gap-3 sm:gap-4 shrink-0">
              {/* First Set */}
              {row2Skills.map((tech, i) => renderBadge(tech, i, "row2-a"))}
              {/* Duplicated for seamless loop */}
              {row2Skills.map((tech, i) => renderBadge(tech, i, "row2-b"))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
