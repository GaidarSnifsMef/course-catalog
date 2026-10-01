import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="max-w-6xl mx-auto p-8 mt-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Courses</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">Browse the available catalog of semester courses.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
