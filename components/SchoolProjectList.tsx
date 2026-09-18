import { getProjects } from "@/lib/projects-database";
import ProjectList from "@/components/ProjectList";

export default async function SchoolProjectList() {
    return (
        <ProjectList projects={await getProjects("school")} />
    );  
}