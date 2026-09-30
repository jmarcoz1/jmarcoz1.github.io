import { useEffect, type ReactNode } from 'react';
import { Navigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Home } from './components/Home';
import { ProjectPage } from './components/ProjectPage';

const socials = [
  { href: 'https://github.com/jmarcoz1', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/jorgemarcoarraez/', label: 'LinkedIn' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function scrollToId(id: string) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
}

function Shell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <div className="site-shell min-h-screen flex flex-col">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        document.getElementById('main-content')?.focus();
      }}>Skip to content</a>
      <header className="site-header">
        <div className="header-inner page-width">
          <Link
            to="/"
            className="wordmark"
          >
            Jorge Marco Arráez
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            {onHome ? (
              <>
                <button type="button" onClick={() => scrollToId('work')}>
                  Projects
                </button>
                <button type="button" onClick={() => scrollToId('about')}>
                  About
                </button>
              </>
            ) : (
              <Link to="/">
                All projects
              </Link>
            )}
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s.label === 'LinkedIn' ? 'nav-contact' : 'nav-social'}
              >
                {s.label === 'LinkedIn' ? 'Say hello' : s.label}
                {s.label === 'LinkedIn' && <ArrowUpRight size={14} />}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div id="main-content" tabIndex={-1} className="flex-1 outline-none">{children}</div>
      <footer className="site-footer">
        <div className="footer-inner page-width">
          <p>Jorge Marco Arráez <span>·</span> © {new Date().getFullYear()}</p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Shell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Shell>
  );
}

export default App;
