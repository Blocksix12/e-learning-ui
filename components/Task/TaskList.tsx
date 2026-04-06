import TaskCard from "./TaskCard";
import type { Task } from "./TaskCard";

const tasks: Task[] = [
  {
    title: "Natural Language Processing - Ethics Essay",
    meta: { kind: "due", label: "Due in 2 days" },
    priority: "High",
    progress: 65,
    accent: "primary",
    leadingIcon: "file",
    showAttachmentAction: true,
    progressAccent: "primary",
  },
  {
    title: "Quantum Mechanics Problem Set 4",
    meta: { kind: "completed", label: "Completed yesterday" },
    priority: "Medium",
    progress: 100,
    accent: "secondary",
    leadingIcon: "check",
    showVerifiedAction: true,
    progressAccent: "secondary",
  },
  {
    title: "Biochemistry Lab Report: Enzyme Kinetics",
    meta: { kind: "due", label: "Due in 5 days" },
    priority: "Medium",
    progress: 15,
    accent: "tertiary",
    leadingIcon: "science",
    showAttachmentAction: true,
    progressAccent: "primary",
  },
];

export default function TaskList() {
  return (
    <div className="space-y-4">
      <h4 className="text-xl font-bold px-2">Active Assignments</h4>

      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}
