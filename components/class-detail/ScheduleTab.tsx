import { Clock, MapPin } from "lucide-react";

import { SCHEDULE } from "@/components/class-management/mockData";

import type { ClassDetail } from "./types";
import UpcomingMeetings from "./UpcomingMeetings";

export default function ScheduleTab({ detail }: { detail: ClassDetail }) {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="mb-2 text-2xl font-bold text-on-surface">Schedule</h3>
        <p className="text-sm text-on-surface-variant">
          Weekly schedule and upcoming meetings.
        </p>
      </div>

      <section className="rounded-2xl bg-surface-container-low p-6">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          Weekly Schedule
        </h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SCHEDULE.map((item) => (
            <div key={item.id} className="rounded-xl bg-white p-4 shadow-sm">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                {item.day}
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4 text-primary" />
                <span>{item.time}</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="h-4 w-4" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <UpcomingMeetings meetings={detail.meetings} />
    </div>
  );
}
