
import React from 'react';

interface NavbarProps {
  onHome: () => void;
  lang: 'en' | 'th';
  onToggleLang: () => void;
  onScrollTo: (id: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome, lang, onToggleLang, onScrollTo, isDarkMode, onToggleTheme }) => {
  const labels = {
    home: lang === 'th' ? 'หน้าหลัก' : 'Home',
    tours: lang === 'th' ? 'ทัวร์ของเรา' : 'Our Tours',
    about: lang === 'th' ? 'เกี่ยวกับเรา' : 'About Us',
    contact: lang === 'th' ? 'ติดต่อเรา' : 'Contact Us',
    btn: lang === 'th' ? 'จองตอนนี้' : 'Book Now'
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onHome}>
            <div className="bg-primary p-2.5 rounded-xl group-hover:rotate-12 transition-transform shadow-md">
              <span className="material-symbols-outlined text-white text-2xl">travel_explore</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white block leading-none">Thai Travel Catalog</span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-slate-600 dark:text-slate-400 mt-1">Exquisite Journeys</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={onHome} className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary cursor-pointer transition-colors">{labels.home}</button>
            <button onClick={() => onScrollTo('tours-section')} className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors">{labels.tours}</button>
            <button onClick={() => onScrollTo('about-section')} className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors">{labels.about}</button>
            <button onClick={() => onScrollTo('contact-section')} className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors">{labels.contact}</button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xl">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button 
              onClick={onToggleLang}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold text-xs text-slate-800 dark:text-slate-200"
            >
              <span className="material-symbols-outlined text-sm">language</span>
              {lang === 'en' ? 'EN' : 'TH'}
            </button>
            
            <button onClick={() => onScrollTo('contact-section')} className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-900 transition-all shadow-lg shadow-primary/20 active:scale-95 whitespace-nowrap">
              {labels.btn}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
