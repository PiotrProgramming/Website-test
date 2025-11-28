
import React from 'react';
import { Language, Page } from '../types';
import { translations } from '../translations';
import { ChevronRight } from 'lucide-react';
import { main1 } from './assets';

interface ModernOperatorProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

const ModernOperator: React.FC<ModernOperatorProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].operator;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-brand-red w-20 h-1 mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              {t.title}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
            <button 
              onClick={() => onNavigate('company')}
              className="mt-8 text-brand-red font-bold uppercase tracking-wider hover:text-brand-dark transition-colors flex items-center gap-2 group"
            >
              {t.btn}
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-red rounded-lg z-0 hidden md:block"></div>
            <img 
              src={main1} 
              alt="Modern Logistics Operator" 
              className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernOperator;