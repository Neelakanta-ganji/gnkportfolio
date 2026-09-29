"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
    if (touch) return;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectElem = target.closest("[data-cursor-project]");
      const techElem = target.closest("[data-cursor-tech]");
      const interactiveElem = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");

      if (projectElem) {
        setCursorText("VIEW PROJECT →");
        setCursorVariant("text");
      } else if (techElem) {
        setCursorText("EXPLORE");
        setCursorVariant("text");
      } else if (interactiveElem) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handlePointerOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-sans text-[10px] tracking-wider text-black font-bold uppercase"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "text" ? 110 : cursorVariant === "hover" ? 44 : 24,
          height: cursorVariant === "text" ? 36 : cursorVariant === "hover" ? 44 : 24,
          borderRadius: cursorVariant === "text" ? "18px" : "9999px",
          backgroundColor:
            cursorVariant === "text"
              ? "rgba(192, 132, 252, 0.95)"
              : cursorVariant === "hover"
              ? "rgba(168, 85, 247, 0.18)"
              : "rgba(255, 255, 255, 0.06)",
          borderColor:
            cursorVariant === "text"
              ? "rgba(255, 255, 255, 0.8)"
              : cursorVariant === "hover"
              ? "rgba(168, 85, 247, 0.6)"
              : "rgba(255, 255, 255, 0.25)",
          borderWidth: cursorVariant === "text" ? 0 : 1,
          boxShadow:
            cursorVariant === "hover"
              ? "0 0 15px rgba(168, 85, 247, 0.35)"
              : "none",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      >
        {cursorText && (
          <span className="px-2 text-center select-none text-[#030508] font-bold">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny inner center pinpoint */}
      {cursorVariant !== "text" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </>
  );
}
