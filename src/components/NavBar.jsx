import { useState } from 'react';

const NavBar = ({ setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  const [current, setCurrent] = useState('About Me');

  return (
    <nav className="w-full lg:w-auto flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row items-center lg:items-start">
      {sections.map((section) => (
        <div
          key={section}
          className={`cursor-pointer relative text-lg transition-all hover:text-yellow-500 ${
            current === section ? 'text-yellow-500' : ''
          }`}
          onClick={() => {
            setCurrent(section);
            setCurrentSection(section);
          }}
        >
          {section}
          <div
            className={`absolute left-0 w-full h-1 bg-yellow-500 transform transition-transform ${
              current === section ? 'scale-x-100' : 'scale-x-0'
            }`}
          ></div>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
