import { getProjectById } from "@/lib/projects-database";
import { NextResponse } from 'next/server';

export async function GET( _request: Request, { params }: { params: Promise<{ id: string }> } ) {
    const { id }= await params;
    const idnum = Number(id);

    if (Number.isNaN(idnum)) {
        return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }

    const project = await getProjectById(idnum);

    if (project) {
        return NextResponse.json(project);
    }

    return NextResponse.json({ error: 'Project not found'}, { status: 404 });
    
}