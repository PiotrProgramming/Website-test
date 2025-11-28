
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { FileText, Map, Truck, PackageCheck } from 'lucide-react';

interface ProcessProps {
  lang: Language;
}

const Process: React.FC<ProcessProps> = ({ lang }) => {
  const t = translations[lang].process;

  const steps = [
    { 
      icon: <FileText size={32} />, 
      title: t.step1, 
      desc: t.desc1 
    },
    { 
      icon: <Map size={32} />, 
      title: t.step2, 
      desc: t.desc2 
    },
    { 
      icon: <Truck size={32} />, 
      title: t.step3, 
      desc: t.desc3 
    },
    { 
      icon: <PackageCheck size={32} />, 
      title: t.step4, 
      desc: t.desc4 
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">{t.subtitle}</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300 z-0"></div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-brand-red shadow-sm group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
