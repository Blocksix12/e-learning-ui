"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import TaskSidebar from "../Task/TaskSidebar";

type AdminShellProps = {
  children: ReactNode;
};

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const isTasksRoute = pathname.startsWith("/admin/tasks");

  return (
    <div className="min-h-screen flex bg-background text-on-surface">
      {isTasksRoute ? <TaskSidebar /> : <Sidebar />}

      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />

        <main className="flex-1 min-w-0 bg-background overflow-y-auto pt-16 pb-20">
          {children}
        </main>
      </div>
    </div>
  );
}
