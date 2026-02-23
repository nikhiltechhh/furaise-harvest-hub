import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold mb-4">FURAISE</h3>
          <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
            India-based agricultural commodity export enterprise specializing in industrial turmeric supply and premium rice exports.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/80">
            <a href="tel:7842213679" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4 text-secondary flex-shrink-0" /> +91 7842213679
            </a>
            <a href="mailto:exports@furaise.com" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4 text-secondary flex-shrink-0" /> exports@furaise.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
              <span>3/175, Dhurjati Nagar, Gudur, Andhra Pradesh, 524101</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Business Hours</h4>
          <div className="space-y-2 font-body text-sm text-primary-foreground/80">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Mon – Fri: 9:00 AM – 7:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>Saturday: 10:00 AM – 5:00 PM</span>
            </div>
            <p className="mt-4 text-primary-foreground/60 text-xs">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
        <p className="font-body text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Furaise. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
