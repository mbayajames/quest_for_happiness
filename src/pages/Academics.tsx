import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { GraduationCap, Lightbulb, Rocket, BookOpen, Palette, Microscope, Globe, Calculator, Users2, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cbcImage from "@/assets/cbc-learning.jpg";

const Academics = () => {
  const levels = [
    {
      icon: Lightbulb,
      title: "Pre-Primary (PP1-PP2)",
      description: "Ages 4-6 years",
      features: [
        "Play-based learning approach",
        "Early literacy and numeracy",
        "Social and emotional development",
        "Creative arts and music",
        "Physical education and movement",
      ],
    },
    {
      icon: GraduationCap,
      title: "Primary School (Grade 1-6)",
      description: "Ages 6-12 years",
      features: [
        "Core CBC subjects",
        "Practical projects and investigations",
        "Continuous assessment",
        "Sports and games",
        "Computer literacy",
      ],
    },
    {
      icon: Rocket,
      title: "Junior School (Grade 7-9)",
      description: "Ages 12-15 years",
      features: [
        "Specialized learning pathways",
        "STEM education",
        "Career guidance and mentorship",
        "Leadership development",
        "Community service projects",
      ],
    },
  ];

  const subjects = [
    { icon: Calculator, name: "Mathematics", description: "Problem-solving and logical thinking" },
    { icon: BookOpen, name: "Languages", description: "English, Kiswahili, and indigenous languages" },
    { icon: Microscope, name: "Science & Technology", description: "Hands-on experiments and innovation" },
    { icon: Globe, name: "Social Studies", description: "History, geography, and citizenship" },
    { icon: Palette, name: "Creative Arts", description: "Visual arts, music, and performing arts" },
    { icon: Users2, name: "Life Skills", description: "Character development and values" },
  ];

  const cbcFeatures = [
    {
      title: "Learning by Doing",
      description: "Students engage in practical activities and real-world problem-solving",
    },
    {
      title: "Continuous Assessment",
      description: "Regular formative assessments track progress and inform instruction",
    },
    {
      title: "Competency Development",
      description: "Focus on skills, knowledge, values, and attitudes",
    },
    {
      title: "Learner-Centered",
      description: "Individualized attention and diverse learning styles",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Academics</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Excellence in CBC education, preparing students for success in the 21st century
            </p>
          </div>
        </div>
      </section>

      {/* CBC Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">Competency-Based Curriculum (CBC)</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are fully accredited and compliant with Kenya's Competency-Based Curriculum. Our approach emphasizes developing skills, knowledge, and values through engaging, learner-centered instruction. Students don't just memorize—they discover, create, and apply knowledge to real-world situations.
              </p>

              <div className="space-y-4">
                {cbcFeatures.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-slide-up delay-200">
              <img
                src={cbcImage}
                alt="CBC Learning Environment"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Learning Levels */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">Learning Levels</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {levels.map((level, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                    <level.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{level.title}</h3>
                  <p className="text-primary text-sm mb-6">{level.description}</p>
                  <ul className="space-y-2">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Subjects We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum covering all CBC learning areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className={`p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in delay-${index * 100}`}
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <subject.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{subject.name}</h3>
                <p className="text-muted-foreground text-sm">{subject.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center">
              <Users2 className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Our Teaching Staff</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team of 25+ qualified CBC facilitators are passionate about holistic education. Each teacher is trained in modern pedagogical approaches and committed to providing personalized attention to every student. Our low student-to-teacher ratio ensures that no child is left behind.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-4xl font-bold text-primary mb-2">25+</p>
                  <p className="text-sm text-muted-foreground">Qualified Teachers</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-4xl font-bold text-primary mb-2">18:1</p>
                  <p className="text-sm text-muted-foreground">Student-Teacher Ratio</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-6">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">CBC Certified</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Assessment & Progress Tracking</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We use continuous assessment to track each student's progress throughout the term. Parents receive regular reports detailing academic performance, skill development, and areas for improvement. Our assessment approach focuses on growth, not just grades.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Learn About Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Academics;
