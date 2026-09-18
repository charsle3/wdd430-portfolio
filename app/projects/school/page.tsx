import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-database";

export default async function School() {
  const projects = await getProjects("school");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="">School Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}