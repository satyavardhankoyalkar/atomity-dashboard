"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import LiveMonitor from "./LiveMonitor";
import PlatformNode from "./PlatformNode";

export default function HeroSection() {
  const [activeProvider, setActiveProvider] =
    useState("AWS");

  return (
    <section className="min-h-screen bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Atomity Dashboard
        </h1>

        <div className="relative mt-24 h-[500px] w-full">

          {/* LIVE MONITOR */}
          <LiveMonitor totalCost="48.2" />

          {/* AWS NODE */}
          <PlatformNode
            name="AWS"
            active={activeProvider === "AWS"}
            onClick={() => setActiveProvider("AWS")}
            className="left-[12%] top-[12%]"
          />

          {/* KUBERNETES CORE */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/20 shadow-2xl backdrop-blur"
          >

            {/* ROTATING RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="absolute inset-[-22px] rounded-full border border-dashed border-cyan-400/20"
            />

            {/* INNER GLOW */}
            <div className="absolute h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />

            {/* KUBERNETES ICON */}
            <div className="relative text-6xl">
              ☸
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}