import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { ScrollText, ShieldCheck, Truck, Droplets } from 'lucide-react';

interface PaperIndustryProps {
  lang: Language;
  onContactClick: () => void;
}

const PaperIndustry: React.FC<PaperIndustryProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].paper;

  const features = [
    { icon: <Truck size={32} />, text: t.features.f1 },
    { icon: <ShieldCheck size={32} />, text: t.features.f2 },
    { icon: <Droplets size={32} />, text: t.features.f3 },
    { icon: <ScrollText size={32} />, text: t.features.f4 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1626443197661-35b940482692?auto=format&fit=crop&q=80&w=2000" 
          alt="Paper Rolls" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="inline-block bg-brand-red text-white px-3 py-1 mb-4 text-sm font-bold rounded uppercase">{translations[lang].nav.industries}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {t.subtitle}
              </p>
              <button 
                onClick={onContactClick}
                className="bg-white text-brand-dark px-8 py-3 rounded font-bold hover:bg-brand-red hover:text-white transition-colors"
              >
                {translations[lang].nav.quote}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">{t.subtitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.desc}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red hover:shadow-md transition-shadow">
                  <div className="text-brand-red mb-3">{f.icon}</div>
                  <p className="font-medium text-gray-800">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1605518216938-7f31b5092202?auto=format&fit=crop&q=80&w=1000" 
               alt="Paper Warehouse" 
               className="rounded-lg shadow-2xl relative z-10"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperIndustry;