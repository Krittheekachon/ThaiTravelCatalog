
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onClick: (tour: Tour) => void;
  lang: 'en' | 'th';
}

const TourCard: React.FC<TourCardProps> = ({ tour, onClick, lang }) => {
  const badgeColors = {
    'Most Popular': 'bg-primary',
    'Best Seller': 'bg-emerald-600',
    'Experience': 'bg-amber-600',
    'Seasonal Offer': 'bg-secondary'
  };

  const labels = {
    starting: lang === 'th' ? 'เริ่มต้นที่' : 'Starting at',
    view: lang === 'th' ? 'ดูรายละเอียด' : 'View Details',
    duration: lang === 'th' ? tour.duration.replace('Days', 'วัน').replace('Nights', 'คืน') : tour.duration
  };

  return (
    <div 
      className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
      onClick={() => onClick(tour)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          alt={tour.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
          src={tour.image} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className={`absolute top-5 left-5 ${badgeColors[tour.badge]} text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md`}>
          {tour.badge}
        </div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary dark:text-secondary text-base">schedule</span>
          <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{labels.duration}</span>
        </div>
        <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
          {lang === 'th' ? tour.titleTh : tour.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-500 font-medium mb-6 line-clamp-2 leading-relaxed">
          {lang === 'th' ? tour.descriptionTh : tour.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-black tracking-widest mb-1">{labels.starting}</p>
            <p className="text-2xl font-black text-slate-900 dark:text-white">฿{tour.price.toLocaleString()}</p>
          </div>
          <button className="bg-slate-50 dark:bg-slate-800 hover:bg-primary hover:text-white text-primary dark:text-white px-6 py-3 rounded-2xl text-sm font-black transition-all border border-slate-100 dark:border-slate-700 shadow-sm">
            {labels.view}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
