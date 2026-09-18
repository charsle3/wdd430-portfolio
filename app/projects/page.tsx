import ProjectList from "@/components/ProjectList";
import Pagination from "@/components/Pagination";
import { ProjectSearch } from "@/components/ProjectSearch";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-database";

// app/projects/page.tsx
export default async function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <div className="pd-4 max-w-4xl mx-auto py-12">
      <ProjectSearch />
      <ProjectList projects={projects} />
      <Pagination totalPages={await fetchProjectsPages(query)} />
    </div>
  );
}