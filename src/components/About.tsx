import React, { useState } from 'react';
import { ArrowDown, Code, CheckCircle, GraduationCap, Laptop, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const TIMELINE_NODES = [
  {
    id: 'learning',
    title: 'LEARNING',
    short: '01. Foundational Core',
    desc: 'Embraced core computing fundamentals, computer science principles, OOP concepts in Java, and foundational problem-solving.',
    highlight: 'Object-Oriented Programming & Logic Building',
  },
  {
    id: 'dsa',
    title: 'DSA',
    short: '02. Data Structures & Algorithms',
    desc: 'Daily practice across arrays, strings, recursion, binary trees, sorting, and algorithmic complexity (Big-O analysis).',
    highlight: 'Rigorous Analytical Thinking & Problem Solving',
  },
  {
    id: 'fullstack',
    title: 'FULL-STACK DEVELOPMENT',
    short: '03. Web Architecture',
    desc: 'Expanded into modern full-stack engineering: React, Next.js, Express.js, REST API design, and asynchronous state flows.',
    highlight: 'Client-Server Protocols & Modern Frontend Architecture',
  },
  {
    id: 'project-building',
    title: 'PROJECT BUILDING',
    short: '04. Practical Applications',
    desc: 'Engineered real applications including FileShift, Yugma real-time networking, and full-stack workspace platforms.',
    highlight: 'End-to-End System Development & Database Persistence',
  },
  {
    id: 'internship-prep',
    title: 'INTERNSHIP PREPARATION',
    short: '05. Industry Readiness',
    desc: 'Consolidating interview problem solving, code reviews, clean architecture, and Git collaboration for engineering internships.',
    highlight: 'Currently Active · Targeting 2026 SDE Roles',
  },
  {
    id: 'swe',
    title: 'SOFTWARE ENGINEERING',
    short: '06. Scalable Systems',
    desc: 'Aspiring to engineer scalable systems, high-concurrency microservices, and reliable digital products in the technology industry.',
    highlight: 'Production Engineering & Long-term Growth',
  },
];

export const About: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(3); // Default on "Project Building"

  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Editorial Number */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase">01 /</span>
            <span className="font-mono text-xs text-[#A0A0A0] tracking-widest uppercase">BACKGROUND & DIRECTION</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-[#666666]">
            3RD-YEAR IT STUDENT
          </span>
        </div>

        {/* Editorial Heading & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Big Editorial Title */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F5F5] font-['Syne',sans-serif] leading-[0.95] mb-6">
              ABOUT <br />
              <span className="font-['Playfair_Display',serif] italic font-normal text-white">
                ME.
              </span>
            </h2>
            <div className="w-12 h-[2px] bg-[#FF3B30] mb-6" />
            <p className="font-mono text-xs text-[#A0A0A0] tracking-wider uppercase leading-relaxed">
              INFORMATION TECHNOLOGY · SYSTEM ARCHITECTURE · FULL-STACK WEB
            </p>
          </div>

          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#A0A0A0] text-base sm:text-lg leading-relaxed font-light">
            <p className="text-xl sm:text-2xl text-[#F5F5F5] font-normal leading-snug">
              {PERSONAL_INFO.bio}
            </p>
            <p>
              My approach blends rigorous engineering fundamentals with contemporary web frameworks. When writing
              Java, I focus on algorithmic efficiency, clean data structures, and memory mindfulness. In full-stack
              development, I build modular Next.js and Express solutions with normalized databases and resilient API contracts.
            </p>
            
            {/* Quick Editorial Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-[#666666] uppercase block mb-1">Status</span>
                <span className="text-[#F5F5F5] font-semibold">3rd-Year IT Student</span>
              </div>
              <div>
                <span className="text-[#666666] uppercase block mb-1">Core Focus</span>
                <span className="text-[#F5F5F5] font-semibold">Java + DSA + Web</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#666666] uppercase block mb-1">Internship Goal</span>
                <span className="text-[#FF3B30] font-semibold">Available for 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Visual Timeline Container */}
        <div className="mt-8 bg-[#111111] border border-white/10 rounded-lg p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-2">
            <div>
              <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase block mb-1">
                ENGINEERING PROGRESSION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] font-['Syne',sans-serif]">
                VISUAL EVOLUTION TIMELINE
              </h3>
            </div>
            <span className="font-mono text-xs text-[#888888]">
              Click any stage below to inspect details
            </span>
          </div>

          {/* Vertical / Horizontal Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {TIMELINE_NODES.map((node, index) => {
              const isSelected = selectedNode === index;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNode(index)}
                  className={`flex flex-col items-start p-4 text-left transition-all rounded border ${
                    isSelected
                      ? 'bg-[#1a1a1a] border-[#FF3B30] shadow-md shadow-[#FF3B30]/10'
                      : 'bg-[#151515] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-[#FF3B30]' : 'text-[#666666]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {index < TIMELINE_NODES.length - 1 && (
                      <span className="text-white/20 text-xs hidden lg:inline">↓</span>
                    )}
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wider font-mono uppercase mb-1 leading-tight ${
                      isSelected ? 'text-white' : 'text-[#A0A0A0]'
                    }`}
                  >
                    {node.title}
                  </span>
                  <span className="text-[10px] text-[#666666] line-clamp-1">{node.short}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight */}
          <div className="bg-[#151515] border border-white/10 p-6 sm:p-8 rounded flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-[#FF3B30] tracking-wider uppercase">
                  ACTIVE PHASE · {TIMELINE_NODES[selectedNode].short}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2 font-['Syne',sans-serif]">
                {TIMELINE_NODES[selectedNode].title}
              </h4>
              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
                {TIMELINE_NODES[selectedNode].desc}
              </p>
            </div>

            <div className="bg-[#0c0c0c] p-4 rounded border border-white/10 shrink-0 md:min-w-[260px]">
              <span className="text-[10px] font-mono uppercase text-[#777777] block mb-1">
                Core Milestone
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#F5F5F5] block">
                {TIMELINE_NODES[selectedNode].highlight}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
