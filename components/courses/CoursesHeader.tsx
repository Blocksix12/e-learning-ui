import { Plus } from "lucide-react";

export default function CoursesHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
          Management Portal
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-2">
          Courses &amp; Curriculum
        </h2>

        <p className="text-on-surface-variant text-lg max-w-2xl">
          Curate and manage your academic portfolio.
        </p>
      </div>

      <button
        type="button"
        className="bg-primary text-on-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all"
      >
        <Plus className="h-5 w-5" />
        Create New Course
      </button>
    </div>
  );
}
