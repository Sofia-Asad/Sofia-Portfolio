import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'prepared' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate mailto link with encoded parameters
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Safia Asad Abdulkadir Portfolio`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmissionStatus('prepared');

    // Trigger user's mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 mb-3 border border-brand-100">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Contact & Collaboration
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Interested in hiring me for a remote software development role, administrative/data entry support, or discussing a paid internship? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Verified Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-navy-900">Direct Contact Channels</h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider text-brand-700">Primary Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center space-x-1 text-slate-600 hover:text-navy-900 font-medium transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-base sm:text-lg font-bold text-navy-900 hover:text-brand-600 transition-colors block truncate"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-slate-500">
                  Monitored daily for international opportunities and project inquiries.
                </p>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 group-hover:text-brand-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub Profile</div>
                    <div className="text-sm font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                      github.com/Sofia-Asad
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
              </a>

              {/* WhatsApp Card */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-200 transition-all flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Contact</div>
                    <div className="text-sm font-bold text-navy-900 group-hover:text-emerald-700 transition-colors">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-600 font-medium">Chat &rarr;</span>
              </a>

              {/* LinkedIn Placeholder */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-brand-600">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-navy-900">
                      linkedin.com/in/safia-asad
                    </div>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 italic">Configurable link</span>
              </a>

              {/* Timezone & Availability Strip */}
              <div className="pt-2 text-xs text-slate-500 space-y-1.5 border-t border-slate-100">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Location: Galkacyo, Puntland, Somalia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Timezone: East Africa Time (UTC+3)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Fallback (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-navy-900 mb-2">Send a Direct Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the details below. This form triggers your email client directly with formatted fields to ensure no messages are lost.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-300 focus:ring-rose-400'
                          : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-rose-500">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. s.jenkins@company.org"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-300 focus:ring-rose-400'
                          : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-rose-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Remote Junior Developer Role / Data Support Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? 'border-rose-300 focus:ring-rose-400'
                        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                  {errors.subject && <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe the opportunity, project requirements, or scope of collaboration..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-rose-300 focus:ring-rose-400'
                        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-500">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-brand-600 text-white font-semibold text-sm transition-all shadow-sm focus:ring-2 focus:ring-navy-900"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>
                </div>

                {/* Preparation status alert */}
                {submissionStatus === 'prepared' && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-2">
                    <div className="font-bold flex items-center space-x-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Email Client Prompted!</span>
                    </div>
                    <p>
                      Your default mail program has been opened with your message. If it didn't open automatically, you can send an email directly to <strong className="font-semibold underline">sofiadata.dev@gmail.com</strong>.
                    </p>
                  </div>
                )}

                {/* Implementation transparency notice */}
                <div className="pt-4 border-t border-slate-100 flex items-start space-x-2 text-[11px] text-slate-400">
                  <AlertCircle className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
                  <p>
                    <strong>Form Architecture:</strong> Designed with zero secret leakage. To connect an automated API service (such as Formspree or EmailJS), simply attach your endpoint without exposing private keys in client code.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
