import { CheckCircle, Globe, Truck, Shield, TrendingUp } from "lucide-react";

const strengths = [
  { icon: TrendingUp, text: "Scalable procurement capability" },
  { icon: Truck, text: "Container-load export execution" },
  { icon: Globe, text: "EU & US compliance understanding" },
  { icon: Shield, text: "Documentation-driven trade model" },
  { icon: CheckCircle, text: "Long-term supply orientation" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          About <span className="text-primary">Furaise</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          Furaise is an India-based agricultural commodity export enterprise specializing in industrial turmeric supply and premium rice exports. We operate through structured sourcing networks and quality-controlled processing partnerships to deliver container-scale shipments to international buyers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Business Segments */}
        <div className="space-y-8">
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Turmeric Division</h3>
            <ul className="space-y-2 font-body text-muted-foreground text-sm">
              <li>• Industrial-grade turmeric supply to extraction companies</li>
              <li>• Export-grade turmeric to EU, USA, and UAE</li>
              <li>• Compliance-aligned shipments with lab testing</li>
            </ul>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Rice Division</h3>
            <ul className="space-y-2 font-body text-muted-foreground text-sm">
              <li>• Non-basmati rice exports (Sona Masuri, IR64)</li>
              <li>• Basmati rice (subject to buyer specification)</li>
              <li>• Bulk container supply for EU and US importers</li>
            </ul>
          </div>
        </div>

        {/* Operational Strengths */}
        <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-lg">
          <h3 className="font-heading text-2xl font-bold mb-8">Operational Strengths</h3>
          <div className="space-y-5">
            {strengths.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-body text-primary-foreground/90">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
