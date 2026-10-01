import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scholars' Guild",
  description: "An archive of ancient wisdom and courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cinzel.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-cormorant bg-[#f4ebd8] dark:bg-[#1a1110] text-[#2c1c16] dark:text-[#e8dcb8] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 bg-[#f4ebd8]/95 dark:bg-[#1a1110]/95 backdrop-blur-md border-b-2 border-[#8b7355] dark:border-[#d4af37] shadow-md shadow-[#8b7355]/20 dark:shadow-[#d4af37]/10">
            <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
              <Link href="/" className="font-cinzel font-bold text-2xl tracking-widest text-[#5c3a21] dark:text-[#d4af37] flex items-center gap-3">
                <span className="text-3xl">⚜</span> Scholars' Guild
              </Link>
              <div className="flex items-center gap-2 sm:gap-6 text-lg sm:text-xl font-bold text-[#5c3a21] dark:text-[#c4a45d]">
                <Link href="/" className="px-4 py-2 rounded hover:bg-[#8b7355]/10 dark:hover:bg-[#d4af37]/10 hover:text-[#8b0000] dark:hover:text-white transition-all uppercase tracking-widest">Tavern</Link>
                <Link href="/courses" className="px-4 py-2 rounded hover:bg-[#8b7355]/10 dark:hover:bg-[#d4af37]/10 hover:text-[#8b0000] dark:hover:text-white transition-all uppercase tracking-widest">Tomes</Link>
                <Link href="/about" className="px-4 py-2 rounded hover:bg-[#8b7355]/10 dark:hover:bg-[#d4af37]/10 hover:text-[#8b0000] dark:hover:text-white transition-all uppercase tracking-widest">Chronicles</Link>
                <div className="pl-4 border-l border-[#8b7355]/30 dark:border-[#d4af37]/30">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
