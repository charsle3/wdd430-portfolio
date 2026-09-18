import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export default async function School() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="">School Projects</h1>
      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}