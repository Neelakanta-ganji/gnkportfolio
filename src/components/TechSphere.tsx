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
  radius = 205,
  highlightCategory = "ALL",
  className = "",
}: TechSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeItem, setActiveItem] = useState<TechItem | null>(null);

  // Compute unit sphere positions using Fibonacci spherical spiral distribution
  const spherePositions = useMemo(() => {
    const N = skills.length;
    return skills.map((_, i) => {
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / N); // 0 to PI
      const theta = Math.PI * (1 + Math.sqrt(5)) * k; // Golden ratio angle
      return {
        x0: Math.sin(phi) * Math.cos(theta),
        y0: Math.cos(phi),
        z0: Math.sin(phi) * Math.sin(theta),
      };
    });
  }, [skills]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animId: number;

    // Rotation angles in radians
    let rotX = 0.25;
    let rotY = 0.35;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Angular velocity
    let velX = prefersReducedMotion ? 0 : 0.0015;
    let velY = prefersReducedMotion ? 0 : 0.003;

    // Target velocity determined by mouse follow
    let targetVelX = prefersReducedMotion ? 0 : 0.0015;
    let targetVelY = prefersReducedMotion ? 0 : 0.003;

    // Pointer & Drag State
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchModeDetermined = false;
    let isTouchScrollingPage = false;
    let isHoveringItem = false;

    // Scaled-down radius specifically optimized for mobile widths (320px - 430px)
    const getRadius = () => {
      const w = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 360);
      if (w < 350) return 80;
      if (w < 400) return 90;
      if (w < 480) return 100;
      if (w < 640) return 120;
      if (w < 1024) return 160;
      return radius;
    };

    // Mouse Move handler - sphere follows the cursor smoothly
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) return;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates from -1 to 1
      const nx = (e.clientX - centerX) / (rect.width / 2 || 1);
      const ny = (e.clientY - centerY) / (rect.height / 2 || 1);

      const distance = Math.min(1.5, Math.hypot(nx, ny));
      if (distance < 1.4) {
        targetVelY = nx * 0.015;
        targetVelX = -ny * 0.015;
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

    // Pointer events for desktop drag
    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isDragging = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !isDragging) return;
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

    // Mobile Touch Handling: Smart distinction between vertical page scrolling & horizontal globe steering
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        lastPointerX = touchStartX;
        lastPointerY = touchStartY;
        touchModeDetermined = false;
        isTouchScrollingPage = false;
        isDragging = false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      if (!touchModeDetermined) {
        const diffX = Math.abs(currentX - touchStartX);
        const diffY = Math.abs(currentY - touchStartY);

        if (diffX > 7 || diffY > 7) {
          touchModeDetermined = true;
          if (diffY > diffX) {
            isTouchScrollingPage = true;
            isDragging = false;
            return;
          } else {
            isTouchScrollingPage = false;
            isDragging = true;
          }
        }
      }

      if (isDragging && !isTouchScrollingPage) {
        const dx = currentX - lastPointerX;
        const dy = currentY - lastPointerY;
        lastPointerX = currentX;
        lastPointerY = currentY;

        velY = dx * 0.007;
        velX = -dy * 0.007;
        rotY += velY;
        rotX += velX;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      touchModeDetermined = false;
      isTouchScrollingPage = false;
    };

    // Animation Loop (60-120fps)
    const render = () => {
      const currentRadius = getRadius();

      if (!isDragging) {
        const lerpFactor = isHoveringItem ? 0.02 : 0.06;
        velX += (targetVelX - velX) * lerpFactor;
        velY += (targetVelY - velY) * lerpFactor;

        if (isHoveringItem) {
          velX *= 0.85;
          velY *= 0.85;
        }

        rotX += velX;
        rotY += velY;
      }

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      spherePositions.forEach((pos, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        // 3D rotation matrix calculation
        const y1 = pos.y0 * cosX - pos.z0 * sinX;
        const z1 = pos.y0 * sinX + pos.z0 * cosX;

        const x2 = pos.x0 * cosY + z1 * sinY;
        const z2 = -pos.x0 * sinY + z1 * cosY;
        const y2 = y1;

        // Offset from container center (because items have left: 50%, top: 50%)
        const offsetX = x2 * currentRadius;
        const offsetY = y2 * currentRadius;

        // Depth factor (0 = back, 1 = front)
        const zNorm = (z2 + 1) / 2;

        // Mobile-tuned depth scaling: 0.55x at back, 1.15x at front
        const scale = 0.55 + 0.60 * zNorm;

        // Depth fading for authentic 3D atmosphere
        const depthOpacity = 0.22 + 0.78 * Math.pow(zNorm, 1.4);

        // Active category filter state
        const itemCategory = skills[i]?.category;
        const isCategoryActive =
          highlightCategory === "ALL" || itemCategory === highlightCategory;
        const finalOpacity = isCategoryActive ? depthOpacity : depthOpacity * 0.2;

        const zIndex = Math.floor(zNorm * 100) + 10;

        // Apply hardware-accelerated transform relative to center (left:50%, top:50%)
        el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = `${finalOpacity}`;
        el.style.zIndex = `${zIndex}`;

        if (zNorm < 0.26) {
          el.style.filter = "blur(1px)";
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

    // Initial render trigger
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
  }, [spherePositions, radius, highlightCategory, skills]);

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
        className="relative w-full max-w-full h-[260px] xs:h-[280px] sm:h-[350px] md:h-[480px] touch-pan-y cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden sm:overflow-visible"
        aria-label="3D Interactive Tech Stack Logo Sphere"
      >
        {/* Atmospheric Glow & Orbital Core */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Central Stardust Nebula Core */}
          <div className="w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-transparent blur-3xl pointer-events-none" />
          <div className="w-20 sm:w-32 md:w-48 h-20 sm:h-32 md:h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

          {/* Planetary Orbital Ring (Horizontal) */}
          <div className="absolute w-[180px] sm:w-[260px] md:w-[360px] h-[85px] sm:h-[130px] md:h-[180px] rounded-[100%] border border-purple-500/20 rotate-12 opacity-60 pointer-events-none shadow-[0_0_20px_rgba(168,85,247,0.15)]" />

          {/* Planetary Orbital Ring (Vertical Ellipse) */}
          <div className="absolute w-[110px] sm:w-[170px] md:w-[230px] h-[170px] sm:h-[260px] md:h-[380px] rounded-[100%] border border-indigo-500/15 -rotate-45 opacity-40 pointer-events-none" />
        </div>

        {/* 3D Sphere Logos: Centered at 50% 50% for guaranteed layout stability */}
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
              className={`absolute left-1/2 top-1/2 cursor-pointer transition-colors duration-200 group ${
                isSelected ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-[#030508]" : ""
              }`}
              style={{
                willChange: "transform, opacity",
              }}
              title={name}
            >
              {/* Glass Capsule Badge with Glow */}
              <div
                className={`relative flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1.5 md:px-3.5 md:py-2 rounded-full backdrop-blur-xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#1f143d] border-purple-400 text-white shadow-[0_0_24px_rgba(168,85,247,0.6)]"
                    : "bg-[#0b0818]/90 border-white/10 hover:border-purple-400/50 hover:bg-[#160f2e] text-slate-200 shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                }`}
              >
                {/* Tech Icon */}
                <div className="shrink-0 flex items-center justify-center transition-transform group-hover:scale-115">
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </div>

                {/* Tech Name */}
                <span className="font-sans text-[9px] sm:text-[11px] md:text-xs font-semibold tracking-tight whitespace-nowrap">
                  {name}
                </span>

                {/* Ambient Brand Accent Dot */}
                <span
                  className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Active Tech Inspector / Tooltip Bar */}
      <div className="w-full max-w-md px-2 sm:px-4 mt-2">
        <div className="glass-panel p-2.5 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl border-white/10 shadow-2xl flex items-center justify-between gap-2.5 sm:gap-3 min-h-[52px] sm:min-h-[64px]">
          {activeItem ? (
            <>
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center border shrink-0"
                  style={{
                    backgroundColor: `${activeItem.color}15`,
                    borderColor: `${activeItem.color}40`,
                    boxShadow: `0 0 15px ${activeItem.color}30`,
                  }}
                >
                  <activeItem.Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <h4 className="font-bold text-white text-xs sm:text-sm tracking-tight truncate">
                      {activeItem.name}
                    </h4>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] sm:text-[10px] font-mono font-medium border border-purple-400/20 whitespace-nowrap">
                      {activeItem.categoryLabel}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 truncate">
                    {activeItem.description}
                  </p>
                </div>
              </div>
              <button
                onClick={resetRotation}
                className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
                title="Reset Inspection"
              >
                <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </>
          ) : (
            <div className="w-full flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400 py-1 text-center">
              <Compass className="w-3.5 h-3.5 text-purple-400 animate-spin shrink-0" style={{ animationDuration: "12s" }} />
              <span className="truncate">Swipe or hover 3D globe to inspect stack</span>
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
