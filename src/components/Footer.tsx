import { Heart, Facebook, Instagram, Mail, Phone, MapPin, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button when user scrolls down
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

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-6 transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-all duration-300">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Quest for Happiness</h3>
                <p className="text-xs text-blue-300 font-medium">Ministry</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Nurturing Minds, Building Character, and Spreading Love through Competency-Based Education.
            </p>

            {/* Social Icons with hover animation */}
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:fill-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:info@questforhappiness.org"
                aria-label="Send email"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-white" />
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
              {["#home", "#about", "#cbe-programs", "#gallery"].map((href, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                      <ChevronUp className="w-3 h-3 rotate-90 text-blue-400" />
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
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="inline-block w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                      <Heart className="w-3 h-3 text-blue-400 fill-current" />
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
              <li className="flex items-center space-x-3 group">
                <MapPin className="w-4 h-4 text-blue-400 group-hover:animate-bounce" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center space-x-3 group break-all">
                <Mail className="w-4 h-4 text-blue-400 group-hover:animate-pulse" />
                <a href="mailto:info@questforhappiness.org" className="hover:text-blue-400 transition-colors">
                  info@questforhappiness.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-2">
              © {currentYear} Quest for Happiness Ministry. Made with{" "}
              <Heart className="w-4 h-4 text-blue-500 fill-current animate-pulse" /> for every child.
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl flex items-center justify-center text-white transform transition-all duration-500 z-50 ${
                showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              } hover:scale-110 hover:shadow-2xl`}
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Fixed: Removed `jsx` prop and used regular <style> */}
      <style>{`
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 50%;
          }
        }
        .animate-expand {
          animation: expand 0.6s ease-out forwards;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;