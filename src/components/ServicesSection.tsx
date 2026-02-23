import turmericFarm from "@/assets/turmeric-farm.jpg";
import riceField from "@/assets/rice-field.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import turmericPolished from "@/assets/turmeric-polished.jpg";

const services = [
  {
    image: turmericFarm,
    title: "Industrial Turmeric Supply – India",
    description: "High-quality turmeric fingers for extraction companies — curcumin extraction, oleoresin manufacturing, nutraceutical processing.",
    highlights: ["High curcumin potential lots", "Low moisture, properly dried", "Bulk container loads", "Consistent year-round sourcing"],
  },
  {
    image: turmericPolished,
    title: "Turmeric Export – EU | UAE | USA",
    description: "Premium turmeric fingers meeting international compliance standards with full documentation support.",
    highlights: ["EU MRL-compliant testing", "ETO-free material", "Aflatoxin & residue lab reports", "FOB / CIF supply terms"],
  },
  {
    image: riceField,
    title: "Rice Export – USA & EU Markets",
    description: "Premium Indian rice varieties including Sona Masuri, IR64, and Basmati 1121 for importers and wholesale buyers.",
    highlights: ["Clean and graded rice", "Proper moisture control", "Export-compliant documentation", "Bulk container supply"],
  },
  {
    image: qualityLab,
    title: "Quality Assurance & Compliance",
    description: "Comprehensive quality coordination ensuring smooth customs clearance and dependable delivery.",
    highlights: ["Third-party lab testing", "Pesticide residue analysis", "Pre-shipment inspection", "Logistics coordination"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
        Our <span className="text-primary">Services</span>
      </h2>
      <p className="text-center font-body text-muted-foreground mb-16 max-w-2xl mx-auto">
        Core export & supply services tailored for serious international buyers
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-56 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm mb-4">{s.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {s.highlights.map((h, j) => (
                  <li key={j} className="font-body text-xs text-primary flex items-start gap-1.5">
                    <span className="text-secondary mt-0.5">✔</span> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
