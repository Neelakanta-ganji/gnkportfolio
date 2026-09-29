"use client";

import React from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./TechIcons";
import { sound } from "@/lib/sound";
import { Download, ArrowUp, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#04010a] text-white pt-16 pb-12 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <span className="font-sans text-sm font-black text-purple-400">
                NG
              </span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-base tracking-tight text-white">
                NEELAKANTA GANJI
              </h3>
              <p className="text-xs text-purple-300 font-medium">
                Full-Stack Web Developer & App Developer
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-400">
            {["Home", "About", "Skills", "Projects", "Freelance", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-purple-300 transition-colors"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="/resume.pdf"
              download
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="text-purple-400 hover:text-white flex items-center gap-1 font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Icons & Back-to-Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Neelakanta-ganji"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-purple-400/50 transition-colors"
              aria-label="Official GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com/in/ganjineelakanta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:border-purple-400/50 transition-colors"
              aria-label="Official LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="p-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 transition-colors"
              aria-label="Back to top"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:ganjineelakanta0@gmail.com"
              className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>ganjineelakanta0@gmail.com</span>
            </a>
            <a
              href="tel:+919392799404"
              className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>+91 9392799404</span>
            </a>
          </div>

          <div>
            <span>© 2026 Neelakanta Ganji. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
