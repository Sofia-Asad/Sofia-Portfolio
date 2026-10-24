import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Database, 
  FileSpreadsheet, 
  FileText, 
  HeartHandshake, 
  CheckCircle,
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'dev' | 'data' | 'admin'>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code className="w-5 h-5 text-brand-600" />;
      case 'backend':
        return <Terminal className="w-5 h-5 text-brand-600" />;
      case 'databases-tools':
        return <Database className="w-5 h-5 text-brand-600" />;
      case 'spreadsheets-data':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'admin-documentation':
        return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'professional-strengths':
        return <HeartHandshake className="w-5 h-5 text-brand-600" />;
      default:
        return <Layers className="w-5 h-5 text-brand-600" />;
    }
  };

  const filteredCategories = skillCategories.filter((category) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dev') {
      return ['frontend', 'backend', 'databases-tools'].includes(category.id);
    }
    if (activeTab === 'data') {
      return ['spreadsheets-data'].includes(category.id);
    }
    if (activeTab === 'admin') {
      return ['admin-documentation', 'professional-strengths'].includes(category.id);
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Verified Skills & Proficiencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A balanced skill matrix spanning software engineering, relational databases, spreadsheet analysis, and administrative document management. Factual, uninflated, and proven in academic coursework and internships.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'dev', label: 'Software & Web Dev' },
              { id: 'data', label: 'Spreadsheets & Data Entry' },
              { id: 'admin', label: 'Admin & Documentation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">{cat.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group relative inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200/90 hover:bg-slate-100 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-brand-600 shrink-0" />
                      <span>{skill.name}</span>
                      
                      {/* Sub-context tooltip or note */}
                      {skill.verifiedContext && (
                        <div className="hidden sm:block opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-navy-900 text-white text-[10px] rounded-lg shadow-lg z-20 text-center">
                          {skill.verifiedContext}
                          <div className="w-2 h-2 bg-navy-900 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{cat.skills.length} verified competencies</span>
                <span className="text-brand-700 font-medium">Authentic Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Standards Callout */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span>
              <strong>Integrity Pledge:</strong> Skills listed above reflect genuine coursework, program milestones, and verified internship duties. No arbitrary percentages or unverified claims.
            </span>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
          >
            See Practical Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
