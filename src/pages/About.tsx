import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Target, Eye, Heart, Award, Users, Building2, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Every child deserves care, respect, and a nurturing environment where they can flourish",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing quality CBC education and holistic development for all",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Building character through honesty, discipline, accountability, and ethical behavior",
    },
    {
      icon: Eye,
      title: "Service",
      description: "Empowering children to serve their communities with kindness and compassion",
    },
  ];

  const history = [
    {
      year: "2013",
      title: "Foundation",
      description: "Quest for Happiness Ministry was founded with just 12 students and a vision to transform lives through education and care.",
    },
    {
      year: "2015",
      title: "Children's Home Established",
      description: "Opened our Children's Home to provide shelter and family to orphaned and vulnerable children.",
    },
    {
      year: "2017",
      title: "CBC Transition",
      description: "Successfully transitioned to the Competency-Based Curriculum, becoming one of the early adopters in our region.",
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Expanded facilities to accommodate 450+ students and 120+ children in our care.",
    },
    {
      year: "2023",
      title: "Junior School Launch",
      description: "Launched Junior Secondary School (Grades 7-9) with specialized pathways in STEM, Business, and Agriculture.",
    },
  ];

  const leadership = [
    {
      name: "Rev. David Kimani",
      role: "Director & Founder",
      description: "Over 15 years of experience in education and child welfare.",
    },
    {
      name: "Mrs. Grace Wanjiku",
      role: "Headteacher",
      description: "Certified CBC facilitator with a passion for transformative education.",
    },
    {
      name: "Mr. John Ochieng",
      role: "Deputy Head - Junior School",
      description: "Specializing in STEM education and career guidance.",
    },
    {
      name: "Mrs. Mary Akinyi",
      role: "Matron - Children's Home",
      description: "Dedicated to providing maternal care and emotional support.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Ministry</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              A decade of nurturing minds, building character, and spreading love to every child who walks through our doors
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="p-10 animate-slide-up">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To educate and care for children in a loving, faith-based environment where every child—regardless of background—can learn, grow, and thrive. We integrate academic excellence with compassionate care, ensuring orphaned, abandoned, and vulnerable children receive the same quality education as their peers. Our mission extends beyond academics to encompass spiritual, emotional, and social development.
              </p>
            </Card>

            <Card className="p-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a beacon of hope and transformation in education, raising a generation of confident, compassionate, and competent individuals who will positively impact society. We envision a community where every child has access to quality CBC education, loving care, and the resources they need to discover and pursue their God-given potential.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A decade of growth, impact, and transformation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {history.map((item, index) => (
              <div
                key={index}
                className={`flex gap-8 mb-12 animate-slide-up delay-${index * 100}`}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.year}
                  </div>
                  {index !== history.length - 1 && (
                    <div className="w-1 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <Card className="p-6 flex-1 mb-8">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to excellence in education and care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover:shadow-xl transition-all duration-300 animate-scale-in delay-${index * 100}`}
              >
                <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{leader.role}</p>
                <p className="text-muted-foreground text-sm">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Accreditation & Recognition</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Quest for Happiness Ministry is fully registered and accredited by the Ministry of Education, Republic of Kenya. We are compliant with all CBC requirements and regularly inspected to ensure the highest standards of education and child welfare.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BookOpen className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">CBC Compliant</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Building2 className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">MOE Registered</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Award className="w-10 h-10 mx-auto mb-3" />
                <p className="font-semibold">Child Welfare Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;
