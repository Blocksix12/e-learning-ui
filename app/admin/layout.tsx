import type { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background text-on-surface">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />

        <main className="flex-1 min-w-0 bg-background overflow-y-auto pt-16 pb-20">
          {children}
        </main>
      </div>
    </div>
  );
}
