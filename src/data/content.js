export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Agentic Solutions',
    href: '/wealth-managers',
    children: [
      { label: 'Wealth Management', href: '/wealth-managers' },
      { label: 'Asset Management', href: '/asset-managers' },
      { label: 'Banks & Lenders', href: '/banks-lenders' }
    ]
  },
  { label: 'Platform', href: '/platform' },
  { label: 'About Us', href: '/team' },
  {
    label: 'Resource',
    href: '/resources',
    children: [
      { label: 'Industry Conversations', href: '/resources#engagements' },
      { label: 'Articles & Insights', href: '/resources#articles' }
    ]
  },
  { label: 'Contact', href: '/contact', cta: true }
];

export const homeSolutions = [
  {
    id: 'wealth',
    title: ['Wealth', 'Management'],
    name: ['BERG', 'Wealth'],
    desc: 'An integrated wealth management Decision Intelligence System (DIS) that unifies client, portfolio, market, product, and relationship intelligence to automate advisory workflows, prospecting, client engagement, portfolio actions, and RM productivity.',
    services: ['Prospecting Intelligence', 'Advisory Automation', 'Tax Optimization', 'HNI / UHNI Services', 'Family Office Intelligence', 'LP / LLP Engagement', 'LAS/ LAP/ Structured LAS', 'Pre-Trade / Post-Trade Analytics', 'Private Markets Diligence & Monitoring', 'Performance, and P&L Attribution'],
    breakAfter: [3, 7],
    href: '/wealth-managers',
    link: 'Explore Wealth Management Solutions →'
  },
  {
    id: 'asset',
    title: ['Asset', 'Management'],
    name: ['BERG Asset', 'Management'],
    desc: 'An integrated investment operations Decision Intelligence System (DIS) that provide fund accounting, reconciliation, portfolio operations, valuation, risk, and operational workflows into a single AI-driven decision layer.',
    services: ['Valuation Intelligence', 'Performance Operations', 'Risk Operations', 'Trade Operations', 'Investor Operations', 'Reconciliation Intelligence', 'Fund Accounting', 'NAV Intelligence'],
    breakAfter: [3],
    href: '/asset-managers',
    link: 'Explore Asset Management Solutions →'
  },
  {
    id: 'banking',
    title: ['', 'Banking'],
    name: ['BERG', 'Banking'],
    desc: 'An integrated Decision Intelligence System (DIS) for banking, investment banking, and advisory businesses including reconciliation, loan services, structured lending, distribution, advisory, risk monitoring, and operational workflows into a single AI-driven decision layer.',
    services: ['LAS/ LAP/ Structured LAS', 'Investment Mgt.', 'Risk Mgt.', 'Regulatory Risk', 'Shadow Calculation', 'Audit & Control', 'Distribution & Advisory', 'LAS / LAMF', 'RTMS', 'Operations Reconciliation', 'Credit & EWS', 'Loan Services'],
    breakAfter: [6],
    href: '/banks-lenders',
    link: 'Explore Banking Solutions →'
  },
  {
    id: 'governance',
    title: ['Governance & Regulatory', 'Operations'],
    name: ['BERG Governance & Regulatory', 'Operations'],
    desc: 'Cross-industry regulatory intelligence supporting wealth managers, asset managers, banks, distributors, and investment operations.',
    services: ['Fund Operations Governance', 'Investment Compliance', 'Alternative Investments (AIF)', 'Lending Against Securities (LAS)', 'Tax Intelligence', 'Foreign Investment Governance', 'Wealth Governance', 'PMS Governance', 'Reg. Reporting'],
    breakAfter: [3, 7],
    href: '/contact',
    link: 'Talk to Us →'
  },
  {
    id: 'data',
    title: ['Financial Data', 'Foundation'],
    name: ['BERG Data', 'Foundation'],
    desc: 'BERG builds AI-ready financial data foundations by combining enterprise data platforms with domain-specific financial data',
    services: ['Unified Data Fabric', 'Financial Data Models', 'Private Markets Data', 'Domain Ontology', 'Metadata Intelligence', 'Data Goverance', 'Market & Reference Data', 'Managed Data Services'],
    breakAfter: [3],
    href: '/contact',
    link: 'Talk to Us →'
  }
];

export const solutionPages = {
  wealth: {
    slug: 'wealth-managers',
    tab: 'Wealth Managers',
    image: '/assets/images/5.avif',
    heroText: 'Wealth management is entering a new',
    heroHighlight: 'Technology Driven Advisory Growth.',
    intro: [
      'UHNIs, family-office, and private-market clients expect bespoke advice, market Intelligence, tax aware decisions, structured liquidity support, and engagement across asset class.',
      'But most wealth firms still operate through fragmented tools, manual advisory workflows, spreadsheet-led analysis, and third party dependent consultation .',
      'BERG Wealth solves this by creating an integrated wealth management Decision Intelligence System.'
    ],
    product: 'BERG WEALTH',
    productTitle: 'Integrated Decision Intelligence System (DIS) for AI driven Wealth Management',
    productCopy: [
      'BERG Wealth is Inselberg’s agentic AI solution for wealth managers, private banks, advisory platforms, family offices, and relationship-led financial institutions.',
      'It helps wealth institutions scale across the full client lifecycle from prospecting to portfolio monitoring, rebalancing, wallet-share growth, HNI / UHNI advisory, compliance governance, and client engagement.',
      'Built for Wealth Managers looking to grow AUM, increase RM coverage, personalise HNI / UHNI engagement, accelerate portfolio actions, and strengthen governance without linear growth in support teams.'
    ],
    sectionTitle: 'Wealth Business Solutions',
    sectionLead: 'BERG Wealth brings together the key features for technology driven advisory growth',
    features: [
      ['Prospecting Intelligence', 'Detects high-potential prospects, liquidity events, wallet-share gaps, and relationship opportunities using internal and external signals.'],
      ['AI driven Advisory', 'Automates client review packs, proposal workflows, meeting intelligence, next-best-action, and RM-led advisory execution.'],
      ['Tax-Aware Portfolio Actions', 'Supports tax impact, fee impact, liquidity trade-offs, pre-trade / post-trade analysis, and scenario-based portfolio decisions.'],
      ['HNI / UHNI & Family Office Bespoke Advisory', 'Enables bespoke advisory across alternate assets, tailored allocations, risk management, specialised alternative market intelligence, and liquidity planning.'],
      ['Structured Liquidity Intelligence', 'Enables LAS / LAP / structured LAS analysis, funding choices, asset-sale alternatives, collateral impact, and liquidity recommendations.'],
      ['Private Markets Intelligence', 'Supports diligence, monitoring, exposure tracking, LP / LLP engagement, private-market opportunities, and portfolio impact analysis.'],
      ['Compliance & Governance Intelligence', 'Connects investment guidelines, regulatory circulars, compliance memos, non-discretionary mandates, approvals, exceptions, and audit evidence.']
    ],
    officeTitle: 'BERG Solutions Across the Wealth Firm',
    officeCopy: 'BERG Wealth connects front-office growth, middle-office intelligence, and back-office governance into one unified wealth operating layer.',
    builtTitle: 'Built for Premium Wealth Advisory',
    builtCopy: 'BERG Wealth is designed for firms serving UHNI, family-office, promoter, LP / LLP, and private-market clients, where advisory quality, speed of action, tax awareness, liquidity structuring, and governance are critical to AUM growth.',
    services: 'UHNI & Family Office Advisory · Private-Market Diligence & Monitoring · Tax-Aware Portfolio Decisions · Structured Liquidity Advisory · Wallet-Share Growth · Pre / Post-Trade Analytics · Performance & P&L Attribution · Compliance & Governance',
    poweredTitle: 'Powered by BERG DIS Platform',
    poweredCopy: 'BERG Wealth solution is powered by BERG Decision Intelligence System (DIS) Platform. It provides the common foundation for unified data, wealth ontology, agent fleet, agentic workflows, human approval, governance, audit, and outcome learning.',
    ctaTitle: 'Build the Next Generation Wealth Advisory with'
  },
  asset: {
    slug: 'asset-managers',
    tab: 'Asset Managers',
    image: '/assets/images/200.jpg',
    heroText: 'Asset management is evolving from',
    heroHighlight: 'Portfolio Management to Intelligent Investment Operations.',
    intro: [
      'Asset managers are navigating unprecedented industry transformation driven by fee compression, alternative investments, AI-enabled investing, increasing regulatory expectations, and the democratization of private markets.',
      'Yet most firms continue to rely on disconnected systems resulting in fragmented intelligence, duplicated effort, operational inefficiencies, and slower investment decisions.',
      'BERG Asset Management delivers an Decision Intelligence System (DIS) that automates workflows, recommends actions, and orchestrates operational decisions across the investment lifecycle.'
    ],
    product: 'BERG ASSET MANAGMENT',
    productTitle: 'Integrated Investment Operations Decision Intelligence System (DIS)',
    productCopy: [
      'BERG Asset Management is Inselberg’s Agentic Investment Operations Decision Intelligence System (DIS) designed for Asset Managers, PMS providers, AIFs, Insurance Companies, Pension Funds, Sovereign Funds, and Institutional Investment Managers.',
      'BERG connects portfolio management, fund accounting, risk, compliance, and custody platforms through domain-aware AI agents that monitor investment activities, create intelligence, and recommend next-best actions, automate operational workflows, and orchestrate decisions across the enterprise.',
      'Built for Asset Managers looking to automate investment operations, accelerate NAV and fund operations, strengthen investment governance, scale alternative investments, and improve operational productivity without linear growth in operations teams.'
    ],
    sectionTitle: 'Asset Management Solutions',
    sectionLead: 'Purpose-built business services that automate investment operations, augment decision-making, and orchestrate governed workflows across the investment lifecycle.',
    pipeline: 'Signals → Intelligence → Decisions → Governance → Action',
    features: [
      ['Investment Decision Intelligence', 'Convert research, market signals, portfolio analytics, attribution, and benchmark intelligence into decision-ready insights.'],
      ['Risk Intelligence', 'Monitors portfolio risk, liquidity, concentration, counterparty exposure, performance, and operational risk with continuous AI-driven monitoring.'],
      ['Compliance Intelligence', 'Connects investment mandates, regulatory obligations, policies, approvals, audit evidence, compliance workflows, and operational governance'],
      ['NAV & Fund Operations', 'Automates NAV readiness, fund accounting, valuation workflows, operational controls, exceptions, approvals, and daily fund operations'],
      ['Alternative Investments Intelligence', 'Supports AIFs, private markets, structured products, private credit, due diligence, portfolio monitoring, and alternative investment operations'],
      ['Reconciliation & Operational Assurance', 'Continuously reconciles investment records, detects operational breaks, investigates root causes, and orchestrates resolution workflows.']
    ],
    officeTitle: 'BERG Solutions across the Investment Operations',
    officeCopy: 'BERG delivers AI-powered decision intelligence across investment, fund operations, investor servicing, risk, and governance by connecting enterprise systems through intelligent agentic workflows.',
    builtTitle: 'Built for the Next Generation of Asset Managers',
    builtCopy: 'Built for firms looking to automate investment operations, strengthen governance, launch products faster, support alternative investments, and scale AI adoption.',
    services: 'Investment Decision • NAV Intelligence • Fund Accounting • Reconciliation • Trade & Settlement Operations • Investor Operations • Risk Intelligence • Alternative Investments Intelligence • Governance & Regulatory Operations',
    poweredTitle: 'Powered by BERG Decision Intelligence System (DIS)',
    poweredCopy: 'A common AI foundation that transforms investment operations into intelligent, governed, and scalable business services.',
    ctaTitle: 'Build the Next Generation of Asset Management with'
  },
  banks: {
    slug: 'banks-lenders',
    tab: 'Banks & Lenders',
    image: '/assets/images/30.webp',
    heroText: 'Banking is becoming more connected, product-led, and operationally complex.',
    intro: [
      'As banks expand across wealth, lending, private markets, structured products, and advisory distribution, operational complexity and control pressure increase.',
      'BERG Banking addresses this complexity through agentic banking solutions — combining AI agents, automated workflows, and decision intelligence across reconciliation, loan services, structured lending, distribution, advisory, risk monitoring, and operational control.'
    ],
    product: 'BERG BANKING',
    productTitle: 'Integrated Banking Decision Intelligence System (DIS)',
    productCopy: [
      'BERG Banking is Inselberg’s Agentic Banking Decision Intelligence System designed for banks, NBFCs, private banks, investment banking teams, advisory businesses, lending platforms, and wealth-led financial institutions.',
      'BERG Banking connects core banking, LOS / LMS, CRM, trade, treasury, custody, reconciliation, risk, and operations systems through domain-aware AI agents, automated workflows, and decision intelligence.',
      'It helps institutions automate investigation, orchestrate workflows, support better decisions, reduce manual effort, and create traceable outcomes across complex banking operations.',
      'Built for institutions looking to improve operational control, strengthen reconciliation discipline, scale wealth-linked lending, support distribution and advisory growth, improve risk oversight, and increase business productivity without linear growth in operations and control teams.'
    ],
    sectionTitle: 'Banking Solutions',
    sectionLead: 'Purpose-built agentic business services that automate banking workflows, augment decision-making, and orchestrate governed actions across reconciliation, lending, distribution, advisory, risk management, and control operations.',
    pipeline: 'Agents → Workflows → Decision Intelligence → Human Review → Action → Control',
    features: [
      ['Trade Reconciliation Intelligence', 'Reconciles trade, settlement, custodian, broker, counterparty, private-market, and structured-product records.', 'Trade matching · Settlement breaks · Root-cause analysis · Evidence packs · Resolution workflows'],
      ['Operations Reconciliation Intelligence', 'Automates transaction matching, expected-vs-actual validation, shadow calculation, fee reconciliation, commission reconciliation, and operational break resolution.', 'Shadow calculation · Break classification · Fee reconciliation · Revenue leakage checks · Closure tracking'],
      ['Loan Services & Structured Lending Intelligence', 'Supports LAS / LAMF, loan-against-portfolio, structured lending, facility servicing, collateral monitoring, LTV movement, and pledge / unpledge lifecycle.', 'Collateral monitoring · Haircut checks · LTV alerts · Margin-breach workflow · Loan servicing events'],
      ['Distribution & Advisory Intelligence', 'Supports banking, wealth, insurance, structured products, deposits, credit products, and advisory-led distribution.', 'Wallet-share gaps · Product fit · Suitability support · RM next-best-action · Advisory workflow'],
      ['Risk Management Intelligence', 'Monitors Credit & EWS, RTMS-style risk events, collateral stress, promoter pledge exposure, concentration risk, regulatory exceptions, and operational risk.', 'EWS · RTMS · Risk prioritisation · Exception routing · Management visibility'],
      ['Audit & Control Intelligence', 'Creates a traceable control layer across reconciliations, lending workflows, advisory actions, risk events, exceptions, approvals, investigations, and outcomes.', 'Audit trail · Control dashboards · Approval records · Evidence packs · Outcome tracking']
    ],
    officeTitle: 'BERG Solutions Across Banking Operations',
    officeCopy: 'BERG Banking connects business growth, lending services, risk monitoring, reconciliation, operations, and control teams into one unified banking operating intelligence layer.',
    builtTitle: 'Built for Banking, Investment Banking, and Advisory Operating Models',
    builtCopy: 'BERG Banking is designed for institutions managing high-volume transactions, complex reconciliation flows, wealth-linked lending, private-market exposure, structured products, advisory distribution, and risk-control operations. It is especially relevant where operational quality, speed of investigation, exception resolution, audit readiness, and human-reviewed decisions are critical.',
    services: 'Trade Reconciliation · Operations Reconciliation · Shadow Calculation · Loan Services · LAS / LAMF · Structured Lending · Distribution & Advisory · Credit & EWS · RTMS · Regulatory Risk · Audit & Control · Risk Analytics',
    poweredTitle: 'Powered by BERG Decision Intelligence System (DIS)',
    poweredCopy: 'The platform provides the common foundation for unified banking data, domain ontology, agent fleet, agentic workflows, human approval, evidence traceability, audit, governance, and outcome learning.',
    ctaTitle: 'Build the Next Generation of Banking Operations with'
  }
};
