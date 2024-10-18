const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Miguel Pena. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/MiguelPena0101"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mp777/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
