import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Building, 
  Eye
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

interface EducationCertificatesProps {
  onOpenDocument: (title: string, url: string, type: 'image' | 'pdf') => void;
}

export const EducationCertificates: React.FC<EducationCertificatesProps> = ({ onOpenDocument }) => {
  return (
    <section id="education" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Education, Honors & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Verified academic performance at East Africa University, honors as a top student, and accredited certifications with original verifiable credentials.
          </p>
        </div>

        {/* Part 1: Formal University Education */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6 flex items-center space-x-2.5">
            <GraduationCap className="w-6 h-6 text-brand-600" />
            <span>Higher Education</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-100">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-navy-900 mb-1">{edu.degree}</h4>
                  <div className="text-sm font-semibold text-slate-700 mb-3 flex items-center space-x-1.5">
                    <Building className="w-4 h-4 text-slate-400" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {edu.completionNote}
                  </p>

                  {/* Honors List */}
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Academic Distinctions:
                      </div>
                      <div className="space-y-1.5">
                        {edu.honors.map((honor, hIdx) => (
                          <div key={hIdx} className="flex items-center space-x-2 text-xs font-medium text-slate-700">
                            <Award className="w-4 h-4 text-amber-500 shrink-0" />
                            <span>{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Verified Documents */}
                {edu.verifiedDocuments && edu.verifiedDocuments.length > 0 && (
                  <div className="pt-4 border-t border-slate-200/80 space-y-2">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Official Reference Documents:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.verifiedDocuments.map((doc, dIdx) => (
                        <button
                          key={dIdx}
                          onClick={() => onOpenDocument(doc.title, doc.url, doc.type as any)}
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-navy-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors shadow-2xs"
                        >
                          <FileText className="w-3.5 h-3.5 text-brand-600" />
                          <span>{doc.title}</span>
                          <Eye className="w-3.5 h-3.5 text-slate-400 ml-1" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Certifications & Completed Capstones */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6 flex items-center space-x-2.5">
            <Award className="w-6 h-6 text-brand-600" />
            <span>Accredited Certifications & Verified Programs</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Issuer & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-100">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.issueDate}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-navy-900 mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  {/* Recipient name check note */}
                  <div className="text-xs text-slate-500 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-slate-400">Awarded to:</span>{' '}
                    <strong className="text-slate-800">{cert.recipientName}</strong>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Projects included if any */}
                  {cert.projectsIncluded && cert.projectsIncluded.length > 0 && (
                    <div className="mb-4 space-y-1.5">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Completed Capstones:
                      </div>
                      {cert.projectsIncluded.map((proj, pIdx) => (
                        <div key={pIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                          <span>{proj}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: View Certificate Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenDocument(cert.title, cert.documentUrl, cert.documentType)}
                    className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-navy-900 bg-slate-50 hover:bg-brand-50 hover:text-brand-700 border border-slate-200 hover:border-brand-300 rounded-xl transition-colors"
                  >
                    <Eye className="w-4 h-4 text-brand-600" />
                    <span>View Original Certificate</span>
                  </button>
                  <p className="mt-1.5 text-center text-[10px] text-slate-400">
                    Verified original document attached
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
