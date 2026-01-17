import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Github, Instagram, Linkedin, Twitter, FolderOpen, Briefcase, User } from 'lucide-react';
import { Work } from './components/Work';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectPage } from './components/ProjectPage';

function HomePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <div className="min-h-screen bg-black brutalist-grid">
      {/* Main content */}
      <div className={`${activeSection ? 'hidden' : ''}`}>
        {/* Header with yellow accent */}
        <div className="border-b-8 border-yellow-400 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="text-yellow-400 font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                JMA
              </div>

              {/* Social links - desktop */}
              <div className="hidden md:flex gap-4">
                <a
                  href="https://www.instagram.com/dev.jmarco"
                  className="bg-yellow-400 text-black p-3 border-4 border-black hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={3} />
                </a>
                <a
                  href="https://x.com/devjmarco"
                  className="bg-yellow-400 text-black p-3 border-4 border-black hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={20} strokeWidth={3} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jorgemarcoarraez/"
                  className="bg-yellow-400 text-black p-3 border-4 border-black hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={3} />
                </a>
                <a
                  href="https://github.com/jmarcoz1"
                  className="bg-yellow-400 text-black p-3 border-4 border-black hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} strokeWidth={3} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-32">
          <div className="space-y-6 md:space-y-12">
            {/* Name */}
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-yellow-400 leading-none mb-4"
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  textShadow: '4px 4px 0px rgba(128, 128, 128, 0.5)'
                }}
              >
                JORGE MARCO ARRÁEZ
              </h1>
            </div>

            {/* Title */}
            <div className="bg-yellow-400 text-black border-4 md:border-8 border-black inline-block p-4 md:p-8 harsh-shadow-grey max-w-4xl">
              <h2
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black leading-tight"
                style={{ fontFamily: "'Archivo Black', 'Impact', sans-serif" }}
              >
                BACKEND ENGINEER
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-3xl space-y-4 md:space-y-6">
              <div className="bg-gray-800 border-l-4 md:border-l-8 border-yellow-400 p-4 md:p-8">
                <p className="text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Spain-based developer interested in architecting scalable backend systems.<br/> <span className="text-yellow-400 font-bold">3+ years</span> building APIs, distributed services, and automated workflows in <span className="text-yellow-400 font-bold">Python</span> (Django / FastAPI). Genuinely curious.
                </p>
              </div>

              <div className="bg-gray-900 border-4 border-gray-600 p-4 md:p-8">
              <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Just finished v1.0 of my first personal project,{' '}
                  <a
                    href="https://apps.apple.com/es/app/stark-ltd/id6749888405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 font-bold border-b-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
                  >
                    download the iOS app here
                  </a>
                  . Also, 3h 41min marathoner.
                </p>
                <div className="space-y-2 text-xs md:text-base">
                  <p className="text-yellow-400 font-bold">→ MSc in Distributed Computing</p>
                  <p className="text-yellow-400 font-bold">→ EN (C1) • ES (Native) • DE (B1)</p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8 max-w-5xl">
              <button
                onClick={handleProjectsClick}
                className="bg-yellow-400 text-black border-4 md:border-8 border-black p-6 md:p-10 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all harsh-shadow group"
              >
                <div className="flex flex-col items-center gap-3 md:gap-4">
                  <FolderOpen size={36} strokeWidth={3} className="md:w-12 md:h-12" />
                  <span
                    className="text-xl md:text-3xl font-black"
                    style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                  >
                    PROJECTS
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('Work')}
                className="bg-yellow-400 text-black border-4 md:border-8 border-black p-6 md:p-10 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all harsh-shadow group"
              >
                <div className="flex flex-col items-center gap-3 md:gap-4">
                  <Briefcase size={36} strokeWidth={3} className="md:w-12 md:h-12" />
                  <span
                    className="text-xl md:text-3xl font-black"
                    style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                  >
                    WORK
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveSection('About')}
                className="bg-yellow-400 text-black border-4 md:border-8 border-black p-6 md:p-10 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition-all harsh-shadow group"
              >
                <div className="flex flex-col items-center gap-3 md:gap-4">
                  <User size={36} strokeWidth={3} className="md:w-12 md:h-12" />
                  <span
                    className="text-xl md:text-3xl font-black"
                    style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
                  >
                    ABOUT
                  </span>
                </div>
              </button>
            </div>

            {/* Mobile social links */}
            <div className="flex md:hidden gap-3 justify-center pt-6">
              <a
                href="https://www.instagram.com/dev.jmarco"
                className="bg-yellow-400 text-black p-3 border-4 border-black"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={3} />
              </a>
              <a
                href="https://x.com/devjmarco"
                className="bg-yellow-400 text-black p-3 border-4 border-black"
                aria-label="Twitter"
              >
                <Twitter size={20} strokeWidth={3} />
              </a>
              <a
                href="https://www.linkedin.com/in/jorgemarcoarraez/"
                className="bg-yellow-400 text-black p-3 border-4 border-black"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={3} />
              </a>
              <a
                href="https://github.com/jmarcoz1"
                className="bg-yellow-400 text-black p-3 border-4 border-black"
                aria-label="GitHub"
              >
                <Github size={20} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 md:border-t-8 border-yellow-400 mt-12 md:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
            <div className="text-center">
              <div className="inline-block bg-black border-2 md:border-4 border-gray-600 px-4 md:px-6 py-2 md:py-3">
                <p className="text-gray-400 text-xs md:text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  © 2025 JORGE MARCO ARRAEZ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      {activeSection === 'Work' && <Work onClose={() => setActiveSection(null)} />}
      {activeSection === 'About' && <About onClose={() => setActiveSection(null)} />}
    </div>
  );
}

function ProjectsPage() {
  const navigate = useNavigate();
  return <Projects onClose={() => navigate('/')} />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
