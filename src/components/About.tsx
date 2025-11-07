import { Target, Eye, Heart, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Every child deserves care, respect, and a nurturing environment",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing quality CBC education and holistic development",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Building character through honesty, discipline, and accountability",
    },
    {
      icon: Eye,
      title: "Service",
      description: "Empowering children to serve their communities with kindness",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Our Ministry</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Founded on faith, love, and a vision to transform lives through education and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-up">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To educate and care for children in a loving, faith-based environment where every
              child—regardless of background—can learn, grow, and thrive. We integrate academic
              excellence with compassionate care, ensuring orphaned, abandoned, and vulnerable
              children receive the same quality education as their peers.
            </p>
          </div>

          <div className="animate-slide-up delay-200">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a beacon of hope and transformation in education, raising a generation of
              confident, compassionate, and competent individuals who will positively impact
              society. We envision a community where every child has access to quality CBC
              education and the love they deserve.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-${index * 100}`}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
