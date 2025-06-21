import { Code, Laptop, User } from "lucide-react";

const highlights = [
  { icon: <Code className="w-8 h-8" />, title: "Hands-on Coding" },
  { icon: <Laptop className="w-8 h-8" />, title: "Modern UI/UX" },
  { icon: <User className="w-8 h-8" />, title: "Expert Instructors" },
];

export default function Highlights() {
  return (
    <section className="py-20 bg-gray-850 text-center">
      <h3 className="text-3xl font-bold mb-12">Why Choose Us?</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {highlights.map(({ icon, title }) => (
          <div
            key={title}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg w-64 flex flex-col items-center"
          >
            <div className="text-indigo-500 mb-4">{icon}</div>
            <h4 className="text-xl font-semibold">{title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
