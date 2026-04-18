import Image from "next/image";

import { cn } from "@/lib/utils";

import { WEEK_SCHEDULE_EVENTS, WEEK_SCHEDULE_TIMELINE } from "./mockData";
import type { ScheduleDay, WeekScheduleEvent } from "./types";

const START_MINUTES = WEEK_SCHEDULE_TIMELINE.startHour * 60;
const GRID_TOP_OFFSET_PX = WEEK_SCHEDULE_TIMELINE.topOffsetPx;
const HOUR_HEIGHT_PX = WEEK_SCHEDULE_TIMELINE.hourHeightPx;

function parseTimeToMinutes(value: string) {
  const [hours, minutes] = value.split(":").map((part) => Number(part));
  return hours * 60 + minutes;
}

function minutesToTopPx(minutes: number) {
  return GRID_TOP_OFFSET_PX + ((minutes - START_MINUTES) / 60) * HOUR_HEIGHT_PX;
}

function durationToHeightPx(startMinutes: number, endMinutes: number) {
  return ((endMinutes - startMinutes) / 60) * HOUR_HEIGHT_PX;
}

function TimelineColumn() {
  const labels = Array.from(
    { length: WEEK_SCHEDULE_TIMELINE.totalHours },
    (_, i) => WEEK_SCHEDULE_TIMELINE.startHour + i,
  ).map((hour) => {
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    const period = hour < 12 ? "AM" : "PM";
    const padded = String(hour12).padStart(2, "0");
    return `${padded} ${period}`;
  });

  return (
    <div className="flex flex-col border-r border-slate-50 pt-14">
      {labels.map((label) => (
        <div
          key={label}
          className="flex h-[80px] items-start justify-end pr-4 text-[11px] font-bold uppercase tracking-widest text-slate-400"
        >
          {label}
        </div>
      ))}
    </div>
  );
}

function EventCard({ event }: { event: WeekScheduleEvent }) {
  const startMinutes = parseTimeToMinutes(event.startTime);
  const endMinutes = parseTimeToMinutes(event.endTime);

  const top = minutesToTopPx(startMinutes);
  const height = durationToHeightPx(startMinutes, endMinutes);

  if (event.variant === "primary") {
    return (
      <div
        className="absolute left-2 right-2 z-10 rounded-2xl bg-primary-container p-3 text-on-primary-container shadow-sm"
        style={{ top, height }}
      >
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest opacity-70">
          {event.label}
        </p>
        <p className="text-xs font-bold leading-tight">{event.title}</p>
        <div className="mt-2 flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
      </div>
    );
  }

  if (event.variant === "tertiary") {
    return (
      <div
        className="absolute left-2 right-2 z-20 rounded-2xl border border-white/20 bg-tertiary-container p-3 text-on-tertiary-container shadow-md"
        style={{ top, height }}
      >
        <div className="mb-1 flex items-start justify-between">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            {event.label}
          </p>
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
        </div>
        <p className="text-xs font-bold leading-tight">{event.title}</p>
        {event.badge ? (
          <p className="mt-2 inline-block rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium">
            {event.badge}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="absolute left-2 right-2 z-10 rounded-2xl bg-on-secondary-container p-3 text-white shadow-sm"
      style={{ top, height }}
    >
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest opacity-70">
        {event.label}
      </p>
      <p className="text-xs font-bold leading-tight">{event.title}</p>

      {event.participants?.length ? (
        <div className="mt-3 flex -space-x-2">
          {event.participants.map((participant) => (
            <div
              key={participant.id}
              className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-on-secondary-container bg-slate-200"
            >
              <Image
                src={participant.imageUrl}
                alt={participant.name}
                fill
                sizes="24px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function DayColumn({
  day,
  isActive,
  isLast,
  onSelect,
}: {
  day: ScheduleDay;
  isActive: boolean;
  isLast: boolean;
  onSelect: (dayId: string) => void;
}) {
  const dayEvents = WEEK_SCHEDULE_EVENTS.filter(
    (event) => event.dayId === day.id,
  );

  return (
    <div
      className={cn(
        "relative group flex flex-col",
        isActive && "rounded-t-xl bg-surface-container-low/40",
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(day.id)}
        className={cn(
          "relative mb-2 flex h-14 w-full flex-col items-center justify-center border-b",
          isActive ? "border-primary/10" : "border-slate-50",
        )}
      >
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-tighter",
            isActive ? "text-primary" : "text-slate-400",
          )}
        >
          {day.weekdayShort}
        </span>
        <span
          className={cn(
            "text-lg font-bold",
            isActive ? "font-extrabold text-primary" : "text-slate-700",
          )}
        >
          {day.dayOfMonth}
        </span>
        {isActive ? (
          <div className="absolute -top-1 h-1.5 w-1.5 rounded-full bg-primary" />
        ) : null}
      </button>

      <div className={cn("flex-1", !isLast && "border-r border-slate-50/50")} />

      {dayEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default function WeeklyScheduleGrid({
  days,
  activeDayId,
  onDayChange,
}: {
  days: ScheduleDay[];
  activeDayId: string;
  onDayChange: (dayId: string) => void;
}) {
  const hourLines = Array.from(
    { length: WEEK_SCHEDULE_TIMELINE.totalHours - 1 },
    (_, i) => i,
  );

  const indicatorMinutes = parseTimeToMinutes(
    WEEK_SCHEDULE_TIMELINE.currentTime,
  );
  const indicatorTop = minutesToTopPx(indicatorMinutes);

  return (
    <div className="relative min-h-[800px]">
      <div className="grid h-full grid-cols-[60px_repeat(7,1fr)]">
        <TimelineColumn />

        {days.map((day, index) => {
          const isLast = index === days.length - 1;
          const isActive = day.id === activeDayId;

          return (
            <DayColumn
              key={day.id}
              day={day}
              isActive={isActive}
              isLast={isLast}
              onSelect={onDayChange}
            />
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute left-[60px] right-6 z-30 flex items-center"
        style={{ top: indicatorTop }}
      >
        <div className="h-3 w-3 rounded-full bg-error ring-4 ring-error/20" />
        <div className="h-[2px] flex-1 bg-error/40" />
      </div>

      <div className="pointer-events-none absolute bottom-6 left-[60px] right-6 top-[110px]">
        {hourLines.map((i) => (
          <div key={i} className="h-[80px] border-b border-slate-50" />
        ))}
      </div>
    </div>
  );
}
