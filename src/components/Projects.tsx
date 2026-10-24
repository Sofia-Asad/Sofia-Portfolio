import React, { useState } from 'react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'thesis' | 'academic' | 'portfolio'>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real software systems, academic capstones, and thesis projects built with verified technologies and clear repository links.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'thesis', label: 'Degree Thesis Project' },
              { id: 'academic', label: 'EAU Capstone Programs' },
              { id: 'portfolio', label: 'Portfolio Architecture' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Category Label & Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                    {project.categoryLabel}
                  </span>
                  
                  <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Descriptions */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.longDescription && (
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {project.longDescription}
                  </p>
                )}

                {/* Technologies Used */}
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Verified Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer: Actions & Status Note */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-navy-900 hover:bg-brand-600 rounded-xl transition-colors shadow-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center space-x-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                      <span>Source repository available upon request</span>
                    </div>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Status Note */}
                {project.statusNote && (
                  <span className="text-[11px] text-slate-400 italic">
                    {project.statusNote}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Maintainable Structure Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Projects are structured with clean data models and verified GitHub repositories. Future projects can be integrated seamlessly.
        </div>

      </div>
    </section>
  );
};
