import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  GraduationCap,
  Home,
  Shield,
  UserCheck,
  Target,
  Award,
  BookOpen,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage =
      `Hello Quest for Happiness!%0A%0A` +
      `*New Inquiry*%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone || "Not provided"}%0A` +
      `Competency Area: ${formData.subject || "General Inquiry"}%0A%0A` +
      `Message:%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/254758827745?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // Form is reset silently – no toast/notification
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 758 827 745",
      link: "tel:+254758827745",
      subtext: "Mon–Fri, 8 AM – 5 PM",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+254 758 827 745",
      link: "https://wa.me/254758827745",
      subtext: "Instant replies during hours",
      openInNewTab: true,
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@questforhappiness.org",
      link: "mailto:info@questforhappiness.org",
      subtext: "Replies within 24 hours",
    },
    {
      icon: MapPin,
      title: "Our Center",
      details: "Nairobi, Kenya",
      link: "https://www.google.com/maps/dir/?api=1&destination=Quest+for+Happiness+Nairobi+Kenya&travelmode=driving",
      subtext: "Tap for directions",
      isLocation: true,
    },
  ];

  const officeHours = [
    { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM", icon: Clock },
    { day: "Saturday", hours: "9:00 AM – 1:00 PM", icon: Clock },
    { day: "Sunday", hours: "Closed", icon: Clock },
  ];

  const quickActions = [
    { icon: UserCheck, title: "Learner Assessment", description: "Schedule evaluation", link: "/assessment" },
    { icon: Target, title: "Skill Development", description: "Explore pathways", link: "/skills" },
    { icon: Award, title: "Certification", description: "Get certified", link: "/certification" },
    { icon: BookOpen, title: "Learning Resources", description: "Access materials", link: "/resources" },
  ];

  const competencySubjects = [
    "Digital Literacy & Technology",
    "Entrepreneurship & Business Skills",
    "Life Skills & Personal Development",
    "Vocational & Technical Skills",
    "Academic Foundation Skills",
    "Creative Arts & Innovation",
    "Leadership & Community Engagement",
    "Other Competency Area",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-700 via-blue-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Connect With Our CBE Program
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Ready to build real-world competencies?<br />Chat with us instantly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Why Reach Out */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">
            Why Reach Out to Us?
          </h2>
          <p className="text-lg text-gray-700 mb-16">
            Parents, sponsors, or learners — we're here to help every child thrive through competency-based education.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: GraduationCap, title: "Quality Education", desc: "Real-world competency focus" },
              { icon: Home, title: "Safe Environment", desc: "Day & residential support" },
              { icon: Shield, title: "Holistic Care", desc: "Education, shelter & emotional support" },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                  <item.icon className="w-12 h-12 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickActions.map((action, i) => (
              <Button
                key={action.title}
                asChild
                variant="default"
                className={`h-32 flex flex-col justify-center items-center text-white font-bold text-sm md:text-base transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  i % 2 === 0 ? "bg-blue-700 hover:bg-blue-800" : "bg-black hover:bg-gray-900"
                }`}
              >
                <a href={action.link}>
                  <action.icon className="w-10 h-10 mb-3" />
                  <div>{action.title}</div>
                  <div className="text-xs opacity-80 mt-1">{action.description}</div>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, i) => (
              <Card
                key={info.title}
                className={`p-8 text-center border-2 border-gray-200 transition-all duration-500 hover:border-blue-700 hover:shadow-xl ${
                  info.isLocation ? "cursor-pointer hover:bg-blue-50" : ""
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
                onClick={() => info.isLocation && window.open(info.link, "_blank")}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-700 flex items-center justify-center">
                  <info.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{info.title}</h3>

                {info.isLocation ? (
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-blue-700">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.subtext}</p>
                  </div>
                ) : (
                  <>
                    <a
                      href={info.link}
                      className="text-blue-700 font-semibold hover:underline block mb-2"
                      target={info.openInNewTab ? "_blank" : undefined}
                      rel={info.openInNewTab ? "noopener noreferrer" : undefined}
                    >
                      {info.details}
                    </a>
                    <p className="text-sm text-gray-600">{info.subtext}</p>
                  </>
                )}
              </Card>
            ))}
          </div>

          {/* Form + Sidebar */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Form */}
            <div>
              <Card className="p-10 border-2 border-gray-200 shadow-2xl bg-white">
                <div className="flex items-center gap-4 mb-8">
                  <MessageCircle className="w-14 h-14 text-blue-700" />
                  <div>
                    <h2 className="text-3xl font-black text-black">Start a WhatsApp Chat</h2>
                    <p className="text-gray-600">Fill in your details — we’ll open WhatsApp instantly</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">Full Name *</label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 border-2 border-gray-300 focus:border-blue-700 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">Email Address *</label>
                      <Input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 border-2 border-gray-300 focus:border-blue-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12 border-2 border-gray-300 focus:border-blue-700 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-black">Interested In *</label>
                      <Select value={formData.subject} onValueChange={(v) => setFormData({ ...formData, subject: v })}>
                        <SelectTrigger className="h-12 border-2 border-gray-300 focus:border-blue-700">
                          <SelectValue placeholder="Choose competency area" />
                        </SelectTrigger>
                        <SelectContent>
                          {competencySubjects.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-black">Your Message / Goals *</label>
                    <Textarea
                      required
                      placeholder="Tell us how we can help you or your child..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="resize-none border-2 border-gray-300 focus:border-blue-700 transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-700 to-green-600 hover:from-blue-800 hover:to-green-700 text-white font-bold text-lg h-14 transition-all hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="mr-3 w-7 h-7" />
                    Open WhatsApp Chat Now
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              <Card className="p-8 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-9 h-9 text-blue-700" />
                  <h3 className="text-2xl font-black text-black">Center Hours</h3>
                </div>
                {officeHours.map((item, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-gray-200 last:border-0">
                    <span className="font-medium text-black">{item.day}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </Card>

              <Card className="p-10 bg-gradient-to-br from-blue-700 to-black text-white text-center shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Need Help Right Now?</h3>
                <p className="mb-8 opacity-90 text-lg">We're online and ready to chat!</p>
                <Button asChild size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-bold h-14 text-lg">
                  <a href="https://wa.me/254758827745?text=Hello!%20I'm%20visiting%20from%20your%20website%20" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-8 h-8 mr-3" />
                    Start WhatsApp Chat
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ContactPage;