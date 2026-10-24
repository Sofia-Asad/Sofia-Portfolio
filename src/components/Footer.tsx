import React from 'react';
import { ArrowUp, Github, Mail, MessageCircle, FileText, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 py-16 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-900">
          
          {/* Identity & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-9 h-9 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                SA
              </span>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science graduate candidate from East Africa University. Providing frontend software engineering, spreadsheet data systems, and remote digital operations.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email Safia"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="View CV"
                title="View CV"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sections</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience & Timeline</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects & Systems</a>
              </li>
            </ul>
          </div>

          {/* Credentials & Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Credentials & Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#education" className="hover:text-white transition-colors">Education & Honors</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">Cisco & EAU Certificates</a>
              </li>
              <li>
                <a href="#remote-work" className="hover:text-white transition-colors">Remote Data Services</a>
              </li>
              <li>
                <a href="#languages" className="hover:text-white transition-colors">Trilingual Capabilities</a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Inquiries</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <strong className="text-slate-300">Email:</strong><br />
                <a href={`mailto:${personalInfo.email}`} className="text-brand-400 hover:underline">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <strong className="text-slate-300">Location:</strong><br />
                Galkacyo, Puntland, Somalia
              </p>
              <p>
                <strong className="text-slate-300">Timezone:</strong><br />
                UTC+3 (East Africa Time)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Accessibility & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React, TypeScript & Tailwind CSS. All credentials verified.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-navy-800"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
