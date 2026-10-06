import React from 'react';
import { CURRENT_FOCUS_AREAS } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Target } from 'lucide-react';

export const CurrentFocus: React.FC = () => {
  return (
    <section className="py-20 border-t border-white/10 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF3B30] font-semibold">
                ACTIVE DELIVERABLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F5F5F5] font-['Syne',sans-serif]">
              CURRENTLY FOCUSED ON
            </h2>
          </div>
          <p className="max-w-md text-[#888888] text-xs font-mono">
            Targeted daily disciplines driving technical competence and production-grade software delivery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRENT_FOCUS_AREAS.map((item) => (
            <div
              key={item.code}
              className="group p-6 rounded-lg bg-[#141414] border border-white/10 hover:border-[#FF3B30]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#FF3B30]">
                    {item.code}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#666666] tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Syne',sans-serif] mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#999999] leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#777777]">
                <span>{item.metric}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
