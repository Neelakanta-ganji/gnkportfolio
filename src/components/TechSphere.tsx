"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
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
  FlutterIcon,
  AndroidIcon,
  AzureIcon,
} from "./TechIcons";
import { Sparkles, Compass, RotateCcw } from "lucide-react";

export interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  category: "frontend" | "backend" | "database" | "ai_backend" | "mobile" | "devops" | "design";
  categoryLabel: string;
  description: string;
}

export const TECH_SKILLS_DATA: TechItem[] = [
  { name: "Next.js", Icon: NextjsIcon, color: "#FFFFFF", category: "frontend", categoryLabel: "Full-Stack Framework", description: "SSR, SSG, Server Actions & App Router" },
  { name: "ReactJS", Icon: ReactIcon, color: "#61DAFB", category: "frontend", categoryLabel: "Frontend Core", description: "Declarative, component-driven UI architecture" },
  { name: "TypeScript", Icon: TypeScriptIcon, color: "#3178C6", category: "frontend", categoryLabel: "Typed JavaScript", description: "Strict static typing & robust codebase safety" },
  { name: "JavaScript", Icon: JavaScriptIcon, color: "#F7DF1E", category: "frontend", categoryLabel: "Web Scripting", description: "ESNext standards & asynchronous event loops" },
  { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8", category: "frontend", categoryLabel: "CSS Framework", description: "Utility-first modern responsive interfaces" },
  { name: "Framer Motion", Icon: FramerMotionIcon, color: "#A855F7", category: "frontend", categoryLabel: "Physics Engine", description: "Hardware-accelerated fluid motion & gestures" },
  { name: "HTML5", Icon: HTML5Icon, color: "#E34F26", category: "frontend", categoryLabel: "Semantic Markup", description: "Accessible semantic structure & modern web APIs" },
  { name: "CSS3", Icon: CSS3Icon, color: "#1572B6", category: "frontend", categoryLabel: "Web Styling", description: "CSS variables, grid, flexbox & 3D transforms" },
  { name: "Shadcn UI", Icon: ShadcnIcon, color: "#FFFFFF", category: "frontend", categoryLabel: "Accessible Primitives", description: "Tailwind-styled Radix primitive components" },
  { name: "Node.js", Icon: NodejsIcon, color: "#66CC33", category: "backend", categoryLabel: "Server Runtime", description: "High-throughput asynchronous event-driven I/O" },
  { name: "Express.js", Icon: ExpressIcon, color: "#E2E8F0", category: "backend", categoryLabel: "Web Framework", description: "Microservice routing & REST API middleware" },
  { name: "Supabase", Icon: SupabaseIcon, color: "#3ECF8E", category: "backend", categoryLabel: "Backend-as-a-Service", description: "Postgres database, realtime auth & storage" },
  { name: "Python", Icon: PythonIcon, color: "#FFD43B", category: "ai_backend", categoryLabel: "AI & Automation", description: "Data science, predictive models & microservices" },
  { name: "Java", Icon: JavaIcon, color: "#E76F00", category: "backend", categoryLabel: "Enterprise Lang", description: "Object-oriented architectures & robust server logic" },
  { name: "REST API", Icon: RestApiIcon, color: "#38BDF8", category: "backend", categoryLabel: "Architecture", description: "Stateless HTTP protocol design & security" },
  { name: "MongoDB", Icon: MongoDBIcon, color: "#47A248", category: "database", categoryLabel: "NoSQL Database", description: "Flexible document store & aggregation pipelines" },
  { name: "PostgreSQL", Icon: PostgreSQLIcon, color: "#336791", category: "database", categoryLabel: "Relational SQL", description: "ACID transactions & relational schema design" },
  { name: "MySQL", Icon: MySQLIcon, color: "#00618A", category: "database", categoryLabel: "RDBMS Engine", description: "High-performance relational persistence" },
  { name: "Cassandra", Icon: CassandraIcon, color: "#1E88E5", category: "database", categoryLabel: "Distributed DB", description: "High-availability column-family distributed storage" },
  { name: "Firebase", Icon: FirebaseIcon, color: "#FFA000", category: "database", categoryLabel: "Cloud Platform", description: "Realtime databases, Cloud Functions & Auth" },
  { name: "Docker", Icon: DockerIcon, color: "#2496ED", category: "devops", categoryLabel: "Containerization", description: "Reproducible container builds & deployments" },
  { name: "GitHub", Icon: GitHubIcon, color: "#FFFFFF", category: "devops", categoryLabel: "Version Control", description: "Git workflows, branch protection & CI/CD Actions" },
  { name: "Vercel", Icon: VercelIcon, color: "#FFFFFF", category: "devops", categoryLabel: "Edge Platform", description: "Global edge CDN & serverless deployments" },
  { name: "Azure", Icon: AzureIcon, color: "#0089D6", category: "devops", categoryLabel: "Cloud Computing", description: "Scalable cloud virtual machines & services" },
  { name: "Postman", Icon: PostmanIcon, color: "#FF6C37", category: "devops", categoryLabel: "API Testing", description: "Automated endpoint testing & test suites" },
  { name: "Figma", Icon: FigmaIcon, color: "#F24E1E", category: "design", categoryLabel: "UI/UX Design", description: "Design systems, user flows & interactive prototypes" },
  { name: "npm", Icon: NpmIcon, color: "#CB3837", category: "devops", categoryLabel: "Package Manager", description: "Dependency graph resolution & package publishing" },
  { name: "scikit-learn", Icon: MLIcon, color: "#F58220", category: "ai_backend", categoryLabel: "Machine Learning", description: "Supervised classification, clustering & modeling" },
  { name: "Gemini API", Icon: GeminiIcon, color: "#9B72CF", category: "ai_backend", categoryLabel: "LLM Intelligence", description: "Multimodal AI agent integration & prompt engineering" },
  { name: "React Native", Icon: ReactIcon, color: "#61DAFB", category: "mobile", categoryLabel: "Cross-Platform", description: "Native iOS and Android mobile app development" },
  { name: "Flutter", Icon: FlutterIcon, color: "#02569B", category: "mobile", categoryLabel: "Mobile SDK", description: "High-performance multi-platform UI framework" },
  { name: "Android", Icon: AndroidIcon, color: "#3DDC84", category: "mobile", categoryLabel: "Mobile OS", description: "Android SDK platform architecture & lifecycle" },
];

interface TechSphereProps {
  skills?: TechItem[];
  radius?: number;
  highlightCategory?: string;
  className?: string;
}

export default function TechSphere({
  skills = TECH_SKILLS_DATA,
  radius = 215,
  highlightCategory = "ALL",
  className = "",
}: TechSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeItem, setActiveItem] = useState<TechItem | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Compute unit sphere positions using Fibonacci spherical spiral distribution
  const spherePositions = useMemo(() => {
    const N = skills.length;
    return skills.map((_, i) => {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / N); // from 0 to PI
      const theta = Math.PI * (1 + Math.sqrt(5)) * k; // Golden ratio angle
      return {
        x0: Math.sin(phi) * Math.cos(theta),
        y0: Math.cos(phi),
        z0: Math.sin(phi) * Math.sin(theta),
      };
    });
  }, [skills]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const container = containerRef.current;
    if (!container) return;

    let animId: number;

    // Rotation angles in radians
    let rotX = 0.25;
    let rotY = 0.35;

    // Angular velocity
    let velX = 0.0015;
    let velY = 0.003;

    // Target velocity determined by mouse follow
    let targetVelX = 0.0015;
    let targetVelY = 0.003;

    // Mouse & Drag State
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let isHoveringItem = false;

    // Dynamic radius based on container size
    const getRadius = () => {
      const w = container.clientWidth || 500;
      if (w < 400) return 135;
      if (w < 640) return 165;
      return radius;
    };

    // Mouse Move handler - sphere follows the mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const nx = (e.clientX - centerX) / (rect.width / 2);
      const ny = (e.clientY - centerY) / (rect.height / 2);

      // Sphere steers towards cursor
      const distance = Math.min(1.5, Math.hypot(nx, ny));
      if (distance < 1.4) {
        targetVelY = nx * 0.016;
        targetVelX = -ny * 0.016;
      } else {
        targetVelX = 0.0012;
        targetVelY = 0.0028;
      }
    };

    const handleMouseLeave = () => {
      targetVelX = 0.0012;
      targetVelY = 0.0028;
      isDragging = false;
    };

    // Pointer down for grab & spin
    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastPointerX;
      const dy = e.clientY - lastPointerY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;

      velY = dx * 0.006;
      velX = -dy * 0.006;
      rotY += velY;
      rotX += velX;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    // Touch events for mobile phones and tablets
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastPointerX = e.touches[0].clientX;
        lastPointerY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - lastPointerX;
      const dy = e.touches[0].clientY - lastPointerY;
      lastPointerX = e.touches[0].clientX;
      lastPointerY = e.touches[0].clientY;

      velY = dx * 0.006;
      velX = -dy * 0.006;
      rotY += velY;
      rotX += velX;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Animation Loop (60-120fps)
    const render = () => {
      const currentRadius = getRadius();
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (!isDragging) {
        // Smoothly interpolate towards target velocity
        const lerpFactor = isHoveringItem ? 0.02 : 0.06;
        velX += (targetVelX - velX) * lerpFactor;
        velY += (targetVelY - velY) * lerpFactor;

        // If hovering an item, gently dampen rotation so user can view or click
        if (isHoveringItem) {
          velX *= 0.85;
          velY *= 0.85;
        }

        rotX += velX;
        rotY += velY;
      }

      // Precalculate trig values
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Update each logo's 3D position, depth scaling, and depth fading
      spherePositions.forEach((pos, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        // 3D rotation matrix calculation
        // 1. Rotate around X axis
        const y1 = pos.y0 * cosX - pos.z0 * sinX;
        const z1 = pos.y0 * sinX + pos.z0 * cosX;

        // 2. Rotate around Y axis
        const x2 = pos.x0 * cosY + z1 * sinY;
        const z2 = -pos.x0 * sinY + z1 * cosY;
        const y2 = y1;

        // Projected 2D coordinates on screen
        const screenX = centerX + x2 * currentRadius;
        const screenY = centerY + y2 * currentRadius;

        // Depth factor: z2 ranges from -1 (deep back) to +1 (front)
        // Normalized z from 0 to 1
        const zNorm = (z2 + 1) / 2;

        // Depth scaling: 0.52x at furthest back, 1.18x at nearest front
        const scale = 0.52 + 0.66 * zNorm;

        // Depth fading: 0.18 opacity at back, 1.0 at front
        // Exponential falloff gives rich realistic atmospheric perspective
        const depthOpacity = 0.18 + 0.82 * Math.pow(zNorm, 1.5);

        // Check if filtered by active category
        const itemCategory = skills[i]?.category;
        const isCategoryActive =
          highlightCategory === "ALL" || itemCategory === highlightCategory;
        const finalOpacity = isCategoryActive ? depthOpacity : depthOpacity * 0.25;

        // Z-Index for proper overlapping
        const zIndex = Math.floor(zNorm * 100) + 10;

        // Direct hardware-accelerated style transform
        el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = `${finalOpacity}`;
        el.style.zIndex = `${zIndex}`;

        // Add soft blur filter to items far in the back
        if (zNorm < 0.28) {
          el.style.filter = "blur(1.2px)";
        } else {
          el.style.filter = "none";
        }
      });

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [spherePositions, radius, highlightCategory, skills, isClient]);

  const resetRotation = () => {
    sound.playClick();
    setActiveItem(null);
  };

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto flex flex-col items-center select-none ${className}`}
    >
      {/* 3D Sphere Interactive Stage */}
      <div
        ref={containerRef}
        className="relative w-full h-[460px] sm:h-[540px] md:h-[580px] touch-none cursor-grab active:cursor-grabbing flex items-center justify-center overflow-visible"
        aria-label="3D Interactive Tech Stack Logo Sphere"
      >
        {/* Atmospheric Glow & Orbital Core */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* Central Stardust Nebula Core */}
          <div className="w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-transparent blur-3xl" />
          <div className="w-36 sm:w-52 h-36 sm:h-52 rounded-full bg-amber-500/10 blur-2xl" />

          {/* Celestial Orbital Ring 1 (Horizontal) */}
          <div className="absolute w-[280px] sm:w-[380px] h-[140px] sm:h-[190px] rounded-[100%] border border-purple-500/15 rotate-12 opacity-60 pointer-events-none" />

          {/* Celestial Orbital Ring 2 (Vertical Ellipse) */}
          <div className="absolute w-[180px] sm:w-[240px] h-[300px] sm:h-[400px] rounded-[100%] border border-indigo-500/10 -rotate-45 opacity-40 pointer-events-none" />
        </div>

        {/* 3D Sphere Logos */}
        {skills.map((skill, index) => {
          const { Icon, name, color } = skill;
          const isSelected = activeItem?.name === name;

          return (
            <div
              key={name}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={(e) => {
                e.stopPropagation();
                sound.playClick();
                setActiveItem(skill);
              }}
              onMouseEnter={() => {
                sound.playHover();
                setActiveItem(skill);
              }}
              className={`absolute top-0 left-0 cursor-pointer transition-colors duration-200 group ${
                isSelected ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-[#030508]" : ""
              }`}
              style={{
                willChange: "transform, opacity",
              }}
              title={name}
            >
              {/* Glass Capsule Badge with Glow */}
              <div
                className={`relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#1f143d] border-purple-400 text-white shadow-[0_0_24px_rgba(168,85,247,0.6)]"
                    : "bg-[#0b0818]/85 border-white/10 hover:border-purple-400/50 hover:bg-[#160f2e] text-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                }`}
              >
                {/* Tech Icon */}
                <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-115">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Tech Name */}
                <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-tight whitespace-nowrap">
                  {name}
                </span>

                {/* Ambient Brand Accent Dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Active Tech Inspector / Tooltip Bar */}
      <div className="w-full max-w-md px-4 mt-2">
        <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border-white/10 shadow-2xl flex items-center justify-between gap-3 min-h-[64px]">
          {activeItem ? (
            <>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                  style={{
                    backgroundColor: `${activeItem.color}15`,
                    borderColor: `${activeItem.color}40`,
                    boxShadow: `0 0 15px ${activeItem.color}30`,
                  }}
                >
                  <activeItem.Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white text-sm tracking-tight">
                      {activeItem.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono font-medium border border-purple-400/20">
                      {activeItem.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {activeItem.description}
                  </p>
                </div>
              </div>
              <button
                onClick={resetRotation}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
                title="Reset Inspection"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-center gap-2 text-xs text-slate-400 py-1">
              <Compass className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: "12s" }} />
              <span>Hover or drag the 3D globe to inspect technologies</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
