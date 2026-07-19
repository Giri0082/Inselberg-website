/** Canonical site URL for SEO, sitemap, and absolute OG links. Override with VITE_SITE_URL. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://inselbergsolutions.com').replace(/\/$/, '');

export const SITE_NAME = 'Inselberg';
export const SITE_TAGLINE = 'AI-native Decision Intelligence Systems for financial institutions';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/home-hero.png`;
export const TWITTER_HANDLE = '@inselberg'; // update when official handle is confirmed

export const pageSeo = {
  '/': {
    title: 'Inselberg | AI-Native Decision Intelligence for Financial Institutions',
    description:
      'Inselberg builds BERG Decision Intelligence Systems for wealth managers, asset managers, and banks — unifying data, ontology, AI agents, and governed workflows.',
    keywords:
      'decision intelligence, agentic AI, wealth management AI, asset management AI, banking AI, BERG platform, Inselberg'
  },
  '/platform': {
    title: 'BERG Decision Intelligence Platform | Inselberg',
    description:
      'BERG DIS Platform helps financial institutions move beyond AI pilots to production decision intelligence with unified data, agent fleets, and enterprise workbenches.',
    keywords: 'BERG platform, decision intelligence system, AI agents, agentic workflows, financial data fabric'
  },
  '/wealth-managers': {
    title: 'BERG Wealth | Agentic AI for Wealth Managers | Inselberg',
    description:
      'BERG Wealth is an integrated Decision Intelligence System for wealth managers, private banks, and family offices — advisory automation, tax-aware actions, and UHNI engagement.',
    keywords: 'wealth management AI, UHNI advisory, family office technology, RM productivity, BERG Wealth'
  },
  '/asset-managers': {
    title: 'BERG Asset Management | Investment Operations AI | Inselberg',
    description:
      'BERG Asset Management delivers agentic decision intelligence for NAV, fund operations, reconciliation, risk, and investment workflows.',
    keywords: 'asset management AI, NAV intelligence, fund operations, reconciliation AI, BERG Asset Management'
  },
  '/banks-lenders': {
    title: 'BERG Banking | Decision Intelligence for Banks & Lenders | Inselberg',
    description:
      'BERG Banking connects reconciliation, structured lending, distribution, advisory, and risk control into one agentic banking decision layer.',
    keywords: 'banking AI, LAS LAMF, trade reconciliation, banking operations AI, BERG Banking'
  },
  '/team': {
    title: 'About Us | Founders & Leadership | Inselberg',
    description:
      'Meet the Inselberg founders and leadership team building AI-native Decision Intelligence Systems for regulated financial institutions.',
    keywords: 'Inselberg team, founders, financial AI company, about Inselberg'
  },
  '/resources': {
    title: 'Resources | Customer Stories & White Papers | Inselberg',
    description:
      'Explore Inselberg customer stories, industry conversations, and white papers on ontology, knowledge graphs, fraud intelligence, and BCBS 239.',
    keywords: 'financial AI white papers, banking ontology, knowledge graphs, BCBS 239, customer stories'
  },
  '/contact': {
    title: 'Contact Inselberg | Request a BERG Demo',
    description:
      'Request a private BERG demo or speak with Inselberg about your enterprise AI roadmap for wealth, asset management, or banking.',
    keywords: 'contact Inselberg, BERG demo, enterprise AI consultation'
  },
  '/privacy': {
    title: 'Privacy Policy | Inselberg',
    description: 'How Inselberg collects, uses, and protects information when you visit our website or contact us.',
    keywords: 'Inselberg privacy policy'
  },
  '/terms': {
    title: 'Terms of Use | Inselberg',
    description: 'Terms governing use of the Inselberg website and marketing materials for BERG Decision Intelligence Systems.',
    keywords: 'Inselberg terms of use'
  },
  '/cookies': {
    title: 'Cookie Policy | Inselberg',
    description: 'How Inselberg uses cookies and similar technologies on its marketing websites.',
    keywords: 'Inselberg cookie policy'
  }
};

export const whitepaperSeo = [
  {
    path: '/whitepapers/banking-ontology.html',
    title: 'Banking Ontology: The Semantic Layer Your AI Strategy Can\'t Ignore',
    description: 'Why financial institutions need a shared semantic layer before scaling AI-native decision intelligence.'
  },
  {
    path: '/whitepapers/knowledge-graphs.html',
    title: 'Knowledge Graphs for Banking AI',
    description: 'How knowledge graphs give banking AI connected, explainable context for trustworthy decisions.'
  },
  {
    path: '/whitepapers/unified-data.html',
    title: 'Unified Data for Decision Intelligence',
    description: 'How unified data powers enterprise workbenches across the BERG Decision Intelligence Platform.'
  },
  {
    path: '/whitepapers/data-freshness.html',
    title: 'Data Freshness for AI Systems',
    description: 'Why data freshness matters for trustworthy AI in financial institutions.'
  },
  {
    path: '/whitepapers/fraud-intelligence.html',
    title: 'Fraud Intelligence with Privacy and Governance',
    description: 'Moving from static fraud rules to context-aware, privacy-governed fraud decisioning.'
  },
  {
    path: '/whitepapers/bcbs-239.html',
    title: 'BCBS 239 and Decision Intelligence',
    description: 'Implementing BCBS 239 principles with governed data, lineage, and decision intelligence workbenches.'
  }
];

export function getPageSeo(pathname) {
  return pageSeo[pathname] || pageSeo['/'];
}
