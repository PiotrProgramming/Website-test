
import React from 'react';
// FIX: Imported the missing Warehouse icon from lucide-react.
import { Truck, Package, Globe, Warehouse } from 'lucide-react';
import { Service, Language, Page } from '../types';
import { translations } from '../translations';
import { ftl1, ltl1, sped1, mag1 } from './assets';

interface ServicesProps {
  lang: Language;
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ lang, onNavigate }) => {
  const t = translations[lang].services_section;

  const servicesList: Service[] = [
    {
      title: t.ftl.title,
      description: t.ftl.desc,
      icon: <Truck size={40} />,
      image: ftl1,
      pageId: 'ftl'
    },
    {
      title: t.ltl.title,
      description: t.ltl.desc,
      icon: <Package size={40} />,
      image: ltl1,
      pageId: 'ltl'
    },
    {
      title: t.forwarding.title,
      description: t.forwarding.desc,
      icon: <Globe size={40} />,
      image: sped1,
      pageId: 'forwarding'
    },
    // FIX: Added the missing 'Warehousing' service to the list, which existed in translations but was not being rendered.
    {
      title: t.warehousing.title,
      description: t.warehousing.desc,
      icon: <Warehouse size={40} />,
      image: mag1,
      pageId: 'warehousing'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2">{t.title}</h2>
          <h3 className="text-4xl font-bold text-gray-900">{t.subtitle}</h3>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        {/* FIX: Updated grid to display 4 columns on large screens to accommodate the new item. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              onClick={() => onNavigate(service.pageId)}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-brand-red text-white p-4 rounded shadow-lg group-hover:bg-brand-dark transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-2">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
