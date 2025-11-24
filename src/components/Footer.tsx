// components/Footer.tsx
import { Heart, Facebook, Instagram, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/QUEST LOGO.jpg";

// Logo imported from assets

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openMaps = () => {
    window.open("https://maps.google.com?q=Quest+for+Happiness+Ministry+Nairobi+Kenya", "_blank");
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <img
                  src={logo}
                  alt="Quest for Happiness Ministry Logo"
                  className="w-28 h-auto object-contain drop-shadow-2xl
                           transform group-hover:scale-110 group-hover:-rotate-3
                           transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white leading-tight">
                  Quest for Happiness
                </h3>
                <p className="text-sm text-blue-300 font-medium">Ministry</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Nurturing Minds, Building Character, and Spreading Love through Competency-Based Education.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center 
                         hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center 
                         hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:questhappiness77@gmail.com"
                aria-label="Email us"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center 
                         hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-blue-400 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-400 rounded-full animate-expand"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {["#home", "#about", "#cbe-programs", "#gallery"].map((href) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-5 overflow-hidden transition-all duration-300">
                      <ChevronUp className="w-4 h-4 rotate-90 text-blue-400" />
                    </span>
                    <span className="ml-2">
                      {href === "#home" ? "Home" :
                       href === "#cbe-programs" ? "CBE Programs" :
                       href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-blue-400 relative inline-block">
              Get Involved
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-400 rounded-full animate-expand"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Sponsor a Child", href: "#childrens-home" },
                { label: "Volunteer", href: "#contact" },
                { label: "Support CBE", href: "#contact" },
                { label: "Partner With Us", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-5 overflow-hidden transition-all duration-300">
                      <Heart className="w-4 h-4 text-blue-400 fill-current" />
                    </span>
                    <span className="ml-2">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-blue-400 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-blue-400 rounded-full animate-expand"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3 group cursor-pointer" onClick={openMaps}>
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 group-hover:animate-bounce" />
                <span className="hover:text-blue-400 transition-colors underline-offset-2 hover:underline">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform" />
                <a href="tel:+254758827745" className="hover:text-blue-400 transition-colors">
                  +254 758 827 745
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:animate-pulse" />
                <a href="mailto:questhappiness77@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                  questhappiness77@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p className="flex items-center gap-2">
              © {currentYear} Quest for Happiness Ministry. Made with{" "}
              <Heart className="w-4 h-4 text-blue-500 fill-current animate-pulse" /> for every child.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 
                 shadow-2xl flex items-center justify-center text-white z-50 transition-all duration-500
                 hover:scale-110 hover:shadow-blue-500/50
                 ${showScrollTop ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"}`}
      >
        <ChevronUp className="w-7 h-7 animate-bounce" />
      </button>

    </footer>
  );
};

export default Footer;