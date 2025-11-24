import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  GraduationCap,
  HandHeart,
  Images,
  Phone,
  FileText,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../assets/QUEST LOGO.jpg";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Academics", href: "/academics", icon: GraduationCap },
    { name: "Admissions", href: "/admissions", icon: FileText },
    { name: "Children's Home", href: "/childrens-home", icon: HandHeart },
    { name: "Gallery", href: "/gallery", icon: Images },
    { name: "Support", href: "/support", icon: HeartHandshake },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-blue-100"
          : "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50"
      } ${isMounted ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Clean Logo – No Heart */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ 
                scale: 1.12, 
                rotate: [0, -8, 8, -8, 0],
                transition: { duration: 0.8 }
              }}
              className="relative"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full animate-pulse opacity-60"></div>
              
              {/* Logo Image Only */}
              <img
                src={Logo}
                alt="Quest for Happiness Ministry"
                className="relative z-10 w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Ministry Name */}
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-xl md:text-2xl font-bold text-black leading-tight">
                Quest for Happiness
              </h1>
              <p className="text-xs md:text-sm text-gray-600 font-semibold tracking-wider">
                CBE MINISTRY
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center space-x-2 group ${
                    active ? "text-blue-600 font-bold" : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${active ? "scale-110" : "group-hover:scale-110"}`} />
                  <span>{link.name}</span>

                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  <div className={`absolute inset-0 bg-blue-50 rounded-lg -z-10 transition-all duration-300 ${
                    active
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-110"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 bg-white border-t border-blue-100">
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: isMobileMenuOpen ? 0 : -20,
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 transition-all duration-300 ${
                      active
                        ? "bg-blue-50 text-blue-600 font-bold border-r-4 border-blue-600"
                        : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                    {active && <Sparkles className="w-4 h-4 ml-auto text-blue-500" />}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navigation;