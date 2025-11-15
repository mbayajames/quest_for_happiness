import { useState } from "react";
import { Mail, Phone, MapPin, Send, Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 700 000 000",
      link: "tel:+254700000000",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@questforhappiness.org",
      link: "mailto:info@questforhappiness.org",
      bgColor: "bg-black",
      iconColor: "text-white",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
      link: "#",
      bgColor: "bg-blue-600",
      iconColor: "text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-black rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-30 animate-ping"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <MessageCircle className="w-4 h-4" />
            We're here to help
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, sponsorship, or volunteering? 
            <span className="text-blue-600 font-semibold"> We'd love to hear from you</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const animationDelay = `${index * 0.2}s`;
            return (
              <Card
                key={index}
                className="group p-8 text-center border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-in"
                style={{ 
                  animationDelay: animationDelay,
                  animationFillMode: 'both'
                }}
              >
                <div className={`${info.bgColor} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <info.icon className={`w-10 h-10 ${info.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-black">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium text-lg hover:underline"
                >
                  {info.details}
                </a>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-gray-100 shadow-2xl animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4 animate-pulse" />
                Let's make a difference together
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-3">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-12 px-4 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-3">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-12 px-4 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-black mb-3">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+254 700 000 000"
                  className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 h-12 px-4 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-3">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us how we can help you or how you'd like to get involved in our mission..."
                  rows={6}
                  className="border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none rounded-xl p-4"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-black to-blue-700 hover:from-blue-700 hover:to-black text-white py-6 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1 group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-500 text-sm">
            💙 Thank you for supporting our mission to spread happiness and hope
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;