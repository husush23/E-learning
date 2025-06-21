export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Unlock Your Potential</h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        Learn in-demand skills in tech, design, and business with expertly crafted courses.
      </p>
      <a
        href="#courses"
        className="bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-6 rounded-xl text-lg transition"
      >
        Browse Courses
      </a>
    </section>
  );
}