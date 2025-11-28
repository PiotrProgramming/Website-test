import React from 'react';
import { Shield, Clock, Zap, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ValuesProps {
  lang: Language;
}

const Values: React.FC<ValuesProps> = ({ lang }) => {
  const t = translations[lang].values;

  const valuesList = [
    { icon: <HeartHandshake size={40} />, title: t.integrity.title, desc: t.integrity.desc },
    { icon: <Clock size={40} />, title: t.punctuality.title, desc: t.punctuality.desc },
    { icon: <Shield size={40} />, title: t.safety.title, desc: t.safety.desc },
    { icon: <Zap size={40} />, title: t.innovation.title, desc: t.innovation.desc },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2">{t.title}</h2>
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.subtitle}</h1>
           <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesList.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-red hover:-translate-y-2 transition-transform duration-300">
              <div className="text-brand-red mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-20 relative rounded-xl overflow-hidden h-96">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000" 
            alt="Team shaking hands" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center">
             <p className="text-white text-2xl md:text-3xl font-light italic max-w-3xl text-center px-4">
               "{t.quote}"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;