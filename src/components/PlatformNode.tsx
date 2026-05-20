"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  Server,
  ShieldCheck,
} from "lucide-react";

type PlatformNodeProps = {
  name: string;
  active: boolean;
  className: string;
  onClick: () => void;
};

const providerIcons = {
  AWS: Cloud,
  GCP: Cpu,
  Azure: ShieldCheck,
  Optimization: Cpu,
  "On-Prem": Server,
};

export default function PlatformNode({
  name,
  active,
  className,
  onClick,
}: PlatformNodeProps) {
  const Icon =
    providerIcons[name as keyof typeof providerIcons];

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      className={`absolute ${className}`}
    >
      <div
        className={`group rounded-2xl border px-3 py-3 sm:px-5 sm:py-4 backdrop-blur-xl transition-all duration-500
        ${
          active
            ? "border-cyan-300/70 bg-cyan-400/15 shadow-[0_0_50px_rgba(34,211,238,0.35)]"
            : "border-cyan-400/20 bg-slate-900/80 hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
        }`}
      >
        <div className="flex items-center gap-3">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.25)] sm:h-9 sm:w-9"
          >
            <Icon size={18} />
          </motion.div>

          <span className="text-sm font-medium text-white">
            {name}
          </span>

        </div>
      </div>
    </motion.button>
  );
}