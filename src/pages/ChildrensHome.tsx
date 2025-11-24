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
  Clock,
  Sunrise,
  Sun,
  Moon,
  Star,
  Target,
  Eye,
  Camera,
  GraduationCap,
  Calendar,
  MapPin,
  Plus,
  Minus,
  Sparkles,
  Zap,
  Smile,
  Trophy,
  Lightbulb,
  Palette
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrensHomeImage from "../assets/PHOTO-2025-11-24-01-28-45.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      name: "Faith Njeri, Grade 8",
      story: "Faith Njeri came to us at age 7 after losing both parents. Today, she's a top student in mathematics and dreams of becoming an engineer.",
      delay: "delay-100",
      icon: Trophy,
    },
    {
      name: "Daniel Kamau, Grade 6",
      story: "Daniel Kamau was abandoned as a baby. Now he's a talented artist and helps teach younger children in the home.",
      delay: "delay-200",
      icon: Palette,
    },
    {
      name: "Emmanuel Munene, Graduated 2023",
      story: "Emmanuel Munene completed his primary education with us and is now in secondary school on full scholarship, studying to become a engineer.",
      delay: "delay-300",
      icon: GraduationCap,
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
      name: "Madam Tabitha Mbaya",
      role: "Home Director",
      description: "With over 15 years of experience in child care, Grace ensures every child feels loved and supported.",
      delay: "delay-100",
      icon: Lightbulb
    },
    {
      name: "Mrs. Harriet Mbaya",
      role: "Manager",
      description: "Harriet ensures all children receive quality education and additional academic support when needed.",
      delay: "delay-200",
      icon: Zap
    },
    {
      name: "Mr. Barack Njiri",
      role: "Headteacher",
      description: "Barack creates a fatherly presence and organizes sports and outdoor activities for the children.",
      delay: "delay-400",
      icon: Smile
    },
    {
      name: "Mrs. Rose Kironte",
      role: "Matron",
      description: "Rose provides counseling and emotional support, helping children process their experiences.",
      delay: "delay-300",
      icon: BookHeart
    },
  ];

  const impactStats = [
    { number: "120+", label: "Children Supported", icon: Users },
    { number: "45", label: "Successful Graduates", icon: GraduationCap },
    { number: "13", label: "Years of Service", icon: Calendar },
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute top-20 left-20 animate-float animation-delay-0s">
            <Star className="w-12 h-12 text-blue-400 opacity-70" fill="currentColor" />
          </div>
          <div className="absolute top-40 right-32 animate-float animation-delay-1s">
            <Star className="w-8 h-8 text-blue-300 opacity-60" fill="currentColor" />
          </div>
          <div className="absolute bottom-32 left-1/3 animate-float animation-delay-2s">
            <Star className="w-10 h-10 text-blue-500 opacity-80" fill="currentColor" />
          </div>
          
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-1s"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-bounce mb-8 animate-pulse-glow">
                <Heart className="w-24 h-24 mx-auto" fill="#3b82f6" stroke="#ffffff" strokeWidth={2} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
                Children's Home
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-slide-up delay-200 max-w-3xl mx-auto">
                Providing shelter, education, and <span className="text-blue-400 font-bold">unconditional love</span> to orphaned, abandoned, and vulnerable children
              </p>
              <div className="mt-8 flex justify-center gap-4 animate-slide-up delay-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 shimmer">
                  <span className="text-blue-300 font-bold">120+ Children</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 shimmer">
                  <span className="text-blue-300 font-bold">13 Years of Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-gray-50">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="p-8 animate-slide-up delay-100 border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To provide a loving home and holistic care for vulnerable children, empowering them through education and faith to become responsible, fulfilled adults.
                  </p>
                </div>
              </Card>

              <Card className="p-8 animate-slide-up delay-200 border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-700 to-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A world where every child grows in love, dignity, and purpose—ready to impact their community with hope, compassion, and leadership.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-gray-50/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                  A Home Full of Hope
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our Children's Home is more than just a shelter—it's a <span className="font-bold text-blue-700">family</span>. We provide comprehensive care for 120+ children who need it most, ensuring they receive the same quality education and opportunities as their peers. Every child lives, learns, and grows in an environment filled with love, dignity, and hope.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We believe that every child, regardless of their circumstances, deserves a chance to dream, to learn, and to become who God created them to be. Our integrated approach means children from our home attend classes alongside day scholars, fostering inclusion and breaking down stigma.
                </p>

                <blockquote className="border-l-4 border-blue-600 pl-6 py-4 mb-8 bg-blue-50 rounded-r-lg animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-shimmer"></div>
                  <p className="text-xl italic text-black mb-2 relative z-10">
                    "Every child deserves a home and a chance to dream."
                  </p>
                  <cite className="text-sm text-gray-600 relative z-10">- Our Guiding Principle</cite>
                </blockquote>
              </div>

              <div className="animate-slide-up delay-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-black/20 rounded-3xl blur-3xl transform rotate-3"></div>
                <img
                  src={childrensHomeImage}
                  alt="Children's Home"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 relative z-10 border-8 border-white"
                />
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
                  120+ Smiling Faces
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse animation-delay-1s"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">
                Our Impact
              </h2>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Transforming lives through comprehensive care and education
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group animation-delay-${index * 100}ms`}
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-blue-500/50">
                    <stat.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-blue-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-black">
                Comprehensive Care
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We address every aspect of a child's wellbeing—physical, emotional, educational, and spiritual
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className={`p-8 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 animate-scale-in animation-delay-${service.delay.replace('delay-', '')}ms border-0 relative overflow-hidden group bg-white`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl shadow-glow giving-blue"></div>
                  
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-all duration-300 relative z-10">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black relative z-10">{service.title}</h3>
                  <p className="text-gray-600 relative z-10">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-black mb-6">
              Life at Our Home
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Glimpses of daily life, learning, and joyful moments
            </p>
            
            <div className="overflow-x-auto pb-8">
              <div className="flex gap-6 min-w-max px-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`animate-scale-in animation-delay-${image.delay.replace('delay-', '')}ms flex-shrink-0 group relative overflow-hidden rounded-3xl`}
                  >
                    <div className="w-80 h-60 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-500"></div>
                      <div className="text-center relative z-10">
                        <Camera className="w-16 h-16 text-white mx-auto mb-4 drop-shadow-lg" />
                        <p className="text-white font-bold text-lg drop-shadow">{image.alt}</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-center mb-12 text-black">
                A Day in Our Home
              </h2>
              
              <Card className="p-8 mb-8 border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <div className="space-y-6">
                  {dailySchedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-gray-50 p-6 rounded-2xl transition-all duration-500 animate-slide-up animation-delay-${item.delay.replace('delay-', '')}ms relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl w-28 h-20 flex items-center justify-center font-bold flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
                        {item.time}
                      </div>
                      <div className="flex items-center gap-4 flex-1">
                        <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                          <item.icon className="w-7 h-7 text-blue-700" />
                        </div>
                        <div className="relative z-10">
                          <h3 className="font-bold text-lg mb-1 text-black">{item.activity}</h3>
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
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-black">
                Meet Our Care Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dedicated professionals creating a loving family environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className={`p-6 text-center animate-scale-in animation-delay-${member.delay.replace('delay-', '')}ms border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden bg-white`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <member.icon className="w-10 h-10 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black relative z-10">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-3 relative z-10">{member.role}</p>
                  <p className="text-gray-600 text-sm relative z-10">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">
                Success Stories
              </h2>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Lives transformed through love, education, and opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stories.map((story) => (
                <Card
                  key={story.name}
                  className={`p-8 animate-scale-in animation-delay-${story.delay.replace('delay-', '')}ms bg-white/10 backdrop-blur-md text-white border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 mx-auto shadow-xl group-hover:scale-110 transition-all duration-300">
                      <story.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-blue-300">{story.name}</h3>
                    <p className="text-blue-100 italic leading-relaxed">"{story.story}"</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-center mb-12 text-black">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg overflow-hidden animate-scale-in animation-delay-${index * 100}ms hover:shadow-xl transition-all duration-300`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-gray-50 transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-semibold text-black group-hover:text-blue-700 transition-colors">
                        {faq.question}
                      </h3>
                      <div className="bg-blue-100 rounded-full p-2 group-hover:bg-blue-200 transition-all duration-300">
                        {openFAQ === index ? (
                          <Minus className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6 animate-fade-in">
                        <p className="text-gray-600 leading-relaxed pl-2 border-l-4 border-blue-600 bg-blue-50/50 p-4 rounded-r-lg">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Visit */}
        <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 rounded-3xl p-12 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="animate-float">
                  <MapPin className="w-20 h-20 mx-auto mb-6 text-blue-400 drop-shadow-lg" />
                </div>
                <h2 className="text-5xl font-bold mb-6 text-white">
                  Come Visit Us
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                  We welcome guests to tour our Children's Home and experience the love and joy we share every day. See firsthand how your support transforms lives and meet the amazing children you're helping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-black">
                How You Can Help
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your support can change a child's life forever
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="p-8 text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden bg-white"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                    <program.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-black relative z-10">{program.title}</h3>
                  <p className="text-gray-600 mb-6 relative z-10">{program.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse animation-delay-1s"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Make a Lasting Impact
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Currently supporting <span className="font-bold text-blue-400">120+ children</span> with your help. Every contribution—no matter the size—makes a lasting difference in a child's life. Together, we can give every child a home, an education, and a future.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Sponsor a Child → Contact page */}
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 font-bold px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 sparkle"
                  >
                    <Heart className="mr-3 w-6 h-6" fill="#ffffff" />
                    Sponsor a Child
                    <Sparkles className="ml-3 w-5 h-5" />
                  </Button>
                </Link>

                {/* Become a Volunteer → Contact page */}
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-7 text-lg backdrop-blur-sm hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
                  >
                    <HandHeart className="mr-3 w-6 h-6" />
                    Become a Volunteer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default ChildrensHomePage;