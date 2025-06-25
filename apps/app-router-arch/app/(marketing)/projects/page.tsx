import Link from "next/link";
import type { Project } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

// Helper function to fetch projects.
// The `no-store` cache option ensures we get fresh data on every request,
// which is good for development.
async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`, {
    cache: "no-store",
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Our Projects</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Explore our curated collection of design and development work.
      </p>
      <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="block group"
          >
            <Card className="overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
