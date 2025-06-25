import { notFound } from "next/navigation";
import Modal from "@/components/modal";
import type { Project } from "@/lib/data";

async function getProject(projectId: string): Promise<Project> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/projects/${projectId}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function ProjectModal({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  return (
    <Modal>
      <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-stone-900">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-stone-500 font-medium">
          {project.category}
        </p>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto mt-6 rounded-lg border border-stone-200"
        />
        <div className="mt-6 prose prose-stone lg:prose-base max-w-none">
          <p>{project.longDescription}</p>
        </div>
      </div>
    </Modal>
  );
}

// Optional: Pre-build static pages for modals
import { projects } from "@/lib/data";
export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}
