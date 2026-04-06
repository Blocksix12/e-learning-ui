import type { Course } from "./types";

const BASE_COURSES: Course[] = [
  {
    id: "course-quantum-foundations",
    code: "QM",
    title: "Quantum Mechanics: Foundations of Modern Reality",
    description:
      "Explore the paradoxical nature of subatomic particles and the...",
    category: "Quantum Physics",
    lifecycle: "Active",
    publishStatus: "Published",
    students: 1248,
    rating: 4.9,
    modules: 12,
    updatedAt: "2026-03-12",
    thumbnailSrc: "/courses/quantum.svg",
    avatarUrls: [
      "https://i.pravatar.cc/80?img=32",
      "https://i.pravatar.cc/80?img=12",
      "https://i.pravatar.cc/80?img=7",
    ],
    featured: true,
  },
  {
    id: "course-cognitive-synthesis",
    code: "CS",
    title: "Advanced Cognitive Psychology: Neural Synthesis",
    description:
      "A deep dive into the human brain's information processing capabilities...",
    category: "Cognitive Science",
    lifecycle: "Completed",
    publishStatus: "Published",
    students: 850,
    rating: 4.7,
    modules: 8,
    updatedAt: "2026-02-26",
    thumbnailSrc: "/courses/cognitive.svg",
    avatarUrls: [
      "https://i.pravatar.cc/80?img=24",
      "https://i.pravatar.cc/80?img=47",
    ],
    featured: true,
  },
  {
    id: "course-advanced-neural-networks",
    code: "NN",
    title: "Advanced Neural Networks & Deep Learning Architectures",
    description:
      "Transformers, attention, and generative modeling for research-grade systems...",
    category: "Computer Science",
    lifecycle: "Active",
    publishStatus: "Published",
    students: 1240,
    rating: 4.9,
    modules: 12,
    updatedAt: "2026-03-21",
    thumbnailSrc: "/courses/quantum.svg",
    avatarUrls: [
      "https://i.pravatar.cc/80?img=19",
      "https://i.pravatar.cc/80?img=41",
    ],
    featured: false,
  },
  {
    id: "course-linguistic-architecture",
    code: "LA",
    title: "Linguistic Architecture: Evolution of Semantics",
    description:
      "Analyzing the structural foundations of global languages and their...",
    category: "Linguistics",
    lifecycle: "Draft",
    publishStatus: "Draft",
    students: 0,
    rating: null,
    modules: 15,
    updatedAt: "2026-03-02",
    thumbnailSrc: "/courses/linguistic.svg",
    avatarUrls: ["https://i.pravatar.cc/80?img=19"],
    featured: true,
  },
  {
    id: "course-linear-algebra-logic",
    code: "LA",
    title: "Linear Algebra & Logic",
    description: "Vector spaces, proofs, and reasoning for ML and beyond...",
    category: "Mathematics",
    lifecycle: "Active",
    publishStatus: "In Review",
    students: 850,
    rating: 4.7,
    modules: 10,
    updatedAt: "2026-02-10",
    thumbnailSrc: "/courses/quantum.svg",
    avatarUrls: [
      "https://i.pravatar.cc/80?img=3",
      "https://i.pravatar.cc/80?img=41",
    ],
  },
  {
    id: "course-ancient-history-nile",
    code: "AH",
    title: "Ancient History: The Nile",
    description: "Empires, trade, and culture along the river Nile...",
    category: "History",
    lifecycle: "Draft",
    publishStatus: "Draft",
    students: 0,
    rating: null,
    modules: 6,
    updatedAt: "2026-01-18",
    thumbnailSrc: "/courses/linguistic.svg",
    avatarUrls: [],
  },
  {
    id: "course-ai-ethics",
    code: "AE",
    title: "AI Ethics & Governance",
    description: "Practical ethics, policy, and responsible deployment...",
    category: "AI",
    lifecycle: "Active",
    publishStatus: "Archived",
    students: 603,
    rating: 4.6,
    modules: 9,
    updatedAt: "2025-12-02",
    thumbnailSrc: "/courses/cognitive.svg",
    avatarUrls: ["https://i.pravatar.cc/80?img=32"],
  },
];

export const COURSES: Course[] = Array.from({ length: 42 }, (_, i) => {
  const base = BASE_COURSES[i % BASE_COURSES.length];
  return {
    ...base,
    id: `${base.id}-${i + 1}`,
    title: base.title,
    updatedAt: base.updatedAt,
  };
});

export function getCourseById(courseId: string): Course | undefined {
  return COURSES.find((c) => c.id === courseId);
}
