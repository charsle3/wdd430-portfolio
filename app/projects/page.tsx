import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-database";

export default async function About() {
  const projects = await getProjects();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="">Projects Overview</h1>
      <ProjectList projects={projects} />
    </main>
  );
}