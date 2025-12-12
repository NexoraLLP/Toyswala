import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "+917990558862";
const WHATSAPP_NUMBER = "917990558862";
const EMAIL = "toyswalaaa@gmail.com";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Toys Wala" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-card/80 text-sm leading-relaxed">
              Your trusted destination for quality toys. Bringing joy to womens&mens since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-card/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-card/80 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-card/80 hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-card/80 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-card/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>abhishek arcade,yogichowk surat - 395011</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-card/80">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 mt-10 pt-6 text-center">
          <p className="text-card/60 text-sm">
            © {new Date().getFullYear()} Toys Wala. All rights reserved. | Trust Beyond Us
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
