import { useEffect } from 'react';

const SELECTOR = 'main section, main .solution-row, main .founder-card, main .customer-story, main .wp-card, main .contact-grid > *';

export function usePageReveal(path, active = true) {
  useEffect(() => {
    if (!active) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = Array.from(document.querySelectorAll(SELECTOR));

    if (!nodes.length) return undefined;

    if (reduceMotion) {
      nodes.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    // Small delay so page-shell enter and section reveal don't fight
    const setup = window.setTimeout(() => {
      nodes.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 70}ms`);
      });
    }, 40);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    const observeTimer = window.setTimeout(() => {
      nodes.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      window.clearTimeout(setup);
      window.clearTimeout(observeTimer);
      observer.disconnect();
      nodes.forEach((el) => {
        el.classList.remove('reveal', 'is-visible');
        el.style.removeProperty('--reveal-delay');
      });
    };
  }, [path, active]);
}
