
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Briefcase, ArrowRight, Info } from 'lucide-react';

interface OfficeCareerProps {
  lang: Language;
  onContactClick: () => void;
}

const OfficeCareer: React.FC<OfficeCareerProps> = ({ lang, onContactClick }) => {
  const t = translations[lang].office;

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t.subtitle}</p>
         </div>
         <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Office background" />
         </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.desc}</h2>
        </div>

        <div className="max-w-2xl mx-auto bg-blue-50 border-l-4 border-brand-blue p-8 rounded-r-lg text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full text-brand-blue shadow">
              <Info size={24} />
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-4">No Current Openings</h3>
          <p className="text-gray-700 mb-6">{t.no_openings_message}</p>
          <button 
            onClick={onContactClick}
            className="whitespace-nowrap bg-brand-dark text-white px-6 py-3 rounded hover:bg-brand-red transition-colors flex items-center gap-2 mx-auto"
          >
            {t.cta_button} <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default OfficeCareer;
