"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends HTMLMotionProps<"a"> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110",
  secondary:
    "bg-white/5 text-white border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20",
  ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  outline:
    "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) {
    return (
      <motion.a
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
);
