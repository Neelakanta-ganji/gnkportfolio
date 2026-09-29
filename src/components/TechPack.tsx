"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sound } from "@/lib/sound";
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
} from "./TechIcons";

export interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  color?: string;
}

export const ALL_SKILLS_PACK: TechItem[] = [
  { name: "HTML", Icon: HTML5Icon, color: "#E34F26" },
  { name: "CSS", Icon: CSS3Icon, color: "#1572B6" },
  { name: "JavaScript", Icon: JavaScriptIcon, color: "#F7DF1E" },
  { name: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6" },
  { name: "ReactJS", Icon: ReactIcon, color: "#61DAFB" },
  { name: "NextJS", Icon: NextjsIcon, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8" },
  { name: "Framer Motion", Icon: FramerMotionIcon, color: "#0055FF" },
  { name: "Shadcn", Icon: ShadcnIcon, color: "#FFFFFF" },
  { name: "NodeJS", Icon: NodejsIcon, color: "#66CC33" },
  { name: "Supabase", Icon: SupabaseIcon, color: "#3ECF8E" },
  { name: "ExpressJS", Icon: ExpressIcon, color: "#E2E8F0" },
  { name: "MongoDB", Icon: MongoDBIcon, color: "#47A248" },
  { name: "MySQL", Icon: MySQLIcon, color: "#00618A" },
  { name: "PostgreSQL", Icon: PostgreSQLIcon, color: "#336791" },
  { name: "Apache Cassandra", Icon: CassandraIcon, color: "#1E88E5" },
  { name: "Python", Icon: PythonIcon, color: "#FFD43B" },
  { name: "Java", Icon: JavaIcon, color: "#E76F00" },
  { name: "Firebase", Icon: FirebaseIcon, color: "#FFA000" },
  { name: "REST API", Icon: RestApiIcon, color: "#38BDF8" },
  { name: "Docker", Icon: DockerIcon, color: "#2496ED" },
  { name: "GitHub", Icon: GitHubIcon, color: "#FFFFFF" },
  { name: "Vercel", Icon: VercelIcon, color: "#FFFFFF" },
  { name: "Postman", Icon: PostmanIcon, color: "#FF6C37" },
  { name: "Figma", Icon: FigmaIcon, color: "#F24E1E" },
  { name: "npm", Icon: NpmIcon, color: "#CB3837" },
  { name: "scikit-learn", Icon: MLIcon, color: "#F58220" },
  { name: "Gemini API", Icon: GeminiIcon, color: "#9B72CF" },
];

interface TechPackProps {
  compact?: boolean;
}

export default function TechPack({ compact = false }: TechPackProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 select-none">
      {ALL_SKILLS_PACK.map((tech) => {
        const { Icon, name, color } = tech;
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
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`group relative flex items-center gap-2.5 rounded-full px-3.5 py-2 sm:px-4 sm:py-2.5 cursor-pointer transition-all duration-300 border ${
              isHovered
                ? "bg-[#18112b] border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
                : "bg-[#0b0816]/80 border-white/10 hover:border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
            }`}
          >
            {/* Icon */}
            <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>

            {/* Label in Apple SF Pro font */}
            <span
              className={`font-sans text-xs sm:text-[13px] font-medium tracking-tight transition-colors ${
                isHovered ? "text-white" : "text-slate-200"
              }`}
            >
              {name}
            </span>

            {/* Ambient hover dot */}
            {color && (
              <span
                className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: color }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
