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
import { Link } from "react-router-dom";
import cbcImage from "../assets/PHOTO-2025-11-24-01-28-45.jpg";
import { motion } from "framer-motion";

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

  // Stagger container for child animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Parallax & Floating Particles */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-400"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              x: [0, (i % 2 === 0 ? 50 : -50), 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          >
            <Sparkles className="w-6 h-6 drop-shadow-lg" />
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Excellence in Education</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Academics
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Excellence in CBE education, preparing students for success in the 21st century
            </p>
            <Link to="/admissions">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  Explore Our Programs
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CBE Overview */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                CBE Curriculum
              </div>
              <h2 className="text-4xl font-bold mb-6 text-black">Competency-Based Education (CBE)</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are fully accredited and compliant with Kenya's Competency-Based Education. Our approach emphasizes developing skills, knowledge, and values through engaging, learner-centered instruction. Students don't just memorize—they discover, create, and apply knowledge to real-world situations.
              </p>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {cbeFeatures.map((feature, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="p-6 border border-blue-200 bg-white hover:shadow-lg transition-all duration-300 hover:border-blue-300 group cursor-pointer">
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
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
                <img
                  src={cbcImage}
                  alt="CBE Learning Environment"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover relative z-10 hover:scale-[1.02] transition-transform duration-500"
                />
                <motion.div
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg z-20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-black">CBE Certified Institution</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Learning Levels */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {levels.map((level, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="p-8 border-2 border-blue-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:border-blue-300 group">
                    <motion.div
                      className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-full w-20 h-20 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <level.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-blue-700 transition-colors duration-300">
                      {level.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-6">{level.description}</p>
                    <ul className="space-y-3">
                      {level.features.map((feature, idx) => (
                        <li key={idx}>
                          <motion.div
                            className="flex items-start group/item text-gray-700 group-hover/item:text-black transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-blue-700 transition-colors duration-300 inline-block" />
                            {feature}
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Comprehensive Curriculum
            </div>
            <h2 className="text-4xl font-bold text-black mb-4">Subjects We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum covering all CBE learning areas with modern teaching methodologies
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subjects.map((subject, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-8 text-center border border-blue-100 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
                  <motion.div
                    className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <subject.icon className="w-10 h-10 text-blue-700" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-black group-hover:text-blue-800 transition-colors duration-300">
                    {subject.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{subject.description}</p>
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: "2rem" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-12 text-center border border-blue-100 bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
              
              <div className="relative z-10">
                <motion.div
                  className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Users2 className="w-10 h-10 text-blue-700" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-6 text-black">Our Teaching Staff</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Our team of 25+ qualified CBE facilitators are passionate about holistic education. Each teacher is trained in modern pedagogical approaches and committed to providing personalized attention to every student. Our low student-to-teacher ratio ensures that no child is left behind.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "25+", label: "Qualified Teachers" },
                    { value: "18:1", label: "Student-Teacher Ratio" },
                    { value: "100%", label: "CBE Certified" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <motion.p
                        className="text-4xl font-bold text-blue-700 mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: i * 0.2 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-10 h-10 text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-6">Assessment & Progress Tracking</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              We use continuous assessment to track each student's progress throughout the term. Parents receive regular reports detailing academic performance, skill development, and areas for improvement. Our assessment approach focuses on growth, not just grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/admissions">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
                >
                  <span className="flex items-center gap-2">
                    Learn About Admissions
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Academics;