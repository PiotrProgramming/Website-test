import React from 'react';
import { Linkedin } from 'lucide-react';
import { Page, Language } from '../types';
import { logoDarkBase64 } from './assets';
import { translations } from '../translations';

interface FooterProps {
  onNavigate: (page: Page) => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = translations[lang].nav;

  const services = [
    { id: 'ftl' as Page, label: t.ftl_short },
    { id: 'ltl' as Page, label: t.ltl_short },
    { id: 'forwarding' as Page, label: t.forwarding },
    { id: 'warehousing' as Page, label: t.warehousing_short },
  ];

  const companyLinks = [
    { id: 'values' as Page, label: t.values },
    { id: 'fleet' as Page, label: t.fleet },
    { id: 'ethics' as Page, label: t.ethics },
    { id: 'documents' as Page, label: t.documents },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t-4 border-brand-red">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center">
              <img src={logoDarkBase64} alt="Stanisz Transport" className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner in international logistics. Delivering excellence across Europe since 1992.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/stanisz-transport-sp-z-o-o/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.company}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {companyLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="hover:text-white transition-colors">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.services}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {services.map(service => (
                <li key={service.id}>
                  <button onClick={() => onNavigate(service.id)} className="hover:text-white transition-colors">{service.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.contact}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>ul. Oławska 48</li>
              <li>57-100 Strzelin, Poland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Stanisz Transport. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;