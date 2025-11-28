import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Page, NavItem, Language } from '../types';
import { translations } from '../translations';
import { logoLightBase64, logoDarkBase64 } from './assets';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const t = translations[currentLang].nav;
  
  const navStructure: NavItem[] = [
    { 
      label: t.services, 
      id: 'services',
      children: [
        { label: t.ftl_short, description: t.ftl_desc, id: 'ftl' },
        { label: t.ltl_short, description: t.ltl_desc, id: 'ltl' },
        { label: t.warehousing_short, description: t.warehousing_desc, id: 'warehousing' }
      ]
    },
    {
      label: t.industries,
      children: [
        { label: t.paper, description: t.paper_desc, id: 'paper' },
        { label: t.automotive, description: t.auto_desc, id: 'automotive' },
        { label: t.cleaning, description: t.clean_desc, id: 'cleaning' },
      ]
    },
    { 
      label: t.company, 
      children: [
        { label: t.values, id: 'values' },
        { label: t.fleet, id: 'fleet' },
        { label: t.ethics, id: 'ethics' },
        { label: t.documents, id: 'documents' },
      ]
    },
    { label: t.forwarding, id: 'forwarding' },
    { 
      label: t.career, 
      id: 'career',
      children: [
        { label: t.driver, description: t.driver_desc, id: 'driver' },
        { label: t.office, description: t.office_desc, id: 'office' }
      ]
    },
    { label: t.contact, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasSolidBg = isScrolled || currentPage !== 'home';
  const navBackground = hasSolidBg ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';
  const textColor = hasSolidBg ? 'text-gray-900' : 'text-white';
  const currentLogo = hasSolidBg ? logoLightBase64 : logoDarkBase64;
  const hoverColor = 'hover:text-brand-red';
  const dropdownBg = 'bg-white shadow-lg border-t-2 border-brand-red';
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300`}>
      {/* Top Bar */}
      <div className={`hidden md:block w-full transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 bg-brand-dark text-white opacity-100'}`}>
        <div className="container mx-auto px-6 h-full flex justify-end items-center text-sm font-light">
          <div className="flex gap-2">
            {(['pl', 'en', 'de', 'nl', 'fr', 'it', 'es'] as Language[]).map((lang) => (
              <button 
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`uppercase px-2 ${currentLang === lang ? 'text-brand-red font-bold' : 'text-gray-300 hover:text-white'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`${navBackground} transition-all duration-300 relative`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="cursor-pointer flex items-center" 
            onClick={() => onNavigate('home')}
          >
            <img 
              src={currentLogo}
              alt="Stanisz Transport" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navStructure.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => item.id && onNavigate(item.id)}
                  className={`font-medium text-sm uppercase tracking-wider transition-colors flex items-center gap-1 ${
                    currentPage === item.id ? 'text-brand-red' : textColor
                  } ${hoverColor}`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </button>

                {/* Dropdown */}
                {item.children && (
                  <div className={`absolute top-full left-0 pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2`}>
                    <div className={`${dropdownBg} flex flex-col py-2 rounded-b-sm`}>
                      {item.children.map((child) => (
                         <button
                           key={child.id}
                           onClick={() => {
                             if (child.id) onNavigate(child.id);
                             setActiveDropdown(null);
                           }}
                           className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-red transition-colors border-b last:border-0 border-gray-100"
                         >
                           <div className="text-sm font-medium">{child.label}</div>
                           {child.description && (
                             <div className="text-xs text-gray-500 mt-1 normal-case font-light">{child.description}</div>
                           )}
                         </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-brand-red text-white px-5 py-2 rounded font-semibold text-sm hover:bg-red-700 transition-colors uppercase"
            >
              {t.quote}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t h-screen overflow-y-auto pb-20">
             {/* Mobile Lang Switcher */}
             <div className="flex justify-center gap-6 py-4 border-b border-gray-100 bg-gray-50">
                {(['pl', 'en', 'de', 'nl', 'fr', 'it', 'es'] as Language[]).map((lang) => (
                  <button 
                    key={lang}
                    onClick={() => onLanguageChange(lang)}
                    className={`uppercase font-bold ${currentLang === lang ? 'text-brand-red' : 'text-gray-400'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

            <div className="flex flex-col py-4">
              {navStructure.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <>
                      <button 
                        onClick={() => item.id && onNavigate(item.id)}
                        className="w-full text-left px-6 py-3 font-bold text-gray-900 uppercase tracking-wider bg-gray-50 border-y border-gray-100 flex justify-between items-center"
                      >
                        {item.label}
                      </button>
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => {
                            if (child.id) onNavigate(child.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className="w-full pl-10 pr-6 py-3 text-left text-gray-600 hover:text-brand-red border-b border-gray-100"
                        >
                          <div className="font-medium">{child.label}</div>
                          {child.description && <div className="text-xs text-gray-400 mt-1">{child.description}</div>}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.id) onNavigate(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full px-6 py-3 text-left font-medium hover:bg-gray-50 hover:text-brand-red border-b border-gray-100 uppercase tracking-wider ${
                        currentPage === item.id ? 'text-brand-red bg-gray-50' : 'text-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;