import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-brand-red font-bold uppercase tracking-wide mb-2">About Us</h2>
            <h3 className="text-4xl font-bold text-gray-900">Our Story</h3>
            <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565515267326-b800ce06765b?auto=format&fit=crop&q=80&w=1000" 
                alt="Warehouse Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-brand-dark mb-4">From a single truck to a European leader</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 1992, Stanisz Transport began as a small family business with a passion for logistics. Over the past three decades, we have grown into a dynamic transport company operating across the entire European continent.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Despite our growth, we have maintained the core values that got us here: personal approach to every client, unwavering reliability, and respect for our drivers and staff. We believe that transport is not just about moving goods from A to B, but about building lasting partnerships.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8">
                <div className="text-center">
                  <div className="bg-blue-100 text-brand-blue p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Users size={20} />
                  </div>
                  <div className="font-bold text-sm">Teamwork</div>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 text-brand-red p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Target size={20} />
                  </div>
                  <div className="font-bold text-sm">Precision</div>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Award size={20} />
                  </div>
                  <div className="font-bold text-sm">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;