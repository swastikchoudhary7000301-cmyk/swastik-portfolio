import React from 'react';
import { X, Github, ExternalLink, Layers, CheckCircle2, Cpu } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/15 rounded-lg shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded bg-[#1a1a1a] text-[#A0A0A0] hover:text-white hover:bg-[#222222] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B30]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs font-bold text-[#FF3B30] tracking-widest uppercase">
            PROJECT {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="font-mono text-xs text-[#888888]">{project.subtitle}</span>
        </div>

        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-black text-white font-['Syne',sans-serif] mb-4">
          {project.title}
        </h3>

        {/* Project Image Preview */}
        <div className="relative w-full h-56 sm:h-72 rounded overflow-hidden border border-white/10 mb-6 bg-[#080808]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
        </div>

        {/* Full Overview */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#FF3B30] mb-2">
            Overview & Architecture
          </h4>
          <p className="text-sm sm:text-base text-[#C0C0C0] leading-relaxed font-light">
            {project.fullOverview}
          </p>
        </div>

        {/* Architecture Details */}
        <div className="p-4 rounded bg-[#151515] border border-white/5 mb-6">
          <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-white">
            <Cpu className="w-4 h-4 text-[#FF3B30]" />
            <span className="font-bold uppercase tracking-wider">Architecture Blueprint</span>
          </div>
          <p className="text-xs text-[#A0A0A0] font-mono leading-relaxed">
            {project.architecture}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#FF3B30] mb-3">
            Core Engineering Highlights
          </h4>
          <ul className="flex flex-col gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B0B0B0]">
                <CheckCircle2 className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#888888] mb-2.5">
            Technologies Applied
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-mono bg-[#1a1a1a] text-[#E0E0E0] border border-white/10 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3B30] hover:bg-[#e03429] text-white text-xs font-bold font-mono tracking-wider uppercase transition-colors rounded"
            >
              <Github className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1e1e1e] text-[#666666] text-xs font-mono rounded cursor-not-allowed">
              <Github className="w-4 h-4" />
              <span>Repository Private</span>
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#222222] hover:bg-[#2c2c2c] text-white text-xs font-bold font-mono tracking-wider uppercase transition-colors rounded border border-white/10"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#151515] text-[#777777] text-xs font-mono rounded border border-white/5 cursor-not-allowed"
              title="Deployment in progress; access via repository"
            >
              <ExternalLink className="w-4 h-4 opacity-50" />
              <span>Live Deployment Pending</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
