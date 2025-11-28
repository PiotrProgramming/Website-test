import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Sparkles, Box, Award, Clock } from 'lucide-react';
import { cleaning1, cleaning2 } from './assets';

interface CleaningIndustryProps {
  lang: Language;
  onContactClick: () => void;
}

const CleaningIndustry: React.FC<CleaningIndustryProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].cleaning;

  const features = [
    { icon: <Box size={32} />, text: t.features.f1 },
    { icon: <Award size={32} />, text: t.features.f2 },
    { icon: <Clock size={32} />, text: t.features.f3 },
    { icon: <Sparkles size={32} />, text: t.features.f4 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={cleaning1} 
          alt="Clean warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/80 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-fade-in-up">
               <div className="inline-block bg-white text-emerald-800 px-3 py-1 mb-4 text-sm font-bold rounded uppercase">{translations[lang].nav.industries}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {t.subtitle}
              </p>
              <button 
                onClick={onContactClick}
                className="bg-brand-red text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-colors"
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
                <div key={i} className="bg-gray-50 p-6 rounded-lg border-b-4 border-emerald-600 hover:shadow-md transition-shadow">
                  <div className="text-emerald-600 mb-3">{f.icon}</div>
                  <p className="font-medium text-gray-800">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <img 
               src={cleaning2} 
               alt="Cleaning products" 
               className="rounded-lg shadow-2xl relative z-10"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningIndustry;