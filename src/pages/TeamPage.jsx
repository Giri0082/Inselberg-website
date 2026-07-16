const founders = [
  {
    name: 'Jaya Vaidhyanathan',
    photo: '/assets/images/Founder-1.png',
    linkedin: 'https://www.linkedin.com/in/jaya-vaidhyanathan-26039510/',
    lead: 'Risk and compliance are constantly changing. AI adoption without governance can become very costly, and remediation can drain management bandwidth and weaken operational resilience.',
    focus: <>So, we focus on building <strong>AI solutions that comply with regulation, data privacy, and the firm’s governance framework.</strong></>,
    bio: 'Former CEO and board-level leader with 30+ years across banking, enterprise technology, governance, and regulated financial services.',
    creds: [
      'Former CEO, Managing Director, and Board Member',
      'Independent Director, UTI Asset Management',
      'Global Board Member, PwC',
      'Cornell University alumna and CFA Charter holder'
    ]
  },
  {
    name: 'Kasthuri Rangan',
    photo: '/assets/images/Founder-2.png',
    linkedin: 'https://www.linkedin.com/in/kasrangan/',
    lead: 'Businesses cannot scale AI by adding disconnected tools or isolated copilots. AI adoption has to be built into the operating model, with deep collaboration between models, infrastructure, and domain expertise.',
    focus: <>So, we focus on building <strong>Agentic Solutions that move institutions beyond fragmented tools and isolated AI pilots.</strong></>,
    bio: 'Enterprise platform and AI Technology leader with 20+ years across risk management, regulatory technology, and enterprise architecture.',
    creds: [
      'Former Co-Founder and Chief Product Officer of a global RegTech business',
      'Leader in product strategy and enterprise solutions.  Built enterprise platforms for Tier 1 global banks'
    ]
  },
  {
    name: 'Prashanth Belugali N',
    photo: '/assets/images/Founder-3.png',
    linkedin: 'https://www.linkedin.com/in/prashanth-belugali-n-363553a/',
    lead: 'The next wave of investment growth is coming from digitally savvy customers. The successful firms are the ones who are already building tech platforms and leveraging AI-enabled services to establish a lead in the business.',
    focus: <>So, we focus on the idea of building <strong>AI solutions as a key revenue driver and better client engagement enabler.</strong></>,
    bio: 'Analytics and AI Transformation leader with 20+ years across capital markets, quantitative risk,  Models and AI decision systems.',
    creds: [
      'Ex- Moody’s, AMBA, & Ducker Carlisle',
      'Led analytics and technology engagements for global investment banks and asset managers ( Deutsche Bank, Barclays, DWS, and First State Investments )'
    ]
  }
];

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export function TeamPage({ navigate }) {
  const go = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate(href);
  };

  return (
    <>
      <section className="hero-card-band">
        <div className="container hero-card-band-inner">
          <div className="route-cards">
            <button className="route-card" onClick={() => go('#founders')}>
              <strong>Meet <span>the Team</span></strong>
              <span>Founders &amp; Leadership</span>
            </button>
            <button className="route-card" onClick={() => go('/contact')}>
              <strong>Discuss Your AI Use Case</strong>
              <span>Solution Discovery</span>
            </button>
            <button className="route-card" onClick={() => go('/contact')}>
              <strong>Request a <span>BERG</span> Demo</strong>
              <span>Platform &amp; Agentic Solutions</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section founders-section" id="founders">
        <div className="founders-top-rule" aria-hidden="true" />
        <div className="container">
          <h1 className="founders-title">Founders &amp; Leadership Team</h1>
          <div className="founder-grid">
            {founders.map((founder) => (
              <article className="founder-card" key={founder.name}>
                <div className="founder-body">
                  <p className="founder-lead">{founder.lead}</p>
                  <p className="founder-focus">{founder.focus}</p>
                  <div className="founder-avatar">
                    <img src={founder.photo} alt={founder.name} />
                    <span className="founder-accent" aria-hidden="true" />
                  </div>
                  <h2>{founder.name}</h2>
                  <p className="founder-role">Co-Founder</p>
                  <p className="founder-bio">{founder.bio}</p>
                  <ul className="founder-creds">
                    {founder.creds.map((cred) => <li key={cred}>{cred}</li>)}
                  </ul>
                </div>
                <div className="founder-footer">
                  <a
                    className="founder-linkedin"
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
