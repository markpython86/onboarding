import type { Project } from "@/lib/data";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export default async function ProjectsSlot() {
  const projects = await getProjects();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Manage Projects
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex justify-between items-center p-3 bg-muted/50 rounded-md border"
            >
              <span className="text-lg font-semibold text-foreground">
                {project.title}
              </span>
              <Link href={`/projects/${project.id}`} target="_self">
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
