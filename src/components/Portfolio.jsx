import Project from './PortfolioProject';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: '/path/to/image1.jpg', deployLink: 'https://example.com', repoLink: 'https://github.com' },
    // Add more projects...
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-royalBlue text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
