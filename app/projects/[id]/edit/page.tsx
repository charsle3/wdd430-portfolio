import { updateProject } from '../../../../lib/actions';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    // Fetch project by id and render the edit form...
    return <form action={updateProject.bind(null, id)}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required />

        <label htmlFor="technologies">Technologies (comma-separated)</label>
        <input id="technologies" name="technologies" required />

        <button type="submit">Save Project</button>
    </form>
}