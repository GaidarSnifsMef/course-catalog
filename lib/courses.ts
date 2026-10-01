export type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
  imageUrl: string;
};

const courses: Course[] = [
  {
    id: "modern-frontend",
    title: "Modern Frontend: React & Next.js",
    description: "React 19, Server Components, and the App Router.",
    credits: 5,
    isElective: false,
    likes: 24,
    imageUrl: "https://images.unsplash.com/photo-1589134710156-df538a7cde12?w=800&q=80" // Ancient book
  },
  {
    id: "backend-fastapi",
    title: "Backend Foundations: FastAPI",
    description: "Async REST APIs in Python with FastAPI and Pydantic.",
    credits: 5,
    isElective: false,
    likes: 19,
    imageUrl: "https://images.unsplash.com/photo-1509021436665-8f07cd15a4c5?w=800&q=80" // Scroll / paper
  },
  {
    id: "databases-postgresql",
    title: "Relational Databases: PostgreSQL",
    description: "Schema design, SQLAlchemy, and migrations with Alembic.",
    credits: 5,
    isElective: false,
    likes: 15,
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" // University library
  },
  {
    id: "api-design",
    title: "API Design: REST vs GraphQL",
    description: "Comparing REST and GraphQL in practice.",
    credits: 4,
    isElective: true,
    likes: 11,
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80" // Study table
  },
  {
    id: "web-security",
    title: "Web Security Essentials",
    description: "JWT/OAuth2, defending against XSS, CSRF, SQL injection.",
    credits: 4,
    isElective: false,
    likes: 21,
    imageUrl: "https://images.unsplash.com/photo-1614035041490-c2bd86b0da66?w=800&q=80" // Castle walls / lock
  },
  {
    id: "ai-integration",
    title: "AI/LLM Integration",
    description: "LLM features in an app, wired up via the OpenAI API.",
    credits: 5,
    isElective: true,
    likes: 32,
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" // Brain / intricate clockwork
  },
];

function delay<T>(value: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function getCourses(): Promise<Course[]> {
  return delay(courses);
}

export async function getCourse(id: string): Promise<Course | undefined> {
  return delay(courses.find((c) => c.id === id));
}
