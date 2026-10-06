import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ActivityDashboard } from './components/ActivityDashboard';
import { JourneyTimeline } from './components/JourneyTimeline';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'activity', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] relative overflow-x-hidden selection:bg-[#FF3B30] selection:text-white">
      {/* Background subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Main Layout Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} />

        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ActivityDashboard />
          <JourneyTimeline />
          <CurrentFocus />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
