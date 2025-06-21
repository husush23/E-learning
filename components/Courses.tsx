const courses = [
  {
    title: "Fullstack Web Development",
    description: "HTML, CSS, JS, React, Node & MongoDB",
    level: "Beginner to Advanced",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Design systems, tools, and process for sleek interfaces",
    level: "Beginner",
  },
  {
    title: "Python for Data Science",
    description: "Data analysis, NumPy, pandas, visualization",
    level: "Intermediate",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-12">Top Courses</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-gray-800 p-6 rounded-2xl shadow-xl max-w-xs w-full text-left"
          >
            <h4 className="text-xl font-bold mb-2">{course.title}</h4>
            <p className="text-gray-400 mb-2">{course.description}</p>
            <span className="text-sm text-indigo-400">{course.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}