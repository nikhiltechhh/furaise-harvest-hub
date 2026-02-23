const services = [
  {
    image: "https://i.pinimg.com/1200x/d8/f2/06/d8f206aca29bf0c991574ec042b33fdd.jpg",
    title: "Industrial Turmeric Supply - India",
    description:
      "High-quality turmeric fingers for extraction companies — curcumin extraction, oleoresin manufacturing, nutraceutical processing.",
    highlights: [
      "High curcumin potential lots",
      "Low moisture, properly dried",
      "Bulk container loads",
      "Consistent year-round sourcing",
    ],
    number: "01",
  },
  {
    image: "https://i.ibb.co/L4qbQJB/Whats-App-Image-2026-02-23-at-3-27-51-PM.jpg",
    title: "Turmeric Export - EU | UAE | USA",
    description:
      "Premium turmeric fingers meeting international compliance standards with full documentation support.",
    highlights: [
      "EU MRL-compliant testing",
      "ETO-free material",
      "Aflatoxin & residue lab reports",
      "FOB / CIF supply terms",
    ],
    number: "02",
  },
  {
    image: "https://i.ibb.co/dCrS7cY/Whats-App-Image-2026-02-23-at-4-01-38-PM.jpg",
    title: "Rice Export - USA & EU Markets",
    description:
      "Premium Indian rice varieties including Sona Masuri, IR64, and Basmati 1121 for importers and wholesale buyers.",
    highlights: [
      "Clean and graded rice",
      "Proper moisture control",
      "Export-compliant documentation",
      "Bulk container supply",
    ],
    number: "03",
  },
  {
    image: "https://i.pinimg.com/736x/cf/f5/e1/cff5e1cba8964bcaeaee87cf0eaecb59.jpg",
    title: "Quality Assurance & Compliance",
    description:
      "Comprehensive quality coordination ensuring smooth customs clearance and dependable delivery.",
    highlights: [
      "Third-party lab testing",
      "Pesticide residue analysis",
      "Pre-shipment inspection",
      "Logistics coordination",
    ],
    number: "04",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Core export &amp; supply services tailored for serious international buyers
        </p>
      </div>

      {/* Services */}
      <div className="overflow-hidden">
        {services.map((s, i) => {
          const isReverse = i % 2 !== 0;
          return (
            <div key={i}>
              {/*
               * Mobile: always image on top, content below (flex-col)
               * Desktop: alternating image/content layout via md:flex-row / md:flex-row-reverse
               */}
              <div
                className={[
                  "flex flex-col min-h-[420px] group",
                  isReverse ? "md:flex-row-reverse" : "md:flex-row",
                ].join(" ")}
              >
                {/* Image Panel */}
                <div className="relative overflow-hidden h-64 md:h-auto md:flex-1">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                  />
                  {/* Number overlay */}
                  <span
                    className="absolute bottom-5 left-6 text-8xl font-black leading-none pointer-events-none select-none"
                    style={{
                      color: "rgba(255,255,255,0.12)",
                      fontFamily: "var(--font-heading, Georgia, serif)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {s.number}
                  </span>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/[0.18] to-transparent pointer-events-none" />
                </div>

                {/* Content Panel */}
                <div className="flex flex-col justify-center flex-1 px-6 py-8 md:px-14 md:py-12 lg:px-14">
                  <span
                    className="text-[0.7rem] font-bold tracking-[0.18em] uppercase mb-3"
                    style={{ color: "hsl(var(--primary))", fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    Service {s.number}
                  </span>
                  <h3
                    className="font-bold leading-tight mb-4 text-foreground"
                    style={{
                      fontFamily: "var(--font-heading, Georgia, serif)",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.7rem)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6 text-muted-foreground md:max-w-[38ch]"
                    style={{ fontFamily: "var(--font-body, sans-serif)" }}
                  >
                    {s.description}
                  </p>
                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-5">
                    {s.highlights.map((h, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-2 text-xs text-foreground leading-snug"
                        style={{ fontFamily: "var(--font-body, sans-serif)" }}
                      >
                        <span className="flex-shrink-0 mt-[0.1em]" style={{ color: "hsl(var(--secondary))" }}>
                          ✔
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              {i < services.length - 1 && (
                <div className="h-px bg-border mx-0 md:mx-6" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;