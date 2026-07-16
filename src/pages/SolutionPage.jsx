const tabs = [
  ['wealth-managers', 'Wealth Managers', '/wealth-managers'],
  ['asset-managers', 'Asset Managers', '/asset-managers'],
  ['banks-lenders', 'Banks & Lenders', '/banks-lenders']
];

export function SolutionPage({ solution, navigate }) {
  return (
    <>
      <section className="solution-hero">
        <div className="solution-hero-inner">
          <figure>
            <img src={solution.image} alt="" />
          </figure>
          <div>
            <h1>{solution.heroText}{solution.heroHighlight ? <> <span>{solution.heroHighlight}</span></> : null}</h1>
            <button type="button" className="text-link" onClick={() => navigate('#solution-intro')}>Read More →</button>
          </div>
        </div>
      </section>

      <nav className="solution-tabs" aria-label="Solution pages">
        {tabs.map(([slug, label, href]) => (
          <button key={slug} type="button" className={slug === solution.slug ? 'active' : ''} onClick={() => navigate(href)}>
            {label}
          </button>
        ))}
      </nav>

      <section className="intro-band" id="solution-intro">
        <div className="container">
          {solution.intro.map((copy) => <p key={copy}>{copy}</p>)}
          <div className="link-row">
            <button type="button" onClick={() => navigate('/contact')}>Request Private Demo →</button>
            <button type="button" onClick={() => navigate('/contact?topic=executive-summary')}>Read Executive Summary →</button>
          </div>
        </div>
      </section>

      <section className="section product-intro">
        <div className="container">
          <p className="product-name">{solution.product}</p>
          <h2>{solution.productTitle}</h2>
          {solution.productCopy.map((copy) => <p key={copy}>{copy}</p>)}
          <div className="link-row">
            <button type="button" onClick={() => navigate('/contact')}>Request Private Demo →</button>
            <button type="button" onClick={() => navigate('/contact?topic=executive-summary')}>Read Executive Summary →</button>
          </div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container">
          <div className="section-center">
            <h2>{solution.sectionTitle}</h2>
            <p>{solution.sectionLead}</p>
          </div>
          {solution.pipeline && <div className="pipeline">{solution.pipeline}</div>}
          <div className="feature-grid">
            {solution.features.map(([title, copy, tags]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
                {tags && <small>{tags}</small>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section firm-band">
        <div className="container">
          <h2>{solution.officeTitle}</h2>
          <p>{solution.officeCopy}</p>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <h2>{solution.builtTitle}</h2>
          <p>{solution.builtCopy}</p>
          <h4>Critical services covered</h4>
          <p>{solution.services}</p>
        </div>
      </section>

      <section className="section powered">
        <div className="container">
          <h2>{solution.poweredTitle}</h2>
          <p>{solution.poweredCopy}</p>
          <button type="button" onClick={() => navigate('/platform')}>Explore the BERG DIS Platform →</button>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>{solution.ctaTitle} <span>BERG</span></h2>
          <div className="cta-actions">
            <button type="button" onClick={() => navigate('/contact')}>Request Private Demo →</button>
            <button type="button" onClick={() => navigate('/contact')}>Talk to Inselberg →</button>
          </div>
        </div>
      </section>
    </>
  );
}
