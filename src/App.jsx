import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header setCurrentSection={setCurrentSection} />

      {/* Main content section */}
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
