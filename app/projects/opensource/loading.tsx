import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";

export default function Loading() {
	return (
		<main
			className="mx-auto max-w-4xl px-4 py-12"
			aria-busy="true"
			aria-label="Loading open source projects"
		>
			<div className="mb-8 h-10 w-72 animate-pulse rounded bg-gray-200" />

			<section className="grid gap-4 md:grid-cols-2" aria-hidden="true">
				<ProjectCardSkeleton />
				<ProjectCardSkeleton />
				<ProjectCardSkeleton />
				<ProjectCardSkeleton />
			</section>
		</main>
	);
}
