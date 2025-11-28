

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { Page, Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  onNavigate: (page: Page) => void;
  lang?: Language;
}

// Dedicated Video Player Component for Background Looping
const BackgroundVideoPlayer: React.FC<{ playlist: string[] }> = ({ playlist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    // Loop to next video in folder/playlist
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  useEffect(() => {
    // Ensure video plays when index changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 w-full h-full bg-brand-dark">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="object-cover w-full h-full opacity-80 transition-opacity duration-1000"
        onEnded={handleVideoEnded}
      >
        <source src={playlist[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      
      {/* Modern texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onNavigate, lang = 'en' }) => {
  const t = translations[lang].hero;
  
  // VIDEO PLAYLIST CONFIGURATION
  // ----------------------------
  // The videos are played from the '/videos/' directory.
  // To use your own videos:
  // 1. Create a 'videos' folder inside the 'public' folder at the project root.
  // 2. Place your .mp4 files inside 'public/videos/'.
  // 3. Update the filenames in the array below to match your files.
  
  const videoPlaylist = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4"
  ];

  return (
    <section className="relative h-[107vh] w-full overflow-hidden bg-brand-dark">
      {/* Background Video Player */}
      <BackgroundVideoPlayer playlist={videoPlaylist} />

      {/* Main Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-brand-red text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-4 rounded-sm shadow-lg">
            {t.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            {t.title} <br />
            <span className="text-brand-red">{t.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed border-l-4 border-brand-red pl-6 backdrop-blur-sm bg-black/10 py-2 rounded-r">
            {t.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('services')}
              className="bg-brand-red text-white px-8 py-4 rounded font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-red-900/50"
            >
              {t.btn_services}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-brand-dark transition-all shadow-lg"
            >
              {t.btn_contact}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned higher to avoid cutoff */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 z-20 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <ArrowDown size={32} />
      </div>
      
      {/* Decorative bottom slant - Dark mode to match Stats section */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-brand-dark clip-path-slant-reverse hidden md:block z-10"></div>
    </section>
  );
};

export default Hero;