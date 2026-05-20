import MetricCard from "@/components/MetricCard";

export default function HeroSection() {
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

          <MetricCard
            label="Optimization"
            value="72%"
          />

          <MetricCard
            label="Clusters"
            value="24"
          />

        </div>

      </div>
    </section>
  );
}