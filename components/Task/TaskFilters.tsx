export default function TaskFilters() {
  return (
    <div className="lg:col-span-3 space-y-6">
      <section className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
        <p className="text-xs font-bold text-primary mb-4 uppercase">
          Weekly Progress
        </p>

        <div className="flex items-center justify-center mb-4">
          <div className="relative flex items-center justify-center">
            <svg className="w-24 h-24 transform -rotate-90" aria-hidden="true">
              <circle
                className="text-slate-100"
                cx="48"
                cy="48"
                fill="transparent"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
              />
              <circle
                className="text-primary"
                cx="48"
                cy="48"
                fill="transparent"
                r="40"
                stroke="currentColor"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
                strokeWidth="8"
              />
            </svg>
            <span className="absolute text-xl font-bold">75%</span>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500">
          12 of 16 tasks finished
        </p>
      </section>

      <section className="bg-surface-container-low p-2 rounded-xl">
        <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase">
          Filters
        </p>
        <div className="space-y-1">
          <FilterButton
            active
            label="All Tasks"
            badgeClassName="text-xs bg-primary/10 px-2 py-0.5 rounded-full"
            badgeText="24"
          />
          <FilterButton
            label="In Progress"
            badgeClassName="text-xs bg-slate-200 px-2 py-0.5 rounded-full"
            badgeText="8"
          />
          <FilterButton
            label="High Priority"
            badgeClassName="text-xs bg-error-container text-on-error-container px-2 py-0.5 rounded-full"
            badgeText="4"
          />
          <FilterButton
            label="Completed"
            badgeClassName="text-xs bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full"
            badgeText="12"
          />
        </div>
      </section>
    </div>
  );
}

function FilterButton({
  label,
  badgeText,
  badgeClassName,
  active,
}: {
  label: string;
  badgeText: string;
  badgeClassName: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={
        active
          ? "w-full text-left px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-semibold flex justify-between items-center"
          : "w-full text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-white/50 transition-colors flex justify-between items-center"
      }
    >
      {label}
      <span className={badgeClassName}>{badgeText}</span>
    </button>
  );
}
