"use client";

type AnalyticsPanelProps = {
  activeProvider: string;
};

export default function AnalyticsPanel({
  activeProvider,
}: AnalyticsPanelProps) {
  return (
    <section className="mt-24">

      <div className="rounded-[32px] border border-cyan-400/10 bg-cyan-400/5 p-8 backdrop-blur-xl">

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

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm text-slate-400">
                Cloud Spend
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                $48.2k
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm text-slate-400">
                Efficiency
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                82%
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm text-slate-400">
                Clusters
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                12
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}