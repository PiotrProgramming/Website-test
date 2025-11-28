
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { TrendingUp, UserCheck, ClipboardCheck, Globe, ChevronRight } from 'lucide-react';
import { sped1 } from './assets';

interface ForwardingProps {
  lang: Language;
  onContactClick: () => void;
}

const Forwarding: React.FC<ForwardingProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].forwarding;

  const benefits = [
    { icon: <TrendingUp size={40} />, title: t.benefit1.title, desc: t.benefit1.desc },
    { icon: <UserCheck size={40} />, title: t.benefit2.title, desc: t.benefit2.desc },
    { icon: <ClipboardCheck size={40} />, title: t.benefit3.title, desc: t.benefit3.desc },
    { icon: <Globe size={40} />, title: t.benefit4.title, desc: t.benefit4.desc },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={sped1} 
          alt="Forwarding background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl animate-fade-in-up">
              <div className="inline-block bg-brand-red text-white px-3 py-1 mb-4 text-sm font-bold rounded uppercase">{translations[lang].nav.forwarding}</div>
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

      {/* Operational Benefits Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t.benefits}</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-brand-red">
              <div className="text-brand-red mb-6 bg-red-50 w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">{t.subtitle}</h2>
                <button 
                    onClick={onContactClick}
                    className="bg-brand-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 mx-auto group"
                >
                    {t.cta}
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Forwarding;