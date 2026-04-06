import CoursesHeader from "@/components/courses/CoursesHeader";
import CoursesClientView from "@/components/courses/CoursesClientView";
import { COURSES } from "@/components/courses/mockData";

export default function AdminCoursesPage() {
  return (
    <>
      <CoursesHeader />
      <CoursesClientView courses={COURSES} />
    </>
  );
}
