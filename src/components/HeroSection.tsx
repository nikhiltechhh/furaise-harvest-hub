import heroImg from "@/assets/hero-turmeric.jpg";
import { useEffect, useState } from "react";

// Add additional carousel images as needed — using heroImg as fallback for all slots
const carouselSlides = [
  {
    src: heroImg,
    headline: (
      <>
        Premium Agricultural
        <br />
        <span className="text-secondary">Exports</span> from India
      </>
    ),
    sub: "Specializing in industrial turmeric supply and premium rice exports — delivering quality, compliance, and reliability to global markets.",
  },
  // {
  //   src: heroImg,
  //   headline: (
  //     <>
  //       Industrial <span className="text-secondary">Turmeric</span>
  //       <br />
  //       Supply Chain
  //     </>
  //   ),
  //   sub: "Trusted by manufacturers worldwide for consistent quality, on-time delivery, and full regulatory compliance.",
  // },
  {
    src: "https://i.pinimg.com/1200x/20/d4/d8/20d4d8564f02b9a9cc9db40c5bdfb238.jpg",
    headline: (
      <>
        Premium <span className="text-secondary">Rice</span>
        <br />
        Exports Worldwide
      </>
    ),
    sub: "From basmati to non-basmati varieties — sourced from India's finest growing regions and shipped to global markets.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, animating]);

  const slide = carouselSlides[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      {carouselSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
        >
          <img src={s.src} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl">
          <h1
            key={`heading-${current}`}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-in-up"
            style={{ opacity: animating ? 0 : 1, transition: "opacity 0.4s" }}
          >
            {slide.headline}
          </h1>
          <p
            key={`sub-${current}`}
            className="mt-6 text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed max-w-xl animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: animating ? 0 : 1, transition: "opacity 0.4s 0.1s" }}
          >
            {slide.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => scrollTo("#products")}
              className="bg-secondary text-secondary-foreground px-8 py-3 font-body font-bold uppercase tracking-wider text-sm hover:brightness-110 transition-all rounded-sm"
            >
              View Products
            </button>
            <a
              href="/contact"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 font-body font-bold uppercase tracking-wider text-sm hover:bg-primary-foreground/10 transition-all rounded-sm inline-flex items-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-secondary w-8"
                  : "bg-primary-foreground/50 w-2 hover:bg-primary-foreground/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;