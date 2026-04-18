import type {
  AcademicEvent,
  DeadlineItem,
  ScheduleDay,
  TimelineRow,
} from "./types";

export const SCHEDULE_TITLE = {
  monthLabel: "April 2025",
  semesterLabel: "Spring Semester",
  weekLabel: "Week 12",
};

export const SCHEDULE_DAYS: ScheduleDay[] = [
  { id: "sun", weekdayShort: "Sun", dayOfMonth: 14 },
  { id: "mon", weekdayShort: "Mon", dayOfMonth: 15 },
  { id: "tue", weekdayShort: "Tue", dayOfMonth: 16, isActive: true },
  { id: "wed", weekdayShort: "Wed", dayOfMonth: 17 },
  { id: "thu", weekdayShort: "Thu", dayOfMonth: 18 },
  { id: "fri", weekdayShort: "Fri", dayOfMonth: 19 },
  { id: "sat", weekdayShort: "Sat", dayOfMonth: 20 },
];

export const TIMELINE_ROWS: TimelineRow[] = [
  { id: "slot-08", type: "slot", timeLabel: "08:00 AM" },
  {
    id: "event-09",
    type: "event",
    timeLabel: "09:00 AM",
    event: {
      id: "qm-lecture",
      timeLabel: "09:00 AM",
      kind: "online",
      status: "ongoing",
      title: "Quantum Mechanics Lecture",
      metaLeft: { icon: "clock", label: "09:00 - 10:30" },
      metaRight: { icon: "video", label: "Microsoft Teams" },
    },
  },
  {
    id: "event-11",
    type: "event",
    timeLabel: "11:00 AM",
    event: {
      id: "calc-quiz",
      timeLabel: "11:00 AM",
      kind: "quiz",
      status: "completed",
      title: "Calculus II Quiz",
      metaLeft: { icon: "map", label: "Room 201 • Physical Class" },
      metaRight: { icon: "clock", label: "11:00 - 12:00" },
    },
  },
  {
    id: "break-12",
    type: "break",
    timeLabel: "12:00 PM",
    label: "Mid-day Break",
  },
  {
    id: "event-14",
    type: "event",
    timeLabel: "02:00 PM",
    event: {
      id: "lab",
      timeLabel: "02:00 PM",
      kind: "in-person",
      status: "upcoming",
      title: "Lab Session: Wave Optics",
      metaLeft: { icon: "science", label: "Lab 4, Physics Wing" },
      metaRight: { icon: "clock", label: "14:00 - 15:30" },
    },
  },
  {
    id: "event-16",
    type: "event",
    timeLabel: "04:30 PM",
    event: {
      id: "office-hours",
      timeLabel: "04:30 PM",
      kind: "consultation",
      status: "upcoming",
      title: "Office Hours",
      metaLeft: {
        icon: "map",
        label: "Dr. Sarah Thompson • Building C, Rm 402",
      },
    },
  },
];

export const ATTENDANCE_RATE = {
  value: 94.2,
  label: "Excellent",
  helperText:
    "You have missed only 1 lab session this semester. Keep up the consistency!",
};

export const UPCOMING_DEADLINES: DeadlineItem[] = [
  {
    id: "deadline-1",
    accent: "error",
    title: "Ethics Essay Submisson",
    subtitle: "Overdue - 2 hours ago",
  },
  {
    id: "deadline-2",
    accent: "tertiary",
    title: "Linear Algebra Homework",
    subtitle: "Due in 3 days",
  },
  {
    id: "deadline-3",
    accent: "secondary",
    title: "AI Project Proposal",
    subtitle: "Due in 5 days",
  },
];

export const ACADEMIC_EVENTS: AcademicEvent[] = [
  {
    id: "event-1",
    icon: "graduation",
    title: "Graduate Fair 2025",
    subtitle: "Main Hall • Tomorrow, 10:00",
    variant: "primary",
  },
  {
    id: "event-2",
    icon: "users",
    title: "CS Student Mixer",
    subtitle: "South Quad • April 18, 17:00",
    variant: "secondary",
  },
];
