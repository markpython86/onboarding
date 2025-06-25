import { notFound } from "next/navigation";
import type { Project } from "@/lib/data";
import { Badge } from "@workspace/ui/components/badge";

async function getProject(projectId: string): Promise<Project> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/projects/${projectId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    // If the project is not found, the API returns a 404,
    // so we can trigger the `notFound()` function.
    if (res.status === 404) {
      notFound();
    }
    throw new Error("Failed to fetch project");
  }
  return res.json();
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = await getProject(projectId);
  if (!project) {
    notFound();
  }
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-extrabold tracking-tight">
        {project.title}
      </h1>
      <div className="mt-2 flex items-center gap-2">
        <Badge variant="secondary" className="text-sm">
          {project.category}
        </Badge>
      </div>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-auto mt-8 rounded-lg border"
      />
      <div className="mt-8">
        <p className="text-foreground leading-7">{project.longDescription}</p>
      </div>
    </div>
  );
}
