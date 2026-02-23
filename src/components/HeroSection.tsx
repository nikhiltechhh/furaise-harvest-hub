import heroImg from "@/assets/hero-turmeric.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Turmeric roots" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in-up">
            Premium Agricultural
            <br />
            <span className="text-secondary">Exports</span> from India
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Specializing in industrial turmeric supply and premium rice exports — delivering quality, compliance, and reliability to global markets.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => scrollTo("#products")}
              className="bg-secondary text-secondary-foreground px-8 py-3 font-body font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all rounded-sm"
            >
              View Products
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 font-body font-bold uppercase tracking-wider text-sm hover:bg-primary-foreground/10 transition-all rounded-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
