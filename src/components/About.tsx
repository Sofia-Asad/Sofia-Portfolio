import React from 'react';
import { Code2, FileSpreadsheet, Check, Languages, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  onOpenDocument: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export const About: React.FC<AboutProps> = ({ onOpenDocument }) => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            About Safia Asad Abdulkadir
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A driven Computer Science graduate candidate bridging modern frontend engineering with meticulous data and administrative support.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column with Thesis Binder (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl p-3 bg-slate-50 border border-slate-200 shadow-md">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                  <img
                    src={personalInfo.profileImages.about}
                    alt="Safia Asad Abdulkadir seated at desk with Fududeeye CRM and Marketplace Thesis Binder"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Caption Card */}
                <div className="mt-3 p-3 bg-white rounded-xl border border-slate-200/80">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-bold text-navy-900">Thesis Defense & Research</div>
                      <div className="text-[11px] text-slate-500">Fududeeye Marketplace & CRM Report</div>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick links to academic documents */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => onOpenDocument(
                    'Temporary Transcript Certification (Ref: EAU/GLK/3422)',
                    'documents/eau-transcript-certification.pdf',
                    'pdf'
                  )}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Transcript Certification (PDF)</span>
                </button>
                <button
                  onClick={() => onOpenDocument(
                    'Official Partial Academic Transcript (Semesters I-VIII)',
                    'documents/eau-partial-transcript.pdf',
                    'pdf'
                  )}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Full Coursework Transcript (PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Biography & Core Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                I am a dedicated Computer Science student at <strong className="text-slate-900 font-semibold">East Africa University, Galkayo Campus</strong>, where I maintained a <strong className="text-slate-900 font-semibold">3.90 / 4.00 cumulative GPA</strong> and completed my core degree coursework in June 2026. Throughout my academic journey, I was honored as the top student across multiple semesters.
              </p>
              
              <p>
                My professional drive is grounded in practical software engineering and reliable administrative systems. I work with frontend technologies including <strong className="text-slate-900 font-semibold">React, JavaScript, HTML5, and CSS3</strong>, as well as relational databases (<strong className="text-slate-900 font-semibold">SQL and PostgreSQL</strong>) and <strong className="text-slate-900 font-semibold">Python</strong>. 
              </p>

              <p>
                In parallel with software development, I possess strong practical skills in <strong className="text-slate-900 font-semibold">Microsoft Excel data organization, formula implementation, data cleaning, and professional Word/PDF document formatting</strong>. My commercial internship at Amtel LTD solidified my commitment to data precision, punctuality, and collaborative teamwork.
              </p>
            </div>

            {/* Dual Focus Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Pillar 1: Software Development */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Software Engineering</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Responsive React interfaces & state logic</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Python scripting & algorithmic fundamentals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>SQL database design & query management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Git & GitHub collaborative version control</span>
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Data & Administrative */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-brand-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">Data & Remote Operations</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>High-accuracy data entry & transcription</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Excel formula application, sorting & filters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Data cleaning & error deduplication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Professional Word & PDF document formatting</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Trilingual Communication & Work Ethics Note */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2.5">
                <Languages className="w-5 h-5 text-navy-800 shrink-0" />
                <span className="text-slate-700 font-medium">
                  <strong>Trilingual:</strong> Fluent in Somali, English, and Arabic.
                </span>
              </div>
              <a
                href="#remote-work"
                className="text-brand-700 hover:text-brand-800 font-semibold inline-flex items-center space-x-1"
              >
                <span>Explore Remote Capabilities</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
