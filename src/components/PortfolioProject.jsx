const Project = ({ title, image, deployLink, repoLink }) => {
    return (
      <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-royalBlue">{title}</h3>
          <div className="mt-2 flex space-x-4">
            <a href={deployLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-royalBlue">Live Demo</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-royalBlue">GitHub Repo</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;
  