import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  GraduationCap,
  Heart,
  Images,
  Phone,
  HandHeart,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    { name: "Children's Home", href: "/childrens-home", icon: Heart },
    { name: "Gallery", href: "/gallery", icon: Images },
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
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-blue-100'
          : 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50'
      } ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-xl">Q</span>
            </motion.div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-xl font-bold text-black">Quest for Happiness</h1>
              <p className="text-xs text-gray-600 font-medium">CBE Ministry</p>
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
                    active
                      ? "text-blue-600 font-bold"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      active ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{link.name}</span>

                  {/* Active Indicator */}
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* Hover Background */}
                  <div
                    className={`absolute inset-0 bg-blue-50 rounded-lg -z-10 transition-all duration-300 ${
                      active
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Support Button */}
            <Link to="/contact">
              <Button
                size="sm"
                className="ml-6 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <HandHeart className="w-4 h-4" />
                <span>Support Us</span>
              </Button>
            </Link>
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

            <div className="px-4 pt-3">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <HandHeart className="w-4 h-4" />
                  <span>Support Us</span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navigation;