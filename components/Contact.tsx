import React from 'react';
import { MapPin, Clock, Mail, Phone, User } from 'lucide-react';

const Contact: React.FC = () => {
  const team = [
    {
      name: 'Jerzy Stanisz',
      title: 'CEO',
      email: null,
      phone: null,
    },
    {
      name: 'Mateusz Stanisz',
      title: 'COO',
      email: 'biuro@stanisz-transport.pl',
      phone: '+48 500 175 331',
    },
    {
      name: 'Przemysław Głodzik',
      title: 'International Forwarding Agent',
      email: 'przemek@stanisz-transport.pl',
      phone: '+48 690 515 161',
    },
    {
      name: 'Monika Sukacz',
      title: 'International Forwarding Agent',
      email: 'monika@stanisz-transport.com',
      phone: null,
    },
    {
      name: 'Piotr Kołodziejczyk',
      title: 'International Forwarding Agent',
      email: 'piotr@stanisz-transport.com',
      phone: '+48 572 310 954',
    },
    {
      name: 'Marta Żygadło',
      title: 'Administration',
      email: 'marta@stanisz-transport.pl',
      phone: '+48 511 107 791',
    },
  ];

  return (
    <div className="pt-20">
       <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to move your cargo? Get a quote or ask us anything.
          </p>
        </div>
        {/* Abstract BG shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 -skew-x-12 transform translate-x-12"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-100">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Headquarters</h3>
                      <p className="text-gray-600">ul. Oławska 48<br />57-100 Strzelin, Poland</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Working Hours</h3>
                      <p className="text-gray-600">Mon - Fri: 8:00 - 16:00<br />Sat - Sun: Closed</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <User size={48} className="text-gray-400" />
                </div>
                <h3 className="font-bold text-xl text-brand-dark">{member.name}</h3>
                <p className="text-brand-red font-medium mb-4">{member.title}</p>
                <div className="text-sm text-gray-600 space-y-2">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 hover:text-brand-blue transition-colors">
                      <Mail size={16} />
                      <span>{member.email}</span>
                    </a>
                  )}
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 hover:text-brand-blue transition-colors">
                      <Phone size={16} />
                      <span>{member.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;