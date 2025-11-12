import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  HeartHandshake,
  Users,
  Target,
  Award,
  BookOpen,
  UserCheck,
  Calendar,
  GraduationCap,
  Home,
  Shield
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      className: "bg-blue-600 text-white border-blue-700",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 700 000 000",
      link: "tel:+254700000000",
      subtext: "Mon-Fri, 8:00 AM - 5:00 PM",
      delay: "delay-100",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@questforhappiness.org",
      link: "mailto:info@questforhappiness.org",
      subtext: "We respond within 24 hours",
      delay: "delay-200",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
      link: "#map",
      subtext: "Visit us by appointment",
      delay: "delay-300",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM", icon: Clock },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM", icon: Users },
    { day: "Sunday", hours: "Closed", icon: HeartHandshake },
  ];

  const quickActions = [
    {
      icon: UserCheck,
      title: "Learner Assessment",
      description: "Schedule competency evaluation",
      link: "/assessment",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Explore competency pathways",
      link: "/skills",
      color: "bg-black hover:bg-gray-800",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Get competency certification",
      link: "/certification",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access competency materials",
      link: "/resources",
      color: "bg-black hover:bg-gray-800",
    },
  ];

  const competencySubjects = [
    "Digital Literacy & Technology",
    "Entrepreneurship & Business Skills",
    "Life Skills & Personal Development",
    "Vocational & Technical Skills",
    "Academic Foundation Skills",
    "Creative Arts & Innovation",
    "Leadership & Community Engagement",
    "Other Competency Area"
  ];

  const admissionsTeam = [
    { 
      name: "Mrs. Esther Njeri", 
      role: "Admissions Officer", 
      img: "/images/esther.jpg" 
    },
    { 
      name: "Mr. David Mwangi", 
      role: "Academic Counselor", 
      img: "/images/david.jpg" 
    },
    { 
      name: "Sister Grace Wanjiku", 
      role: "Children's Home Liaison", 
      img: "/images/grace.jpg" 
    },
  ];

  const impactStats = [
    { number: "500+", label: "Happy Students" },
    { number: "50+", label: "Dedicated Staff" },
    { number: "100+", label: "Scholarships Awarded" },
    { number: "10+", label: "Years of Service" },
  ];

  const faqs = [
    {
      question: "How do I apply for admission?",
      answer: "You can fill out the admission form online or visit our office during working hours for assistance."
    },
    {
      question: "Can I visit the school before enrolling?",
      answer: "Yes, we encourage visits. Please schedule an appointment via our contact form or book a school visit directly."
    },
    {
      question: "Does the school support orphans?",
      answer: "Yes, we have a dedicated Children's Home that supports vulnerable children integrated into our classes."
    },
    {
      question: "What is Competency-Based Education?",
      answer: "CBE focuses on developing practical skills and competencies rather than just theoretical knowledge, allowing learners to progress at their own pace."
    },
    {
      question: "Are there scholarship opportunities available?",
      answer: "Yes, we offer scholarships based on need and merit. Contact our admissions team to learn more about available opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Emergency Hotline Bar */}
      <section className="pt-32 bg-gradient-to-r from-red-600 to-blue-700 text-white text-center py-4">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-2">Emergency Support</h3>
          <p className="text-blue-100 mb-3">
            If you know a child in need of care or protection, reach us immediately.
          </p>
          <p className="text-3xl font-semibold animate-pulse">📞 +254 711 222 333</p>
        </div>
      </section>

      {/* Hero Section with Animated Background */}
      <section className="pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Connect With Our CBE Program
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-fade-in-up delay-300">
              Ready to develop real-world competencies? Get in touch to start your personalized learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 animate-fade-in-up">
            Why Reach Out to Us?
          </h2>
          <p className="text-lg text-gray-700 mb-6 animate-fade-in-up delay-200">
            Whether you're a parent, a potential sponsor, or a learner seeking opportunity, we're here to support your educational journey. 
            At Quest for Happiness, we believe every child deserves a chance to thrive — both in school and in life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="animate-fade-in-up delay-300">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Quality Education</h3>
              <p className="text-gray-600">Competency-based learning that prepares students for real-world success</p>
            </div>
            <div className="animate-fade-in-up delay-400">
              <Home className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Safe Environment</h3>
              <p className="text-gray-600">Nurturing environment for both day scholars and residential students</p>
            </div>
            <div className="animate-fade-in-up delay-500">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">Holistic Support</h3>
              <p className="text-gray-600">Comprehensive care including education, shelter, and emotional support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.title}
                className={`${action.color} text-white h-auto py-6 px-4 transition-all duration-300 hover:scale-105 animate-slide-up`}
                asChild
              >
                <a href={action.link}>
                  <div className="text-center">
                    <action.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-bold text-sm md:text-base">{action.title}</div>
                    <div className="text-xs opacity-90">{action.description}</div>
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our School Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in-up">
            Come Visit Quest for Happiness
          </h2>
          <p className="text-gray-700 mb-6 text-lg animate-fade-in-up delay-200">
            We'd love to show you our facilities, meet our learners, and experience our Competency-Based Curriculum in action.
          </p>
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden border-4 border-white shadow-xl">
              {/* School image placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-blue-200">
                <div className="text-center text-blue-800">
                  <Home className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-bold">Our School Campus</p>
                  <p className="text-sm">Modern facilities for quality education</p>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all hover:scale-105 animate-fade-in-up delay-400">
            <Calendar className="w-5 h-5 mr-2" />
            Book a School Visit
          </Button>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-10 animate-fade-in-up">
            Our Impact So Far
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="animate-fade-in-up"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className={`p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up ${info.delay} border-2 border-blue-100 hover:border-blue-300`}
              >
                <div className={`${info.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110`}>
                  <info.icon className={`w-10 h-10 ${info.iconColor}`} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-black">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors text-lg font-medium mb-2 block hover:underline"
                >
                  {info.details}
                </a>
                <p className="text-sm text-gray-600">{info.subtext}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="p-8 lg:p-10 border-2 border-blue-100 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-black">Start Your Competency Journey</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12 border-2 border-blue-100 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12 border-2 border-blue-100 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-black">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 700 000 000"
                        className="h-12 border-2 border-blue-100 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">
                        Competency Area *
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="h-12 border-2 border-blue-100 focus:border-blue-500 transition-colors">
                          <SelectValue placeholder="Select competency area" />
                        </SelectTrigger>
                        <SelectContent>
                          {competencySubjects.map((subject) => (
                            <SelectItem key={subject} value={subject.toLowerCase().replace(/[^a-z]+/g, '-')}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                      Your Learning Goals *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your skills, interests, and what competencies you'd like to develop..."
                      rows={8}
                      className="resize-none border-2 border-blue-100 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Start My Competency Journey
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Office Hours & Social */}
            <div className="animate-slide-up delay-200">
              <Card className="p-8 mb-8 border-2 border-blue-100 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">Learning Center Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex justify-between items-center py-3 border-b border-blue-100 last:border-0 group hover:bg-blue-50 px-2 rounded transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <schedule.icon className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-black">{schedule.day}</span>
                      </div>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 mb-8 border-2 border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-black">Connect With Our Learning Community</h3>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-14 text-lg border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
                    asChild
                  >
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5 mr-3 text-blue-600 group-hover:scale-110 transition-transform" />
                      <span className="text-black">Join CBE Community</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-14 text-lg border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
                    asChild
                  >
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-3 text-pink-600 group-hover:scale-110 transition-transform" />
                      <span className="text-black">See Student Projects</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-14 text-lg border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
                    asChild
                  >
                    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-3 text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="text-black">Chat with Advisor</span>
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-blue-600 to-black text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">Schedule Competency Assessment</h3>
                <p className="text-blue-100 mb-4">
                  Ready to demonstrate your skills? Book an assessment session with our competency evaluators.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 font-bold"
                >
                  Book Assessment
                </Button>
              </Card>
            </div>
          </div>

          {/* Meet Our Admissions Team */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-10 text-black animate-fade-in-up">
                Meet Our Admissions Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {admissionsTeam.map((staff, index) => (
                  <div 
                    key={staff.name} 
                    className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{staff.name}</h3>
                    <p className="text-blue-600 font-medium">{staff.role}</p>
                    <p className="text-gray-600 text-sm mt-3">
                      {staff.role.includes('Admissions') && "Helping families navigate the enrollment process"}
                      {staff.role.includes('Counselor') && "Guiding students in their educational journey"}
                      {staff.role.includes('Liaison') && "Connecting our children's home with educational opportunities"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center animate-fade-in-up">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="border-2 border-blue-100 p-6 rounded-lg hover:border-blue-300 transition-colors duration-300 group animate-fade-in-up"
                  >
                    <summary className="font-semibold text-lg text-black cursor-pointer list-none">
                      <div className="flex justify-between items-center">
                        <span>{faq.question}</span>
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-open:bg-blue-600 transition-colors">
                          <svg className="w-4 h-4 text-blue-600 group-open:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </summary>
                    <p className="text-gray-700 mt-4 pl-2 border-l-4 border-blue-200 pl-4">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Map Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8 text-black animate-fade-in">
              Visit Our Learning Center
            </h2>
            <Card 
              className="border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500" 
              id="map"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808723347535!2d36.82121531575358!3d-1.2923998359809294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664c1ebc9%3A0x4f4bcf1dabd4e4f5!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1638359873123!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
                  title="Quest for Happiness Location"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-white">
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <p className="text-lg font-semibold text-black">Quest for Happiness CBE Center, Nairobi, Kenya</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ContactPage;