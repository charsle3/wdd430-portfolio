interface Contact {
  name: string;
  phone: string;
  email: string;
}
        
export default function ProjectCard({name, phone, email}: Contact) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-3">{phone}</p>
      <p className="text-gray-700 mb-3">{email}</p>
    </article>
  );
}