import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Radio
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'SDE & Systems', value: 'sde' },
    { label: 'AI & Machine Learning', value: 'aiml' },
    { label: 'Full-Stack', value: 'fullstack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Production & Research Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Engineering Projects
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Subtle accent border on top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-blue-400 font-semibold bg-blue-950/60 border border-blue-800/50 px-2.5 py-0.5 rounded-full">
                    {project.type}
                  </span>
                  
                  {project.status === 'Featured' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  ) : project.status === 'In Progress' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>In Progress</span>
                    </span>
                  ) : null}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Engineering Bullets */}
                <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  {project.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-blue-500 font-mono mt-0.5">▸</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
