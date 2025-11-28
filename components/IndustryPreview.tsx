
import React from 'react';
import { Language, Page } from '../types';
import { translations } from '../translations';
import { ScrollText, CarFront, Sparkles, ArrowRight } from 'lucide-react';
import { paper1, automotive1, cleaning1 } from './assets';

interface IndustryPreviewProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

const IndustryPreview: React.FC<IndustryPreviewProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  const industries = [
    { 
      id: 'paper', 
      title: t.nav.paper, 
      desc: t.nav.paper_desc,
      icon: <ScrollText size={40} />,
      img: paper1
    },
    { 
      id: 'automotive', 
      title: t.nav.automotive, 
      desc: t.nav.auto_desc,
      icon: <CarFront size={40} />,
      img: automotive1
    },
    { 
      id: 'cleaning', 
      title: t.nav.cleaning, 
      desc: t.nav.clean_desc,
      icon: <Sparkles size={40} />,
      img: cleaning1
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2">{t.industry_section.title}</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t.industry_section.subtitle}</h3>
           <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <div 
              key={index}
              onClick={() => onNavigate(ind.id as Page)}
              className="group cursor-pointer relative h-96 rounded-lg overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <img 
                src={ind.img} 
                alt={ind.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-brand-red/90 group-hover:via-brand-red/70 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white/80 mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  {ind.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-gray-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {ind.desc}
                </p>
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                  {t.industry_section.btn} <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryPreview;