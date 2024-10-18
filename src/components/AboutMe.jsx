const AboutMe = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-royalBlue mb-6">About Me</h2>
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/profilepic.jpg"
              alt="Miguel Pena"
              className="rounded-full w-40 h-40 border-4 border-royalBlue shadow-lg"
            />
            <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
              Hello World! My name is Miguel Pena, and I am currently a student at EdX Columbia University in Web Development. I am passionate about coding, design, and building beautiful and functional websites.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  