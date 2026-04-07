"use client";

import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CircleHelp,
  GraduationCap,
  LayoutGrid,
  LogOut,
  Menu,
  Settings,
  Users,
} from "lucide-react";

const NAV_ITEMS = [
  {
    href: "/class/class-dashboard",
    label: "Overview",
    icon: LayoutGrid,
    active: true,
  },
  {
    href: "/class/class-dashboard",
    label: "Members",
    icon: Users,
    active: false,
  },
  {
    href: "/class/class-dashboard",
    label: "Schedule",
    icon: BookOpen,
    active: false,
  },
  {
    href: "/class/class-dashboard",
    label: "Resources",
    icon: GraduationCap,
    active: false,
  },
  {
    href: "/class/class-dashboard",
    label: "Analytics",
    icon: BarChart3,
    active: false,
  },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-slate-200 bg-slate-50 px-4 py-6 dark:border-slate-800 dark:bg-slate-900 md:flex md:flex-col">
      <div className="mb-8 px-2">
        <div className="mb-1 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold leading-tight text-slate-900 dark:text-slate-100">
              Advanced Physics
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              PH-202 • Dr. Aris
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-on-primary shadow-sm transition hover:opacity-90"
        >
          Join Class
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = item.active;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                active
                  ? "flex items-center gap-3 rounded-xl bg-indigo-100/70 p-3 text-sm font-medium text-indigo-700 shadow-sm dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "flex items-center gap-3 rounded-xl p-3 text-sm font-medium text-slate-500 transition-all hover:bg-indigo-50 hover:text-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800/60"
              }
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 pt-4">
        <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-950">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
            Academic Status
          </p>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <div className="h-full w-[75%] rounded-full bg-primary" />
          </div>
          <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">
            75% of Semester Tasks Completed
          </p>
        </div>

        <a
          href="#"
          className="flex items-center gap-3 rounded-xl p-3 text-sm font-medium text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800/60"
        >
          <CircleHelp className="h-4 w-4" />
          Help Center
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-xl p-3 text-sm font-medium text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800/60"
        >
          <Settings className="h-4 w-4" />
          Settings
        </a>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl p-3 text-sm font-medium text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-500 dark:text-slate-400 dark:hover:bg-slate-800/60"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>

      <button
        type="button"
        className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-500 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 md:hidden"
      >
        <Menu className="h-4 w-4" />
        Menu
      </button>
    </aside>
  );
}
