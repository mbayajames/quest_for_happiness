import { GraduationCap, Lightbulb, Users2, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import cbcImage from "@/assets/cbc-learning.jpg";

const Academics = () => {
  const levels = [
    {
      icon: Lightbulb,
      title: "Pre-Primary (PP1-PP2)",
      description: "Early stimulation and foundational learning through play",
      color: "bg-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Primary School (Grade 1-6)",
      description: "Core learning with practical projects and continuous assessments",
      color: "bg-primary",
    },
    {
      icon: Rocket,
      title: "Junior School (Grade 7-9)",
      description: "Skill-based learning with STEM, Business, and Agriculture pathways",
      color: "bg-blue-700",
    },
  ];

  const features = [
    "Competency-Based Curriculum (CBC)",
    "Hands-on learning and projects",
    "Qualified CBC facilitators",
    "Continuous assessment system",
    "ICT integration",
    "Sports and creative arts",
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Academics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Excellence in CBC education, preparing students for success in life and career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src={cbcImage}
              alt="CBC Learning Environment"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div className="animate-slide-up delay-200">
            <h3 className="text-3xl font-bold mb-6">
              Competency-Based Curriculum (CBC)
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are fully accredited and compliant with Kenya's Competency-Based Curriculum,
              focusing on developing skills, knowledge, and values. Our approach emphasizes
              learning by doing, peer collaboration, and community service.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Card
              key={index}
              className={`p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in delay-${index * 150}`}
            >
              <div className={`${level.color} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                <level.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{level.title}</h3>
              <p className="text-muted-foreground">{level.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <Users2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Dedicated Teaching Staff</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of 25+ qualified CBC facilitators are passionate about holistic education,
              providing personalized attention and mentorship to every student.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Academics;
