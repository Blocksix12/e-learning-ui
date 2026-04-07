"use client";

import Image from "next/image";
import Link from "next/link";
import { Bell, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/", label: "Home" },
  { href: "/class/class-dashboard", label: "Class" },
  { href: "/admin/tasks", label: "Task" },
  { href: "/admin/courses", label: "Course" },
  { href: "/admin/analytics", label: "Exam" },
  { href: "/admin/tasks", label: "Homework" },
  { href: "/student/ai-insights", label: "AI" },
];

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 shadow-[0px_20px_40px_rgba(21,28,39,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex h-16 items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-8">
          <Link
            href="/class/class-dashboard"
            className="text-xl font-bold tracking-tighter text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
          >
            The Academic Curator
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  pathname === item.href
                    ? "border-b-2 border-indigo-600 pb-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                    : "text-sm font-medium text-slate-500 transition hover:text-indigo-500 dark:text-slate-400"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="rounded-lg p-2 text-slate-500 transition-all hover:bg-indigo-50/50 hover:text-indigo-600 active:scale-95 dark:text-slate-300 dark:hover:bg-indigo-900/20"
          >
            <Bell className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Settings"
            className="rounded-lg p-2 text-slate-500 transition-all hover:bg-indigo-50/50 hover:text-indigo-600 active:scale-95 dark:text-slate-300 dark:hover:bg-indigo-900/20"
          >
            <Settings className="h-5 w-5" />
          </button>

          <div className="ml-2 h-10 w-10 overflow-hidden rounded-full border-2 border-primary-fixed bg-slate-200">
            <Image
              src="https://i.pravatar.cc/80?img=11"
              alt="Lecturer profile picture"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
