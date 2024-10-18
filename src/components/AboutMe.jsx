const AboutMe = () => {
  return (
    <section className="relative bg-gradient-to-r from-royalBlue to-blue-900 text-white py-16">
      {/* Hexagon Background */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="hexagon-grid">
          <div className="hexagon"></div>
          <div className="hexagon"></div>
          <div className="hexagon"></div>
        </div>
      </div>
      <div className="relative container mx-auto text-center z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <img
          src="/src/assets/profilepic.jpg"
          alt="Miguel Pena"
          className="rounded-full w-40 h-40 border-4 border-white shadow-lg mx-auto"
        />
        <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
          Hello! I’m Miguel Pena, a passionate Web Developer with a focus on building tech-inspired applications. Currently studying Web Development at EdX Columbia University.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
