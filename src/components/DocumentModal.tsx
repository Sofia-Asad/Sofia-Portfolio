import React, { useEffect } from 'react';
import { X, ExternalLink, Download, FileText } from 'lucide-react';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  type: 'image' | 'pdf';
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  title,
  url,
  type,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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
      aria-labelledby="document-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-brand-50 text-brand-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="document-modal-title" className="text-base sm:text-lg font-bold text-navy-900 leading-tight">
                {title}
              </h3>
              <p className="text-xs text-slate-500">Official Verified Document</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-200/70 rounded-xl transition-colors"
              title="Open full size in new tab"
              aria-label="Open full size in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={url}
              download
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-200/70 rounded-xl transition-colors"
              title="Download Document"
              aria-label="Download Document"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-navy-900 hover:bg-slate-200/70 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100/70 flex items-center justify-center min-h-[300px]">
          {type === 'image' ? (
            <img
              src={url}
              alt={title}
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-md border border-slate-200 bg-white"
            />
          ) : (
            <div className="w-full h-[70vh] bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <iframe
                src={url}
                title={title}
                className="w-full h-full border-0"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>Official credential issued to Safia Asad Abdulkadir</span>
          <div className="flex items-center space-x-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-700 hover:text-brand-800 font-semibold inline-flex items-center space-x-1"
            >
              <span>View full size</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span>•</span>
            <button
              onClick={onClose}
              className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
