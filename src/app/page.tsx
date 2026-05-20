"use client";

import { useState } from "react";
import MetricCard from "@/components/MetricCard";
import PlatformNode from "@/components/PlatformNode";

export default function HeroSection() {
  const [activeProvider, setActiveProvider] =
    useState("AWS");

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-5xl font-bold">
          Atomity Dashboard
        </h1>

        <div className="mt-10 flex flex-wrap gap-4">

          <MetricCard
            label="Monthly Spend"
            value="$48.2k"
          />

        </div>

        <div className="relative mt-24 h-[500px] w-full">

          <PlatformNode
            name="AWS"
            active={activeProvider === "AWS"}
            onClick={() => setActiveProvider("AWS")}
            className="left-[20%] top-[20%]"
          />

        </div>

      </div>
    </section>
  );
}