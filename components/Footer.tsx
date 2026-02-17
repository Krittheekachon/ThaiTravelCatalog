
import React from 'react';

interface FooterProps {
  lang: 'en' | 'th';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = {
    desc: lang === 'th' ? 'เราสร้างสรรค์ทุกการเดินทางให้เป็นความทรงจำที่ล้ำค่า กับบริการทัวร์ที่คัดสรรมาอย่างดีเพื่อคุณ' : 'We create every journey into precious memories with carefully selected tour services just for you.',
    quick: lang === 'th' ? 'ลิงก์ด่วน' : 'Quick Links',
    company: lang === 'th' ? 'บริษัท' : 'Company',
    contact: lang === 'th' ? 'ติดต่อเรา' : 'Contact Us',
    rights: lang === 'th' ? '© 2024 Thai Travel Catalog Co., Ltd. สงวนลิขสิทธิ์' : '© 2024 Thai Travel Catalog Co., Ltd. All rights reserved.',
  };

  return (
    <footer id="contact-section" className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-24 pb-12 transition-colors duration-500 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-primary p-3 rounded-2xl shadow-lg">
                <span className="material-symbols-outlined text-white text-3xl">travel_explore</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">Thai Travel Catalog</span>
            </div>
            <p className="text-slate-700 dark:text-slate-400 text-xl leading-relaxed mb-10 font-medium transition-colors">
              {content.desc}
            </p>
            <div className="flex gap-5">
              {['facebook', 'instagram', 'alternate_email'].map((icon, i) => (
                <a key={i} className="size-14 bg-white dark:bg-slate-900 shadow-md rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-300 group border border-slate-100 dark:border-slate-800" href="#">
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-10 uppercase text-xs tracking-[0.4em] transition-colors">{content.quick}</h4>
            <ul className="space-y-5 font-bold">
              {['Domestic Tours', 'International Tours', 'Group Packages', 'Corporate Travel'].map(link => (
                <li key={link}><a className="text-slate-600 dark:text-slate-500 hover:text-primary transition-colors flex items-center gap-3 group text-base" href="#"><span className="w-0 group-hover:w-3 h-1 bg-primary rounded-full transition-all"></span>{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-10 uppercase text-xs tracking-[0.4em] transition-colors">{content.company}</h4>
            <ul className="space-y-5 font-bold">
              {['About Our Story', 'Our Travel Partners', 'Privacy Policy', 'Terms of Service'].map(link => (
                <li key={link}><a className="text-slate-600 dark:text-slate-500 hover:text-primary transition-colors flex items-center gap-3 group text-base" href="#"><span className="w-0 group-hover:w-3 h-1 bg-primary rounded-full transition-all"></span>{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-10 uppercase text-xs tracking-[0.4em] transition-colors">{content.contact}</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="bg-primary/5 p-3 rounded-2xl group-hover:bg-primary/10 transition-colors shrink-0"><span className="material-symbols-outlined text-primary text-2xl">location_on</span></div>
                <span className="text-slate-700 dark:text-slate-400 text-sm font-bold leading-relaxed transition-colors">123 Sukhumvit Road, Watthana, Bangkok 10110, Thailand</span>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="bg-primary/5 p-3 rounded-2xl group-hover:bg-primary/10 transition-colors shrink-0"><span className="material-symbols-outlined text-primary text-2xl">call</span></div>
                <span className="text-slate-700 dark:text-slate-400 text-sm font-bold leading-relaxed transition-colors">+66 2 123 4567</span>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="bg-primary/5 p-3 rounded-2xl group-hover:bg-primary/10 transition-colors shrink-0"><span className="material-symbols-outlined text-primary text-2xl">mail</span></div>
                <span className="text-slate-700 dark:text-slate-400 text-sm font-bold leading-relaxed transition-colors">info@thaitravelcatalog.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-200 dark:border-slate-900 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-600 font-black uppercase tracking-[0.3em] transition-colors">
            {content.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
