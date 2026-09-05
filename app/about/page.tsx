import Contact from '@/components/Contact';


const name = "James Kingsley";
const phone = "xxx-xxx-0000";
const email = "john@example.com";


export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        This about page shares more information about my background and work.
      </p>
      <Contact name={name} phone={phone} email={email} />
    </main>
  );
}