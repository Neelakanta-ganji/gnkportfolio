"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ENGINEERING_PROJECTS, Project } from "@/data/portfolioData";
import { sound } from "@/lib/sound";
import {
  Code2,
  ExternalLink,
  Layers,
  Cpu,
  Terminal,
  CheckCircle2,
  X,
  ArrowUpRight,
} from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-14 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10 sm:mb-16 space-y-3">
        <div className="flex items-center gap-2 font-sans text-xs text-purple-400 font-semibold tracking-[0.25em] uppercase">
          <Code2 className="w-4 h-4" />
          <span>04 // PRODUCTION SYSTEMS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase max-w-4xl text-heading-fluid">
          Selected Engineering <span className="text-gradient-purple">Projects</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed text-body-fluid">
          Real-world distributed platforms, machine-learning security extensions, full-stack LMS portals, and financial analytics engines.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {ENGINEERING_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            data-cursor-project
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative rounded-3xl glass-panel bg-gradient-to-b from-[#0e071e]/90 to-[#05020a]/95 border border-white/10 hover:border-purple-400/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)] transition-all p-5 sm:p-8 flex flex-col justify-between overflow-hidden text-left w-full"
          >
            {/* Top Accent Light & Number */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-purple-400">
                  PROJECT 0{idx + 1}
                </span>
                {project.status && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {project.status}
                  </span>
                )}
                {project.date && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] text-slate-400 bg-white/[0.05]">
                    {project.date}
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-500 uppercase font-medium">
                {project.category}
              </span>
            </div>

            {/* Title & Core Description */}
            <div className="my-5 sm:my-6 space-y-3">
              <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.description}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed bg-white/[0.02] p-3 rounded-2xl border border-white/5 font-mono break-words">
                {project.additional}
              </p>
            </div>

            {/* Architecture Pipeline Flow Visual */}
            <div className="mb-5 sm:mb-6 p-3 sm:p-3.5 rounded-2xl bg-black/50 border border-white/10">
              <span className="text-[10px] text-purple-400 block mb-2 uppercase tracking-wider font-semibold">
                ARCHITECTURE TOPOLOGY
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 font-mono">
                {project.flow.map((node, i) => (
                  <React.Fragment key={node}>
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-white/[0.06] text-white text-[11px] sm:text-xs">
                      {node}
                    </span>
                    {i < project.flow.length - 1 && (
                      <span className="text-purple-500">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Technologies Badges */}
            <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-white/[0.03] border border-white/10 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedProject(project);
                }}
                onMouseEnter={() => sound.playHover()}
                className="glass-button-primary flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold text-white w-full sm:w-auto"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
              </button>

              <span className="text-[11px] text-slate-500 font-medium">
                Verified Architecture
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto glass-panel p-5 sm:p-10 rounded-3xl border border-purple-500/30 bg-[#070312] shadow-2xl text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedProject(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] border border-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 mb-6 pr-10">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                  <span>ENGINEERING CASE STUDY</span>
                  {selectedProject.status && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {selectedProject.status}
                    </span>
                  )}
                  {selectedProject.date && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] text-slate-400 bg-white/[0.05]">
                      {selectedProject.date}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Topology */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 mb-6">
                <span className="text-xs text-purple-400 uppercase tracking-widest block mb-2 font-bold">
                  Complete Data Flow
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
                  {selectedProject.flow.map((node, i) => (
                    <React.Fragment key={node}>
                      <span className="px-2.5 py-1 rounded-md bg-white/[0.05] text-purple-200 border border-white/10">
                        {node}
                      </span>
                      {i < selectedProject.flow.length - 1 && (
                        <span className="text-purple-400">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Case Study Grid Sections */}
              <div className="space-y-6 text-sm text-slate-300">
                {/* Overview */}
                <div className="space-y-1">
                  <h4 className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                    01. Architectural Overview
                  </h4>
                  <p className="leading-relaxed">{selectedProject.overview}</p>
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-1">
                    <h5 className="text-xs text-rose-300 font-bold uppercase tracking-wider">
                      Problem Statement
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <h5 className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
                      Engineered Solution
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Details */}
                <div className="space-y-1">
                  <h4 className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                    02. Architecture & Persistence Strategy
                  </h4>
                  <p className="leading-relaxed">{selectedProject.architectureDetails}</p>
                </div>

                {/* Testing & Verification */}
                <div className="space-y-1">
                  <h4 className="text-xs text-slate-400 uppercase tracking-wider font-bold">
                    03. Automated Testing & Verification
                  </h4>
                  <p className="leading-relaxed">{selectedProject.testingDetails}</p>
                </div>

                {/* Result */}
                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                  <h4 className="text-xs text-purple-300 uppercase tracking-wider font-bold">
                    04. Result & System Robustness
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">{selectedProject.result}</p>
                </div>

                {/* Technologies List */}
                <div className="pt-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                    Technologies Stacked:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white/[0.04] border border-white/10 text-purple-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
