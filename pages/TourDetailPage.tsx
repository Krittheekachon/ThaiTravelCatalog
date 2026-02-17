
import React, { useState, useEffect } from 'react';
import { Tour } from '../types';
import { getTourSummary, chatWithAssistant } from '../services/geminiService';

interface TourDetailPageProps {
  tour: Tour;
  lang: 'en' | 'th';
}

const TourDetailPage: React.FC<TourDetailPageProps> = ({ tour, lang }) => {
  const [aiSummary, setAiSummary] = useState<{ en: string; th: string } | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  useEffect(() => {
    const fetchAiSummary = async () => {
      const summary = await getTourSummary(tour.title);
      if (summary) setAiSummary(summary);
    };
    fetchAiSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tour.title]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage;
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatMessage('');
    setIsChatLoading(true);

    const aiResponse = await chatWithAssistant(userMsg, tour.title);
    setChatHistory(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    setIsChatLoading(false);
  };

  const labels = {
    overview: lang === 'th' ? 'ภาพรวมการเดินทาง' : 'Tour Overview',
    itinerary: lang === 'th' ? 'แผนการเดินทาง' : 'Itinerary',
    gallery: lang === 'th' ? 'ภาพบรรยากาศ' : 'Photo Gallery',
    enquire: lang === 'th' ? 'สอบถามข้อมูล' : 'Enquire Now',
    enquireSub: lang === 'th' ? 'สอบถามข้อมูลเพิ่มเติมเกี่ยวกับทัวร์นี้' : 'Ask for more details about this tour',
    fullName: lang === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name',
    phone: lang === 'th' ? 'เบอร์โทรศัพท์' : 'Phone Number',
    submit: lang === 'th' ? 'ส่งข้อมูล' : 'Send Inquiry',
    included: lang === 'th' ? 'สิ่งที่รวมในทัวร์' : 'What\'s Included',
    excluded: lang === 'th' ? 'สิ่งที่ไม่รวมในทัวร์' : 'What\'s Excluded',
    assistant: lang === 'th' ? 'ผู้ช่วยส่วนตัว' : 'Tour Assistant',
    assistantSub: lang === 'th' ? 'ถามทุกเรื่องเกี่ยวกับทริปนี้' : 'Ask me anything about this tour!',
    day: lang === 'th' ? 'วันที่' : 'Day',
  };

  return (
    <div className="animate-in slide-in-from-bottom-10 duration-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-500">
      {/* Hero Header */}
      <div className="relative w-full h-[600px] rounded-[3rem] overflow-hidden mb-20 shadow-2xl group border border-slate-100 dark:border-slate-800 transition-colors">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110" style={{ backgroundImage: `url('${tour.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12 md:p-20 w-full max-w-5xl">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-white/10 backdrop-blur-2xl text-white px-6 py-2 rounded-2xl text-[10px] font-black border border-white/20 uppercase tracking-[0.3em] shadow-2xl">
              {tour.badge}
            </span>
            <span className="bg-primary text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
              {tour.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] drop-shadow-2xl">
            {lang === 'th' ? tour.titleTh : tour.title}
          </h1>
          <div className="flex items-center gap-6 text-slate-200">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span className="text-lg font-bold">{lang === 'th' ? tour.duration.replace('Days', 'วัน').replace('Nights', 'คืน') : tour.duration}</span>
            </div>
            <div className="h-6 w-px bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">groups</span>
              <span className="text-lg font-bold">{tour.groupSize}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-24">
          {/* Quick Info Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: lang === 'th' ? 'ระยะเวลา' : 'Duration', val: lang === 'th' ? tour.duration.replace('Days', 'วัน').replace('Nights', 'คืน') : tour.duration, icon: 'calendar_today' },
              { label: lang === 'th' ? 'ขนาดกลุ่ม' : 'Group Size', val: tour.groupSize, icon: 'groups' },
              { label: lang === 'th' ? 'ภาษา' : 'Language', val: tour.language, icon: 'translate' },
              { label: lang === 'th' ? 'ที่พัก' : 'Hotel', val: tour.accommodation, icon: 'hotel' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center gap-5 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="size-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl font-light">{item.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-2 transition-colors">{item.label}</p>
                  <p className="font-black text-xl text-slate-900 dark:text-white leading-tight transition-colors">{item.val}</p>
                </div>
              </div>
            ))}
          </section>

          {/* AI Highlights Box */}
          {aiSummary && (
            <section className="bg-primary/[0.03] dark:bg-primary/[0.08] border border-primary/20 p-12 rounded-[3.5rem] relative overflow-hidden group shadow-sm transition-colors duration-500">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000"></div>
              <div className="flex items-center gap-5 mb-8">
                <div className="size-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">AI Insights</h3>
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 italic leading-relaxed transition-colors">"{lang === 'th' ? aiSummary.th : aiSummary.en}"</p>
                <div className="w-16 h-1.5 bg-primary/20 rounded-full"></div>
                <p className="text-lg font-medium text-slate-600 dark:text-slate-400 italic transition-colors">"{lang === 'th' ? aiSummary.en : aiSummary.th}"</p>
              </div>
            </section>
          )}

          {/* Overview */}
          <section>
            <h3 className="text-4xl font-black mb-10 flex items-center gap-5 text-slate-900 dark:text-white transition-colors">
              <span className="w-16 h-2 bg-primary rounded-full"></span>
              {labels.overview}
            </h3>
            <div className="space-y-8">
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-200 leading-relaxed transition-colors">
                {lang === 'th' ? tour.descriptionTh : tour.description}
              </p>
              <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-l-8 border-primary italic shadow-sm transition-colors">
                <p className="text-xl font-medium text-slate-600 dark:text-slate-400 transition-colors">
                  {lang === 'th' ? tour.description : tour.descriptionTh}
                </p>
              </div>
            </div>
          </section>

          {/* Itinerary */}
          {tour.itinerary.length > 0 && (
            <section>
              <h3 className="text-4xl font-black mb-12 flex items-center gap-5 text-slate-900 dark:text-white transition-colors">
                <span className="w-16 h-2 bg-primary rounded-full"></span>
                {labels.itinerary}
              </h3>
              <div className="relative itinerary-line space-y-16 pl-4">
                {tour.itinerary.map((step) => (
                  <div key={step.day} className="relative pl-20 group">
                    <div className="absolute left-0 top-0 size-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl flex flex-col items-center justify-center z-10 shadow-2xl group-hover:scale-110 transition-transform -rotate-2">
                      <span className="text-[10px] font-black uppercase tracking-widest">{labels.day}</span>
                      <span className="text-2xl font-black">{step.day}</span>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all group-hover:-translate-y-2 border-b-8 border-b-primary/5">
                      <h4 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight transition-colors">
                        {lang === 'th' ? step.titleTh : step.title}
                      </h4>
                      <div className="flex items-center gap-3 text-primary font-black text-lg mb-6">
                        <span className="material-symbols-outlined">expand_circle_right</span>
                        {lang === 'th' ? step.title : step.titleTh}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-medium transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Gallery */}
          {tour.gallery.length > 0 && (
            <section>
              <h3 className="text-4xl font-black mb-12 flex items-center gap-5 text-slate-900 dark:text-white transition-colors">
                <span className="w-16 h-2 bg-primary rounded-full"></span>
                {labels.gallery}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-[700px]">
                <div className="relative h-full overflow-hidden rounded-[3rem] group cursor-pointer col-span-2 row-span-2 shadow-2xl">
                  <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={tour.gallery[0]} />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                {tour.gallery.slice(1).map((img, i) => (
                  <div key={i} className="relative h-full overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-xl">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={img} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Booking Card */}
          <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl sticky top-28 border border-white/5 overflow-hidden transition-colors">
            <div className="absolute -top-20 -left-20 size-60 bg-primary/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-3 tracking-tight">{labels.enquire}</h4>
              <p className="text-slate-400 mb-10 text-base font-bold">{labels.enquireSub}</p>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-primary tracking-[0.3em] ml-2">{labels.fullName}</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-bold text-lg" 
                    placeholder="John Doe" 
                    type="text" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-primary tracking-[0.3em] ml-2">{labels.phone}</label>
                  <input 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-bold text-lg" 
                    placeholder="08x-xxx-xxxx" 
                    type="tel" 
                  />
                </div>
                <button className="w-full bg-primary text-white font-black py-6 rounded-3xl hover:bg-blue-800 transition-all shadow-2xl active:scale-95 text-xl tracking-tight">
                  {labels.submit}
                </button>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 space-y-5">
                <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Official Contact</p>
                <a className="flex items-center justify-center gap-4 bg-[#06C755] py-5 rounded-2xl hover:brightness-110 transition-all shadow-lg font-black text-lg" href="#">
                  <span className="material-symbols-outlined">chat</span>
                  LINE Official
                </a>
              </div>
            </div>
          </div>

          {/* AI Assistant Card */}
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl space-y-8 transition-colors">
            <div className="flex items-center gap-4">
              <div className="size-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-none">
                <span className="material-symbols-outlined text-3xl">smart_toy</span>
              </div>
              <div>
                <h5 className="font-black text-xl text-slate-900 dark:text-white leading-tight transition-colors">{labels.assistant}</h5>
                <p className="text-[10px] uppercase font-black text-indigo-500 tracking-[0.2em] mt-1">Gemini AI Engine</p>
              </div>
            </div>
            
            <div className="h-[350px] overflow-y-auto space-y-5 pr-2 custom-scrollbar">
              {chatHistory.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <span className="material-symbols-outlined text-5xl text-slate-200 dark:text-slate-800 mb-4 transition-colors">forum</span>
                  <p className="text-slate-500 dark:text-slate-500 font-bold leading-relaxed transition-colors">{labels.assistantSub}</p>
                </div>
              )}
              {chatHistory.map((chat, idx) => (
                <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] px-5 py-3 rounded-[1.5rem] text-base font-medium shadow-sm ${chat.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700 transition-colors'}`}>
                    {chat.text}
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 rounded-[1.5rem] animate-pulse border border-slate-100 dark:border-slate-700 transition-colors">
                    <div className="flex gap-2">
                      <div className="size-2 bg-indigo-400 rounded-full animate-bounce"></div>
                      <div className="size-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="size-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-3 pt-4">
              <input 
                type="text" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder={lang === 'th' ? "พิมพ์คำถามของคุณ..." : "Ask a question..."} 
                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 text-base font-bold focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all shadow-inner"
              />
              <button 
                type="submit" 
                disabled={isChatLoading}
                className="bg-primary text-white size-14 rounded-2xl hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Included/Excluded */}
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-xl space-y-12 transition-colors duration-500">
            <div>
              <h5 className="font-black text-2xl mb-8 flex items-center gap-4 text-emerald-600">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
                {labels.included}
              </h5>
              <ul className="space-y-5">
                {tour.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed transition-colors">
                    <div className="size-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-emerald-600 text-sm font-black">check</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-12 border-t border-slate-100 dark:border-slate-800">
              <h5 className="font-black text-2xl mb-8 flex items-center gap-4 text-red-600">
                <span className="material-symbols-outlined text-3xl">cancel</span>
                {labels.excluded}
              </h5>
              <ul className="space-y-5">
                {tour.excluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-base text-slate-700 dark:text-slate-300 font-bold leading-relaxed transition-colors">
                    <div className="size-6 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center mt-0.5 shrink-0">
                      <span className="material-symbols-outlined text-red-600 text-sm font-black">close</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
