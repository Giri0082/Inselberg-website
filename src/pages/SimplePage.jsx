export function SimplePage({ title, text }) {
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <h2>Build the Next Generation of Financial Services with <span>BERG</span></h2>
          <p>Request Private Demo → Talk to Inselberg →</p>
        </div>
      </section>
    </>
  );
}
