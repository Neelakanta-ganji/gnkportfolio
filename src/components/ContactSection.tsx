"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";
import { GitHubIcon, LinkedInIcon } from "./TechIcons";
import {
  Mail,
  Phone,
  Download,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMsg("Please complete all required fields (Name, Email, Message).");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#a855f7", "#c084fc", "#818cf8", "#ffffff"],
      });
    } catch {
      // Confetti fallback
    }

    const subject = encodeURIComponent(`Project Inquiry: ${formState.projectType} from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Neelakanta,\n\nName: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company || "N/A"}\nProject Type: ${formState.projectType}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:ganjineelakanta0@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 space-y-3">
        <div className="flex items-center gap-2 font-sans text-xs text-purple-400 font-semibold tracking-[0.25em] uppercase">
          <MessageSquare className="w-4 h-4" />
          <span>08 // INITIATE COLLABORATION</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase max-w-4xl leading-tight">
          Let&apos;s Build <br />
          <span className="text-gradient-purple">Something.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Have an idea, product or business that needs a digital experience?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Resume */}
        <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
          {/* Direct Contact Links */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <h3 className="text-xs text-slate-400 uppercase tracking-wider font-bold">
              Direct Inquiries
            </h3>

            {/* Email */}
            <a
              href="mailto:ganjineelakanta0@gmail.com"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                  EMAIL ADDRESS
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors font-mono">
                  ganjineelakanta0@gmail.com
                </span>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919392799404"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-medium">
                  PHONE CONTACT
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors font-mono">
                  +91 9392799404
                </span>
              </div>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ganjineelakanta0@gmail.com"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="glass-button-primary flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white"
            >
              <Mail className="w-4 h-4 text-purple-200" />
              <span>EMAIL ME</span>
            </a>

            <a
              href="tel:+919392799404"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="glass-button flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-200 hover:text-white"
            >
              <Phone className="w-4 h-4 text-purple-400" />
              <span>CALL ME</span>
            </a>

            <a
              href="/resume.pdf"
              download
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="glass-button flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-200 hover:text-white"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://github.com/Neelakanta-ganji"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-3 rounded-full glass-panel bg-white/[0.03] border-white/10 hover:border-purple-400/50 text-white flex items-center gap-2 text-xs font-medium"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>

            <a
              href="https://linkedin.com/in/ganjineelakanta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-3 rounded-full glass-panel bg-white/[0.03] border-white/10 hover:border-purple-400/50 text-white flex items-center gap-2 text-xs font-medium"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 bg-[#080312]/95 shadow-2xl text-left">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Transmission
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-medium">
              Complete the dispatch matrix below to discuss opportunities or product development.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Transmission Prepared</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, {formState.name}! Your message has been prepared for dispatch directly to ganjineelakanta0@gmail.com.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/[0.08] text-white hover:bg-white/[0.15]"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-xs font-medium text-rose-300">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Company & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Corp"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                      Project Type
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0518] border border-white/10 text-white focus:outline-none focus:border-purple-400 transition-colors"
                    >
                      <option value="Full-Stack Web App">Full-Stack Web Application</option>
                      <option value="Microservices Backend">Microservices & Backend APIs</option>
                      <option value="Mobile App Experience">Mobile App (React Native/Flutter)</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
                      <option value="Other Consultation">Other Engineering Collaboration</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product requirements, architectural goals, or team needs..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="glass-button-primary w-full py-3.5 rounded-full text-xs font-bold tracking-widest uppercase text-white flex items-center justify-center gap-2"
                  >
                    <span>SEND MESSAGE →</span>
                    <Send className="w-4 h-4 text-purple-200" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
