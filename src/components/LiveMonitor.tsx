"use client";

import { motion } from "framer-motion";

type LiveMonitorProps = {
  totalCost: string;
};

export default function LiveMonitor({
  totalCost,
}: LiveMonitorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute right-4 top-4 z-30 sm:right-6 sm:top-6"
    >
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-3 w-3 rounded-full bg-emerald-400"
          />

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
              Live Cost Monitor
            </p>

            <h3 className="mt-1 text-2xl font-bold text-white">
              ${totalCost}k
            </h3>

            <p className="text-xs text-emerald-100">
              Live infrastructure analytics
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}