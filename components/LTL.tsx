import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Package, Shuffle, BarChart, Layers } from 'lucide-react';
import { ltl1, ltl2 } from './assets';

interface LTLProps {
  lang: Language;
  onContactClick: () => void;
}

const LTL: React.FC<LTLProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].ltl;

  const features = [
    { icon: <Layers size={32} />, text: t.features.f1 },
    { icon: <Shuffle size={32} />, text: t.features.f2 },
    { icon: <Package size={32} />, text: t.features.f3 },
    { icon: <BarChart size={32} />, text: t.features.f4 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={ltl1} 
          alt="LTL Warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="inline-block bg-white text-brand-blue px-3 py-1 mb-4 text-sm font-bold rounded">LTL</div>
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
               src={ltl2} 
               alt="Warehouse Logistics" 
               className="rounded-lg shadow-2xl"
             />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">{t.subtitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.desc}
            </p>
            
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                  <div className="bg-brand-blue/10 text-brand-blue p-3 rounded-full shrink-0">
                    {f.icon}
                  </div>
                  <p className="font-medium text-gray-800 text-lg">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LTL;