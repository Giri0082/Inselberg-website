const capabilities = [
  ['01', 'Unified Data Fabric', 'Connects fragmented enterprise data, documents, reports, controls, and systems into an AI-ready foundation.'],
  ['02', 'Decision Intelligence', 'Creates the domain knowledge layer that allows AI to reason using financial-services concepts, policies, signals, and relationships.'],
  ['04', 'Agent Fleet', 'Domain-specific agents for credit, wealth, investment, risk, compliance, operations, and regulatory workflows.'],
  ['05', 'Agentic Workflows', 'Closed-loop workflows that detect, explain, recommend, route, approve, act, and record outcomes.'],
  ['06', 'Enterprise Workbenches', 'CXO and business-user workbenches for CRO, CIO, RM, compliance, operations, and leadership teams.']
];

const process = [
  'Priority Use Cases',
  'Define Business Outcomes',
  'Map to BERG Solution',
  'AI Service Configuration',
  'Agentic Workflow Deployment',
  'Scale Decision Intelligence Workbenches'
];

export function PlatformPage({ navigate }) {
  return (
    <>
      <section className="platform-hero" aria-hidden="true"></section>
      <section className="intro-band platform-intro">
        <div className="container">
          <h1>AI Is Moving Beyond Pilots to <span>Decision Intelligence</span></h1>
          <p>Financial institutions have moved beyond asking whether AI works. The challenge today is scaling AI safely across operations while leveraging existing enterprise technology investments.</p>
          <p>As AI initiatives expand, concerns around security, privacy, model governance, and operational ownership become critical barriers to enterprise scale.</p>
          <p>BERG Decision Intelligence Platform addresses these challenges . Built on enterprise cloud, AI, and data platforms, it enables organizations to orchestrate intelligent agents, governed workflows, business workbenches, and human approvals into scalable, production-ready AI solutions.</p>
          <button type="button" className="text-link explore-link" onClick={() => navigate('#enterprise-solutions')}>
            Enterprise AI Questions? Explore the Q&A ↓
          </button>
        </div>
      </section>

      <section className="section platform-block">
        <div className="container">
          <div className="section-center">
            <h2>BERG Decision <span>Intelligence Platform</span></h2>
            <p>AI Foundation Behind Inselberg’s Agentic Solutions. It enables financial institutions to build and scale Decision Intelligence Systems (DIS) by combining enterprise data, domain knowledge, Intelligent agents, governed workflows, and business workbenches into a single operating layer.</p>
          </div>
          <div className="architecture">
            <h3>Shared Platform capabilities Across BERG Solutions</h3>
            <div className="architecture-row">
              {['Unified Data Fabric', 'Decision Intelligence', 'Agent Fleet', 'Agentic Workflows', 'Enterprise Workbenches'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p>User-defined Configuration + Governance + Human Review</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([num, title, copy]) => (
              <article key={title}>
                <small>{num}</small>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section platform-block alt" id="enterprise-solutions">
        <div className="container">
          <div className="platform-story">
            <h2>From AI Ideas to <span>Enterprise Solutions</span></h2>
            <p className="question">“We have identified 20 high-value AI use cases. How do we turn them into enterprise solutions without building everything from scratch?”</p>
            <p className="answer">“here’s how we help you convert AI initiatives into enterprise solutions.”</p>
            <p>Inselberg provides a structured implementation approach that transforms priority business workflows into AI driven Decision Intelligence Systems with domain specific agents, agentic workflows, and enterprise workbenches.</p>
          </div>
          <div className="process-grid">
            {process.map((step, index) => (
              <article key={step}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{step}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section platform-block">
        <div className="container">
          <div className="section-center">
            <h2>BERG Decision Intelligence Systems in Practice</h2>
            <p>See how priority business use cases are transformed into Agentic Decision Intelligence Systems for Wealth Managers and Asset Managers.</p>
          </div>
          <div className="practice">
            <article>
              <p className="diagram-label">Start with Priority Use Cases</p>
              <h3>NAV Computation . Fund Accounting . Reconciliation . Portfolio Rebalancing . Risk Monitoring . UHNI Engagement . Family Office Intelligence</h3>
              <p>Inselberg transforms these use cases into reusable Intelligence assets that become the foundation for BERG Decision Inteligence Systems</p>
            </article>
            <article>
              <p className="diagram-label">Define the Business Outcome</p>
              <h3>ROI . Productivity . Operational Efficiency . Governance . Controls . Regulatory obligations</h3>
              <p>BERG converts business objectives and domain knowledge into domain intelligence, AI services, agentic workflows, and governance controls.</p>
            </article>
            <article>
              <p className="diagram-label">We Build Your AI Workbench</p>
              <h3>CIO • COO • CRO • Fund Operations • Relationship Manager • Investment Officer • Compliance</h3>
              <p>The BERG Decision Intelligence System (DIS) Platform orchestrates enterprise data, domain intelligence, AI services, agentic workflows, governance, and human oversight into unified role-based Decision Intelligence Workbenches that support day-to-day business operations and decision-making.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <article>
            <h2>Start with Priority <span>Use Cases</span></h2>
            <p>NAV Computation . Fund Accounting . Reconciliation . Portfolio Rebalancing . Risk Monitoring . UHNI Engagement . Family Office Intelligence</p>
          </article>
          <article>
            <h2>Into the Friction Of <span>Usage</span></h2>
            <p>ROI . Productivity . Operational Efficiency . Governance . Controls . Regulatory obligations</p>
          </article>
          <article>
            <h2>We Build Your AI <span>Workbench</span></h2>
            <p>CIO • COO • CRO • Fund Operations • Relationship Manager • Investment Officer • Compliance</p>
          </article>
          <div className="cta-actions">
            <button type="button" onClick={() => navigate('/contact')}>Request Private Demo →</button>
            <button type="button" onClick={() => navigate('/contact')}>Talk to Inselberg →</button>
          </div>
        </div>
      </section>
    </>
  );
}
