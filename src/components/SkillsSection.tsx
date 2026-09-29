"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  FramerMotionIcon,
  ShadcnIcon,
  NodejsIcon,
  ExpressIcon,
  MongoDBIcon,
  MySQLIcon,
  PostgreSQLIcon,
  DockerIcon,
  CassandraIcon,
  PythonIcon,
  JavaIcon,
  SupabaseIcon,
  FirebaseIcon,
  RestApiIcon,
  GitHubIcon,
  VercelIcon,
  PostmanIcon,
  FigmaIcon,
  NpmIcon,
  MLIcon,
  GeminiIcon,
  FlutterIcon,
  AndroidIcon,
  AzureIcon,
} from "./TechIcons";
import { sound } from "@/lib/sound";
import { Network, Sparkles } from "lucide-react";

const ALL_PILL_SKILLS = [
  { name: "HTML", Icon: HTML5Icon, category: "frontend" },
  { name: "CSS", Icon: CSS3Icon, category: "frontend" },
  { name: "JavaScript", Icon: JavaScriptIcon, category: "frontend" },
  { name: "TypeScript", Icon: TypeScriptIcon, category: "frontend" },
  { name: "ReactJS", Icon: ReactIcon, category: "frontend" },
  { name: "NextJS", Icon: NextjsIcon, category: "frontend" },
  { name: "Tailwind CSS", Icon: TailwindIcon, category: "frontend" },
  { name: "Framer Motion", Icon: FramerMotionIcon, category: "frontend" },
  { name: "Shadcn", Icon: ShadcnIcon, category: "frontend" },
  { name: "NodeJS", Icon: NodejsIcon, category: "backend" },
  { name: "Supabase", Icon: SupabaseIcon, category: "backend" },
  { name: "ExpressJS", Icon: ExpressIcon, category: "backend" },
  { name: "MongoDB", Icon: MongoDBIcon, category: "database" },
  { name: "MySQL", Icon: MySQLIcon, category: "database" },
  { name: "PostgreSQL", Icon: PostgreSQLIcon, category: "database" },
  { name: "Apache Cassandra", Icon: CassandraIcon, category: "database" },
  { name: "Firebase", Icon: FirebaseIcon, category: "database" },
  { name: "Python", Icon: PythonIcon, category: "ai_backend" },
  { name: "Java", Icon: JavaIcon, category: "backend" },
  { name: "REST API", Icon: RestApiIcon, category: "backend" },
  { name: "Docker", Icon: DockerIcon, category: "devops" },
  { name: "GitHub", Icon: GitHubIcon, category: "devops" },
  { name: "Vercel", Icon: VercelIcon, category: "devops" },
  { name: "Azure", Icon: AzureIcon, category: "devops" },
  { name: "Postman", Icon: PostmanIcon, category: "devops" },
  { name: "Figma", Icon: FigmaIcon, category: "design" },
  { name: "npm", Icon: NpmIcon, category: "devops" },
  { name: "scikit-learn", Icon: MLIcon, category: "ai_backend" },
  { name: "Gemini API", Icon: GeminiIcon, category: "ai_backend" },
  { name: "React Native", Icon: ReactIcon, category: "mobile" },
  { name: "Flutter", Icon: FlutterIcon, category: "mobile" },
  { name: "Android", Icon: AndroidIcon, category: "mobile" },
];

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
  const [hovered, setHovered] = useState<string | null>(null);

  const displayedSkills =
    activeTab === "ALL"
      ? ALL_PILL_SKILLS
      : ALL_PILL_SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-10 text-center">
      {/* Center Amber Triangle Glow Reference (Matching Image 3) */}
      <div className="relative flex flex-col items-center justify-center mb-16">
        {/* Glowing Amber Triangle in Background (Image 3) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 h-48 sm:h-60 pointer-events-none -z-10 flex items-center justify-center">
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
        <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase mb-2">
          BETTER THAN YESTERDAY.
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
          My Tech Stack
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Production technologies, distributed persistence engines, and modern tooling powering digital experiences.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
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

      {/* Tech Pill Badges Pack (Matching Image 3) */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
        {displayedSkills.map((tech) => {
          const { Icon, name } = tech;
          const isHovered = hovered === name;

          return (
            <motion.div
              key={name}
              data-cursor-tech
              onMouseEnter={() => {
                sound.playHover();
                setHovered(name);
              }}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-2.5 rounded-full px-4 py-2.5 cursor-pointer transition-all duration-300 border ${
                isHovered
                  ? "bg-[#1d1236] border-purple-400/70 shadow-[0_0_22px_rgba(168,85,247,0.4)]"
                  : "bg-[#0b0817]/90 border-white/10 hover:border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
              }`}
            >
              <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span
                className={`font-sans text-xs sm:text-[13px] font-semibold tracking-tight transition-colors ${
                  isHovered ? "text-white" : "text-slate-200"
                }`}
              >
                {name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Constellation Pipelines */}
      <div className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl border-white/10 max-w-5xl mx-auto text-left">
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-purple-400 uppercase tracking-widest">
          <Network className="w-4 h-4" />
          <span>Verified Production Pipelines</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[11px] font-bold text-purple-300 block mb-2 tracking-wider">
              FULL-STACK WEB
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              React → Next.js → REST API → Node.js → MongoDB / MySQL → Docker
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[11px] font-bold text-amber-300 block mb-2 tracking-wider">
              ML & THREAT DETECTION
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              Chrome Ext → Flask REST API → XGBoost / scikit-learn → Threat Score
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-[11px] font-bold text-emerald-300 block mb-2 tracking-wider">
              MICROSERVICES PLATFORM
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              Client → Spring Boot → PostgreSQL + Cassandra → Docker Compose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
