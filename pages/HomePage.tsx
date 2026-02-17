
import React from 'react';
import TourCard from '../components/TourCard';
import { TOURS } from '../constants';
import { Tour } from '../types';

interface HomePageProps {
  onTourSelect: (tour: Tour) => void;
  lang: 'en' | 'th';
}

const HomePage: React.FC<HomePageProps> = ({ onTourSelect, lang }) => {
  const content = {
    heroTitle: lang === 'th' ? 'สัมผัสประสบการณ์การเดินทางสุดพิเศษ' : 'Discover Extraordinary Experiences',
    heroSub: lang === 'th' ? 'สำรวจโลกกว้างกับ Thai Travel Catalog' : 'Explore the world with Thai Travel Catalog',
    searchPlaceholder: lang === 'th' ? 'ค้นหาจุดหมายปลายทางของคุณ...' : 'Search your destination...',
    anytime: lang === 'th' ? 'ทุกช่วงเวลา' : 'Anytime',
    searchBtn: lang === 'th' ? 'ค้นหา' : 'Search',
    featuredTitle: lang === 'th' ? 'ทัวร์ยอดนิยมที่คัดสรรมาเพื่อคุณ' : 'Featured Handpicked Tours',
    featuredSub: lang === 'th' ? 'ประสบการณ์การเดินทางที่คุณไม่ควรพลาด' : 'Unforgettable journeys crafted for the discerning traveler',
    viewAll: lang === 'th' ? 'ดูทั้งหมด' : 'View All',
    whyTitle: lang === 'th' ? 'ทำไมต้องเดินทางกับเรา' : 'Why Travel With Us',
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10"></div>
          <img 
            alt="Scenic Background" 
            className="w-full h-full object-cover scale-105" 
            src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop" 
          />
        </div>
        <div className="relative z-20 max-w-5xl w-full px-6 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-white drop-shadow-2xl">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-12 text-slate-100/90 max-w-2xl leading-relaxed">
              {content.heroSub}
            </p>
            
            <div className="bg-white/10 dark:bg-slate-900/40 p-3 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-3 max-w-4xl border border-white/20 backdrop-blur-2xl">
              <div className="flex-1 flex items-center px-5 gap-4 bg-white dark:bg-slate-800/80 rounded-2xl py-4 shadow-sm border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                <input 
                  className="w-full border-none focus:ring-0 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 text-base font-bold" 
                  placeholder={content.searchPlaceholder}
                  type="text" 
                />
              </div>
              <div className="flex-none flex items-center px-6 gap-4 bg-white dark:bg-slate-800/80 rounded-2xl py-4 min-w-[200px] border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold text-base">{content.anytime}</span>
              </div>
              <button className="bg-primary hover:bg-blue-900 text-white px-10 py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-2 shadow-2xl active:scale-95 group">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">search</span>
                {content.searchBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours-section" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
                {content.featuredTitle}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xl font-medium max-w-2xl transition-colors">
                {content.featuredSub}
              </p>
            </div>
            <a className="text-primary dark:text-secondary font-black hover:opacity-80 flex items-center gap-2 group text-lg transition-all" href="#">
              {content.viewAll} 
              <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TOURS.map(tour => (
              <TourCard key={tour.id} tour={tour} onClick={onTourSelect} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about-section" className="py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden scroll-mt-20 transition-colors duration-500">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 -mt-64 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full -ml-64 -mb-64 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-slate-900 dark:text-white transition-colors">{content.whyTitle}</h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: lang === 'th' ? 'ไกด์มืออาชีพ' : 'Expert Guides', icon: 'verified_user', desc: lang === 'th' ? 'ทีมงานผู้เชี่ยวชาญพร้อมดูแลคุณทุกย่างก้าว ประสบการณ์กว่า 15 ปี' : 'A team of experts ready to take care of you every step of the way with over 15 years of experience.' },
              { title: lang === 'th' ? 'คุ้มค่าคุ้มราคา' : 'Best Value', icon: 'payments', desc: lang === 'th' ? 'มั่นใจได้ในคุณภาพและราคาที่เป็นธรรม พร้อมข้อเสนอพิเศษที่ไม่เหมือนใคร' : 'Confidence in quality and fair prices with unique special offers.' },
              { title: lang === 'th' ? 'ดูแลตลอด 24 ชม.' : '24/7 Support', icon: 'support_agent', desc: lang === 'th' ? 'เราพร้อมช่วยเหลือคุณเสมอ ไม่ว่าคุณจะอยู่ที่ไหน เพื่อความอุ่นใจตลอดทริป' : 'We are always ready to help you wherever you are for peace of mind throughout the trip.' }
            ].map((item, i) => (
              <div key={i} className="text-center group bg-white dark:bg-slate-800 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm shadow-xl">
                <div className="w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight text-slate-900 dark:text-white transition-colors">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
