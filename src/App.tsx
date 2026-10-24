import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationCertificates } from './components/EducationCertificates';
import { RemoteServices } from './components/RemoteServices';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DocumentModal } from './components/DocumentModal';
import { CVModal } from './components/CVModal';

export function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [documentModal, setDocumentModal] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
    type: 'image' | 'pdf';
  }>({
    isOpen: false,
    title: '',
    url: '',
    type: 'image',
  });

  const handleOpenDocument = (title: string, url: string, type: 'image' | 'pdf') => {
    setDocumentModal({
      isOpen: true,
      title,
      url,
      type,
    });
  };

  const handleCloseDocument = () => {
    setDocumentModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About onOpenDocument={handleOpenDocument} />
        <Skills />
        <Experience onOpenDocument={handleOpenDocument} />
        <Projects />
        <EducationCertificates onOpenDocument={handleOpenDocument} />
        <RemoteServices />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Interactive Modals */}
      <DocumentModal
        isOpen={documentModal.isOpen}
        onClose={handleCloseDocument}
        title={documentModal.title}
        url={documentModal.url}
        type={documentModal.type}
      />

      <CVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default App;
