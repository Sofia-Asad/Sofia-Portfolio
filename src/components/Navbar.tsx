import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education & Certs', href: '#education' },
    { name: 'Remote Work', href: '#remote-work' },
    { name: 'Languages', href: '#languages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#top"
            className="group flex items-center space-x-3 text-slate-900 font-bold text-lg sm:text-xl tracking-tight transition-colors hover:text-brand-600 focus:outline-none"
            aria-label="Safia Asad Abdulkadir - Home"
          >
            <span className="w-9 h-9 rounded-lg bg-navy-900 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-brand-600 transition-colors">
              SA
            </span>
            <div className="flex flex-col">
              <span className="leading-tight text-slate-900 font-semibold">{personalInfo.name}</span>
              <span className="text-xs text-slate-500 font-normal hidden sm:inline-block">
                Junior Developer & Data Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-100/70 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors focus:ring-2 focus:ring-brand-500"
              aria-label="View and Download CV"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span>CV / Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center space-x-1 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-navy-900 hover:bg-brand-600 rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-navy-800"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenCvModal}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg sm:hidden hover:bg-slate-200"
              aria-label="View CV"
              title="View CV"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Navigation</span>
              <span className="inline-flex items-center text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                Available for Remote Roles
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>View & Download CV</span>
              </button>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center py-2.5 text-sm font-medium text-white bg-navy-900 hover:bg-brand-600 rounded-lg transition-colors shadow-sm"
              >
                Contact Safia
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
