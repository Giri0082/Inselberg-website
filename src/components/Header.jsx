import { useEffect, useState } from 'react';
import { navItems } from '../data/content.js';

function isActive(currentPath, href) {
  const path = href.split('#')[0];
  return path === currentPath || (currentPath === '/' && path === '/');
}

export function Header({ currentPath, navigate }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [currentPath]);

  const onNavigate = (href) => {
    setOpen(false);
    setExpanded(null);
    navigate(href);
  };

  return (
    <header className="site-header">
      <div className="nav-inner">
        <button className="logo" onClick={() => onNavigate('/')} aria-label="Go to Inselberg home">
          <svg className="logo-mark" viewBox="0 0 96 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" d="M0 56V46l9 4 8-11 7 8 8-10 16-30 12 22 9-11 9 13 7-3 5 5H0z" />
          </svg>
          Inselberg
        </button>
        <button
          className={`menu-toggle ${open ? 'active' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <div className={`nav-dropdown-wrap ${item.children ? 'nav-dropdown' : 'nav-item'} ${expanded === item.label ? 'expanded' : ''}`} key={item.label}>
              <button
                className={`${item.cta ? 'nav-cta' : ''} ${isActive(currentPath, item.href) ? 'active' : ''}`}
                onClick={() => {
                  if (item.children && open) {
                    setExpanded((current) => (current === item.label ? null : item.label));
                    return;
                  }
                  onNavigate(item.href);
                }}
              >
                {item.label}
                {item.cta ? <span className="nav-cta-arrow" aria-hidden="true">→</span> : null}
                {item.children ? <span className="nav-caret" aria-hidden="true" /> : null}
              </button>
              {item.children && (
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <button key={child.label} onClick={() => onNavigate(child.href)}>
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
