import { useEffect } from 'react';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  getPageSeo
} from '../data/seo.js';

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (value != null) el.setAttribute(key, value);
  });
  return el;
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Updates document title, description, Open Graph, Twitter, canonical, and JSON-LD per route.
 */
export function useDocumentSeo(pathname) {
  useEffect(() => {
    const seo = getPageSeo(pathname);
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    const title = seo.title;
    const description = seo.description;
    const image = DEFAULT_OG_IMAGE;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords || '' });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[name="author"]', { name: 'author', content: SITE_NAME });

    upsertLink('canonical', url);

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    upsertJsonLd('seo-org', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/images/favicon.png`,
      email: 'marketing@inselbergsolutions.com',
      telephone: '+91-6362-134276',
      sameAs: [],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressCountry: 'IN'
      },
      areaServed: ['IN', 'US', 'AU'],
      description:
        'Inselberg develops AI-native Decision Intelligence Systems (BERG) for wealth managers, asset managers, and banks.'
    });

    upsertJsonLd('seo-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      description,
      publisher: { '@type': 'Organization', name: SITE_NAME }
    });

    upsertJsonLd('seo-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      isPartOf: { '@type': 'WebSite', url: SITE_URL, name: SITE_NAME }
    });
  }, [pathname]);
}
