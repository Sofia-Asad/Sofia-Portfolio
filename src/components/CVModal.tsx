import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 id="cv-modal-title" className="text-base sm:text-lg font-bold text-navy-900 leading-tight">
              Curriculum Vitae — Safia Asad Abdulkadir
            </h3>
            <p className="text-xs text-slate-500">
              ATS-Optimized & Verified Academic/Professional Record
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={personalInfo.cvDownloadUrl}
              download="Safia_Asad_Abdulkadir_CV.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-navy-900 hover:bg-brand-600 rounded-xl transition-colors shadow-xs"
              title="Download Original ATS PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-200/70 rounded-xl transition-colors"
              title="Print CV"
              aria-label="Print CV"
            >
              <Printer className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-navy-900 hover:bg-slate-200/70 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Close CV Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable ATS-Friendly CV Body */}
        <div className="flex-1 overflow-auto p-6 sm:p-10 bg-slate-50/50">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8 font-sans text-slate-800 text-sm">
            
            {/* Header / Identity */}
            <div className="text-center pb-6 border-b border-slate-200 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-xs sm:text-sm font-bold text-brand-700 tracking-wider uppercase">
                COMPUTER SCIENCE GRADUATE CANDIDATE | IT & DIGITAL SYSTEMS
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 pt-1">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.phone}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${personalInfo.email}`} className="text-brand-700 hover:underline">{personalInfo.email}</a>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-brand-700 hover:underline">github.com/Sofia-Asad</a>
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Computer Science student at East Africa University with a strong academic record (3.90/4.00 GPA), hands-on software project experience, and developing skills in digital systems and data management. Familiar with HTML, CSS, JavaScript, React, Python, SQL, and PostgreSQL, with experience gained through internships, academic projects, and professional development programs. Recognized as a top student in multiple semesters. Seeking an entry-level opportunity in IT support, digital banking technology, data/MIS, or administrative operations where technical ability, accuracy, teamwork, and a willingness to learn can contribute to reliable service.
              </p>
            </div>

            {/* Core & Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Core & Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                <p>
                  <strong className="text-navy-900 font-semibold">IT & Digital Systems:</strong> Computer applications, troubleshooting fundamentals, digital systems, system support.
                </p>
                <p>
                  <strong className="text-navy-900 font-semibold">Data & Databases:</strong> SQL, PostgreSQL, Oracle Database, data handling fundamentals, data cleaning.
                </p>
                <p>
                  <strong className="text-navy-900 font-semibold">Spreadsheets & Administration:</strong> Microsoft Excel (formulas, sorting, filtering, tables), Microsoft Word document formatting, PDF conversion, document organization.
                </p>
                <p>
                  <strong className="text-navy-900 font-semibold">Software Development:</strong> HTML5, CSS3, JavaScript (ES6+), React, Python.
                </p>
                <p>
                  <strong className="text-navy-900 font-semibold">Tools & Platforms:</strong> Git, GitHub, VS Code.
                </p>
                <p>
                  <strong className="text-navy-900 font-semibold">Professional Skills:</strong> Teamwork, punctuality, dedication, clear communication, willingness to learn.
                </p>
              </div>
            </div>

            {/* Internship Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Internship Experience
              </h2>
              
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-navy-900 text-sm">CodeAlpha — Intern</div>
                  <div className="text-xs text-slate-500 font-medium">October 2026 – Present (Ongoing)</div>
                </div>
                <p className="text-xs text-slate-600">
                  Currently participating in a software development internship to develop practical technical and professional engineering skills.
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-navy-900 text-sm">Amtel LTD — Intern</div>
                  <div className="text-xs text-slate-500 font-medium">June 2025 (One-month intensive internship)</div>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  <li>Participated in assigned data entry tasks and maintained punctuality, dedication, and professional work ethics.</li>
                  <li>Worked cooperatively with others and demonstrated teamwork and reliability within the commercial department.</li>
                </ul>
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Selected Projects
              </h2>

              <div className="space-y-1">
                <div className="font-bold text-navy-900 text-sm">Fududeeye Service — Marketplace Web Application</div>
                <p className="text-xs text-slate-600">
                  Bachelor of Computer Science thesis project focused on property rentals and sales, land listings, and second-hand goods marketplace operations. (GitHub: <a href="https://github.com/Sofia-Asad/fududeeye-service" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">github.com/Sofia-Asad/fududeeye-service</a>).
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-navy-900 text-sm">Hotel Room Booking System</div>
                <p className="text-xs text-slate-600">
                  Completed as part of the AI-Powered Software Development Program at East Africa University.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-navy-900 text-sm">Real Estate Management System</div>
                <p className="text-xs text-slate-600">
                  Completed as part of the AI-Powered Software Development Program at East Africa University.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Education
              </h2>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-navy-900 text-sm">
                    Bachelor of Computer Science | East Africa University, Galkacyo Campus
                  </div>
                  <div className="text-xs text-slate-500 font-medium">2022 – Expected November 2026</div>
                </div>
                <p className="text-xs text-slate-600">
                  Cumulative GPA: <strong>3.90 / 4.00</strong>. Coursework completed June 2026; university verification letter available.
                </p>
              </div>
              <div className="space-y-1 pt-1">
                <div className="font-bold text-navy-900 text-sm">
                  Diploma in Software Engineering | Golis University, Hargeisa
                </div>
              </div>
            </div>

            {/* Honors, Certifications & Professional Development */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Honors, Certifications & Professional Development
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Certificate of Honor — Top Student, Semester 1 (GPA 3.93)</li>
                <li>Certificate of Honor — Top Student, Semester 4 (GPA 3.91)</li>
                <li>Certificate of Honor — Top Student, Semester 6 (GPA 3.98)</li>
                <li>AI-Powered Software Development Program — East Africa University, December 22, 2025</li>
                <li>Introduction to Cybersecurity — Cisco Networking Academy, December 21, 2025</li>
                <li>Dugsiiye Full Stack AI Engineer Mentorship — Level 3 (React), In Progress</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold uppercase tracking-wider text-navy-900 border-b border-slate-200 pb-1">
                Languages
              </h2>
              <p className="text-xs text-slate-700">
                <strong>Somali:</strong> Native | <strong>English:</strong> Fluent | <strong>Arabic:</strong> Fluent
              </p>
            </div>

          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Official ATS PDF file available for direct submission.
          </div>
          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.cvDownloadUrl}
              download="Safia_Asad_Abdulkadir_CV.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-navy-900 hover:bg-brand-600 rounded-xl transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Official ATS PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
