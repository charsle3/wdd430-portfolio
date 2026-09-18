import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredProjects(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE
      title ILIKE '%' || ${query} || '%'
      OR description ILIKE '%' || ${query} || '%'
      OR ${query} = ANY(technologies)
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset};
  `;

  return rows;
}

export async function fetchProjectsPages(query: string) {
  const { rows } = await sql`
    SELECT COUNT(*)
    FROM projects
    WHERE
        title ILIKE '%' || ${query} || '%'
        OR description ILIKE '%' || ${query} || '%'
        OR ${query} = ANY(technologies);
  `;

  const count = Number(rows[0]?.count ?? 0);

  return Math.ceil(count / ITEMS_PER_PAGE);
}