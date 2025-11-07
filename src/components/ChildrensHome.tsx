import { Heart, Home, Utensils, BookHeart, HandHeart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrensHomeImage from "@/assets/childrens-home.jpg";

const ChildrensHome = () => {
  const services = [
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Comfortable dormitories providing a family-like environment",
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Three balanced meals daily ensuring proper nutrition",
    },
    {
      icon: BookHeart,
      title: "Education",
      description: "Full access to quality CBC education alongside other students",
    },
    {
      icon: Heart,
      title: "Counseling & Care",
      description: "Professional support for emotional and spiritual wellbeing",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="childrens-home" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Children's Home</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing shelter, education, and love to orphaned, abandoned, and vulnerable children
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6">A Home Full of Hope</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our Children's Home is more than just a shelter—it's a family. We provide
              comprehensive care for children who need it most, ensuring they receive the same
              quality education and opportunities as their peers. Every child lives, learns, and
              grows in an environment filled with love, dignity, and hope.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 bg-primary/5 rounded-r-lg">
              <p className="text-lg italic text-foreground">
                "Every child deserves a home and a chance to dream."
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="group">
                <HandHeart className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Sponsor a Child
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact}>
                Become a Volunteer
              </Button>
            </div>
          </div>

          <div className="animate-slide-up order-1 lg:order-2 delay-200">
            <img
              src={childrensHomeImage}
              alt="Children's Home"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12">What We Provide</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-${(index + 1) * 100}`}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Currently Supporting 120+ Children</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              With your help, we can continue to provide education, care, and hope to vulnerable
              children. Every contribution makes a lasting difference in a child's life.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90"
            >
              Make an Impact Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChildrensHome;