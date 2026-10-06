import React, { useState } from 'react';
import { JOURNEY_STEPS } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // "04 Building Real Projects"

  return (
    <section id="journey" className="py-24 sm:py-32 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Number */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase">05 /</span>
            <span className="font-mono text-xs text-[#A0A0A0] tracking-widest uppercase">
              GROWTH PATHWAY
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-[#666666]">
            CHRONOLOGICAL EVOLUTION
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F5F5] font-['Syne',sans-serif] leading-[0.95] mb-4">
            MY <br />
            <span className="font-['Playfair_Display',serif] italic font-normal text-white">
              JOURNEY.
            </span>
          </h2>
          <p className="max-w-xl text-[#A0A0A0] text-base font-light">
            From algorithmic foundations in Java to end-to-end full-stack systems engineering and target internship preparation.
          </p>
        </div>

        {/* Animated Vertical Stepping Timeline */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group relative cursor-pointer transition-all duration-300 p-6 sm:p-8 rounded-lg border ${
                  isActive
                    ? 'bg-[#151515] border-[#FF3B30] shadow-xl shadow-[#FF3B30]/5'
                    : 'bg-[#101010] border-white/5 hover:border-white/20 hover:bg-[#131313]'
                }`}
              >
                {/* Node Indicator on the timeline spine */}
                <div
                  className={`absolute -left-[41px] sm:-left-[57px] top-8 w-4 h-4 rounded-full border-2 transition-all ${
                    isActive
                      ? 'bg-[#FF3B30] border-white ring-4 ring-[#FF3B30]/20 scale-125'
                      : 'bg-[#080808] border-[#555555] group-hover:border-[#FF3B30]'
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FF3B30] tracking-widest">
                      {step.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="font-mono text-xs text-[#888888] uppercase">
                      {step.period}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Syne',sans-serif] mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed font-light mb-5">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0a0a0a] text-[#B0B0B0] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
