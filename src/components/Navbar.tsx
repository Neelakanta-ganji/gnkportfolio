"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Volume2, VolumeX, Menu, X, ArrowUpRight, Mail, Phone } from "lucide-react";
import { sound } from "@/lib/sound";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "FREELANCE", href: "#freelance" },
  { name: "PROCESS", href: "#process" },
  { name: "SECURITY", href: "#security" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    setSoundActive(sound.isEnabled());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // If near the top, highlight home
      if (window.scrollY < 240) {
        setActiveSection("home");
        return;
      }

      const scrollPos = window.scrollY + 180;
      const sections = NAV_LINKS.map((l) => l.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleSoundChange = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setSoundActive(customEvent.detail);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("portfolio_sound_change", handleSoundChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("portfolio_sound_change", handleSoundChange);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
  };

  // Smooth programmatic scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    const targetId = href.substring(1);
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    if (targetId === "home") {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, options?: { offset?: number; duration?: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.15 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: { offset?: number; duration?: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(targetEl, {
          offset: -85,
          duration: 1.15,
        });
      } else {
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 85;
        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2.5 sm:px-8 pt-2 sm:pt-4 transition-all duration-300">
        <nav
          className={`w-full max-w-7xl flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "glass-panel bg-[#070412]/95 shadow-[0_10px_35px_rgba(0,0,0,0.85)] border-purple-500/25"
              : "bg-[#06030f]/60 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Monogram & Avatar Brand */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group min-w-0"
            aria-label="Neelakanta Ganji Home"
          >
            <div className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-purple-400/60 shadow-[0_0_12px_rgba(168,85,247,0.4)] shrink-0">
              <Image
                src="/neelakanta-ganji.jpg"
                alt="Neelakanta Ganji"
                fill
                className="object-cover object-top"
                sizes="36px"
              />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white leading-tight truncate max-w-[115px] xs:max-w-[160px] sm:max-w-none">
                Neelakanta Ganji
              </span>
              <span className="text-[10px] text-purple-300/90 font-semibold tracking-wider hidden sm:inline">
                Full Stack &amp; App Dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links Pill Container with Fluid Layout Spring Animation */}
          <div className="hidden xl:flex items-center gap-1 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-full select-none ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">
                    {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        mass: 0.8,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Desktop Audio Button */}
            <button
              onClick={toggleSound}
              aria-label={`Toggle sound: ${soundActive ? "ON" : "OFF"}`}
              title={`Sound ${soundActive ? "ON" : "OFF"}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/15 bg-white/[0.04] text-slate-200 hover:text-white hover:border-purple-400/50 transition-all shadow-sm"
            >
              {soundActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  <span className="text-[11px] font-semibold">Sound ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-[11px]">Sound OFF</span>
                </>
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wide text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.55)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)] transition-all shrink-0"
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-1.5 sm:p-2 rounded-full border border-purple-500/30 bg-purple-950/40 text-white hover:bg-purple-900/60 transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-purple-200" /> : <Menu className="w-4 h-4 text-purple-200" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Immersive Mobile Navigation Overlay (100% Solid & Isolated) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[100] bg-gradient-to-b from-[#0a0414] via-[#05020c] to-[#030107] flex flex-col justify-between p-5 sm:p-7 min-h-[100dvh] overflow-y-auto animate-in fade-in duration-200">
          {/* Ambient top light glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-purple-600/20 blur-3xl -z-10" />

          {/* Top Bar inside overlay */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.5)] shrink-0">
                <Image
                  src="/neelakanta-ganji.jpg"
                  alt="Neelakanta Ganji"
                  fill
                  className="object-cover object-top"
                  sizes="40px"
                />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold text-white leading-tight">
                  Neelakanta Ganji
                </h3>
                <span className="text-[11px] text-purple-300 font-medium">
                  Full-Stack &amp; App Developer
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-full bg-white/[0.08] border border-white/10 text-white hover:bg-white/[0.16] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-purple-300" />
            </button>
          </div>

          {/* Navigation Links in Big, Elegant Apple SF Pro Typography */}
          <div className="my-auto py-4 flex flex-col space-y-1.5 overflow-y-auto">
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-purple-500/20 text-white font-bold border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="text-base font-bold tracking-tight">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-purple-400/80">
                    0{idx + 1}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Bottom Actions inside overlay */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3 shrink-0">
            <div className="grid grid-cols-2 gap-2.5">
              {/* Resume Download */}
              <a
                href="/resume.pdf"
                download
                onClick={() => sound.playClick()}
                className="glass-button-primary py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-white shadow-md"
              >
                <Download className="w-3.5 h-3.5 text-purple-200" />
                <span>RESUME (PDF)</span>
              </a>

              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                className="glass-button py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-200 border border-white/10 bg-white/[0.05]"
              >
                {soundActive ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>AUDIO ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span>AUDIO OFF</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 pt-1 text-[11px] text-slate-400">
              <a
                href="mailto:ganjineelakanta0@gmail.com"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="truncate">ganjineelakanta0@gmail.com</span>
              </a>
              <a
                href="tel:+919392799404"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>+91 9392799404</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
