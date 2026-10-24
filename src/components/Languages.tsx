import React from 'react';
import { Globe, Check } from 'lucide-react';
import { languages } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Global Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Languages & Cross-Cultural Fluency
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Effective communication across borders. Trilingual proficiencies presented through authentic qualitative standards without arbitrary percentage ratings.
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {languages.map((lang) => (
            <div
              key={lang.language}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center mx-auto mb-4 text-brand-600">
                  <Globe className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-1">{lang.language}</h3>
                
                <div className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100 mb-4">
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang.fluency}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang.level}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex justify-around">
                <span>Written: <strong className="text-slate-700">Fluent</strong></span>
                <span>•</span>
                <span>Spoken: <strong className="text-slate-700">Fluent</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Operational advantage note */}
        <div className="mt-12 text-center max-w-2xl mx-auto text-xs sm:text-sm text-slate-500 leading-relaxed">
          Trilingual capability provides smooth collaboration across East African regional programs, Middle Eastern enterprise teams, and English-speaking international remote organizations.
        </div>

      </div>
    </section>
  );
};
