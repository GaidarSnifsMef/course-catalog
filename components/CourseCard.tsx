import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
  imageUrl?: string;
};

export default function CourseCard({ id, title, description, credits, likes, imageUrl }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full outline-none focus-visible:ring-4 focus-visible:ring-[#8b0000] rounded-sm group relative">
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#8b7355] dark:border-[#d4af37] z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#8b7355] dark:border-[#d4af37] z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#8b7355] dark:border-[#d4af37] z-10 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#8b7355] dark:border-[#d4af37] z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>

      <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-2 border-[#8b7355] dark:border-[#b5952f] bg-[#fffcf5] dark:bg-[#2a1b18] rounded-sm">

        <div
          className="h-48 w-full border-b-4 border-double border-[#8b7355] dark:border-[#d4af37] relative overflow-hidden flex items-center justify-center shadow-inner bg-cover bg-center"
          style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none', backgroundColor: imageUrl ? 'transparent' : '#3a2212' }}
        >
          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/black-linen-2.png')] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="relative w-16 h-16 border-2 border-[#d4af37] rounded-full flex items-center justify-center opacity-90 group-hover:rotate-12 transition-transform duration-700 shadow-[0_0_15px_rgba(212,175,55,0.4)] bg-black/30 backdrop-blur-sm">
            <div className="absolute inset-1 border border-[#d4af37] rounded-full"></div>
            <span className="font-cinzel text-2xl text-[#d4af37]">⚔</span>
          </div>
        </div>

        <CardHeader className="p-6 pb-2 relative">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-cinzel text-xs font-bold text-[#8b0000] dark:text-[#d4af37] uppercase tracking-[0.2em] border-b border-[#8b0000] dark:border-[#d4af37]">The Royal Archive</span>
          </div>
          <CardTitle className="font-cinzel text-2xl font-bold leading-tight text-[#2c1c16] dark:text-[#e8dcb8] group-hover:text-[#8b0000] dark:group-hover:text-[#d4af37] transition-colors">{title}</CardTitle>
          <CardDescription className="font-cormorant line-clamp-3 mt-3 text-lg text-[#5c3a21] dark:text-[#c4a45d] leading-snug italic">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow p-6 pt-2 pb-0">
          <div className="font-cormorant text-sm font-semibold text-[#8b7355] dark:text-[#a0844f] mb-4 tracking-widest uppercase">
            Arts: Logic, Arithmetic, Geometry
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-4 border-t border-dashed border-[#8b7355] dark:border-[#5c3a21] flex flex-col gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 self-start font-cormorant hover:bg-[#8b7355]/20 dark:hover:bg-[#d4af37]/20 p-2 h-auto">
            <span className="text-lg font-bold text-[#2c1c16] dark:text-[#d4af37]">{(4.5 + (likes % 5) * 0.1).toFixed(1)}</span>
            <Star className="w-5 h-5 fill-[#8b0000] text-[#8b0000] dark:fill-[#d4af37] dark:text-[#d4af37]" />
            <span className="text-sm text-[#5c3a21] dark:text-[#c4a45d] ml-1 italic">({likes * 120} scholars agree)</span>
          </Button>

          <div className="flex justify-between items-center w-full">
            <Badge variant="outline" className="font-cinzel text-xs font-bold border-2 border-[#8b7355] text-[#5c3a21] dark:border-[#d4af37] dark:text-[#d4af37] rounded-none px-3 py-1 bg-[#fffcf5] dark:bg-[#1a1110]">
              {credits} {credits === 1 ? 'Volume' : 'Volumes'}
            </Badge>
            <span className="font-cormorant text-md text-[#5c3a21] dark:text-[#a0844f] font-bold italic">{likes * 450} Disciples</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
