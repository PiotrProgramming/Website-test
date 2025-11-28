
import React from 'react';
import { Star, ThumbsUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TrustBarProps {
  lang: Language;
}

const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const t = translations[lang].trust;

  return (
    <div className="bg-white py-8 border-b border-gray-100 relative z-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          
          {/* Trans.eu Badge - Professional Slick Design */}
          <div className="flex items-center group cursor-default">
             {/* Brand Mark */}
             <div className="bg-[#00c05e] text-white w-14 h-14 rounded-l-lg flex flex-col items-center justify-center font-bold shadow-sm relative overflow-hidden">
                <span className="text-2xl italic font-black relative z-10">T</span>
                <div className="absolute inset-0 bg-white/10 skew-x-12 transform -translate-x-2"></div>
             </div>
             
             {/* Score Info */}
             <div className="bg-gray-50 h-14 px-6 rounded-r-lg border-y border-r border-gray-100 flex items-center gap-5 group-hover:bg-[#f8fdfa] transition-colors">
                 <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1.5">
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                         Trans.eu
                       </span>
                       <ShieldCheck size={12} className="text-[#00c05e]" />
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                       <span className="text-2xl font-black text-gray-900 leading-none">5.0</span>
                       <div className="flex flex-col">
                           <div className="flex gap-0.5">
                               {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#00c05e] fill-[#00c05e]" />)}
                           </div>
                       </div>
                    </div>
                 </div>
                 <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
                 <div className="hidden sm:block text-[10px] font-bold text-[#00c05e] uppercase tracking-wide bg-[#00c05e]/10 px-2 py-1 rounded">
                    Certified
                 </div>
             </div>
          </div>

          {/* Vertical Divider */}
           <div className="hidden md:block w-px h-10 bg-gray-200/80"></div>

           {/* Client Satisfaction Badge */}
           <div className="flex items-center group cursor-default">
             <div className="bg-brand-blue text-white w-14 h-14 rounded-l-lg flex items-center justify-center font-bold shadow-sm">
                <ThumbsUp size={24} />
             </div>
             <div className="bg-gray-50 h-14 px-6 rounded-r-lg border-y border-r border-gray-100 flex items-center gap-5 group-hover:bg-blue-50/30 transition-colors">
                 <div className="flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-0.5">
                       {t.clients}
                    </div>
                     <div className="flex items-center gap-1.5 mt-0.5">
                       <span className="text-2xl font-black text-gray-900 leading-none">100%</span>
                       <span className="text-[10px] text-gray-400 font-medium">Positive</span>
                    </div>
                 </div>
                 <div className="hidden sm:block bg-white p-1.5 rounded-full border border-gray-100 shadow-sm">
                    <CheckCircle size={16} className="text-brand-blue" />
                 </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBar;
