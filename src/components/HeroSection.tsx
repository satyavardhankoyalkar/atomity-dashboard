"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnalyticsPanel from "./AnalyticsPanel";
import LiveMonitor from "./LiveMonitor";
import PlatformNode from "./PlatformNode";

export default function HeroSection() {
    const [activeProvider, setActiveProvider] =
        useState("AWS");

    return (
        <section className="min-h-screen bg-slate-950 text-white">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                    Atomity Dashboard
                </h1>
                {/* LIVE MONITOR */}
                <LiveMonitor totalCost="48.2" />

                <div className="relative mt-24 h-[500px] w-full">



                    {/* AWS NODE */}
                    <PlatformNode
                        name="AWS"
                        active={activeProvider === "AWS"}
                        onClick={() => setActiveProvider("AWS")}
                        className="left-[12%] top-[12%]"
                    />
                    {/* GCP */}
                    <PlatformNode
                        name="GCP"
                        active={activeProvider === "GCP"}
                        onClick={() => setActiveProvider("GCP")}
                        className="right-[12%] top-[12%]" />

                    {/* Azure */}
                    <PlatformNode
                        name="Azure"
                        active={activeProvider === "Azure"}
                        onClick={() => setActiveProvider("Azure")}
                        className="right-[18%] bottom-[18%]"
                    />

                    {/* Optimization */}
                    <PlatformNode
                        name="Optimization"
                        active={activeProvider === "Optimization"}
                        onClick={() => setActiveProvider("Optimization")}
                        className="left-[16%] bottom-[18%]"
                    />

                    {/* On-Prem */}
                    <PlatformNode
                        name="On-Prem"
                        active={activeProvider === "On-Prem"}
                        onClick={() => setActiveProvider("On-Prem")}
                        className="left-1/2 bottom-[2%] -translate-x-1/2"
                    />
                    <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full">

                        <defs>
                            <filter id="glow">
                                <feGaussianBlur
                                    stdDeviation="4"
                                    result="coloredBlur"
                                />

                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* AWS LINE */}
                        <motion.line
                            x1="50%"
                            y1="50%"
                            x2="24%"
                            y2="24%"
                            stroke="rgba(34,211,238,0.18)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />

                        <motion.circle
                            r="3"
                            fill="#22d3ee"
                            filter="url(#glow)"
                            animate={{
                                cx: ["24%", "50%"],
                                cy: ["24%", "50%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* GCP LINE */}
                        <motion.line
                            x1="50%"
                            y1="50%"
                            x2="76%"
                            y2="26%"
                            stroke="rgba(34,211,238,0.18)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2 }}
                        />

                        <motion.circle
                            r="3"
                            fill="#22d3ee"
                            filter="url(#glow)"
                            animate={{
                                cx: ["76%", "50%"],
                                cy: ["26%", "50%"],
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* AZURE LINE */}
                        <motion.line
                            x1="50%"
                            y1="50%"
                            x2="74%"
                            y2="74%"
                            stroke="rgba(34,211,238,0.18)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.4 }}
                        />

                        <motion.circle
                            r="3"
                            fill="#22d3ee"
                            filter="url(#glow)"
                            animate={{
                                cx: ["74%", "50%"],
                                cy: ["74%", "50%"],
                            }}
                            transition={{
                                duration: 2.4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* OPTIMIZATION LINE */}
                        <motion.line
                            x1="50%"
                            y1="50%"
                            x2="28%"
                            y2="74%"
                            stroke="rgba(34,211,238,0.18)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.6 }}
                        />

                        <motion.circle
                            r="3"
                            fill="#22d3ee"
                            filter="url(#glow)"
                            animate={{
                                cx: ["28%", "50%"],
                                cy: ["74%", "50%"],
                            }}
                            transition={{
                                duration: 2.6,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* ON PREM LINE */}
                        <motion.line
                            x1="50%"
                            y1="50%"
                            x2="50%"
                            y2="90%"
                            stroke="rgba(34,211,238,0.18)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8 }}
                        />

                        <motion.circle
                            r="3"
                            fill="#22d3ee"
                            filter="url(#glow)"
                            animate={{
                                cx: ["50%", "50%"],
                                cy: ["90%", "50%"],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                    </svg><div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
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
                <AnalyticsPanel
                    activeProvider={activeProvider}
                />

            </div>

        </section>
    );
}