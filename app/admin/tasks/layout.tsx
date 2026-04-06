import type { ReactNode } from "react";

import TaskHeader from "@/components/Task/TaskHeader";

export default function TasksLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
      <TaskHeader />
      {children}
    </div>
  );
}
