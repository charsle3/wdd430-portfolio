import ProjectList from '@/components/ProjectList';
const projects = [
  {
    id: 999,
    title: 'Zombo-Shooter',
    description: 'A simple 2d zombie shooter game',
    technologies: ['Python', 'Pygame'],
    link: 'https://github.com/charsle3/zombo-shooter'
  },
  {
    id: 999,
    title: 'Service Projects',
    description: 'A web page for organizing service project activity',
    technologies: ['Render.com', 'JavaScript', 'CSS', 'Express'],
    link: 'https://github.com/charsle3/volcano-chasers'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}