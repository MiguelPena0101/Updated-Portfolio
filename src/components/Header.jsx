import NavBar from './NavBar';

const Header = ({ setCurrentSection }) => {
  return (
    <header className="w-full bg-royalBlue text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
        <h1 className="text-3xl font-bold mb-6 lg:mb-0">Miguel Pena</h1>
        <NavBar setCurrentSection={setCurrentSection} />
      </div>
    </header>
  );
};

export default Header;
