import React from 'react';
import { 
  FileSpreadsheet, 
  FileText, 
  Search, 
  Code2, 
  Check, 
  Clock, 
  Globe2, 
  ShieldCheck, 
  Laptop, 
  Mail,
  CalendarCheck
} from 'lucide-react';
import { remoteServices } from '../data/portfolioData';

export const RemoteServices: React.FC = () => {
  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'data':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
      case 'admin':
        return <FileText className="w-5 h-5 text-brand-600" />;
      case 'dev':
        return <Code2 className="w-5 h-5 text-purple-600" />;
      default:
        return <Search className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="remote-work" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 mb-3 border border-emerald-200">
            Remote Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Remote Work & Administrative Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Specialized remote support tailored for international NGOs, startups, research organizations, and digital teams requiring rigorous accuracy, prompt delivery, and technical aptitude.
          </p>
        </div>

        {/* Services Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {remoteServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shrink-0">
                    {getServiceIcon(service.category)}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 leading-snug">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] uppercase font-semibold text-slate-400 mr-1">Tools:</span>
                {service.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Remote Infrastructure & Timezone Availability Panel */}
        <div className="bg-navy-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/15">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Remote Readiness</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Seamless Timezone Alignment & Dependable Communication
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Operating from Somalia at <strong className="text-white">UTC+3 (East Africa Time)</strong>, my workday overlaps smoothly with Europe (GMT/CET), the Middle East (AST/GST), East Africa, and Asian business hours, as well as early US East Coast mornings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Prompt daily async reporting & standby</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Laptop className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Reliable workstation & stable internet</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CalendarCheck className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Strict adherence to deadlines & guidelines</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Strict confidentiality with client data</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA card (5 cols) */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="text-sm font-semibold text-slate-200">
                Ready to collaborate on your next project or hire for a remote role?
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Open to full-time, part-time, project-based contracts, and structured paid internships.
              </p>
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 text-sm font-semibold text-navy-950 bg-white hover:bg-slate-100 rounded-xl transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4 text-navy-900" />
                  <span>Inquire for Remote Work</span>
                </a>
                <span className="text-[11px] text-slate-400">
                  Location-specific contractor compliance confirmed per organization
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
