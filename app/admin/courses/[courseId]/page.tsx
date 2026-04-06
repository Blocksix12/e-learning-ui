import { notFound } from "next/navigation";

import CourseDetailsView from "@/components/courses/details/CourseDetailsView";
import { getCourseById } from "@/components/courses/mockData";

type PageParams = { courseId: string };

export default async function AdminCourseDetailsPage({
  params,
}: {
  params: PageParams | Promise<PageParams>;
}) {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) notFound();

  return <CourseDetailsView course={course} />;
}
