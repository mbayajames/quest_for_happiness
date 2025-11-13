import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { 
  GraduationCap, 
  Lightbulb, 
  Rocket, 
  BookOpen, 
  Palette, 
  Microscope, 
  Globe, 
  Calculator, 
  Users2, 
  Award,
  Star,
  Target,
  HeartHandshake,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";
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
        "Core CBE subjects",
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

  const cbeFeatures = [
    {
      icon: Target,
      title: "Learning by Doing",
      description: "Students engage in practical activities and real-world problem-solving",
    },
    {
      icon: BarChart3,
      title: "Continuous Assessment",
      description: "Regular formative assessments track progress and inform instruction",
    },
    {
      icon: Star,
      title: "Competency Development",
      description: "Focus on skills, knowledge, values, and attitudes",
    },
    {
      icon: HeartHandshake,
      title: "Learner-Centered",
      description: "Individualized attention and diverse learning styles",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 animate-pulse">
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce">
          <Star className="w-6 h-6 text-yellow-400" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full mb-6 animate-pulse">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Excellence in Education</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Academics
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Excellence in CBE education, preparing students for success in the 21st century
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Our Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CBE Overview */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                CBE Curriculum
              </div>
              <h2 className="text-4xl font-bold mb-6 text-black">Competency-Based Education (CBE)</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are fully accredited and compliant with Kenya's Competency-Based Education. Our approach emphasizes developing skills, knowledge, and values through engaging, learner-centered instruction. Students don't just memorize—they discover, create, and apply knowledge to real-world situations.
              </p>

              <div className="space-y-4">
                {cbeFeatures.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="p-6 border border-blue-200 bg-white hover:shadow-lg transition-all duration-300 hover:border-blue-300 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-lg p-3 group-hover:bg-blue-200 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-20"></div>
                <img
                  src={cbcImage}
                  alt="CBE Learning Environment"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover relative z-10 hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20 animate-pulse">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-black">CBE Certified Institution</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Levels */}
          <div className="animate-fade-in-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <GraduationCap className="w-4 h-4" />
                Educational Journey
              </div>
              <h2 className="text-4xl font-bold text-black mb-4">Learning Levels</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Structured progression through different developmental stages
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {levels.map((level, index) => (
                <Card
                  key={index}
                  className="p-8 border-2 border-blue-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-blue-300 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <level.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-blue-700 transition-colors duration-300">
                    {level.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-6">{level.description}</p>
                  <ul className="space-y-3">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-700 transition-colors duration-300" />
                        <span className="text-gray-700 group-hover/item:text-black transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-blue-100">
                    <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Comprehensive Curriculum
            </div>
            <h2 className="text-4xl font-bold text-black mb-4">Subjects We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all CBE learning areas with modern teaching methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className={`p-8 text-center border border-blue-100 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                  <subject.icon className="w-10 h-10 text-blue-700 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black group-hover:text-blue-800 transition-colors duration-300">
                  {subject.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{subject.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-blue-500 rounded-full mx-auto"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Card className="p-12 text-center border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
              
              <div className="relative z-10">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users2 className="w-10 h-10 text-blue-700" />
                </div>
                <h2 className="text-4xl font-bold mb-6 text-black">Our Teaching Staff</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Our team of 25+ qualified CBE facilitators are passionate about holistic education. Each teacher is trained in modern pedagogical approaches and committed to providing personalized attention to every student. Our low student-to-teacher ratio ensures that no child is left behind.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <p className="text-4xl font-bold text-blue-700 mb-2">25+</p>
                    <p className="text-sm text-gray-600 font-medium">Qualified Teachers</p>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <p className="text-4xl font-bold text-blue-700 mb-2">18:1</p>
                    <p className="text-sm text-gray-600 font-medium">Student-Teacher Ratio</p>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                    <p className="text-4xl font-bold text-blue-700 mb-2">100%</p>
                    <p className="text-sm text-gray-600 font-medium">CBE Certified</p>
                  </div>
                </div>
                <Button className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Meet Our Teachers
                  <Users2 className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Assessment & Progress Tracking</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              We use continuous assessment to track each student's progress throughout the term. Parents receive regular reports detailing academic performance, skill development, and areas for improvement. Our assessment approach focuses on growth, not just grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn About Admissions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Sample Reports
                <BarChart3 className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Academics;