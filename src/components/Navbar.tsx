import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ACTIVITY', href: '#activity' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Zone - Single text element wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-widest text-[#F5F5F5] hover:text-white transition-colors"
        >
          <span className="font-['Syne',sans-serif] tracking-[0.25em] text-sm uppercase">
            SWASTIK
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF3B30] transition-transform group-hover:scale-125" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#A0A0A0]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-[#F5F5F5] ${
                  isActive ? 'text-[#F5F5F5]' : ''
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF3B30] transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Zone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-white bg-[#151515] border border-white/10 hover:border-[#FF3B30]/50 hover:bg-[#1a1a1a] transition-all rounded-sm"
          >
            <span>CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B30] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#A0A0A0] hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B30]"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0c0c]/98 backdrop-blur-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-semibold tracking-widest text-[#A0A0A0]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 border-b border-white/5 transition-colors hover:text-white ${
                    isActive ? 'text-white' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF3B30]" />}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full text-center py-3 bg-[#FF3B30] text-white text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-[#e03429] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Send Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
