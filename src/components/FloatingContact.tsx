import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={() => window.open("https://wa.me/254700000000", "_blank")}
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      
      <Button
        size="icon"
        variant="secondary"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={() => window.location.href = "tel:+254700000000"}
        title="Call Us"
      >
        <Phone className="w-6 h-6" />
      </Button>
      
      <Button
        size="icon"
        variant="outline"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-background"
        onClick={() => window.location.href = "mailto:info@questforhappiness.org"}
        title="Email Us"
      >
        <Mail className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingContact;
