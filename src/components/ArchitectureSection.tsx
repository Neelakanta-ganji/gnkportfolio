"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ARCHITECTURE_LAYERS } from "@/data/portfolioData";
import { sound } from "@/lib/sound";
import {
  Server,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Globe,
  Terminal,
  ArrowRight,
  Layers,
  Activity,
} from "lucide-react";

export default function ArchitectureSection() {
  const [selectedLayer, setSelectedLayer] = useState(ARCHITECTURE_LAYERS[0]);

  const getLayerIcon = (id: string) => {
    switch (id) {
      case "user":
        return Globe;
      case "app":
        return Smartphone;
      case "frontend":
        return Layers;
      case "api":
        return Terminal;
      case "backend":
        return Server;
      case "auth":
        return Shield;
      case "db":
        return Database;
      case "cloud":
        return Cloud;
      default:
        return Server;
    }
  };

  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="flex items-center gap-2 font-sans text-xs text-purple-400 font-semibold tracking-[0.25em] uppercase">
          <Layers className="w-4 h-4" />
          <span>03 // SYSTEMS ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase max-w-4xl">
          I Build Beyond The <span className="text-gradient-purple">Interface.</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          Complete end-to-end data lifecycle from user interaction to distributed persistence, cryptographic verification, and automated cloud delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Pipeline Flow */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          {ARCHITECTURE_LAYERS.map((layer, index) => {
            const Icon = getLayerIcon(layer.id);
            const isSelected = selectedLayer.id === layer.id;

            return (
              <motion.div
                key={layer.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedLayer(layer);
                }}
                onMouseEnter={() => sound.playHover()}
                whileHover={{ x: 6 }}
                className={`p-4 rounded-2xl glass-panel border transition-all cursor-pointer relative overflow-hidden flex items-center justify-between ${
                  isSelected
                    ? "border-purple-400/60 bg-gradient-to-r from-purple-950/40 to-[#0e071e]/85 shadow-[0_0_25px_rgba(168,85,247,0.25)]"
                    : "border-white/10 bg-[#070412]/70 hover:border-white/20"
                }`}
              >
                {/* Step indicator and Icon */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-sans text-xs font-bold transition-colors ${
                      isSelected
                        ? "bg-purple-500 text-white shadow-[0_0_15px_#a855f7]"
                        : "bg-white/[0.05] text-slate-300 border border-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
                        LAYER 0{index + 1}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400">
                        {layer.type}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {layer.label}
                    </h3>
                  </div>
                </div>

                {/* Tech preview snippet */}
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-xs text-slate-300 bg-white/[0.03] px-3 py-1 rounded-lg border border-white/5 font-mono">
                    {layer.tech}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-purple-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Deep Layer Inspector */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/25 bg-gradient-to-b from-[#100824]/90 to-[#070312]/95 shadow-2xl relative overflow-hidden">
            {/* Top HUD Telemetry */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold text-purple-300 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                LAYER ARCHITECTURE INSPECTOR
              </span>
              <span className="text-[11px] text-slate-500 font-mono">
                ACTIVE STATE
              </span>
            </div>

            {/* Layer Details */}
            <div className="mt-6 space-y-4">
              <div>
                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block">
                  {selectedLayer.type}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedLayer.label}
                </h3>
              </div>

              {/* Technologies Applied */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-[10px] text-purple-300 font-semibold tracking-wider uppercase block">
                  TECHNOLOGIES & PROTOCOLS
                </span>
                <p className="font-mono text-sm text-purple-200">
                  {selectedLayer.tech}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block">
                  SYSTEM RESPONSIBILITY
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedLayer.description}
                </p>
              </div>

              {/* Security & Concurrency Guarantee */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-slate-500 block uppercase font-mono">
                    Fault Tolerance
                  </span>
                  <span className="text-xs text-emerald-400 font-bold">
                    Stateless & Partitioned
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-slate-500 block uppercase font-mono">
                    Data Integrity
                  </span>
                  <span className="text-xs text-purple-300 font-bold">
                    ACID + Strong Eviction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
