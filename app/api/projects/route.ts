import { getProjects } from "@/lib/projects-database";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    if (type) {
        return NextResponse.json(getProjects(type));
    }
    return NextResponse.json(getProjects());
}