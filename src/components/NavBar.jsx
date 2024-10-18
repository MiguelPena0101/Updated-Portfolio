import { useState } from 'react';

const NavBar = ({ setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  const [current, setCurrent] = useState('About Me');

  return (
    <nav>
      <ul className="flex space-x-8"> {/* Horizontal alignment with space between */}
        {sections.map((section) => (
          <li
            key={section}
            className={`cursor-pointer text-lg hover:text-blue-300 transition-colors duration-300 ${
              current === section ? 'text-yellow-500' : 'text-white'
            }`}
            onClick={() => {
              setCurrent(section);
              setCurrentSection(section);
            }}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
