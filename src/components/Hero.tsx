import React from 'react';
import { ArrowDown, Download, Mail, Github, MapPin, Globe, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="top" className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Remote Work & Paid Internships</span>
              </span>

              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Somalia (UTC+3 EAT)</span>
              </span>
            </div>

            {/* Name & Professional Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-brand-700 tracking-normal">
                {personalInfo.headline}
              </p>
            </div>

            {/* Factual, Verified Bio Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.bioIntro}
            </p>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-2 text-left">
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start space-x-2.5">
                <Award className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Academic Standing</div>
                  <div className="text-sm font-semibold text-navy-900">3.9 / 4.0 GPA</div>
                  <div className="text-[11px] text-slate-500">East Africa University</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Active Roles</div>
                  <div className="text-sm font-semibold text-navy-900">CodeAlpha & Dugsiiye</div>
                  <div className="text-[11px] text-slate-500">Software & AI Mentorship</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-start space-x-2.5">
                <Globe className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Trilingual Fluency</div>
                  <div className="text-sm font-semibold text-navy-900">Somali • English • Arabic</div>
                  <div className="text-[11px] text-slate-500">Full Professional Working</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-navy-900 hover:bg-brand-600 rounded-xl transition-all shadow-sm hover:shadow focus:ring-2 focus:ring-offset-2 focus:ring-navy-900"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all shadow-xs hover:border-slate-400 focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                <Download className="w-4 h-4 mr-2 text-slate-600" />
                <span>Download My CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4 mr-2 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Quick Links Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-slate-600 hover:text-navy-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium underline-offset-4 hover:underline">GitHub: Sofia-Asad</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-1.5 text-slate-600 hover:text-navy-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium underline-offset-4 hover:underline">{personalInfo.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Authentic Profile Photo & Verified Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer decorative border container */}
              <div className="relative mx-auto rounded-3xl p-3 bg-gradient-to-b from-slate-100 via-white to-slate-100 border border-slate-200/80 shadow-lg">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-200">
                  <img
                    src={personalInfo.profileImages.hero}
                    alt="Safia Asad Abdulkadir at East Africa University Thesis Defense Class of 2026"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Verified Badge */}
                <div className="absolute -bottom-4 left-6 right-6 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-md flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0 border border-brand-200">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-navy-900 truncate">
                      Thesis Defense — Class of 2026
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      East Africa University, Galkayo Campus
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
