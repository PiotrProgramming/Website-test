import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Scale, Globe, Users, Leaf } from 'lucide-react';

interface EthicsProps {
  lang: Language;
}

const Ethics: React.FC<EthicsProps> = ({ lang }) => {
  const t = translations[lang].ethics;

  return (
    <div className="pt-20">
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white p-10 shadow-xl rounded-lg -mt-24 relative z-10">
           <p className="text-lg text-gray-700 mb-12 text-center italic border-b pb-8">
             "{t.intro}"
           </p>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="flex gap-4">
                 <div className="bg-gray-100 p-3 rounded h-fit text-brand-red">
                   <Scale size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-2">{t.law}</h3>
                   <p className="text-gray-600">{t.point1}</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="bg-gray-100 p-3 rounded h-fit text-brand-red">
                   <Globe size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-2">{t.competition}</h3>
                   <p className="text-gray-600">{t.point2}</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="bg-gray-100 p-3 rounded h-fit text-brand-red">
                   <Users size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-2">{t.rights}</h3>
                   <p className="text-gray-600">{t.point3}</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="bg-gray-100 p-3 rounded h-fit text-brand-red">
                   <Leaf size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-2">{t.ecology}</h3>
                   <p className="text-gray-600">{t.point4}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Ethics;