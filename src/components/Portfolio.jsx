import Project from './PortfolioProject';


const Portfolio = () => {
  const projects = [
    { title: 'Readme Generator', image: '/src/assets/project1.png', repoLink: 'https://github.com/MiguelPena0101/README-Gen' },
    { title: 'SVG Logo Generator', image: '/src/assets/project2.png', repoLink: 'https://github.com/MiguelPena0101/Logofy' },
    { title: 'Weather Dashboard', image: '/src/assets/project3.png', deployLink: 'https://miguelpena0101.github.io/Miguel-weather-station/', repoLink: 'https://github.com/MiguelPena0101/Miguel-weather-station' },
    { title: 'Karate App', image: '/src/assets/project4.png', deployLink: 'https://miguelpena0101.github.io/TheAvengers/', repoLink: 'https://github.com/MiguelPena0101/TheAvengers' },
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