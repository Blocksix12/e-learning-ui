export type ScheduleMode = "day" | "week";

export type ScheduleDay = {
  id: string;
  weekdayShort: string;
  dayOfMonth: number;
  isActive?: boolean;
};

export type TimelineEventKind =
  | "online"
  | "quiz"
  | "in-person"
  | "consultation";

export type TimelineEventStatus = "ongoing" | "completed" | "upcoming";

export type TimelineEvent = {
  id: string;
  timeLabel: string;
  kind: TimelineEventKind;
  status: TimelineEventStatus;
  title: string;
  metaLeft: { icon: "clock" | "video" | "map" | "science"; label: string };
  metaRight?: { icon: "clock" | "video" | "map" | "science"; label: string };
};

export type TimelineRow =
  | {
      id: string;
      type: "slot";
      timeLabel: string;
    }
  | {
      id: string;
      type: "event";
      timeLabel: string;
      event: TimelineEvent;
    }
  | {
      id: string;
      type: "break";
      timeLabel: string;
      label: string;
    };

export type DeadlineItem = {
  id: string;
  accent: "error" | "tertiary" | "secondary";
  title: string;
  subtitle: string;
};

export type AcademicEvent = {
  id: string;
  icon: "graduation" | "users";
  title: string;
  subtitle: string;
  variant: "primary" | "secondary";
};
