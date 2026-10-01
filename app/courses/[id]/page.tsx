import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8 mt-12 mb-24">
      <div className="relative border-4 border-double border-[#8b7355] dark:border-[#d4af37] rounded-sm bg-[#fffcf5] dark:bg-[#2a1b18] shadow-2xl overflow-hidden group">
        
        {/* Cover Image / Top section */}
        {course.imageUrl && (
          <div className="relative h-64 w-full border-b-4 border-double border-[#8b7355] dark:border-[#d4af37] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${course.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/black-linen-2.png')] mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-6 left-8 flex gap-3">
              <Badge className="font-cinzel text-sm font-bold border-2 border-[#8b7355] text-[#5c3a21] dark:border-[#d4af37] dark:text-[#d4af37] rounded-none px-4 py-1.5 bg-[#fffcf5]/90 dark:bg-[#1a1110]/90 backdrop-blur-sm">
                {course.credits} {course.credits === 1 ? 'Volume' : 'Volumes'}
              </Badge>
              {course.isElective && (
                <Badge variant="outline" className="font-cinzel text-sm font-bold border-2 border-[#8b7355] text-[#8b0000] dark:border-[#d4af37] dark:text-[#fff] rounded-none px-4 py-1.5 bg-[#fffcf5]/90 dark:bg-[#8b0000]/90 backdrop-blur-sm">
                  Optional Tome
                </Badge>
              )}
            </div>
          </div>
        )}

        <div className="p-8 sm:p-12 relative">
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
            <span className="font-cinzel text-9xl text-[#8b7355] dark:text-[#d4af37]">⚜</span>
          </div>
          
          <div className="mb-4">
            <span className="font-cinzel text-sm font-bold text-[#8b0000] dark:text-[#d4af37] uppercase tracking-[0.3em] border-b border-[#8b0000] dark:border-[#d4af37]">The Royal Archive</span>
          </div>
          
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold tracking-widest text-[#2c1c16] dark:text-[#e8dcb8] mb-8 leading-tight drop-shadow-sm">
            {course.title}
          </h1>
          
          {!course.imageUrl && (
            <div className="mb-8 flex gap-3">
              <Badge className="font-cinzel text-xs font-bold border-2 border-[#8b7355] text-[#5c3a21] dark:border-[#d4af37] dark:text-[#d4af37] rounded-none px-3 py-1 bg-[#fffcf5] dark:bg-[#1a1110]">
                {course.credits} {course.credits === 1 ? 'Volume' : 'Volumes'}
              </Badge>
              {course.isElective && (
                <Badge variant="outline" className="font-cinzel text-xs font-bold border-2 border-[#8b0000] text-[#8b0000] dark:border-[#d4af37] dark:text-[#fff] rounded-none px-3 py-1 bg-[#fffcf5] dark:bg-[#8b0000]/80">
                  Optional Tome
                </Badge>
              )}
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="font-cormorant text-2xl text-[#5c3a21] dark:text-[#c4a45d] leading-relaxed italic first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:pr-4 first-letter:text-[#8b0000] dark:first-letter:text-[#d4af37] first-line:tracking-widest first-line:uppercase">
              {course.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center border-t border-dashed border-[#8b7355] dark:border-[#5c3a21] pt-8 mt-12">
            <span className="font-cormorant text-xl italic text-[#5c3a21] dark:text-[#a0844f] mb-4 sm:mb-0">
              Doth this manuscript please thee?
            </span>
            <div className="scale-110">
              <LikeButton initialLikes={course.likes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
