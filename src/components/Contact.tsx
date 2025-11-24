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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello Quest for Happiness!%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone || "Not provided"}%0A%0A` +
      `Message:%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/254758827745?text=${text}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp 🚀",
      description: "Your message is ready! Continue chatting with the team.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp / Call",
      details: "+254 758 827 745",
      link: "https://wa.me/254758827745",
      bgColor: "bg-blue-600",
      iconColor: "text-white",
      hoverBg: "hover:bg-blue-700",
    },
    {
      icon: Mail,
      title: "Email",
      details: "questhappiness77@gmail.com",
      link: "mailto:questhappiness77@gmail.com",
      bgColor: "bg-black",
      iconColor: "text-white",
      hoverBg: "hover:bg-gray-900",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
      bgColor: "bg-white border-2 border-blue-600",
      iconColor: "text-blue-600",
      hoverBg: "hover:bg-blue-50",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration stays the same */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-black/5 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-black rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header stays the same */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            We're here to help
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, sponsorship, or volunteering? 
            <span className="text-blue-600 font-bold"> We'd love to hear from you</span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`group p-10 text-center border-2 border-transparent hover:border-blue-600 ${info.hoverBg} transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer`}
              onClick={() => window.open(info.link, "_blank")}
            >
              <div className={`${info.bgColor} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <info.icon className={`w-10 h-10 ${info.iconColor}`} />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-black">{info.title}</h3>
              <p className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 font-medium text-lg">
                {info.details}
              </p>
            </Card>
          ))}
        </div>

        {/* Prominent WhatsApp Button */}
        <div className="text-center mb-12">
          <Button
            onClick={() => window.open("https://wa.me/254758827745?text=Hello!%20I'd%20like%20to%20learn%20more%20about%20Quest%20for%20Happiness", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-6 h-6 mr-3" />
            Chat with us on WhatsApp
          </Button>
        </div>

        {/* Contact Form - NOW OPENS WHATSAPP */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-gray-200 shadow-2xl bg-white">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
                <Heart className="w-4 h-4 animate-pulse" />
                Let's make a difference together
              </div>
              <h3 className="text-3xl font-bold text-black mb-3">Send us a Message</h3>
              <p className="text-gray-600">Click submit → opens WhatsApp instantly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Input
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-lg"
                />
                <Input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-14 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-lg"
                />
              </div>

              <Input
                type="tel"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-14 rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-lg"
              />

              <Textarea
                required
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl border-2 border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 text-lg resize-none"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-black to-blue-600 hover:from-blue-600 hover:to-black text-white py-7 rounded-xl font-bold text-xl transition-all duration-500 hover:shadow-2xl"
              >
                Open WhatsApp Chat
                <Send className="ml-3 w-6 h-6" />
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg">
            Thank you for choosing hope. Together, we create happiness. 💙
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;