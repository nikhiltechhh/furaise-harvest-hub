import { CheckCircle, Globe, Truck, Shield, TrendingUp } from "lucide-react";

const strengths = [
  { icon: TrendingUp, text: "Scalable procurement capability" },
  { icon: Truck, text: "Container-load export execution" },
  { icon: Globe, text: "EU & US compliance understanding" },
  { icon: Shield, text: "Documentation-driven trade model" },
  { icon: CheckCircle, text: "Long-term supply orientation" },
];

const divisions = [
  {
    label: "Turmeric Division",
    items: [
      "Industrial-grade supply to extraction companies",
      "Export-grade to EU, USA, and UAE",
      "Compliance-aligned shipments with lab testing",
    ],
  },
  {
    label: "Rice Division",
    items: [
      "Non-basmati exports (Sona Masuri, IR64)",
      "Basmati rice to buyer specification",
      "Bulk container supply for EU & US importers",
    ],
  },
];

const AboutSection = () => (
  <section id="about" className="bg-muted overflow-hidden">
    <style>{`
      .about-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 720px;
      }
      @media (max-width: 900px) {
        .about-wrapper { grid-template-columns: 1fr; }
        .about-image-col { height: 320px; }
        .about-content-col { padding: 3rem 1.5rem 4rem; }
      }

      .about-image-col {
        position: relative;
        overflow: hidden;
      }
      .about-image-col img {
        width: 100%; height: 100%;
        object-fit: cover; display: block;
        transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
      }
      .about-image-col:hover img { transform: scale(1.04); }
      .about-img-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%);
        pointer-events: none;
      }
      .about-img-caption {
        position: absolute;
        bottom: 2rem; left: 2rem; right: 2rem;
        display: flex; align-items: flex-end; justify-content: space-between;
        gap: 1rem;
      }
      .about-img-caption .tagline {
        font-family: var(--font-heading, Georgia, serif);
        font-size: clamp(1.1rem, 2.2vw, 1.6rem);
        font-weight: 700;
        color: #fff;
        line-height: 1.3;
        max-width: 18ch;
        text-shadow: 0 2px 14px rgba(0,0,0,0.35);
      }
      .about-img-caption .origin-tag {
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        font-family: var(--font-body, sans-serif);
        font-size: 0.65rem; font-weight: 700;
        letter-spacing: 0.15em; text-transform: uppercase;
        padding: 0.4rem 0.8rem;
        border-radius: 0.3rem;
        white-space: nowrap; flex-shrink: 0;
      }

      .about-content-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 4rem 3.5rem;
        background: hsl(var(--muted));
      }
      @media (max-width: 1100px) {
        .about-content-col { padding: 3rem 2rem; }
      }

      .about-eyebrow {
        font-size: 0.68rem; font-weight: 700;
        letter-spacing: 0.2em; text-transform: uppercase;
        color: hsl(var(--primary));
        font-family: var(--font-body, sans-serif);
        margin-bottom: 0.75rem;
      }
      .about-heading {
        font-family: var(--font-heading, Georgia, serif);
        font-size: clamp(2rem, 3.5vw, 2.8rem);
        font-weight: 800; line-height: 1.15;
        color: hsl(var(--foreground));
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }
      .about-heading span { color: hsl(var(--primary)); }
      .about-intro {
        font-family: var(--font-body, sans-serif);
        font-size: 0.875rem; line-height: 1.85;
        color: hsl(var(--muted-foreground));
        margin-bottom: 2.25rem;
        max-width: 46ch;
      }

      /* Divisions as labeled definition rows */
      .divisions-block { margin-bottom: 2.25rem; }
      .division-row {
        display: grid;
        grid-template-columns: 128px 1fr;
        gap: 0 1.5rem;
        padding: 1rem 0;
        border-top: 1px solid hsl(var(--border));
        align-items: start;
      }
      .division-row:last-child { border-bottom: 1px solid hsl(var(--border)); }
      .division-label {
        font-family: var(--font-heading, Georgia, serif);
        font-size: 0.8rem; font-weight: 700;
        color: hsl(var(--foreground));
        line-height: 1.4;
        padding-top: 0.1rem;
      }
      .division-items { display: flex; flex-direction: column; gap: 0.3rem; }
      .division-item {
        font-family: var(--font-body, sans-serif);
        font-size: 0.775rem;
        color: hsl(var(--muted-foreground));
        line-height: 1.6;
        display: flex; align-items: flex-start; gap: 0.5rem;
      }
      .division-item::before {
        content: '';
        width: 5px; height: 5px; border-radius: 50%;
        background: hsl(var(--primary));
        flex-shrink: 0; margin-top: 0.44rem;
      }

      /* Strengths pills */
      .strengths-strip { padding-top: 1.5rem; }
      .strengths-label {
        font-size: 0.65rem; font-weight: 700;
        letter-spacing: 0.18em; text-transform: uppercase;
        color: hsl(var(--muted-foreground));
        font-family: var(--font-body, sans-serif);
        margin-bottom: 0.9rem;
      }
      .strengths-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
      .strength-pill {
        display: flex; align-items: center; gap: 0.4rem;
        background: hsl(var(--background));
        border: 1px solid hsl(var(--border));
        border-radius: 9999px;
        padding: 0.32rem 0.85rem 0.32rem 0.6rem;
        font-family: var(--font-body, sans-serif);
        font-size: 0.72rem;
        color: hsl(var(--foreground));
        font-weight: 500; white-space: nowrap;
      }
      .strength-pill svg { color: hsl(var(--primary)); flex-shrink: 0; }
    `}</style>

    <div className="about-wrapper">

      {/* Image */}
      <div className="about-image-col">
        <img
          src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=900&q=80"
          alt="Turmeric farming in India"
          loading="lazy"
        />
        <div className="about-img-overlay" />
        <div className="about-img-caption">
          <p className="tagline">Field to container. Farm to world.</p>
          <span className="origin-tag">India · Global</span>
        </div>
      </div>

      {/* Content */}
      <div className="about-content-col">
        <p className="about-eyebrow">Who We Are</p>
        <h2 className="about-heading">About <span>Furaise</span></h2>
        <p className="about-intro">
          Furaise is an India-based agricultural commodity export enterprise specializing in industrial turmeric supply and premium rice exports. We operate through structured sourcing networks and quality-controlled processing partnerships to deliver container-scale shipments to international buyers.
        </p>

        {/* Divisions as labeled rows */}
        <div className="divisions-block">
          {divisions.map((d, i) => (
            <div key={i} className="division-row">
              <span className="division-label">{d.label}</span>
              <div className="division-items">
                {d.items.map((item, j) => (
                  <span key={j} className="division-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div className="strengths-strip">
          <p className="strengths-label">Operational Strengths</p>
          <div className="strengths-list">
            {strengths.map((s, i) => (
              <div key={i} className="strength-pill">
                <s.icon size={13} strokeWidth={2.5} />
                {s.text}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default AboutSection;