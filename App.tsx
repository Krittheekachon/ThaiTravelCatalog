
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TourDetailPage from './pages/TourDetailPage';
import { Page, Tour } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [lang, setLang] = useState<'en' | 'th'>('th');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedTour(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDetail = (tour: Tour) => {
    setSelectedTour(tour);
    setCurrentPage('detail');
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'th' : 'en');
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleScrollToSection = (id: string) => {
    if (currentPage !== 'home' && id !== 'contact-section') {
      setCurrentPage('home');
      setSelectedTour(null);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 bg-background-light dark:bg-background-dark">
      <Navbar 
        onHome={navigateToHome} 
        lang={lang} 
        onToggleLang={toggleLang} 
        onScrollTo={handleScrollToSection}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage onTourSelect={navigateToDetail} lang={lang} />
        )}
        
        {currentPage === 'detail' && selectedTour && (
          <TourDetailPage tour={selectedTour} lang={lang} />
        )}
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
