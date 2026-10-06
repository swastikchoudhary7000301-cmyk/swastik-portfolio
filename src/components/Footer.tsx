import React from 'react';
import { ArrowUp, Github, Mail, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#060606] text-[#A0A0A0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Identity */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-['Syne',sans-serif] text-base font-black tracking-widest text-white uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
            </div>
            <p className="font-mono text-xs text-[#777777] uppercase tracking-wider">
              {PERSONAL_INFO.role} · Full-Stack & Systems Learner
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono tracking-wider">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-[#FF3B30]" />
              <span>GITHUB</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF3B30]" />
              <span>EMAIL</span>
            </a>

            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[#FF3B30] font-bold">LC</span>
              <span>LEETCODE</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LINKEDIN</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded bg-[#111111] hover:bg-[#1a1a1a] border border-white/5 text-[#A0A0A0] hover:text-white transition-all group"
            title="Return to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#FF3B30] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#555555] gap-4">
          <div>
            © 2026 Swastik Choudhary. All rights reserved.
          </div>
          <div>
            Crafted with dark developer aesthetics, editorial typography & live platform telemetry.
          </div>
        </div>
      </div>
    </footer>
  );
};
