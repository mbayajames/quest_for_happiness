'use client';

import { BookOpen, Star, Award, GraduationCap, Heart, MessageCircle, Phone, Mail, X, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLocation, useNavigate } from "react-router-dom";

import HeroSchool from "../assets/WhatsApp Image 2023-04-01 at 00.47.41.jpeg";
import CBCLearning from "../assets/WhatsApp Image 2023-04-01 at 00.47.45.jpeg";

const carouselImages = [HeroSchool, CBCLearning, HeroSchool];

// Floating Contact Button
export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <div className={`flex flex-col gap-4 mb-4 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:scale-110 border-4 border-white/30 animate-bounce"
          onClick={() => window.open("https://wa.me/254758827745", "_blank")}
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-blue-700 hover:bg-blue-800 text-white shadow-2xl hover:scale-110 border-4 border-white/30"
          onClick={() => window.location.href = "tel:+254758827745"}
        >
          <Phone className="w-7 h-7" />
        </Button>
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-blue-800 hover:bg-blue-900 text-white shadow-2xl hover:scale-110 border-4 border-white/30"
          onClick={() => window.location.href = "mailto:info@questforhappiness.org"}
        >
          <Mail className="w-7 h-7" />
        </Button>
      </div>

      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-500 border-4 border-white/30 ${
          isOpen 
            ? 'bg-black hover:bg-gray-900 rotate-45' 
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </Button>

      {!isOpen && (
        <div className="absolute inset-0 -z-10 animate-ping">
          <div className="w-16 h-16 bg-blue-500/40 rounded-full" />
        </div>
      )}
    </div>
  );
};

// Scroll to Top Button
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-28 right-6 z-40 w-14 h-14 rounded-full bg-blue-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/30 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-7 h-7" />
    </Button>
  );
};

// Updates Ticker
const UpdatesTicker = () => {
  const updates = [
    "Grade 8 KCPE 2024 Average Score: 378 Marks!",
    "Admissions Open for 2025 – Limited Seats Remaining!",
    "New Ultra-Modern STEM Lab Officially Launched",
    "County Champions 2024 – Drama, Music & Science",
    "Holiday Tuition Starts December 2nd – Register Now",
    "Parent-Teacher Meeting: Saturday, Nov 30th @ 9 AM",
    "Congratulations to Our 2024 Top Performers!",
    "Tree Planting Day – Every Child Plants a Future"
  ];

  return (
    <div className="relative overflow-hidden bg-black/70 backdrop-blur-md py-5 mt-10 border-t border-b border-blue-500/50">
      <div className="animate-marquee whitespace-nowrap">
        <div className="inline-flex items-center gap-20">
          {updates.concat(updates).map((update, index) => (
            <span key={index} className="text-lg md:text-2xl font-semibold text-white tracking-wider drop-shadow-lg">
              {update}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/90 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/90 to-transparent pointer-events-none z-10" />
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: "trimSnaps", dragFree: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stars = document.querySelectorAll('.animated-star');
    stars.forEach((star) => {
      const el = star as HTMLElement;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      el.style.top = `${top}%`;
      el.style.left = `${left}%`;
      el.style.animationDelay = `${delay}s`;
    });
  }, []);

  const handleApplyNow = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="embla h-screen w-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {carouselImages.map((src, i) => (
              <div key={i} className="embla__slide relative flex-[0_0_100%] min-w-0 overflow-hidden">
                <img
                  src={src}
                  alt={`Quest for Happiness Academy - ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 pointer-events-none animate-zoom-slow" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        {/* Twinkling Stars - now white/blue */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 40 }, (_, i) => (
            <div
              key={i}
              className="animated-star absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-twinkle"
            />
          ))}
        </div>
      </div>

      {/* Floating Icons - only blue & white */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Star className="absolute top-20 left-10 w-10 h-10 text-blue-300 animate-pulse" />
        <Star className="absolute top-32 right-20 w-8 h-8 text-blue-200 animate-pulse delay-700" />
        <Award className="absolute top-48 left-20 w-12 h-12 text-blue-400 animate-bounce" />
        <GraduationCap className="absolute bottom-32 left-16 w-14 h-14 text-blue-300 animate-float" />
        <BookOpen className="absolute top-1/3 right-1/4 w-10 h-10 text-blue-200 animate-pulse" />
        <Heart className="absolute bottom-24 right-32 w-12 h-12 text-blue-400 animate-pulse" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-2xl">
              Quest for Happiness
            </span>{" "}
            Academy
          </h1>
          
          <p className="mt-8 text-xl md:text-3xl text-gray-200 font-light tracking-wide">
            Nurturing Minds • Building Character • Shaping Tomorrow
          </p>

          <UpdatesTicker />

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleApplyNow}
              size="lg"
              className="px-12 py-7 text-xl font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-2xl hover:shadow-blue-500/60 transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-7 text-xl font-bold bg-white/20 backdrop-blur-lg border-2 border-white/50 text-white hover:bg-white/30 rounded-full transition-all"
            >
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-10 h-16 rounded-full border-4 border-white/80 flex items-start justify-center p-2 bg-white/10 backdrop-blur">
          <div className="w-1.5 h-8 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;