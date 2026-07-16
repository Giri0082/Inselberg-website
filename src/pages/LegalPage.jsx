export function LegalPage({ doc, navigate }) {
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <p className="legal-eyebrow">Legal</p>
          <h1>{doc.title}</h1>
          <p className="legal-updated">Last updated: {doc.updated}</p>
          <p className="legal-intro">{doc.intro}</p>
        </div>
      </section>

      <section className="section legal-body">
        <div className="container legal-prose">
          {doc.sections.map((section) => (
            <article key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </article>
          ))}

          <div className="legal-actions">
            <button type="button" className="text-link" onClick={() => navigate('/contact')}>
              Contact Inselberg →
            </button>
            <button type="button" className="text-link" onClick={() => navigate('/privacy')}>
              Privacy Policy
            </button>
            <button type="button" className="text-link" onClick={() => navigate('/terms')}>
              Terms of Use
            </button>
            <button type="button" className="text-link" onClick={() => navigate('/cookies')}>
              Cookie Policy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
