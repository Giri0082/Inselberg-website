export function Footer({ navigate }) {
  const link = (href, label) => (
    <button onClick={() => navigate(href)}>{label}</button>
  );

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <button className="logo" onClick={() => navigate('/')}>
            <svg className="logo-mark" viewBox="0 0 96 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="currentColor" d="M0 56V46l9 4 8-11 7 8 8-10 16-30 12 22 9-11 9 13 7-3 5 5H0z" />
            </svg>
            Inselberg
          </button>
          <p>Bangalore . Chennai<br />San Francisco . Sydney</p>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <a href="mailto:marketing@inselbergsolutions.com">marketing@inselbergsolutions.com</a>
          <a href="tel:+916362134276">+91 6362 134276</a>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          {link('/team', 'About')}
          {link('/platform', 'Platform')}
          {link('/team', 'Our Team')}
          {link('/platform', 'AI Engineering Services')}
        </div>
        <div className="footer-col">
          <h4>Solutions</h4>
          {link('/wealth-managers', 'Wealth Management')}
          {link('/asset-managers', 'Asset Management')}
          {link('/banks-lenders', 'Banks & Lenders')}
        </div>
        <div className="footer-col footer-col-dark">
          <h4>Resources</h4>
          {link('/resources#engagements', 'Industry Conversations')}
          {link('/resources#articles', 'Articles & Insights')}
        </div>
        <div className="footer-col footer-col-dark">
          <h4>Legal</h4>
          {link('/privacy', 'Privacy Policy')}
          {link('/terms', 'Terms of Use')}
          {link('/cookies', 'Cookie Policy')}
        </div>
      </div>
    </footer>
  );
}
