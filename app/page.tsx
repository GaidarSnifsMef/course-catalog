import Link from "next/link";
import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function Home() {
  const allCourses = await getCourses();
  const featuredCourses = [...allCourses]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative border-b-4 border-double border-[#8b7355] dark:border-[#d4af37] flex flex-col items-center text-center justify-center pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(circle_at_center,_#8b7355_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl relative z-10">
          <h1 className="font-cinzel text-5xl sm:text-7xl font-bold tracking-widest text-[#2c1c16] dark:text-[#d4af37] mb-8 drop-shadow-sm uppercase">
          <span className="text-[#8b0000] dark:text-white">A</span>nd thus, thy quest begins
          </h1>
          <p className="font-cormorant text-2xl text-[#5c3a21] dark:text-[#e8dcb8] mb-12 max-w-2xl mx-auto italic leading-relaxed">
            "We know what we are, but know not what we may be." <br />
            — Peruse our vast archives of arcane engineering and noble arts, curated for the most valiant of scholars.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/courses" className="font-cinzel relative inline-flex items-center justify-center px-10 py-4 font-bold text-lg text-[#f4ebd8] dark:text-[#1a1110] transition-all bg-[#5c3a21] dark:bg-[#d4af37] border-2 border-[#3a2212] dark:border-[#b5952f] rounded-sm hover:bg-[#3a2212] dark:hover:bg-[#f3e5ab] hover:scale-105 shadow-xl uppercase tracking-widest group">
              <span className="absolute inset-0 border border-white/20 m-1 rounded-sm"></span>
              Peruse the Tomes
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-cinzel text-4xl font-bold tracking-widest text-[#2c1c16] dark:text-[#d4af37] mb-4 uppercase flex items-center justify-center gap-4">
              <span className="h-px bg-[#8b7355] dark:bg-[#d4af37] w-12 sm:w-24"></span>
              Worthy Manuscripts
              <span className="h-px bg-[#8b7355] dark:bg-[#d4af37] w-12 sm:w-24"></span>
            </h2>
            <p className="font-cormorant text-xl text-[#5c3a21] dark:text-[#c4a45d] italic">
              Discover the most sought-after scrolls from our eminent sages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                credits={course.credits}
                likes={course.likes}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
