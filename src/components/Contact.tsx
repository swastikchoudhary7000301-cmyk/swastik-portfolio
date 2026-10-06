import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showLinkedInNotice, setShowLinkedInNotice] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || 'Software Engineering / Internship Opportunity'
    )}&body=${encodeURIComponent(message || 'Hi Swastik,\n\nI reviewed your portfolio and would love to connect.')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-white/10 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Indicator */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase">06 /</span>
            <span className="font-mono text-xs text-[#A0A0A0] tracking-widest uppercase">
              GET IN TOUCH
            </span>
          </div>
          <span className="font-mono text-xs text-[#666666]">
            AVAILABLE FOR 2026 INTERNSHIPS
          </span>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Big Editorial Statement */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#F5F5F5] font-['Syne',sans-serif] leading-[0.92] mb-8">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E0E0] to-[#888888]">
                SOMETHING
              </span>{' '}
              <br />
              <span className="font-['Playfair_Display',serif] italic font-normal text-white">
                USEFUL.
              </span>
            </h2>

            <p className="max-w-xl text-lg sm:text-xl text-[#A0A0A0] font-light leading-relaxed mb-8">
              Have an idea, opportunity, or internship opportunity? <br />
              <span className="text-white font-normal">Let's connect.</span>
            </p>

            {/* Direct Email Display Bar */}
            <div className="inline-flex flex-wrap items-center gap-4 p-4 rounded-lg bg-[#141414] border border-white/10 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#1e1e1e] text-[#FF3B30]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#777777] block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-white hover:text-[#FF3B30] transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-auto px-3.5 py-1.5 bg-[#202020] hover:bg-[#282828] text-xs font-mono text-[#D0D0D0] hover:text-white rounded border border-white/5 transition-all flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#888888]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-8 py-3.5 bg-[#FF3B30] hover:bg-[#e03429] text-white text-xs font-bold font-mono tracking-widest uppercase transition-all shadow-lg shadow-[#FF3B30]/20 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#151515] hover:bg-[#1e1e1e] text-white text-xs font-mono tracking-widest uppercase transition-all border border-white/10 flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#FF3B30]" />
                <span>GITHUB</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#151515] hover:bg-[#1e1e1e] text-[#F5F5F5] hover:text-white text-xs font-mono tracking-widest uppercase transition-all border border-white/10 flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Quick Message Dispatch Form */}
          <div className="lg:col-span-5 bg-[#111111] border border-white/10 rounded-lg p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#FF3B30] font-bold mb-2">
              QUICK DISPATCH
            </h3>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-['Syne',sans-serif] mb-6">
              Send a Direct Message
            </h4>

            <form onSubmit={handleQuickMail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#888888] uppercase mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF3B30]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#888888] uppercase mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Hello Swastik, I would like to discuss..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded px-4 py-2.5 text-xs font-mono text-white placeholder:text-[#555555] focus:outline-none focus:border-[#FF3B30] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#FF3B30] hover:bg-[#e03429] text-white text-xs font-bold font-mono tracking-widest uppercase transition-all rounded flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISPATCH VIA EMAIL</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
