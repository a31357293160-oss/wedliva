import Link from "next/link";

const templates = [
  {
    id: "royal-ivory",
    name: "Royal Ivory",
    tag: "Best Seller",
    tone: "ivory",
    initials: "A & D",
    subtitle: "A timeless celebration",
  },
  {
    id: "midnight-gold",
    name: "Midnight Gold",
    tag: "Luxury",
    tone: "midnight",
    initials: "S & R",
    subtitle: "An evening to remember",
  },
  {
    id: "floral-blush",
    name: "Floral Blush",
    tag: "Romantic",
    tone: "blush",
    initials: "M & K",
    subtitle: "Our forever begins",
  },
  {
    id: "heritage",
    name: "Heritage",
    tag: "Indian Classic",
    tone: "heritage",
    initials: "Z & A",
    subtitle: "A beautiful new chapter",
  },
];

const features = [
  ["✦", "Luxury designs", "Editorial-inspired invitation designs made to feel personal and premium."],
  ["♡", "Beautifully interactive", "Music, motion, countdowns, photo moments and elegant reveals."],
  ["↗", "One shareable link", "Send your invitation on WhatsApp, Instagram, email or anywhere."],
  ["∞", "Made for everyone", "A polished experience for couples in India and around the world."],
];

const steps = [
  ["01", "Choose your design", "Start with a WedLiva template that matches your wedding style."],
  ["02", "Make it yours", "Add your names, dates, events, photos, venue, music and RSVP details."],
  ["03", "Preview everything", "See your invitation on mobile before you share it with guests."],
  ["04", "Share the moment", "Get a beautiful invitation link ready for your family and friends."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  return (
    <main className="home-page">
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link href="/" className="brand" aria-label="WedLiva home">
            <span className="brand-mark">W</span>
            <span>WedLiva</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#templates">Templates</a>
            <a href="#how-it-works">How it works</a>
            <a href="#features">Why WedLiva</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <div className="nav-actions">
            <Link href="/invite/ayesha-danish" className="nav-preview">
              View demo
            </Link>
            <a href="#templates" className="button button-dark button-small">
              Create yours <Arrow />
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Digital wedding invitations, beautifully reimagined</p>
            <h1>Your love story,<br /><em>beautifully invited.</em></h1>
            <p className="hero-text">
              Create an unforgettable digital wedding invitation with luxury design,
              elegant motion and everything your guests need — in one beautiful link.
            </p>
            <div className="hero-actions">
              <a href="#templates" className="button button-dark">
                Explore invitations <Arrow />
              </a>
              <Link href="/invite/ayesha-danish" className="text-link">
                <span className="play-icon">▶</span> See a live invitation
              </Link>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>R</span><span>A</span><span>M</span><span>+</span>
              </div>
              <div>
                <strong>Made for modern celebrations</strong>
                <span>Designed to be shared, remembered and loved.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="WedLiva invitation preview">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="floating-note note-top">Your story begins here <span>♡</span></div>
            <div className="floating-note note-bottom">10 · 01 · 2027 <span>Save the date</span></div>
            <div className="hero-card">
              <div className="hero-card-frame">
                <div className="mini-monogram">W</div>
                <p className="mini-kicker">Together with their families</p>
                <h2>Ayesha<br /><span>&amp;</span> Danish</h2>
                <div className="mini-line" />
                <p className="mini-date">10 JANUARY 2027</p>
                <p className="mini-place">TAJ PALACE · MUMBAI</p>
                <div className="mini-flower">✦</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-cue">Scroll to discover <span>↓</span></div>
      </section>

      <section className="marquee-strip" aria-label="WedLiva benefits">
        <div className="marquee-track">
          <span>Luxury design</span><b>✦</b><span>Instant sharing</span><b>✦</b><span>Made for mobile</span><b>✦</b><span>RSVP ready</span><b>✦</b><span>Luxury design</span><b>✦</b><span>Instant sharing</span>
        </div>
      </section>

      <section id="templates" className="section templates-section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> The collection</p>
              <h2>Designed for the<br /><em>way you celebrate.</em></h2>
            </div>
            <div className="heading-side">
              <p>From intimate ceremonies to grand celebrations, choose a design that feels unmistakably yours.</p>
              <a href="#pricing" className="underlined-link">View all styles <Arrow /></a>
            </div>
          </div>

          <div className="template-grid">
            {templates.map((template, index) => (
              <article className={`template-item template-${template.tone}`} key={template.id}>
                <Link href="/invite/ayesha-danish" className="template-preview" aria-label={`Preview ${template.name} template`}>
                  <div className="template-paper">
                    <span className="template-tag">{template.tag}</span>
                    <div className="template-corner">✦</div>
                    <p>{template.subtitle}</p>
                    <h3>{template.initials}</h3>
                    <div className="template-divider" />
                    <small>THE WEDDING OF</small>
                    <strong>10 · 01 · 2027</strong>
                    <i>{String(index + 1).padStart(2, "0")}</i>
                  </div>
                  <span className="preview-pill">Preview <Arrow /></span>
                </Link>
                <div className="template-meta">
                  <div><h3>{template.name}</h3><span>Digital invitation</span></div>
                  <span className="template-number">0{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow"><span /> The WedLiva experience <span /></p>
            <h2>More than an invitation.<br /><em>A first impression.</em></h2>
            <p>Every detail is designed to make your guests pause, smile and feel part of your story.</p>
          </div>

          <div className="feature-grid">
            {features.map(([icon, title, text], index) => (
              <article className="feature-card" key={title}>
                <span className="feature-index">0{index + 1}</span>
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section process-section">
        <div className="shell process-grid">
          <div className="process-intro">
            <p className="eyebrow"><span /> Simple by design</p>
            <h2>From idea to<br /><em>“You&apos;re invited.”</em></h2>
            <p>Everything is intentionally simple. You bring the story; WedLiva makes it beautiful.</p>
            <a href="#templates" className="button button-light">Start creating <Arrow /></a>
          </div>
          <div className="steps-list">
            {steps.map(([number, title, text]) => (
              <article className="step-row" key={number}>
                <span className="step-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="step-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow"><span /> Simple plans <span /></p>
            <h2>Beautiful at every<br /><em>celebration.</em></h2>
            <p>Start with a design you love. Upgrade as your celebration grows.</p>
          </div>

          <div className="pricing-grid">
            <article className="price-card">
              <span className="price-label">Essential</span>
              <h3>₹999</h3>
              <p>For couples who want a beautiful, simple digital invite.</p>
              <ul><li>Premium template</li><li>Unique invitation link</li><li>Event details & venue</li><li>WhatsApp sharing</li></ul>
              <a href="#templates" className="price-button">Choose Essential</a>
            </article>
            <article className="price-card featured-price">
              <span className="popular-badge">Most loved</span>
              <span className="price-label">Premium</span>
              <h3>₹1,999</h3>
              <p>A richer invitation experience with motion and more personalization.</p>
              <ul><li>Everything in Essential</li><li>Animations & music</li><li>Photo gallery</li><li>Countdown & RSVP</li></ul>
              <a href="#templates" className="price-button dark-price">Choose Premium</a>
            </article>
            <article className="price-card">
              <span className="price-label">Luxury</span>
              <h3>₹3,999+</h3>
              <p>For elaborate celebrations that deserve a truly bespoke feel.</p>
              <ul><li>Luxury design direction</li><li>Advanced sections</li><li>Custom styling</li><li>Priority support</li></ul>
              <a href="#templates" className="price-button">Choose Luxury</a>
            </article>
          </div>
          <p className="price-note">* Launch pricing is illustrative and can be changed before accepting payments.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <div className="cta-star">✦</div>
          <p className="eyebrow">Your beginning deserves a beautiful invitation</p>
          <h2>Let&apos;s make your<br /><em>“You&apos;re invited.”</em> unforgettable.</h2>
          <a href="#templates" className="button button-dark">Create your invitation <Arrow /></a>
          <span className="cta-note">No design experience needed.</span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><Link href="/" className="brand footer-brand"><span className="brand-mark">W</span><span>WedLiva</span></Link><p>Luxury digital wedding invitations for modern celebrations.</p></div>
          <div className="footer-links"><a href="#templates">Templates</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><Link href="/invite/ayesha-danish">Live demo</Link></div>
          <div className="footer-copy">© {new Date().getFullYear()} WedLiva. Made for love.</div>
        </div>
      </footer>
    </main>
  );
}
