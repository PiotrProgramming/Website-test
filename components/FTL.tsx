import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Truck, MapPin, Lock, Navigation } from 'lucide-react';
import { ftl1, ftl2 } from './assets';

interface FTLProps {
  lang: Language;
  onContactClick: () => void;
}

const FTL: React.FC<FTLProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].ftl;

  const features = [
    { icon: <Truck size={32} />, text: t.features.f1 },
    { icon: <MapPin size={32} />, text: t.features.f2 },
    { icon: <Lock size={32} />, text: t.features.f3 },
    { icon: <Navigation size={32} />, text: t.features.f4 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={ftl1} 
          alt="FTL Truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="inline-block bg-brand-red text-white px-3 py-1 mb-4 text-sm font-bold rounded">FTL</div>
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
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 rounded-full z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/10 rounded-full z-0"></div>
             <img 
               src={ftl2} 
               alt="Loading dock" 
               className="rounded-lg shadow-2xl relative z-10"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FTL;