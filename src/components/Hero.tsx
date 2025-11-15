import { ArrowRight, Heart, BookOpen, Users, Star, Award, GraduationCap, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";
import { useEffect, useRef } from "react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-float");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      const statBoxes = statsRef.current.querySelectorAll(".stat-box");
      statBoxes.forEach((box, index) => {
        (box as HTMLElement).style.animationDelay = `${index * 0.2}s`;
        observer.observe(box);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Blue/Black Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Quest for Happiness Ministry School"
          className="w-full h-full object-cover scale-110 animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/70 to-blue-800/60" />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="animated-star"
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-5">
        <Star className="absolute top-1/4 left-10 w-6 h-6 text-blue-300 animate-bounce" />
        <Award className="absolute top-1/3 right-20 w-5 h-5 text-white animate-pulse" />
        <GraduationCap className="absolute bottom-1/4 left-20 w-7 h-7 text-blue-200 animate-bounce" />
        <Star className="absolute bottom-1/3 right-10 w-4 h-4 text-white animate-pulse" />
        {/* Additional Floating Elements */}
        <BookOpen className="absolute top-1/2 left-1/4 w-5 h-5 text-blue-200 animate-float" />
        <Heart className="absolute top-3/4 right-1/3 w-6 h-6 text-white animate-pulse" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="flex items-center mb-4 animate-slide-in-right">
              <div className="w-3 h-12 bg-blue-500 mr-4 rounded-full"></div>
              <h2 className="text-blue-300 font-semibold text-lg tracking-wider">
                EXCELLENCE IN EDUCATION
              </h2>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-text-focus">
              Learning Experience,
              <br />
              <span className="text-blue-400 relative inline-block">
                With a Difference
                <div className="absolute bottom-2 left-0 w-full h-1 bg-blue-500 transform scale-x-0 animate-underline-expand"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-delay">
              A CBE Primary and Junior School integrated with a Children's Home,
              spreading <span className="text-blue-300 font-semibold">love</span> and{" "}
              <span className="text-blue-300 font-semibold">education</span> to every child.
            </p>
          </div>

          {/* 🎓 School Motto */}
          <div className="mt-10 text-center text-white/90 italic text-lg tracking-wide animate-fade-in">
            "Empowering young minds to grow with wisdom, kindness, and purpose."
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-8 animate-slide-up-delay">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-lg group bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-500 hover:border-blue-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#childrens-home")}
              className="text-lg bg-black/40 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-900 hover:border-white transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="mr-2 w-5 h-5 animate-heartbeat" />
              Support a Child
            </Button>
            {/* 🏫 Virtual Tour Button */}
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("#video-tour")}
              className="text-lg bg-white text-blue-900 hover:bg-blue-100 border-blue-400 border-2 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              🎥 Virtual Tour
            </Button>
          </div>

          {/* 🎯 Quick Links */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection("#admissions")} 
              className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-400 transition-all duration-300"
            >
              Admissions
            </Button>
            <Button 
              onClick={() => scrollToSection("#academics")} 
              className="bg-blue-700 hover:bg-blue-800 text-white border-2 border-blue-600 transition-all duration-300"
            >
              Academics
            </Button>
            <Button 
              onClick={() => scrollToSection("#childrens-home")} 
              className="bg-blue-900 hover:bg-blue-950 text-white border-2 border-blue-700 transition-all duration-300"
            >
              Children's Home
            </Button>
          </div>

          {/* Quick Stats */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="stat-box bg-black/40 backdrop-blur-md rounded-xl p-6 text-center border-2 border-blue-500/30 transform transition-all duration-500 hover:border-blue-400 hover:bg-blue-900/20 hover:scale-105">
              <div className="relative inline-block">
                <BookOpen className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">450+</p>
              <p className="text-blue-200 font-medium">Students</p>
            </div>
            <div className="stat-box bg-black/40 backdrop-blur-md rounded-xl p-6 text-center border-2 border-blue-500/30 transform transition-all duration-500 hover:border-blue-400 hover:bg-blue-900/20 hover:scale-105">
              <Heart className="w-10 h-10 text-blue-400 mx-auto mb-3 animate-pulse" />
              <p className="text-3xl font-bold text-white mb-1">120+</p>
              <p className="text-blue-200 font-medium">Children Cared</p>
            </div>
            <div className="stat-box bg-black/40 backdrop-blur-md rounded-xl p-6 text-center border-2 border-blue-500/30 transform transition-all duration-500 hover:border-blue-400 hover:bg-blue-900/20 hover:scale-105">
              <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">25+</p>
              <p className="text-blue-200 font-medium">Teachers</p>
            </div>
          </div>

          {/* 🌟 Core Values */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center animate-fade-in">
            <div className="p-6 bg-black/30 rounded-xl hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
              <Star className="w-10 h-10 text-blue-400 mx-auto mb-3 animate-pulse" />
              <h4 className="text-white font-bold text-lg mb-2">Excellence</h4>
              <p className="text-blue-200 text-sm">Committed to quality learning and academic achievement.</p>
            </div>
            <div className="p-6 bg-black/30 rounded-xl hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
              <Heart className="w-10 h-10 text-blue-400 mx-auto mb-3 animate-heartbeat" />
              <h4 className="text-white font-bold text-lg mb-2">Compassion</h4>
              <p className="text-blue-200 text-sm">Caring for every child's wellbeing and personal growth.</p>
            </div>
            <div className="p-6 bg-black/30 rounded-xl hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105 border border-blue-500/20">
              <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-bold text-lg mb-2">Community</h4>
              <p className="text-blue-200 text-sm">Growing together as one supportive family.</p>
            </div>
          </div>

          {/* 💬 Welcome Message */}
          <div className="mt-12 max-w-2xl mx-auto text-center bg-black/40 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500/30 animate-fade-in">
            <p className="text-white text-lg leading-relaxed italic mb-4">
              "At Quest for Happiness Ministry, we believe every child deserves quality education and love.
              We are more than a school — we're a home of hope and a family that nurtures dreams."
            </p>
            <p className="text-blue-300 font-semibold text-md">
              — Headteacher, Quest for Happiness Ministry
            </p>
          </div>

          {/* 🎉 Event Ticker */}
          <div className="mt-8 bg-blue-600/80 backdrop-blur-sm rounded-full py-3 px-6 max-w-md mx-auto animate-pulse">
            <div className="flex items-center justify-center text-white text-sm font-medium">
              <span className="mr-2">🎉</span>
              Upcoming: Christmass Party & Graduation Day - Dec 13th
              <span className="ml-2">🎉</span>
            </div>
          </div>
        </div>
      </div>

      {/* 💚 Floating Donate Button */}
      <Button
        onClick={() => scrollToSection("#donate")}
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-500/25 rounded-full w-14 h-14 animate-bounce"
        size="icon"
      >
        <Heart className="w-6 h-6" />
      </Button>

      {/* 🔼 Scroll Up Button */}
      <Button
        onClick={scrollToTop}
        className="fixed top-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25 rounded-full w-12 h-12 transition-all duration-300"
        size="icon"
      >
        <ChevronUp className="w-5 h-5" />
      </Button>

      {/* 🔽 Scroll Down Button */}
      <Button
        onClick={scrollToBottom}
        className="fixed top-20 right-8 z-50 bg-blue-500/80 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/25 rounded-full w-12 h-12 transition-all duration-300 backdrop-blur-sm"
        size="icon"
      >
        <ChevronDown className="w-5 h-5" />
      </Button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-8 h-14 rounded-full border-2 border-blue-400 flex items-start justify-center p-2 bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-4 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;