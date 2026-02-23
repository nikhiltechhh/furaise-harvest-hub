import { useState, useEffect } from "react";
import { ShoppingCart, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);

    // Section link (#home, #about, #products)
    if (href.startsWith("#")) {
      // If already on homepage
      if (location.pathname === "/") {
        scrollToSection(href);
      } else {
        // Go to homepage first, then scroll
        navigate("/", { replace: false });

        // Wait for page render
        setTimeout(() => {
          scrollToSection(href);
        }, 100);
      }
    } 
    // Route link (/services, /contact)
    else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div
        className={`bg-foreground/95 text-background transition-all duration-300 ${
          scrolled
            ? "py-0 max-h-0 overflow-hidden opacity-0"
            : "py-1.5 max-h-12 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-end gap-6 text-xs font-body">
          <a
            href="tel:7842213679"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Phone className="w-3 h-3" /> 7842213679
          </a>
          <a
            href="mailto:exports@furaise.com"
            className="flex items-center gap-1.5 hover:text-secondary transition-colors"
          >
            <Mail className="w-3 h-3" /> exports@furaise.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-primary shadow-lg py-2" : "bg-primary/95 py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <button
  onClick={() => handleNavClick("#home")}
  className="flex items-center cursor-pointer flex-shrink-0"
>
  <img
    src="https://i.ibb.co/cKtx9PTC/logofuraise.jpg"
    alt="Furaise Logo"
    className={`
      w-auto object-contain transition-all duration-300
      ${scrolled ? "h-7 md:h-18" : "h-9 md:h-16"}
    `}
  />
</button>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-primary-foreground/90 hover:text-secondary transition-colors font-body text-sm tracking-wider uppercase whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Cart + Hamburger */}
          <div className="flex items-center gap-3">
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

            <button
              className="md:hidden flex flex-col gap-[6px] w-7 p-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] bg-primary-foreground rounded transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[8px] w-full" : "w-full"
                }`}
              />
              <span
                className={`block h-[2px] bg-primary-foreground rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0 w-[60%]" : "w-[60%]"
                }`}
              />
              <span
                className={`block h-[2px] bg-primary-foreground rounded transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[8px] w-full" : "w-full"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-primary ${
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