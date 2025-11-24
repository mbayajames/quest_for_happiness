// components/ScrollButtons.tsx
'use client';

import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show "Scroll Up" when scrolled down more than 1.5 screens
      setShowUp(scrollPosition > windowHeight * 1.5);

      // Show "Scroll Down" when not near the bottom (leave 300px buffer)
      setShowDown(scrollPosition + windowHeight < documentHeight - 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Down Button */}
      <Button
        size="icon"
        onClick={scrollToBottom}
        className={`fixed bottom-28 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/30 backdrop-blur-sm
          ${showDown ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to bottom"
      >
        <ArrowDown className="w-7 h-7" />
      </Button>

      {/* Scroll Up Button */}
      <Button
        size="icon"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/30 backdrop-blur-sm
          ${showUp ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-7 h-7" />
      </Button>
    </>
  );
};