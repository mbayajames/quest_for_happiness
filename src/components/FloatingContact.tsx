import { Phone, Mail, MessageCircle, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Contact Buttons */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95 pointer-events-none'
        }`}
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 bg-green-600 hover:bg-green-700 text-white border-2 border-white"
          onClick={() => {
            window.open("https://wa.me/254700000000", "_blank");
            closeMenu();
          }}
          title="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white border-2 border-white"
          onClick={() => {
            window.location.href = "tel:+254700000000";
            closeMenu();
          }}
          title="Call Us"
        >
          <Phone className="w-6 h-6" />
        </Button>
        
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 bg-red-600 hover:bg-red-700 text-white border-2 border-white"
          onClick={() => {
            window.location.href = "mailto:info@questforhappiness.org";
            closeMenu();
          }}
          title="Email Us"
        >
          <Mail className="w-6 h-6" />
        </Button>
      </div>

      {/* Toggle Button */}
      <Button
        size="icon"
        className={`w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 mt-3 ${
          isOpen 
            ? 'bg-black hover:bg-gray-800 text-white rotate-45' 
            : 'bg-blue-600 hover:bg-blue-700 text-white rotate-0'
        }`}
        onClick={toggleMenu}
        title={isOpen ? "Close" : "Contact Us"}
      >
        {isOpen ? (
          <X className="w-7 h-7 transition-transform duration-300" />
        ) : (
          <ChevronUp className="w-7 h-7 transition-transform duration-300" />
        )}
      </Button>

      {/* Pulse Animation Background */}
      {!isOpen && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;