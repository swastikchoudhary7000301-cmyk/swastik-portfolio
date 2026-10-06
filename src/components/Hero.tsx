import React, { useState } from 'react';
import { ArrowDown, Github, ExternalLink, Terminal, Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'java' | 'fullstack'>('java');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF3B30]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#FF3B30]/4 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid: Left Typographic Editorial, Right Abstract Developer Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start lg:items-center my-4 sm:my-8">
        {/* Left Column: Oversized Editorial Statement */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-xs text-[#A0A0A0] mb-8 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B30]" />
            </span>
            <span className="font-mono uppercase tracking-widest text-[11px] text-[#F5F5F5]">
              OPEN TO INTERNSHIP OPPORTUNITIES
            </span>
          </div>

          {/* Kicker */}
          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#A0A0A0] font-mono mb-2">
            <span>HELLO, I'M</span>
            <span className="w-8 h-[1px] bg-[#FF3B30]" />
            <span className="text-white/40">3RD YEAR IT</span>
          </div>

          {/* Oversized Typography - Editorial and Bold */}
          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#F5F5F5] uppercase leading-[0.92] mb-6 font-['Syne',sans-serif]">
            <span>SWASTIK</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E0E0] to-[#A0A0A0]">
              CHOUDHARY
            </span>
          </h1>

          {/* Role & Editorial Accent */}
          <div className="flex flex-wrap items-baseline gap-3 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5] font-['Playfair_Display',serif] italic">
              Software Developer
            </h2>
            <span className="text-white/30 text-sm">/</span>
            <span className="text-xs sm:text-sm font-mono text-[#A0A0A0] tracking-wider uppercase">
              Full-Stack & Algorithms
            </span>
          </div>

          {/* Supporting Statement */}
          <p className="max-w-xl text-base sm:text-lg text-[#A0A0A0] font-light leading-relaxed mb-10">
            {PERSONAL_INFO.heroStatement}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 bg-[#FF3B30] hover:bg-[#e6352a] text-white text-xs font-bold tracking-widest uppercase transition-all duration-200 text-center shadow-lg shadow-[#FF3B30]/20 flex items-center justify-center gap-2 group"
            >
              <span>VIEW PROJECTS</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#151515] hover:bg-[#1c1c1c] text-[#F5F5F5] hover:text-white border border-white/10 hover:border-white/25 text-xs font-semibold tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <Github className="w-4 h-4 text-[#FF3B30]" />
              <span>GITHUB</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-4 py-3.5 text-xs font-mono text-[#A0A0A0] hover:text-white transition-colors border border-dashed border-white/10 hover:border-white/20"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> COPIED
                </span>
              ) : (
                <span>COPY EMAIL</span>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Abstract Futuristic Developer Visual Panel (NO PERSONAL PHOTO) */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full max-w-lg mx-auto bg-[#111111] border border-white/10 rounded-lg p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
            {/* Visual Panel Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF3B30]" />
                <div className="w-3 h-3 rounded-full bg-[#333333]" />
                <div className="w-3 h-3 rounded-full bg-[#222222]" />
                <span className="ml-2 text-[11px] font-mono text-[#A0A0A0] tracking-wider uppercase">
                  workspace.dev
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-[#A0A0A0] bg-[#1a1a1a] px-2 py-0.5 rounded">
                <Cpu className="w-3 h-3 text-[#FF3B30]" />
                <span>JDK 21 / V8</span>
              </div>
            </div>

            {/* Interactive Code Switcher Tabs */}
            <div className="flex items-center gap-2 mb-4 bg-[#0a0a0a] p-1 rounded border border-white/5">
              <button
                type="button"
                onClick={() => setActiveTab('java')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded ${
                  activeTab === 'java'
                    ? 'bg-[#1e1e1e] text-white border border-white/10 shadow-sm'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>Solution.java</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fullstack')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-mono tracking-wider transition-all rounded ${
                  activeTab === 'fullstack'
                    ? 'bg-[#1e1e1e] text-white border border-white/10 shadow-sm'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>server.ts</span>
              </button>
            </div>

            {/* Code Fragment Visual */}
            <div className="relative font-mono text-xs leading-relaxed p-4 bg-[#080808] border border-white/5 rounded overflow-x-auto text-[#D4D4D4]">
              {activeTab === 'java' ? (
                <div>
                  <div className="text-[#6A9955] mb-1">// Algorithm & Data Structure Core</div>
                  <div>
                    <span className="text-[#569CD6]">public class</span>{' '}
                    <span className="text-[#4EC9B0]">DeveloperEngineer</span> {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#569CD6]">private final String</span> name ={' '}
                    <span className="text-[#CE9178]">"Swastik Choudhary"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#569CD6]">private String[]</span> coreStack = {'{'}
                  </div>
                  <div className="pl-8 text-[#CE9178]">
                    "Java", "DSA", "Supabase", "Next.js", "Express", "PostgreSQL"
                  </div>
                  <div className="pl-4">{'};'}</div>
                  <div className="pl-4 my-1">
                    <span className="text-[#569CD6]">public boolean</span>{' '}
                    <span className="text-[#DCDCAA]">solveProblem</span>(AlgorithmicProblem p) {'{'}
                  </div>
                  <div className="pl-8 text-[#C586C0]">return</div>
                  <div className="pl-12 text-[#9CDCFE]">p.optimizeComplexity(Time.O_N, Space.O_1);</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </div>
              ) : (
                <div>
                  <div className="text-[#6A9955] mb-1">// Full-Stack Server & Workspace Services</div>
                  <div>
                    <span className="text-[#C586C0]">import</span> express, {'{'} Request, Response {'}'}{' '}
                    <span className="text-[#C586C0]">from</span>{' '}
                    <span className="text-[#CE9178]">'express'</span>;
                  </div>
                  <div>
                    <span className="text-[#C586C0]">import</span> {'{'} prisma {'}'}{' '}
                    <span className="text-[#C586C0]">from</span>{' '}
                    <span className="text-[#CE9178]">'@/db'</span>;
                  </div>
                  <div className="my-1">
                    <span className="text-[#569CD6]">const</span> app = express();
                  </div>
                  <div>
                    app.<span className="text-[#DCDCAA]">post</span>(
                    <span className="text-[#CE9178]">"/api/v1/workspaces"</span>,{' '}
                    <span className="text-[#569CD6]">async</span> (req, res) =&gt; {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-[#569CD6]">const</span> session ={' '}
                    <span className="text-[#C586C0]">await</span> auth(req);
                  </div>
                  <div className="pl-4 text-[#9CDCFE]">
                    <span className="text-[#C586C0]">return</span> res.json({'{'} status:{' '}
                    <span className="text-[#CE9178]">"operational"</span>, ready: <span className="text-[#569CD6]">true</span> {'}'});
                  </div>
                  <div>{'}'});</div>
                </div>
              )}

              {/* Blinking cursor */}
              <div className="mt-2 flex items-center gap-1 text-[#FF3B30]">
                <span>&gt;</span>
                <span className="inline-block w-2 h-4 bg-[#FF3B30] animate-pulse" />
              </div>
            </div>

            {/* Bottom Telemetry Floating Badges inside panel */}
            <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs font-mono">
              <div className="bg-[#151515] p-2.5 rounded border border-white/5 flex flex-col">
                <span className="text-[10px] text-[#888888] uppercase tracking-wider">GitHub Focus</span>
                <span className="text-white font-medium mt-0.5 truncate">5 Repositories</span>
                <span className="text-[10px] text-[#FF3B30] mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" /> active builds
                </span>
              </div>
              <div className="bg-[#151515] p-2.5 rounded border border-white/5 flex flex-col">
                <span className="text-[10px] text-[#888888] uppercase tracking-wider">Target Domain</span>
                <span className="text-white font-medium mt-0.5 truncate">Backend & Systems</span>
                <span className="text-[10px] text-[#888888] mt-1">Java & Full-Stack</span>
              </div>
            </div>

            {/* Subtle decorative grid stamp */}
            <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-[#1a1a1a] border border-white/10 text-[9px] font-mono text-[#777777] uppercase tracking-widest pointer-events-none hidden sm:block">
              NODE // 2026.STK
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom: Scroll to explore */}
      <div className="flex items-center justify-between pt-8 border-t border-white/10 text-xs font-mono text-[#A0A0A0] tracking-widest mt-10">
        <div className="flex items-center gap-4">
          <span className="text-white/40">EDITION 2026</span>
          <span className="hidden sm:inline-block text-white/20">/</span>
          <span className="hidden sm:inline-block">CURATED PORTFOLIO</span>
        </div>
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-[#FF3B30] transition-colors group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF3B30] transition-transform group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
};
