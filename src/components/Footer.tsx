import { Heart, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">Q</span>
              </div>
              <div>
                <h3 className="font-bold">Quest for Happiness</h3>
                <p className="text-sm text-background/70">Ministry</p>
              </div>
            </div>
            <p className="text-sm text-background/70 mb-4">
              Nurturing Minds, Building Character, and Spreading Love.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:info@questforhappiness.org" aria-label="Send email" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("#home")} className="text-background/70 hover:text-background transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#about")} className="text-background/70 hover:text-background transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#academics")} className="text-background/70 hover:text-background transition-colors">
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#gallery")} className="text-background/70 hover:text-background transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("#childrens-home")} className="text-background/70 hover:text-background transition-colors">
                  Sponsor a Child
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#contact")} className="text-background/70 hover:text-background transition-colors">
                  Volunteer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#contact")} className="text-background/70 hover:text-background transition-colors">
                  Donate
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#contact")} className="text-background/70 hover:text-background transition-colors">
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Nairobi, Kenya</li>
              <li>+254 700 000 000</li>
              <li>info@questforhappiness.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/70 flex items-center justify-center gap-2">
            © {currentYear} Quest for Happiness Ministry. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-current" /> for every child.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
