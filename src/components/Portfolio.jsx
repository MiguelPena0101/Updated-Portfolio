import Project from './PortfolioProject';


const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: '/src/assets/project1.jpg', deployLink: 'https://example.com', repoLink: 'https://github.com' },
    { title: 'Project 2', image: '/src/assets/project2.jpg', deployLink: 'https://example.com', repoLink: 'https://github.com' },
    // Add more projects
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Portfolio</h2>
        <div className="hexagon-grid">
          {projects.map((project, index) => (
            <div key={index} className="hexagon hover:scale-105 transition-transform duration-300">
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;