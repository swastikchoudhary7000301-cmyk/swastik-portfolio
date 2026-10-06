import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layers, Server, Database, Wrench, CheckCircle } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Programming: <Code className="w-4 h-4 text-[#FF3B30]" />,
  Frontend: <Layers className="w-4 h-4 text-[#FF3B30]" />,
  Backend: <Server className="w-4 h-4 text-[#FF3B30]" />,
  Database: <Database className="w-4 h-4 text-[#FF3B30]" />,
  'Tools & Workflow': <Wrench className="w-4 h-4 text-[#FF3B30]" />,
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Number */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase">02 /</span>
            <span className="font-mono text-xs text-[#A0A0A0] tracking-widest uppercase">
              TECHNICAL COMPETENCIES
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-[#666666]">
            AUTHENTIC CAPABILITIES (NO FAKE % METRICS)
          </span>
        </div>

        {/* Section Heading & Category Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F5F5] font-['Syne',sans-serif] leading-[0.95] mb-4">
              TECHNICAL <br />
              <span className="font-['Playfair_Display',serif] italic font-normal text-white">
                STACK.
              </span>
            </h2>
            <p className="max-w-md text-[#A0A0A0] text-sm font-light">
              Proficiencies focused on computational problem-solving with Java, and production web engineering across full-stack architectures.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#151515] border border-white/10 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all rounded ${
                  activeCategory === cat
                    ? 'bg-[#FF3B30] text-white font-bold shadow-sm'
                    : 'text-[#A0A0A0] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid Grouped by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="bg-[#111111] border border-white/10 rounded-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/20"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    {CATEGORY_ICONS[group.category]}
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#F5F5F5]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-[#666666]">
                    {group.skills.length} techs
                  </span>
                </div>

                {/* Skill Items */}
                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3 rounded border transition-all ${
                          isHovered
                            ? 'bg-[#1a1a1a] border-[#FF3B30]/50 translate-x-1'
                            : 'bg-[#151515] border-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-[#F5F5F5] font-mono">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono text-[#FF3B30] tracking-wider uppercase">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-[#888888] font-light leading-relaxed">
                          {skill.focus}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#555555]">
                <span>MODULAR ARCHITECTURE</span>
                <span className="w-1 h-1 rounded-full bg-[#FF3B30]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
