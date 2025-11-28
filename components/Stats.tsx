import React from 'react';
import { Calendar, Truck, Users, MapPin, Timer } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface StatsProps {
  lang?: Language;
}

const Stats: React.FC<StatsProps> = ({ lang = 'en' }) => {
  const t = translations[lang].stats;

  const stats = [
    { id: 1, label: t.years, value: '30+', icon: <Calendar className="w-8 h-8 text-brand-red mb-2" /> },
    { id: 2, label: t.trucks, value: '30+', icon: <Truck className="w-8 h-8 text-brand-red mb-2" /> },
    { id: 5, label: t.age, value: '1,5', icon: <Timer className="w-8 h-8 text-brand-red mb-2" /> },
    { id: 3, label: t.staff, value: '40+', icon: <Users className="w-8 h-8 text-brand-red mb-2" /> },
    { id: 4, label: t.countries, value: '13', icon: <MapPin className="w-8 h-8 text-brand-red mb-2" /> },
  ];

  return (
    <div className="bg-brand-dark py-16 text-white -mt-2 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-4 border-r border-gray-700/30 last:border-r-0 md:border-none lg:border-r lg:last:border-none">
              {stat.icon}
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;