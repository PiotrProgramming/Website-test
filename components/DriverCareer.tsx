import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Truck, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { driver1 } from './assets';

interface DriverCareerProps {
  lang: Language;
  onContactClick: () => void;
}

const DriverCareer: React.FC<DriverCareerProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].driver;

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={driver1} 
          alt="Driver inside truck" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center">
          <div className="container mx-auto px-6">
             <div className="max-w-2xl animate-fade-in-up">
                <div className="inline-block bg-brand-red text-white px-3 py-1 mb-4 text-sm font-bold rounded uppercase">{translations[lang].nav.career}</div>
                <h1 className="text-5xl font-bold text-white mb-6">{t.title}</h1>
                <p className="text-xl text-gray-200 mb-8">{t.subtitle}</p>
                <button 
                  onClick={onContactClick}
                  className="bg-white text-brand-dark px-8 py-3 rounded font-bold hover:bg-brand-red hover:text-white transition-colors"
                >
                  {translations[lang].nav.contact}
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">{t.desc}</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <CheckCircle className="text-brand-red" /> {t.requirements}
              </h3>
              <ul className="space-y-3">
                {t.req_list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-blue/5 p-8 rounded-lg border-l-4 border-brand-blue">
               <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-brand-blue">
                <Truck className="text-brand-blue" /> {t.offer}
              </h3>
              <ul className="space-y-3">
                {t.offer_list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                     <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2.5 shrink-0"></span>
                     {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <img 
               src="https://images.unsplash.com/photo-1501700493788-fa1c4fa64134?auto=format&fit=crop&q=80&w=1000" 
               alt="Driver lifestyle" 
               className="rounded-lg shadow-2xl mb-8"
             />
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white shadow p-4 rounded text-center border border-gray-100">
                    <MapPin className="mx-auto text-brand-red mb-2" />
                    <div className="font-bold text-gray-900">Europe</div>
                    <div className="text-xs text-gray-500">Operating Area</div>
                </div>
                <div className="bg-white shadow p-4 rounded text-center border border-gray-100">
                    <Calendar className="mx-auto text-brand-red mb-2" />
                    <div className="font-bold text-gray-900">Flexible</div>
                    <div className="text-xs text-gray-500">Rotation System</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCareer;
