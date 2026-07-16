import { Fragment } from 'react';
import { homeSolutions } from '../data/content.js';

const audiences = [
  'Wealth Managers',
  'Asset Managers',
  'Banks',
  'Broker-Dealers',
  'Custodians',
  'Family Offices',
  'Alternative Investment Firms'
];

function SolutionRow({ item, navigate }) {
  const renderSplit = ([plain, gradient]) => (
    <>
      {plain ? `${plain} ` : ''}
      <span>{gradient}</span>
    </>
  );

  return (
    <article className="solution-row" id={item.id}>
      <div className="solution-title">
        <p>{renderSplit(item.title)}</p>
        <h3>{renderSplit(item.name)}</h3>
      </div>
      <div className="solution-body">
        <p>{item.desc}</p>
        <div className="service-pills">
          {item.services.map((service, index) => (
            <Fragment key={service}>
              <span><em>{service}</em></span>
              {item.breakAfter?.includes(index) ? <i aria-hidden="true"></i> : null}
            </Fragment>
          ))}
        </div>
        <button className="text-link" onClick={() => navigate(item.href)}>{item.link}</button>
      </div>
    </article>
  );
}

export function HomePage({ navigate }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-card">
          <img src="/assets/images/20.avif" alt="Sailor competing on open water" />
        </div>
        <h1><span>AI Native Autonomous Decision Intelligence</span><span>System for Financial Institutions</span></h1>
        <div className="hero-band">
          <p className="hero-band-lead">Purpose built for</p>
          <ul className="hero-band-list">
            {audiences.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="hero-band-desktop">Purpose built for Wealth Managers • Asset Managers • Banks • Broker-Dealers • Custodians • Family Offices • Alternative Investment Firms</p>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <h2>ABOUT <span>INSELBERG</span></h2>
          <p>Inselberg develops AI native Decision Intelligence Systems that automate complex financial workflows across wealth management, asset management, banking, and risk. Our solutions combine domain expertise, agentic AI, and governed automation to help institutions improve productivity, strengthen governance, and scale operations without proportional increases in operational cost</p>
          <p>Business services are delivered by intelligent AI agents orchestrating enterprise workflows, rather than traditional static applications</p>
          <div className="deliver">
            <h3>How We Deliver</h3>
            <strong>BERG DIS Platform + AI Engineering Pods + Agentic Solutions + AI Governance</strong>
            <span>Powered by Unified Data, Financial Ontology, AI Agents, Agentic Workflows, Human-in-the-Loop Controls, and Enterprise Governance.</span>
          </div>
        </div>
      </section>

      <section className="band-title">
        <div className="container">
          <h2>Agentic Solutions for Financial Institutions</h2>
          <p>AI native Decision Intelligence Systems built for Wealth Management, Asset Management, Banking, and Financial Services.</p>
        </div>
      </section>

      <section className="solutions-list">
        <div className="container">
          {homeSolutions.map((item) => <SolutionRow key={item.id} item={item} navigate={navigate} />)}
        </div>
      </section>

      <section className="section engagements">
        <div className="container">
          <h2>Our <span>Engagements</span></h2>
          <article>
            <strong>WEALTH MANAGEMENT OPERATING LEVERAGE</strong>
            <h3>2x RM Capacity and <span>AUM Scale</span></h3>
            <p>Firm aims to double RM capacity from 70 to 140 cleints per RM while increasing AUM per RM from ~₹714 Cr to ₹1,500 Cr+.</p>
            <p>However the ambitious target is challenging as RMs spend 50-60% of time to responding to liquidity requests, <span>investment calls, portfolio drift,</span> and compliance triggers.</p>
            <p>What Inselberg Wealth Agentic Solution enabled :Automates client reviews, proposal preparation, rebalancing analysis, reporting, onboarding, and follow-ups that convert the RM available time to 2x and optimise the wealth firms to scale advisory execution, <span>improve RM productivity, and grow AUM</span> without linear support-team expansion.</p>
            <button className="text-link" onClick={() => navigate('/resources#engagements')}>Explore Story →</button>
          </article>
          <article>
            <strong>HNI / UHNI ADVISORY INTELLIGENCE</strong>
            <h3>Unified Tax, Legal and <span>Wealth Advisory at Scale</span></h3>
            <p>Family office and UHNI advisory requires high-touch service, but it is difficult to scale. RMs had to manually coordinate portfolio reviews, tax impact analysis, legal structures, liquidity needs, succession planning, and family-office requirements across <span>multiple specialists and disconnected tools.</span></p>
            <p>What Inselberg enabled: created a unified advisory intelligence layer combining portfolio data, tax models, legal structures, cash flows, entity mapping, client mandates, and external market intelligence. RMs can run what-if analysis across <span>tax outcomes, rebalancing options, liquidity needs, estate structures, and product suitability.</span></p>
            <button className="text-link" onClick={() => navigate('/resources#engagements')}>Explore Story →</button>
          </article>
          <article>
            <strong>NAV INTELLIGENCE | ASSET MANAGEMENT</strong>
            <h3>From Shadow NAV to <span>Production Confidence</span></h3>
            <p>As fund volumes grew, the fund accounting team needed faster NAV production while maintaining valuation accuracy, <span>regulatory controls, and auditability</span> across multiple schemes.</p>
            <p>BERG NAV Intelligence created an AI-driven Decision Intelligence layer that continuously monitors pricing, valuation, corporate actions, expense accruals, cash movements, and <span>reconciliation breaks before NAV publication.</span></p>
            <button className="text-link" onClick={() => navigate('/resources#engagements')}>Explore NAV Intelligence →</button>
          </article>
          <article>
            <strong>RECONCILIATION INTELLIGENCE | ASSET MANAGEMENT</strong>
            <h3>500+ Daily Breaks to <span>Automated Intelligence</span></h3>
            <p>Growing AUM increased reconciliation complexity across custodians, brokers, OMS, accounting platforms, cash, and security positions. Operations teams spent significant effort <span>classifying exceptions and coordinating follow-ups.</span></p>
            <p>BERG Reconciliation Intelligence automatically classifies breaks, identifies probable root causes, recommends ownership, orchestrates remediation workflows, and <span>tracks SLA-driven closure.</span></p>
            <button className="text-link" onClick={() => navigate('/resources#engagements')}>Explore Reconciliation Intelligence →</button>
          </article>
          <article>
            <strong>UNIFIED DATA FABRIC | PARTNER ENGAGEMENT</strong>
            <h3>From Months of Data Engineering to <span>Reusable Financial Intelligence</span></h3>
            <div className="story-media-grid">
              <div>
                <p>Financial institution maintained 15–30 operational systems, 20–30 market and reference data feeds, and high volume of spreadsheets. More than 70% of project effort was spent data engineering and governance before business teams could build <span>AI, analytics, or regulatory solutions.</span></p>
                <p>Partnering with Dview, Inselberg engagement focused on building solutions on a Unified Financial Data Foundation for banks and Portfolio Management Services (PMS), delivering AI-powered Early Warning Risk Intelligence and AI-driven operational analytics. This enabled CXOx to automate operations, accelerate AI-driven analytics, and scale AI adoption across <span>risk, operations, investment, and regulatory functions.</span></p>
              </div>
              <img src="/assets/images/data-foundation-illustration.png" alt="Data foundation platform illustration" />
            </div>
          </article>
        </div>
      </section>

      <section className="client-logo-strip" aria-label="Client and partner logos">
        <div className="container">
          <div className="client-logo-row">
            <img src="/assets/images/client-logos/logo-2477.png" alt="Lentra" />
            <img src="/assets/images/client-logos/logo-2478.png" alt="Axis Mutual Fund" />
            <img src="/assets/images/client-logos/logo-2479.png" alt="Grihum Housing Finance" />
            <img src="/assets/images/client-logos/logo-2480.png" alt="AH Group" />
            <img src="/assets/images/client-logos/logo-2481.png" alt="Standard Chartered" />
            <img src="/assets/images/client-logos/logo-2482.png" alt="Rand View Research" />
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Build the Next Generation of Financial Services with <span>BERG</span></h2>
          <div>
            <button onClick={() => navigate('/contact')}>Request Private Demo →</button>
            <button onClick={() => navigate('/contact')}>Talk to Inselberg →</button>
          </div>
        </div>
      </section>
    </>
  );
}
