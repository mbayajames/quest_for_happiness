import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { 
  Heart, 
  Home, 
  Utensils, 
  BookHeart, 
  HandHeart, 
  Stethoscope, 
  Users, 
  Gift, 
  ChevronRight,
  Clock,
  Sunrise,
  Sun,
  Moon,
  Star,
  Target,
  Eye,
  Camera,
  UserCircle,
  GraduationCap,
  Calendar,
  MapPin,
  Plus,
  Minus
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrensHomeImage from "@/assets/childrens-home.jpg";
import React, { useState } from "react";

type DailyScheduleItem = {
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  activity: string;
  description: string;
  delay: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const ChildrensHomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
      description: "Full access to CBE education alongside other students, with additional tutoring support",
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

  const dailySchedule: DailyScheduleItem[] = [
    { time: "6:00 AM", icon: Sunrise, activity: "Wake Up & Morning Routine", description: "Breakfast, personal hygiene, and morning devotions", delay: "delay-100" },
    { time: "7:30 AM", icon: Clock, activity: "School Time", description: "Children attend classes with their peers", delay: "delay-200" },
    { time: "3:30 PM", icon: Sun, activity: "After-School Activities", description: "Homework help, sports, clubs, and free play", delay: "delay-300" },
    { time: "6:00 PM", icon: Users, activity: "Dinner & Family Time", description: "Shared meal, games, and bonding activities", delay: "delay-400" },
    { time: "8:30 PM", icon: Moon, activity: "Evening Routine & Bedtime", description: "Study time, bedtime stories, and prayers", delay: "delay-500" },
  ];

  const teamMembers = [
    {
      name: "Grace Mwangi",
      role: "Home Director",
      description: "With over 15 years of experience in child care, Grace ensures every child feels loved and supported.",
      delay: "delay-100",
    },
    {
      name: "David Kimani",
      role: "Head Caregiver",
      description: "David creates a fatherly presence and organizes sports and outdoor activities for the children.",
      delay: "delay-200",
    },
    {
      name: "Susan Achieng",
      role: "Social Worker",
      description: "Susan provides counseling and emotional support, helping children process their experiences.",
      delay: "delay-300",
    },
    {
      name: "Peter Omondi",
      role: "Education Coordinator",
      description: "Peter ensures all children receive quality education and additional academic support when needed.",
      delay: "delay-400",
    },
  ];

  const impactStats = [
    { number: "120+", label: "Children Supported", icon: Users },
    { number: "45", label: "Successful Graduates", icon: GraduationCap },
    { number: "18", label: "Years of Service", icon: Calendar },
    { number: "95%", label: "School Attendance Rate", icon: BookHeart },
  ];

  const galleryImages = [
    { alt: "Children studying together", delay: "delay-100" },
    { alt: "Playtime in the courtyard", delay: "delay-200" },
    { alt: "Shared meal time", delay: "delay-300" },
    { alt: "Art and craft activities", delay: "delay-400" },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "How can I sponsor a child?",
      answer: "You can sponsor a child for KSh 5,000 per month, which covers their education, healthcare, food, and shelter. Contact us to get matched with a child and receive regular updates."
    },
    {
      question: "How are donations used?",
      answer: "100% of donations go directly to supporting the children. This includes education costs, nutritious meals, healthcare, counseling, and maintaining safe living facilities."
    },
    {
      question: "Can people visit the Children's Home?",
      answer: "Yes! We welcome visitors who want to see our work firsthand. Please contact us in advance to schedule a visit so we can ensure it doesn't disrupt the children's routine."
    },
    {
      question: "What age groups do you support?",
      answer: "We care for children from infancy through age 18. After completing primary education, we help them transition to secondary schools or vocational training programs."
    },
    {
      question: "How do children come to your home?",
      answer: "Children are referred to us through government children's departments, community leaders, and sometimes directly from families in crisis who can no longer care for them."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 animate-bounce">
          <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
        </div>
        <div className="absolute bottom-20 left-10 animate-pulse">
          <Star className="w-6 h-6 text-yellow-300" fill="currentColor" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="animate-bounce mb-6">
              <Heart className="w-20 h-20 mx-auto" fill="#ffffff" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Children's Home
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-slide-up delay-200">
              Providing shelter, education, and unconditional love to orphaned, abandoned, and vulnerable children
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="p-8 animate-slide-up delay-100 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide a loving home and holistic care for vulnerable children, empowering them through education and faith to become responsible, fulfilled adults.
              </p>
            </Card>

            <Card className="p-8 animate-slide-up delay-200 border border-blue-100">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every child grows in love, dignity, and purpose—ready to impact their community with hope, compassion, and leadership.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">A Home Full of Hope</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Children's Home is more than just a shelter—it's a family. We provide comprehensive care for 120+ children who need it most, ensuring they receive the same quality education and opportunities as their peers. Every child lives, learns, and grows in an environment filled with love, dignity, and hope.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We believe that every child, regardless of their circumstances, deserves a chance to dream, to learn, and to become who God created them to be. Our integrated approach means children from our home attend classes alongside day scholars, fostering inclusion and breaking down stigma.
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-6 py-4 mb-8 bg-blue-50 rounded-r-lg animate-pulse">
                <p className="text-xl italic text-blue-900 mb-2">
                  "Every child deserves a home and a chance to dream."
                </p>
                <cite className="text-sm text-gray-600">- Our Guiding Principle</cite>
              </blockquote>
            </div>

            <div className="animate-slide-up delay-200">
              <img
                src={childrensHomeImage}
                alt="Children's Home"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Transforming lives through comprehensive care and education
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in delay-100"
              >
                <div className="bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 transition-colors">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Comprehensive Care</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We address every aspect of a child's wellbeing—physical, emotional, educational, and spiritual
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in ${service.delay} border border-blue-100 group hover:border-blue-300`}
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Life at Our Home</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Glimpses of daily life, learning, and joyful moments
          </p>
          
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-6 min-w-max px-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`animate-scale-in ${image.delay} flex-shrink-0`}
                >
                  <div className="w-80 h-60 bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-blue-900 font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            * Actual photos available during scheduled visits to protect children's privacy
          </p>
        </div>
      </section>

      {/* Daily Life */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">A Day in Our Home</h2>
            
            <Card className="p-8 mb-8 border border-blue-100 shadow-lg">
              <div className="space-y-6">
                {dailySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 group hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 animate-slide-up ${item.delay}`}
                  >
                    <div className="bg-blue-600 text-white rounded-lg w-24 h-16 flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                      {item.time}
                    </div>
                    <div className="flex items-center gap-4 flex-1">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <item.icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-blue-900">{item.activity}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Meet Our Care Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals creating a loving family environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`p-6 text-center animate-scale-in ${member.delay} border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <UserCircle className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Lives transformed through love, education, and opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story) => (
              <Card
                key={story.name}
                className={`p-8 animate-scale-in ${story.delay} bg-white text-black border border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-blue-700" fill="#1d4ed8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">{story.name}</h3>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <Card
                  key={index}
                  className="border border-blue-100 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Visit */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 rounded-3xl p-12 backdrop-blur-sm">
              <MapPin className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
              <h2 className="text-4xl font-bold mb-6">Come Visit Us</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We welcome guests to tour our Children's Home and experience the love and joy we share every day. See firsthand how your support transforms lives and meet the amazing children you're helping.
              </p>
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold px-8 py-3">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">How You Can Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your support can change a child's life forever
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="p-8 text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <program.icon className="w-10 h-10 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Button className="group bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Make a Lasting Impact</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Currently supporting 120+ children with your help. Every contribution—no matter the size—makes a lasting difference in a child's life. Together, we can give every child a home, an education, and a future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-3">
                <Heart className="mr-2 w-5 h-5" fill="#1d4ed8" />
                Sponsor a Child
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-3">
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