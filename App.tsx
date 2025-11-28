

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Contact from './components/Contact';
import About from './components/About'; // Left as fallback if needed
import Values from './components/Values';
import Ethics from './components/Ethics';
import Documents from './components/Documents';
import Forwarding from './components/Carriers';
import FTL from './components/FTL';
import LTL from './components/LTL';
import Warehousing from './components/Warehousing';
import PaperIndustry from './components/PaperIndustry';
import AutomotiveIndustry from './components/AutomotiveIndustry';
import CleaningIndustry from './components/CleaningIndustry';
import DriverCareer from './components/DriverCareer';
import OfficeCareer from './components/OfficeCareer';
import FinancialBenefits from './components/FinancialBenefits';
import Process from './components/Process';
import ModernOperator from './components/ModernOperator';
import IndustryPreview from './components/IndustryPreview';
import Footer from './components/Footer';
import { Page, Language } from './types';
import { translations } from './translations';
import { ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('pl'); // Default to Polish as it seems primary

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    const t = translations[language];

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} lang={language} />
            <Stats lang={language} />
            <TrustBar lang={language} />
            
            {/* Modern Operator Intro */}
            <ModernOperator lang={language} onNavigate={setCurrentPage} />

            {/* Process Section */}
            <Process lang={language} />
            
            {/* Industry Solutions */}
            <IndustryPreview lang={language} onNavigate={setCurrentPage} />

            {/* General Services Overview */}
            <Services lang={language} onNavigate={setCurrentPage} />

            <div className="bg-brand-dark py-20 text-center text-white relative overflow-hidden">
               <div className="relative z-10 container mx-auto px-6">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.home.cta_title}</h2>
                 <p className="mb-8 text-gray-300 max-w-2xl mx-auto">{t.home.cta_desc}</p>
                 <button 
                   onClick={() => setCurrentPage('contact')}
                   className="bg-brand-red px-8 py-4 rounded font-bold text-lg hover:bg-red-700 transition-colors"
                 >
                   {t.home.cta_btn}
                 </button>
               </div>
            </div>
          </>
        );
      case 'services':
        return (
          <>
            <div className="pt-20 bg-gray-50">
               <div className="bg-brand-blue text-white py-16 text-center">
                  <h1 className="text-4xl font-bold uppercase">{t.nav.services}</h1>
               </div>
            </div>
            <Services lang={language} onNavigate={setCurrentPage} />
          </>
        );
      case 'ftl':
        return <FTL lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'ltl':
        return <LTL lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'warehousing':
        return <Warehousing lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'paper':
        return <PaperIndustry lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'automotive':
        return <AutomotiveIndustry lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'cleaning':
        return <CleaningIndustry lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'company': // Fallback if someone clicks the parent item
      case 'values':
        return <Values lang={language} />;
      case 'fleet':
        return <Fleet />;
      case 'ethics':
        return <Ethics lang={language} />;
      case 'documents':
        return <Documents lang={language} />;
      case 'forwarding':
        return <Forwarding lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'contact':
        return <Contact />;
      case 'career': // Default career page acting as driver page if parent clicked, or we can redirect
      case 'driver':
        return <DriverCareer lang={language} onContactClick={() => setCurrentPage('contact')} />;
      case 'office':
        return <OfficeCareer lang={language} onContactClick={() => setCurrentPage('contact')} />;
      default:
        return <Hero onNavigate={setCurrentPage} lang={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        currentLang={language}
        onLanguageChange={setLanguage}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} lang={language} />
    </div>
  );
};

export default App;