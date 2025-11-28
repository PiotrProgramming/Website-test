
import React from 'react';
import { Zap, Droplets, Shield } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FinancialBenefitsProps {
  lang: Language;
}

const FinancialBenefits: React.FC<FinancialBenefitsProps> = ({ lang }) => {
  // FIX: The 'carriers' translation key does not exist. Based on the component's context
  // of financial benefits for transport partners, this likely falls under the
  // responsibility of the forwarding department. The key has been changed to 'forwarding'.
  // I have added the necessary sub-keys to the translations.ts file.
  const t = translations[lang].forwarding;

  return (
    <div className="bg-brand-dark text-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="grid md:grid-cols-5">
        <div className="md:col-span-2 bg-brand-red p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{t.fin_title}</h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">{t.fin_subtitle}</p>
            <div className="w-16 h-1 bg-white/30 mb-0"></div>
          </div>
          <Zap className="absolute -bottom-4 -right-4 w-48 h-48 text-white/10 rotate-12" />
        </div>
        <div className="md:col-span-3 p-12 bg-gray-800">
          <div className="space-y-8">
            {/* Skonto */}
            <div className="flex gap-6">
              <div className="bg-white/10 p-4 rounded-lg h-fit">
                <Zap className="text-yellow-400" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-yellow-400">{t.skonto.title}</h4>
                <p className="text-gray-300 leading-relaxed">{t.skonto.desc}</p>
              </div>
            </div>

            {/* Fuel */}
            <div className="flex gap-6">
              <div className="bg-white/10 p-4 rounded-lg h-fit">
                <Droplets className="text-brand-blue" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-brand-blue">{t.fuel.title}</h4>
                <p className="text-gray-300 leading-relaxed">{t.fuel.desc}</p>
              </div>
            </div>

            {/* Insurance */}
            <div className="flex gap-6">
              <div className="bg-white/10 p-4 rounded-lg h-fit">
                <Shield className="text-green-400" size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-green-400">{t.insurance.title}</h4>
                <p className="text-gray-300 leading-relaxed">{t.insurance.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialBenefits;
