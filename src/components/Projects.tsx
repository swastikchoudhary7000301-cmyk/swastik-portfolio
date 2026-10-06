import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, ArrowUpRight, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF3B30] tracking-widest uppercase">03 /</span>
            <span className="font-mono text-xs text-[#A0A0A0] tracking-widest uppercase">
              PORTFOLIO SHOWCASE
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs text-[#666666]">
            CURATED FULL-STACK & WEB SYSTEMS
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F5F5F5] font-['Syne',sans-serif] leading-[0.95] mb-4">
              SELECTED <br />
              <span className="font-['Playfair_Display',serif] italic font-normal text-white">
                PROJECTS.
              </span>
            </h2>
            <p className="max-w-xl text-[#A0A0A0] text-base font-light">
              A curated selection of software systems showcasing full-stack integration, real-time protocols, database modeling, and file processing pipelines.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-[#A0A0A0] hover:text-[#FF3B30] transition-colors"
          >
            <span>VIEW ALL REPOSITORIES ON GITHUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Cards Display */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              className="group relative bg-[#111111] border border-white/10 hover:border-white/25 rounded-lg overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Image Preview Column */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-[#0d0d0d]">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle editorial gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111111] opacity-70" />

                  {/* Project Index Stamp */}
                  <div className="absolute top-5 left-5 font-mono text-xs font-bold px-3 py-1 bg-black/80 backdrop-blur-md text-white border border-white/15 rounded">
                    {project.number}
                  </div>
                </div>

                {/* Content & Metadata Column */}
                <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Subtitle & Status */}
                    <div className="flex items-center justify-between mb-3 text-xs font-mono">
                      <span className="text-[#FF3B30] tracking-wider uppercase font-semibold">
                        {project.subtitle}
                      </span>
                      <span className="text-[#666666] uppercase text-[11px]">
                        {project.status === 'completed' ? 'Shipped' : 'Active'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-['Syne',sans-serif] tracking-tight mb-4 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-[#161616] text-[#C5C5C5] border border-white/5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2.5 bg-[#FF3B30] hover:bg-[#e03429] text-white text-xs font-bold font-mono tracking-wider uppercase transition-colors rounded flex items-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Details</span>
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-[#1a1a1a] hover:bg-[#252525] text-[#F5F5F5] hover:text-white text-xs font-mono tracking-wider uppercase transition-colors rounded border border-white/10 flex items-center gap-2"
                      >
                        <Github className="w-3.5 h-3.5 text-[#FF3B30]" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <span
                        className="px-3.5 py-2.5 bg-[#151515] text-[#666666] text-xs font-mono rounded border border-white/5 cursor-not-allowed flex items-center gap-1.5"
                        title="Repository link unavailable"
                      >
                        <Github className="w-3.5 h-3.5 opacity-40" />
                        <span>Private</span>
                      </span>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2.5 bg-[#1a1a1a] hover:bg-[#252525] text-white text-xs font-mono tracking-wider uppercase transition-colors rounded border border-white/10 flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <span
                        className="px-3 py-2.5 bg-[#151515] text-[#666666] text-xs font-mono rounded border border-white/5 cursor-not-allowed flex items-center gap-1.5"
                        title="Live demo URL not deployed yet"
                      >
                        <ExternalLink className="w-3.5 h-3.5 opacity-30" />
                        <span>Demo (Pending)</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Architectural Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
