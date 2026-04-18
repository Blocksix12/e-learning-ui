"use client";

import ClassScheduleView from "./ClassScheduleView";
import ScheduleSidebarWidgets from "./ScheduleSidebarWidgets";

export default function ClassSchedulePage() {
  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 flex flex-col gap-8 xl:col-span-8">
          <ClassScheduleView />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <ScheduleSidebarWidgets />
        </div>
      </div>
    </main>
  );
}
