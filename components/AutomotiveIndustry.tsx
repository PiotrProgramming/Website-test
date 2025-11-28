import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { CarFront, Clock, Settings, Zap } from 'lucide-react';
import { automotive1, automotive2 } from './assets';

interface AutomotiveIndustryProps {
  lang: Language;
  onContactClick: () => void;
}

const AutomotiveIndustry: React.FC<AutomotiveIndustryProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].automotive;

  const features = [
    { icon: <Clock size={32} />, text: t.features.f1 },
    { icon: <Settings size={32} />, text: t.features.f2 },
    { icon: <CarFront size={32} />, text: t.features.f3 },
    { icon: <Zap size={32} />, text: t.features.f4 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={automotive1} 
          alt="Automotive Factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-fade-in-up">
               <div className="inline-block bg-white text-brand-blue px-3 py-1 mb-4 text-sm font-bold rounded uppercase">{translations[lang].nav.industries}</div>
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
          <div className="order-2 lg:order-1">
             <img 
               src={automotive2} 
               alt="Car parts production" 
               className="rounded-lg shadow-2xl"
             />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">{t.subtitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.desc}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-brand-blue mb-3">{f.icon}</div>
                  <p className="font-medium text-gray-800">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomotiveIndustry;