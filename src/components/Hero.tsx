import { ArrowRight, Heart, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Quest for Happiness Ministry School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Nurturing Minds,
              <br />
              <span className="text-primary-light">Building Character</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              A CBC Primary and Junior School integrated with a Children's Home,
              spreading love and education to every child.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="text-lg group"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#childrens-home")}
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
            >
              <Heart className="mr-2 w-5 h-5" />
              Support a Child
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl animate-scale-in">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <BookOpen className="w-8 h-8 text-primary-light mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">450+</p>
              <p className="text-sm text-white/80">Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <Heart className="w-8 h-8 text-primary-light mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">120+</p>
              <p className="text-sm text-white/80">Children Cared</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
              <Users className="w-8 h-8 text-primary-light mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">25+</p>
              <p className="text-sm text-white/80">Teachers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
