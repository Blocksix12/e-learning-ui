import { Plus } from "lucide-react";

export default function TaskHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-2">
          Task Board
        </h2>

        <p className="text-slate-500 text-lg max-w-2xl">
          Curate your academic schedule. Manage assignments, deadlines, and
          project milestones with precision.
        </p>
      </div>

      <button
        type="button"
        className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
      >
        <Plus className="h-[18px] w-[18px]" />
        Create Task
      </button>
    </div>
  );
}
