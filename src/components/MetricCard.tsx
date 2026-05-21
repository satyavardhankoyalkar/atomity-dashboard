type MetricCardProps = {
    label: string;
    value: string;
};

export default function MetricCard({
    label,
    value,
}: MetricCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <p className="text-sm text-slate-400">
                {label}
            </p>

            <h3 className="mt-2 text-2xl font-semibold text-white">
                {value}
            </h3>
        </div>
    );
}