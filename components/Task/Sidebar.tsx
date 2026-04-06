import {
  LayoutDashboard,
  School,
  Brain,
  BookOpen,
  Settings,
  CheckSquare,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 p-4 gap-2 h-screen sticky left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-950">
      <div className="flex items-center gap-3 px-4 py-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
          🧠
        </div>

        <div>
          <h1 className="text-lg font-bold text-indigo-600 leading-tight">
            Curator AI
          </h1>
          <p className="text-xs text-slate-500 font-medium">Learning Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <Nav icon={<LayoutDashboard size={18} />} label="Overview" />
        <Nav icon={<School size={18} />} label="My Courses" />

        <Nav active icon={<CheckSquare size={18} />} label="Task Board" />

        <Nav icon={<Brain size={18} />} label="AI Insights" />
        <Nav icon={<BookOpen size={18} />} label="Curriculum" />
        <Nav icon={<Settings size={18} />} label="Settings" />
      </nav>
    </aside>
  );
}

function Nav({ icon, label, active }: any) {
  return (
    <a
      className={`px-4 py-2 flex items-center gap-3 rounded-full transition-all
      ${
        active
          ? "bg-indigo-50 text-indigo-700"
          : "text-slate-600 hover:bg-slate-200/50"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
