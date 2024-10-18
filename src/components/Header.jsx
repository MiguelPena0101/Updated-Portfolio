import NavBar from './NavBar';

const Header = ({ setCurrentSection }) => {
  return (
    <header className="bg-royalBlue text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Miguel Pena</h1>
        <NavBar setCurrentSection={setCurrentSection} />
      </div>
    </header>
  );
};

export default Header;
