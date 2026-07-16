function makeGo(navigate) {
  return (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(href);
  };
}

const stories = [
  {
    id: 'wealth-rm',
    eyebrow: 'WEALTH MANAGEMENT OPERATING LEVERAGE',
    role: 'CEO / Head of Wealth',
    title: '2x RM Capacity',
    intro: 'The growth agenda required a step-change in advisory execution. The leadership team needed to expand relationship capacity and raise AUM per RM while keeping service and analyst overhead from scaling linearly.',
    image: '/assets/images/story-wealth-rm.png',
    link: 'Explore Story →',
    href: '/contact',
    qa: [
      ['Q1. What changed in the 2026 growth plan?', 'The growth plan was revised after the business reached a breaking point on operational scale. The earlier model assumed linear expansion of RMs, servicers, and analysts. That model was no longer financially viable.'],
      ['Q2. What was the operating challenge?', 'Manual portfolio reviews, rebalancing analysis, reporting, onboarding, and follow-ups were consuming too much service capacity. Scaling the same model would have increased support cost and weakened margins.'],
      ['Q3. What was the new mandate?', 'The mandate was to double RM capacity, increase AUM per RM from ~₹714 Cr to ₹1,500 Cr+, and cap support-staff growth.'],
      ['Q4. Where did Inselberg fit?', 'Inselberg\'s Agentic Wealth Operating Layer was introduced to automate reviews, rebalancing analysis, reporting, onboarding, and follow-ups through domain-specific Agent Fleets and Agentic Workflows.'],
      ['Q5. What outcome was targeted?', 'The target outcome was scalable advisory execution without proportional servicer and analyst growth.']
    ]
  },
  {
    id: 'hni-uhni',
    eyebrow: 'HNI / UHNI ADVISORY INTELLIGENCE',
    role: 'CEO / Head of Wealth',
    title: 'Family Office and UHNI Growth',
    intro: 'The growth agenda required a stronger advisory model for family office and UHNI clients. The leadership team wanted to scale high-touch advisory across tax, legal, liquidity, portfolio actions, and succession planning without increasing manual coordination across specialists.',
    image: '/assets/images/story-hni.png',
    link: 'Explore Story →',
    href: '/contact',
    qa: [
      ['Q1. What changed in the 2026 growth plan?', 'The firm identified family office and UHNI clients as a priority growth segment. The opportunity was not only to acquire new clients, but to deepen wallet share, improve advisory quality, and increase AUM retention through more personalised and timely advice.'],
      ['Q2. What was the operating challenge?', 'Family office and UHNI advisory required high-touch service, but it was difficult to scale. RMs had to manually coordinate portfolio reviews, tax impact analysis, legal structures, liquidity needs, succession planning, and family-office requirements across multiple specialists and disconnected tools.'],
      ['Q3. What made portfolio actions more complex?', 'Across large client books, responding to liquidity requests, investment calls, portfolio drift, and compliance triggers required manual review of mandates, suitability, tax impact, liquidity tiers, legal / regulatory guardrails, and Excel-based scenarios. This slowed client response and made advisory execution dependent on analysts and specialists.'],
      ['Q4. What was the new mandate?', 'The mandate was to create a unified advisory and portfolio-action layer that could support RM-led conversations across tax, legal, liquidity, estate, succession, rebalancing, and investment decisions — while keeping governance, approval, and audit evidence intact.'],
      ['Q5. Where did Inselberg fit?', 'Inselberg BERG Wealth created a unified agentic wealth operating layer combining portfolio data, tax models, legal structures, cash flows, entity mapping, client mandates, external market intelligence, suitability rules, and workflow governance. RMs could run what-if analysis across tax outcomes, rebalancing options, liquidity needs, estate structures, and product suitability.'],
      ['Q6. What outcome was targeted?', 'The target outcome was to scale family office and UHNI advisory without losing the high-touch client experience — improving RM productivity, client trust, portfolio response time, AUM retention, wallet-share growth, and governance discipline.']
    ]
  },
  {
    id: 'nav',
    eyebrow: 'NAV Intelligence | Asset Management',
    role: 'Interview with the COO / Head of Fund Accounting',
    title: 'From Shadow NAV to Production Confidence',
    intro: 'Daily NAV publication is one of the most critical operational processes for an asset manager. While fund accounting platforms calculate the NAV, the publication process depends on dozens of upstream operational controls—from security pricing and corporate actions to reconciliations, cash balances, expense accruals, and valuation policies. As funds and transaction volumes grow, maintaining confidence in NAV becomes increasingly complex.',
    image: '/assets/images/story-nav.png',
    link: 'Explore BERG Asset Management Solution →',
    href: '/asset-managers',
    qa: [
      ['Q. Why does NAV become more difficult as an asset manager grows?', 'Growth increases operational dependencies rather than calculation complexity. Every additional scheme, security, pricing source, custodian, and valuation rule introduces more control points that must be verified before a NAV can be confidently published.'],
      ['Q. Doesn’t the fund accounting platform already manage this?', 'Fund accounting systems remain the system of record for NAV calculation. However, they don’t continuously correlate operational events across pricing, reconciliations, approvals, and governance to determine whether the NAV is operationally ready or which issue requires immediate attention.'],
      ['Q. What did BERG contribute?', 'BERG introduced an independent NAV Intelligence layer that continuously monitors operational controls, performs Shadow NAV validation, prioritises material exceptions, recommends actions, and orchestrates approval workflows without changing the existing fund accounting platform.'],
      ['Q. What changed for the operations team?', 'Instead of manually validating every operational dependency, teams receive explainable operational intelligence with clear ownership, materiality assessment, and recommended actions—allowing them to focus on decisions rather than investigations.']
    ]
  },
  {
    id: 'reconciliation',
    eyebrow: 'ASSET MANAGEMENT BACK OFFICE',
    role: 'COO / Investment Operations',
    title: 'Reconciliation Intelligence',
    intro: 'Modern asset managers reconcile transactions, positions, cash, securities, and valuations across multiple custodians, brokers, OMS, IBOR, ABOR, and fund accounting platforms. Traditional reconciliation engines identify unmatched records, but operations teams still spend significant time investigating exceptions, assigning ownership, and coordinating resolution across business functions.',
    image: '/assets/images/story-recon.png',
    link: 'Explore Story →',
    href: '/contact',
    qa: [
      ['Q. What operational challenge did reconciliation create?', 'As transaction volumes increased, hundreds of daily exceptions required investigation. The real bottleneck wasn’t identifying the breaks—it was determining which exceptions mattered, understanding their root cause, assigning ownership, and ensuring timely resolution before downstream processes such as NAV publication.'],
      ['Q. Why wasn’t workflow automation enough?', 'Automation moved exceptions between teams, but it couldn’t determine operational impact, recommend ownership, or distinguish a routine mismatch from a material operational risk. Decision-making still depended heavily on experienced operations staff.'],
      ['Q. How did BERG change the process?', 'BERG introduced Reconciliation Intelligence that automatically classifies breaks, identifies likely root causes, prioritises material exceptions, recommends next actions, orchestrates remediation workflows, and maintains a complete governance trail across the resolution lifecycle.'],
      ['Q. What was the business impact?', 'Operations teams shifted from reviewing long exception lists to managing prioritised decisions. Manual effort reduced significantly, exception resolution accelerated, and reconciliation became a governed operational control rather than a reactive operational task.']
    ]
  }
];

const whitePapers = [
  {
    slug: 'banking-ontology',
    tags: 'Data Management . Ontology',
    title: "Banking Ontology: The Semantic Layer Your AI Strategy Can't Ignore",
    sub: 'Why financial institutions need a shared semantic layer before scaling AI.',
    body: "A banking ontology is a shared representation of the core concepts in a bank’s data ecosystem — customers, accounts, products, transactions, risk ratings, counterparties, exposures, obligations, and workflows. It defines how these concepts relate to each other so systems and AI can understand what the data means, not just where it is stored.",
    href: '/whitepapers/banking-ontology.html'
  },
  {
    slug: 'data-freshness',
    tags: 'Data Management . Data Freshness',
    title: 'The Silent Killer of AI Integrity: Why Data Freshness Is a Risk Management Priority',
    sub: 'Why financial institutions must assess data pipelines before scaling AI-native decision intelligence',
    body: 'In financial services, stale data can distort risk signals, weaken fraud detection, mislead liquidity decisions, and reduce the reliability of AI-generated recommendations. For financial institutions, data freshness is not just a technology metric. It is a risk management priority.',
    href: '/whitepapers/data-freshness.html'
  },
  {
    slug: 'knowledge-graphs',
    tags: 'Data Management . Unified Knowledge Base',
    title: 'Knowledge Graph for Banking AI',
    sub: 'Financial institutions need knowledge graphs to move from fragmented data to explainable AI reasoning',
    body: 'A knowledge graphs connect borrower, loan account, repayment behaviour, transaction flows, bureau signals, GST and financial data, promoter group, guarantors, collateral, covenants, sector indicators, RM actions, credit committee notes, and early warning alerts.',
    href: '/whitepapers/knowledge-graphs.html'
  },
  {
    slug: 'unified-data',
    tags: 'Data Management . Data Engineering',
    title: 'Unified Data for AI',
    sub: 'The Data Foundation Your Agentic Strategy Cannot Ignore',
    body: 'Unified data powers every enterprise workbench in the BERG platform. CIO, CRO, Compliance, Operations, Audit, RM, and CXO workbenches all depend on the same trusted foundation. They use the same ontology. They consume the same AI services. They work from the same version of truth.',
    href: '/whitepapers/unified-data.html'
  },
  {
    slug: 'bcbs-239',
    tags: 'Regualtion. BCBS 239',
    title: 'BCBS 239 Compliant Navigation Toolkit',
    sub: 'From risk data policy to evidence-based governance and AI-ready decision intelligence.',
    body: 'A strong RACI model should define who owns data definitions, who maintains systems, who monitors data quality, who validates reports, who approves remediation, and who tests controls. Typical roles include the CRO, CDO, CIO, business owners, data stewards, risk reporting teams, finance, compliance, IT, and internal audit.',
    href: '/whitepapers/bcbs-239.html'
  },
  {
    slug: 'fraud-intelligence',
    tags: 'Banking. Fraud Intelligence',
    title: 'Building AI-Native Fraud Intelligence with MCP, Reasoning Chains, and Agentic Workflows',
    sub: 'How financial institutions can move from static fraud rules to context-aware, privacy-governed, and explainable fraud decisioning.',
    body: 'A Fraud detection needs more than rules. It needs contextual validation. Reasoning chains can validate data, enrich signals, and assess whether an event is suspicious based on customer history, device behaviour, location, payment pattern, and business rule',
    href: '/whitepapers/fraud-intelligence.html'
  }
];

export function ResourcesPage({ navigate }) {
  const go = makeGo(navigate);

  return (
    <>
      <section className="resources-hero">
        <div className="container resources-hero-inner">
          <div>
            <h1>Ontology - The semantic foundation for trusted AI in financial services</h1>
            <p>Inselberg&apos;s ontology resources explore how financial institutions can build semantic layers across customers, products, portfolios, transactions, risk, compliance, and workflows — enabling AI agents to reason with consistency, explainability, and governance.</p>
            <button className="text-link" onClick={() => go('#articles')}>White Papers →</button>
          </div>
        </div>
      </section>

      <section className="section customer-stories" id="engagements">
        <div className="container">
          {stories.map((story) => (
            <article className="customer-story" key={story.id} id={story.id}>
              <div className="customer-story-copy">
                <div className="story-meta">
                  <span className="story-label">Customer Story</span>
                  <strong>{story.eyebrow}</strong>
                  <em>{story.role}</em>
                </div>
                <h2>{story.title}</h2>
                <p className="story-intro">{story.intro}</p>
                <div className="story-qa">
                  {story.qa.map(([q, a]) => (
                    <div key={q}>
                      <p className="q">{q}</p>
                      <p className="a">{a}</p>
                    </div>
                  ))}
                </div>
                <button className="text-link" onClick={() => go(story.href)}>{story.link}</button>
              </div>
              <figure className="customer-story-media">
                <img src={story.image} alt="" />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="wp-bar" id="articles">
        <div className="container"><span>White Papers</span></div>
      </section>

      <section className="section whitepapers-section">
        <div className="container">
          <div className="wp-grid">
            {whitePapers.map((paper) => (
              <article className="wp-card" key={paper.slug} id={paper.slug}>
                <p className="wp-tags">{paper.tags}</p>
                <h3>{paper.title}</h3>
                <p className="wp-sub">{paper.sub}</p>
                <p>{paper.body}</p>
                <a className="text-link" href={paper.href}>Explore →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
