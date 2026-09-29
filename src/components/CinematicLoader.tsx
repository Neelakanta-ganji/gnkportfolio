"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export default function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("ng_portfolio_visited");
    const speed = hasVisited ? 12 : 22;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem("ng_portfolio_visited", "true");
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 6) + 4;
        return Math.min(prev + increment, 100);
      });
    }, speed);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#030508] text-white overflow-hidden select-none font-sans"
        >
          {/* Ambient Cosmic Radial Lighting */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />

          {/* Wireframe Rotating Hexagon / Ring */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="w-28 h-28 border border-white/10 rounded-full border-t-purple-400 border-r-indigo-400"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-36 h-36 border border-white/5 rounded-full border-b-purple-500"
            />

            {/* Central Monogram */}
            <div className="absolute flex items-center justify-center">
              <span className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-indigo-300">
                NG
              </span>
            </div>
          </div>

          {/* Title & Status */}
          <div className="flex flex-col items-center text-center space-y-3 z-10">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-300/80">
              Loading Digital Experience
            </span>

            {/* Progress Bar Container */}
            <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage Display */}
            <span className="text-sm tracking-wider text-purple-300 font-semibold font-mono">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>

          {/* Bottom Telemetry Note */}
          <div className="absolute bottom-10 text-[11px] tracking-widest text-slate-500 uppercase font-medium">
            Cosmic Starfield • Full-Stack Systems • Microservices
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
