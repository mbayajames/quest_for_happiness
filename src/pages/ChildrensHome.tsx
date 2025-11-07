import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Heart, Home, Utensils, BookHeart, HandHeart, Stethoscope, Users, Gift, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrensHomeImage from "@/assets/childrens-home.jpg";

const ChildrensHomePage = () => {
  const services = [
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Comfortable dormitories providing a family-like environment with 24/7 supervision and security",
      delay: "delay-100",
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Three balanced meals daily plus snacks, ensuring proper nutrition for growing children",
      delay: "delay-200",
    },
    {
      icon: BookHeart,
      title: "Quality Education",
      description: "Full access to CBC education alongside other students, with additional tutoring support",
      delay: "delay-300",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Regular medical checkups, vaccinations, and immediate access to healthcare services",
      delay: "delay-500",
    },
    {
      icon: Heart,
      title: "Counseling",
      description: "Professional psychological support and trauma counseling for emotional wellbeing",
      delay: "delay-600",
    },
    {
      icon: Users,
      title: "Family Environment",
      description: "House parents and caregivers create a loving, family-like atmosphere",
      delay: "delay-700",
    },
  ];

  const programs = [
    {
      title: "Child Sponsorship",
      description: "Sponsor a child's education, healthcare, and daily needs for just KSh 5,000 per month",
      icon: Gift,
    },
    {
      title: "Volunteer Program",
      description: "Spend time with children, teach skills, or help with daily activities",
      icon: HandHeart,
    },
    {
      title: "In-Kind Donations",
      description: "Contribute food, clothing, school supplies, or other essential items",
      icon: Heart,
    },
  ];

  const stories = [
    {
      name: "Faith, Grade 8",
      story: "Faith came to us at age 7 after losing both parents. Today, she's a top student in mathematics and dreams of becoming an engineer.",
      delay: "delay-100",
    },
    {
      name: "Daniel, Grade 6",
      story: "Daniel was abandoned as a baby. Now he's a talented artist and helps teach younger children in the home.",
      delay: "delay-200",
    },
    {
      name: "Sarah, Graduated 2023",
      story: "Sarah completed her primary education with us and is now in secondary school on full scholarship, studying to become a teacher.",
      delay: "delay-300",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Heart className="w-20 h-20 mx-auto mb-6" fill="currentColor" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Children's Home</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Providing shelter, education, and unconditional love to orphaned, abandoned, and vulnerable children
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">A Home Full of Hope</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Children's Home is more than just a shelter—it's a family. We provide comprehensive care for 120+ children who need it most, ensuring they receive the same quality education and opportunities as their peers. Every child lives, learns, and grows in an environment filled with love, dignity, and hope.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that every child, regardless of their circumstances, deserves a chance to dream, to learn, and to become who God created them to be. Our integrated approach means children from our home attend classes alongside day scholars, fostering inclusion and breaking down stigma.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-4 mb-8 bg-primary/5 rounded-r-lg">
                <p className="text-xl italic text-foreground mb-2">
                  "Every child deserves a home and a chance to dream."
                </p>
                <cite className="text-sm text-muted-foreground">- Our Guiding Principle</cite>
              </blockquote>
            </div>

            <div className="animate-slide-up delay-200">
              <img
                src={childrensHomeImage}
                alt="Children's Home"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Care</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We address every aspect of a child's wellbeing—physical, emotional, educational, and spiritual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in ${service.delay}`}
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Life */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">A Day in Our Home</h2>
            
            <Card className="p-8 mb-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-lg w-24 h-16 flex items-center justify-center font-bold flex-shrink-0">
                    6:00 AM
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Wake Up & Morning Routine</h3>
                    <p className="text-muted-foreground">Breakfast, personal hygiene, and morning devotions</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-lg w-24 h-16 flex items-center justify-center font-bold flex-shrink-0">
                    7:30 AM
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">School Time</h3>
                    <p className="text-muted-foreground">Children attend classes with their peers</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-lg w-24 h-16 flex items-center justify-center font-bold flex-shrink-0">
                    3:30 PM
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">After-School Activities</h3>
                    <p className="text-muted-foreground">Homework help, sports, clubs, and free play</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-lg w-24 h-16 flex items-center justify-center font-bold flex-shrink-0">
                    6:00 PM
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Dinner & Family Time</h3>
                    <p className="text-muted-foreground">Shared meal, games, and bonding activities</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-lg w-24 h-16 flex items-center justify-center font-bold flex-shrink-0">
                    8:30 PM
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Evening Routine & Bedtime</h3>
                    <p className="text-muted-foreground">Study time, bedtime stories, and prayers</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lives transformed through love, education, and opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story) => (
              <Card
                key={story.name}
                className={`p-8 animate-scale-in ${story.delay}`}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{story.name}</h3>
                <p className="text-muted-foreground italic">"{story.story}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How You Can Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your support can change a child's life forever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button className="group">
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Make a Lasting Impact</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Currently supporting 120+ children with your help. Every contribution—no matter the size—makes a lasting difference in a child's life. Together, we can give every child a home, an education, and a future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Heart className="mr-2 w-5 h-5" />
                Sponsor a Child
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <HandHeart className="mr-2 w-5 h-5" />
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ChildrensHomePage;