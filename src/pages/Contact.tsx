import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 700 000 000",
      link: "tel:+254700000000",
      subtext: "Mon-Fri, 8:00 AM - 5:00 PM",
      delay: "delay-100",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@questforhappiness.org",
      link: "mailto:info@questforhappiness.org",
      subtext: "We respond within 24 hours",
      delay: "delay-200",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
      link: "#map",
      subtext: "Visit us by appointment",
      delay: "delay-300",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Have questions about admissions, sponsorship, or volunteering? We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info) => (
              <Card
                key={info.title}
                className={`p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in ${info.delay}`}
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-primary hover:text-primary/80 transition-colors text-lg font-medium mb-2 block"
                >
                  {info.details}
                </a>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="p-8 lg:p-10">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 700 000 000"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions Inquiry</SelectItem>
                          <SelectItem value="sponsorship">Child Sponsorship</SelectItem>
                          <SelectItem value="volunteer">Volunteering</SelectItem>
                          <SelectItem value="donation">Make a Donation</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      rows={8}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Office Hours & Social */}
            <div className="animate-slide-up delay-200">
              <Card className="p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start h-14 text-lg" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5 mr-3" />
                      Follow on Facebook
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-14 text-lg" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-3" />
                      Follow on Instagram
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-14 text-lg" asChild>
                    <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
                <p className="text-primary-foreground/90 mb-4">
                  We welcome visitors! Schedule an appointment to tour our facilities and meet our team.
                </p>
                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  Schedule a Visit
                </Button>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
            <Card className="p-4 bg-muted" id="map">
              <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-xl font-bold mb-2">Quest for Happiness Ministry</p>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                  <p className="text-sm text-muted-foreground mt-4">Google Maps integration coming soon</p>
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