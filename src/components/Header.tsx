import { useState, useEffect } from "react";
import { ShoppingCart, Phone, Mail, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg py-2" : "bg-primary/90 py-4"
      }`}
    >
      {/* Top bar */}
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick("#home")} className="flex items-center gap-2 cursor-pointer">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-primary-foreground">
            FURAISE
          </span>
        </button>

        {/* Contact info - desktop */}
        <div className="hidden lg:flex items-center gap-6 text-primary-foreground/80 text-sm font-body">
          <a href="tel:7842213679" className="flex items-center gap-1 hover:text-secondary transition-colors">
            <Phone className="w-3.5 h-3.5" /> 7842213679
          </a>
          <a href="mailto:exports@furaise.com" className="flex items-center gap-1 hover:text-secondary transition-colors">
            <Mail className="w-3.5 h-3.5" /> exports@furaise.com
          </a>
        </div>

        {/* Nav links - desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-body text-sm tracking-wider uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-primary-foreground hover:text-secondary transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-[6px] w-7 p-0 ${mobileOpen ? "hamburger-open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line w-full" />
            <span className="hamburger-line w-[60%]" />
            <span className="hamburger-line w-full" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-primary-foreground/90 hover:text-secondary transition-colors font-body text-base tracking-wider uppercase text-left"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-primary-foreground/20 text-primary-foreground/80 text-sm">
            <a href="tel:7842213679" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 7842213679
            </a>
            <a href="mailto:exports@furaise.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> exports@furaise.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
