import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { PlatformPage } from './pages/PlatformPage.jsx';
import { SolutionPage } from './pages/SolutionPage.jsx';
import { TeamPage } from './pages/TeamPage.jsx';
import { ResourcesPage } from './pages/ResourcesPage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { LegalPage } from './pages/LegalPage.jsx';
import { solutionPages } from './data/content.js';
import { legalPages } from './data/legal.js';
import { usePageReveal } from './hooks/usePageReveal.js';

function normalizePath(pathname) {
  const clean = pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  return clean === '' ? '/' : clean;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [phase, setPhase] = useState('enter');
  const pendingHash = useRef('');
  const transitionTimer = useRef(null);
  usePageReveal(path, phase === 'enter');

  useEffect(() => {
    const onPopState = () => {
      const next = normalizePath(window.location.pathname);
      changePage(next, window.location.hash, window.location.search, false);
    };
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    };
  }, []);

  const finishEnter = (nextPath, hash) => {
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    setPhase('enter');
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
      });
    }
  };

  const changePage = (nextPath, hash = '', search = '', push = true) => {
    const target = nextPath + search + hash;
    if (push) {
      window.history.pushState({}, '', target);
    }

    if (nextPath === path && !hash && !search) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (nextPath === path && hash && !search) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (prefersReducedMotion()) {
      finishEnter(nextPath, hash);
      return;
    }

    pendingHash.current = hash;
    setPhase('exit');
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      finishEnter(nextPath, pendingHash.current);
      pendingHash.current = '';
    }, 220);
  };

  const navigate = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const url = new URL(href, window.location.origin);
    changePage(normalizePath(url.pathname), url.hash, url.search);
  };

  const renderPage = () => {
    switch (path) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/platform':
        return <PlatformPage navigate={navigate} />;
      case '/wealth-managers':
        return <SolutionPage solution={solutionPages.wealth} navigate={navigate} />;
      case '/asset-managers':
        return <SolutionPage solution={solutionPages.asset} navigate={navigate} />;
      case '/banks-lenders':
        return <SolutionPage solution={solutionPages.banks} navigate={navigate} />;
      case '/team':
        return <TeamPage navigate={navigate} />;
      case '/resources':
        return <ResourcesPage navigate={navigate} />;
      case '/contact':
        return <ContactPage key={window.location.search || 'contact'} />;
      case '/privacy':
        return <LegalPage doc={legalPages.privacy} navigate={navigate} />;
      case '/terms':
        return <LegalPage doc={legalPages.terms} navigate={navigate} />;
      case '/cookies':
        return <LegalPage doc={legalPages.cookies} navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <>
      <Header currentPath={path} navigate={navigate} />
      <main className={`page-shell page-${phase}`} key={path}>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
