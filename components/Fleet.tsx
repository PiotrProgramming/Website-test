import React from 'react';
import { CheckCircle } from 'lucide-react';
import { jumbo1, mega1, standard1, fleet1 } from './assets';

const Fleet: React.FC = () => {
    const vehicles = [
        {
            title: 'JUMBO; road train',
            img: jumbo1,
            specs: [
                { label: 'Capacity', value: '12 + 12 t' },
                { label: 'Length', value: '7,7 + 7,7 m' },
                { label: 'Width', value: '2,50 m' },
                { label: 'Height', value: '3,05 m' },
                { label: 'Tonnage', value: '24 t' },
                { label: 'Cubature', value: '120 m³' },
                { label: 'Euro pallets', value: '38 pcs' },
            ],
        },
        {
            title: 'MEGA; Semitrailer',
            description: 'With cabinets curtain and the back door',
            img: mega1,
            specs: [
                { label: 'Length', value: '13,6 m' },
                { label: 'Width', value: '2,48 m' },
                { label: 'Height', value: '3 m' },
                { label: 'Tonnage', value: '25 t' },
                { label: 'Cubature', value: '100 m³' },
                { label: 'Euro pallets', value: '33 pcs' },
            ],
        },
        {
            title: 'Standard; Semitrailer',
            description: 'With curtain opened on the top and sides',
            img: standard1,
            specs: [
                { label: 'Length', value: '13,6 m' },
                { label: 'Width', value: '2,45 m' },
                { label: 'Height', value: '2,85 m' },
                { label: 'Tonnage', value: '25 t' },
                { label: 'Cubature', value: '92 m³' },
                { label: 'Euro pallets', value: '33 pcs' },
            ],
        },
    ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Modern Fleet</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Efficiency, safety, and ecology. We invest in the latest technology to ensure your cargo arrives safely.
          </p>
        </div>
      </div>

      {/* Fleet Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Tractor Unit Info Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <img 
              src={fleet1}
              alt="Modern Truck Fleet" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Eco-Friendly Euro 6 Standards</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Stanisz Transport, we pride ourselves on maintaining one of the youngest fleets in the industry. 
              Our vehicles meet the strictest EURO 6 emission standards, minimizing our environmental footprint while maximizing fuel efficiency.
            </p>
            <ul className="space-y-4">
              {[
                "30+ Modern Tractor Units (Average age < 1.5 years)",
                "GPS & Telematics in every vehicle",
                "24/7 Real-time tracking for clients",
                "Regular maintenance at authorized service centers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Trailer Types Section */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Vehicle Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Detailed information about our available trailer types to suit your cargo needs.</p>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <img src={vehicle.img} alt={vehicle.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-dark mb-1">{vehicle.title}</h3>
                {vehicle.description && <p className="text-xs text-gray-500 mb-4">{vehicle.description}</p>}
                
                <div className="space-y-2 mt-auto">
                    {vehicle.specs.map(spec => (
                        <div key={spec.label} className="flex justify-between text-sm border-b border-gray-100 py-2">
                            <span className="text-gray-600 font-medium">{spec.label}</span>
                            <span className="font-bold text-gray-800">{spec.value}</span>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fleet;