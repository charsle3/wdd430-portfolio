import { getProjects } from "@/lib/projects-database";
import ProjectList from "@/components/ProjectList";

export default async function SchoolProjectList() {

    // Temporarily in your data fetch — remove after testing
    await new Promise(res => setTimeout(res, 2000));
    return (
        <ProjectList projects={await getProjects("school")} />
    );  
}