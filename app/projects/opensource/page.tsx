import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-database";

export default async function OpenSource() {
  const projects = await getProjects("opensource");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="">Open Source Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}