"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Brain,
  LayoutDashboard,
  LogOut,
  Settings,
  Sparkles,
  ClipboardList,
  HelpCircle,
  Home,
  CheckCircle2,
  User,
  Users,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/tasks", label: "Task Board", icon: ClipboardList },
  { href: "/admin/insights", label: "AI Insights", icon: Sparkles },
  { href: "/admin/curriculum", label: "Curriculum", icon: BookOpen },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden md:flex flex-col w-64 p-4 gap-2 h-screen sticky left-0 top-0 overflow-y-auto bg-slate-50 dark:bg-slate-950">
        <div className="flex items-center gap-3 px-4 py-6">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-indigo-600 leading-tight">
              Curator AI
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Learning Portal
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full px-4 py-2 flex items-center gap-3 transition-transform translate-x-1"
                    : "text-slate-600 dark:text-slate-400 px-4 py-2 flex items-center gap-3 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-full transition-all"
                }
              >
                <Icon className="h-[18px] w-[18px]" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-1 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-primary/5 rounded-2xl p-4 mb-4">
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
              Academic Status
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%]" />
            </div>
            <p className="text-[10px] mt-2 text-slate-500">
              75% of Semester Tasks Completed
            </p>
          </div>

          <Link
            href="/help"
            className="text-slate-600 dark:text-slate-400 px-4 py-2 flex items-center gap-3 hover:bg-slate-200/50 rounded-full text-sm font-medium transition-all"
          >
            <HelpCircle className="h-[18px] w-[18px]" />
            Help Center
          </Link>

          <button
            type="button"
            className="w-full text-left text-slate-600 dark:text-slate-400 px-4 py-2 flex items-center gap-3 hover:bg-slate-200/50 rounded-full text-sm font-medium transition-all"
          >
            <LogOut className="h-[18px] w-[18px]" />
            Logout
          </button>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-100 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <MobileNavItem href="/admin/dashboard" label="Home" icon={Home} />
        <MobileNavItem href="/admin/users" label="Learn" icon={BookOpen} />
        <MobileNavItem
          href="/admin/tasks"
          label="Tasks"
          icon={CheckCircle2}
          emphasize
        />
        <MobileNavItem href="/admin/profile" label="Profile" icon={User} />
      </nav>
    </>
  );
}

function MobileNavItem({
  href,
  label,
  icon: Icon,
  emphasize,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  emphasize?: boolean;
}) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  if (emphasize) {
    return (
      <Link
        href={href}
        className={
          active
            ? "flex flex-col items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-200 rounded-2xl px-5 py-2 scale-110"
            : "flex flex-col items-center justify-center bg-indigo-100/60 dark:bg-indigo-900/40 text-indigo-700/80 dark:text-indigo-200/80 rounded-2xl px-5 py-2"
        }
      >
        <Icon className="h-5 w-5" />
        <span className="text-[10px] font-semibold uppercase tracking-wider mt-1">
          {label}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={
        active
          ? "flex flex-col items-center justify-center text-slate-700 dark:text-slate-100 px-5 py-2"
          : "flex flex-col items-center justify-center text-slate-400 px-5 py-2"
      }
    >
      <Icon className="h-5 w-5" />
      <span className="text-[10px] font-semibold uppercase tracking-wider mt-1">
        {label}
      </span>
    </Link>
  );
}
