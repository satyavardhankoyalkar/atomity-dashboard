"use client";
import useProducts from "@/hooks/useProducts";
import { providerData } from "@/data/providerData";
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import {
    motion,
    useInView,
} from "framer-motion";
import { chartData } from "@/data/chartData";
type AnalyticsPanelProps = {
    activeProvider: string;
};

export default function AnalyticsPanel({
    activeProvider,
}: AnalyticsPanelProps) {
    const currentProvider =
        providerData[
        activeProvider as keyof typeof providerData
        ];
    const activeChartData =
        chartData[
        activeProvider as keyof typeof chartData
        ];
    const {
        data,
        isLoading,
        isError,
    } = useProducts();
    const sectionRef = useRef(null);

    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-100px",
    });
    return (
        <motion.section
            ref={sectionRef}
            initial={{
                opacity: 0,
                y: 80,
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        y: 0,
                    }
                    : {}
            }
            transition={{
                duration: 0.9,
                ease: "easeOut",
            }}
            className="mt-24"
        >

            <div className={`rounded-[32px] border border-white/10 bg-gradient-to-br ${currentProvider.color} p-8 backdrop-blur-xl transition-all duration-700`}>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                            Active Provider
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-white">
                            {activeProvider}
                        </h2>

                        <p className="mt-4 max-w-lg text-slate-400">
                            Real-time infrastructure analytics and optimization insights
                            across Kubernetes workloads.
                        </p>
                        {isLoading && (
                            <p className="mt-4 text-cyan-300">
                                Loading analytics...
                            </p>
                        )}

                        {isError && (
                            <p className="mt-4 text-red-400">
                                Failed to load infrastructure data
                            </p>
                        )}



                    </div>

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                    >

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                        >
                            <p className="text-sm text-slate-400">
                                Cloud Spend
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                <AnimatedCounter
                                    value={parseFloat(
                                        currentProvider.spend.replace("$", "")
                                    )}
                                    prefix="$"
                                    suffix="k"
                                />
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                        >
                            <p className="text-sm text-slate-400">
                                Efficiency
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                <AnimatedCounter
                                    value={parseFloat(
                                        currentProvider.efficiency
                                    )}
                                    suffix="%"
                                />
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 20,
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                        >
                            <p className="text-sm text-slate-400">
                                Clusters
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                <AnimatedCounter
                                    value={parseFloat(
                                        currentProvider.clusters
                                    )}
                                />
                            </h3>
                        </motion.div>

                    </motion.div>

                </div>
                <div className="mt-12 h-[300px] w-full">

                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart data={activeChartData}>

                            <defs>

                                <linearGradient
                                    id="colorCost"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#22d3ee"
                                        stopOpacity={0.4}
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#22d3ee"
                                        stopOpacity={0}
                                    />

                                </linearGradient>

                            </defs>

                            <Tooltip
                                contentStyle={{
                                    background: "#08111f",
                                    border:
                                        "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: "16px",
                                }}
                            />

                            <Area
                                type="monotone"
                                dataKey="cost"
                                stroke="#22d3ee"
                                strokeWidth={3}
                                fill="url(#colorCost)"
                            />

                        </AreaChart>

                    </ResponsiveContainer>

                </div>
            </div>

        </motion.section>
    );
}