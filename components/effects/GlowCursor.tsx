"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function GlowCursor() {
  const { x, y } = useMousePosition();

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40 md:block"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl md:block"
        animate={{ x: x - 192, y: y - 192 }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.8 }}
      />
    </>
  );
}
