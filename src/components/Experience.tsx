import React from 'react';
import { Calendar, MapPin, CheckCircle2, FileText } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  onOpenDocument: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenDocument }) => {
  return (
    <section id="experience" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Professional Experience & Mentorship
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hands-on software development internships, specialized AI/React mentorship, and commercial data operations experience.
          </p>
        </div>

        {/* Timeline / Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Top Row: Role, Organization, Status Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-100 uppercase tracking-wide">
                      {item.organization}
                    </span>
                    <span
                      className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ${
                        item.status === 'Ongoing'
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          item.status === 'Ongoing' ? 'bg-blue-500 animate-pulse' : 'bg-emerald-500'
                        }`}
                      />
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-900">{item.role}</h3>
                </div>

                {/* Period & Location metadata */}
                <div className="text-xs sm:text-sm text-slate-500 space-y-1 sm:text-right shrink-0">
                  <div className="flex items-center sm:justify-end space-x-1.5 font-medium text-slate-700">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end space-x-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Responsibilities & Highlights */}
              <div className="mb-6 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Core Responsibilities & Milestones:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Tools Used & Verification Document Link */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 font-medium mr-1">Tools:</span>
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {item.verificationDocument && (
                  <button
                    onClick={() =>
                      onOpenDocument(
                        item.verificationDocument!.title,
                        item.verificationDocument!.url,
                        item.verificationDocument!.type
                      )
                    }
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-lg border border-brand-200 transition-colors shrink-0"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Official Completion Letter</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
