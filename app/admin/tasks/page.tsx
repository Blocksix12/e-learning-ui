import { Calendar, PenSquare, UploadCloud } from "lucide-react";

import TaskFilters from "@/components/Task/TaskFilters";
import TaskList from "@/components/Task/TaskList";

export default function AdminTasksPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <TaskFilters />

      <div className="lg:col-span-9 space-y-6">
        <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <PenSquare className="text-primary h-5 w-5" />
            <h3 className="text-xl font-bold">Quick Task Entry</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="assignmentTitle"
                className="text-xs font-bold uppercase tracking-wider text-slate-400"
              >
                Assignment Title
              </label>
              <input
                id="assignmentTitle"
                type="text"
                defaultValue="Advanced Neural Networks Case Study"
                className="w-full border-none bg-surface-container-low rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="deadline"
                className="text-xs font-bold uppercase tracking-wider text-slate-400"
              >
                Deadline Picker
              </label>
              <div className="relative">
                <input
                  id="deadline"
                  type="date"
                  defaultValue="2023-11-24"
                  className="w-full border-none bg-surface-container-low rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
                />
                <Calendar className="absolute right-3 top-3 text-slate-400 h-5 w-5 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="priority"
                className="text-xs font-bold uppercase tracking-wider text-slate-400"
              >
                Priority Dropdown
              </label>
              <select
                id="priority"
                defaultValue="High Priority"
                className="w-full border-none bg-surface-container-low rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              >
                <option>High Priority</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="status"
                className="text-xs font-bold uppercase tracking-wider text-slate-400"
              >
                Status Dropdown
              </label>
              <select
                id="status"
                defaultValue="In Progress"
                className="w-full border-none bg-surface-container-low rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              >
                <option>In Progress</option>
                <option>Todo</option>
                <option>Review Required</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors group"
          >
            <UploadCloud className="h-10 w-10 text-slate-300 group-hover:text-primary mb-2 transition-colors" />
            <p className="text-sm font-medium text-slate-600">
              Drop supporting materials or{" "}
              <span className="text-primary underline">browse files</span>
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              PDF, DOCX, IPYNB (Max 25MB)
            </p>
          </button>
        </section>

        <TaskList />
      </div>
    </div>
  );
}
