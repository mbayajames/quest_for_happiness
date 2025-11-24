import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Users,
  ClipboardCheck,
  UserCheck,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Heart,
  GraduationCap,
  BookOpen,
  Home,
  Phone,
  Mail,
  Calendar,
  Clock,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Admissions = () => {
  const admissionSteps = [
    {
      icon: Users,
      step: "01",
      title: "Visit or Contact Us",
      description: "Get admission details from our office or reach out via phone/email."
    },
    {
      icon: FileText,
      step: "02",
      title: "Fill Out Application Form",
      description: "Complete the admission form available at our school office."
    },
    {
      icon: ClipboardCheck,
      step: "03",
      title: "Assessment & Interview",
      description: "We'll assess the learner for proper grade placement."
    },
    {
      icon: UserCheck,
      step: "04",
      title: "Enrollment",
      description: "Welcome to the Quest for Happiness family!"
    }
  ];

  const requirements = [
    "Copy of birth certificate",
    "Report form from previous school",
    "Two passport-size photos",
    "Parent/guardian ID copy",
    "For children without parents, our social worker assists with registration through the Children's Home"
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description: "CBC-based curriculum with modern teaching methods"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure and nurturing learning atmosphere"
    },
    {
      icon: Heart,
      title: "Caring Community",
      description: "Dedicated teachers and supportive staff"
    },
    {
      icon: BookOpen,
      title: "Holistic Development",
      description: "Academic excellence with character building"
    }
  ];

  const termDates = [
    {
      term: "First Term",
      duration: "January - March",
      events: ["Opening Day", "Mid-term Break", "Closing Day"]
    },
    {
      term: "Second Term",
      duration: "May - July",
      events: ["Opening Day", "Sports Day", "Mid-term Break", "Closing Day"]
    },
    {
      term: "Third Term",
      duration: "September - November",
      events: ["Opening Day", "Academic Day", "Prize Giving", "Closing Day"]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      <FloatingContact />

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-black to-blue-950">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div className="absolute top-20 left-10 w-16 h-16 bg-blue-400/30 rounded-lg rotate-45" animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute top-40 right-20 w-20 h-20 bg-blue-300/20 rounded-full" animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-xl rotate-12" animate={{ rotate: -360, scale: [1, 1.3, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute bottom-40 right-10 w-16 h-16 bg-blue-400/30 rounded-full" animate={{ y: [0, 40, 0] }} transition={{ duration: 7, repeat: Infinity }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, type: "spring", stiffness: 200 }} className="flex justify-center mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-full shadow-2xl">
              <GraduationCap className="w-12 h-12" />
            </div>
          </motion.div>

          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white mb-6">
            Admissions
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="w-24 h-1 bg-blue-400 mx-auto mb-6 origin-left" />

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Join <span className="text-blue-300 font-semibold">Quest for Happiness Ministry</span> - Where Every Child's Journey Begins
          </motion.p>

          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-xl">
              <Link to="/contact" className="flex items-center gap-2">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, rotateY: 10, transition: { duration: 0.3 } }}
                className="text-center group perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-100 group-hover:to-blue-200 group-hover:shadow-2xl transition-all duration-500">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                    <feature.icon className="w-10 h-10 text-blue-600" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-blue-50 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ background: "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1e40af 0%, transparent 50%)", backgroundSize: "200% 200%" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200 }} className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 animate-pulse" />
              <span className="font-semibold">Welcome to Our Family</span>
            </motion.div>

            <motion.h2 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold text-black mb-6">
              A Place Where Children <span className="text-blue-600 relative">Thrive
                <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} />
              </span>
            </motion.h2>

            <motion.p initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg text-gray-700 leading-relaxed">
              We welcome learners from diverse backgrounds to join our CBC-based primary and junior school.
              Quest for Happiness Ministry provides a supportive learning environment for all children,
              including those from our Children's Home. Every child deserves quality education in a nurturing,
              loving community.
            </motion.p>
          </div>
        </div>
      </section>

      {/* NEW ACADEMICS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Academic Levels</h2>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-24 h-1 bg-blue-600 mx-auto" />
            <p className="text-lg text-gray-600 mt-4">Competency-Based Curriculum (CBC) delivered with care and excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Pre-Primary (PP1-PP2)",
                description: "Early stimulation and foundational learning through play",
                color: "bg-blue-600",
                features: ["Play-based learning", "Social skills", "Creative expression"],
              },
              {
                icon: GraduationCap,
                title: "Primary School (Grade 1-6)",
                description: "Core learning with practical projects and continuous assessments",
                color: "bg-black",
                features: ["Literacy & Numeracy", "Science projects", "Creative arts"],
              },
              {
                icon: Rocket,
                title: "Junior School (Grade 7-9)",
                description: "Skill-based learning with STEM, Business, and Agriculture pathways",
                color: "bg-blue-800",
                features: ["Career pathways", "STEM focus", "Leadership skills"],
              },
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                  <div className={`h-3 ${level.color}`} />
                  <div className="p-8 pt-10 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                      className={`w-20 h-20 ${level.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <level.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-black mb-3">{level.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">{level.description}</p>

                    <ul className="space-y-3 text-left">
                      {level.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700">
                          <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            {feature}
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Admission Process</h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "5rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-20 h-1 bg-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600">Simple steps to join our community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-300 bg-white group relative">
                  <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} />

                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, delay: 0.3 + index * 0.1 }}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 + index * 0.1 }} className="text-xl font-bold text-black mb-4 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </motion.h3>
                  <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + index * 0.1 }} className="text-gray-600 leading-relaxed">
                    {step.description}
                  </motion.p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-black text-white relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ background: "radial-gradient(circle, #1e40af 0%, transparent 70%)" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300 }} className="inline-flex items-center gap-2 bg-blue-800 text-blue-100 px-4 py-2 rounded-full mb-4">
                <ClipboardCheck className="w-5 h-5" />
                <span>Required Documents</span>
              </motion.div>
              <h2 className="text-4xl font-bold mb-4">Admission Requirements</h2>
              <p className="text-lg text-blue-200">What you'll need to complete enrollment</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-6">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }} className="mt-1 flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>
                      <p className="text-lg text-white group-hover:text-blue-200 transition-colors">{requirement}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
                <Calendar className="w-5 h-5" />
                <span>Academic Year 2025</span>
              </motion.div>
              <h2 className="text-4xl font-bold text-black mb-4">Academic Calendar</h2>
              <p className="text-lg text-gray-600">Important dates and term schedules</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {termDates.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="p-8 h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300 }} className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">{term.term}</h3>
                      <p className="text-blue-600 font-semibold">{term.duration}</p>
                    </motion.div>
                    <ul className="space-y-3">
                      {term.events.map((event, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                          <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.3 }} className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                            {event}
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Information */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-black mb-6">Fee Information</h2>
                  <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Our school fees are affordable and payable per term. Details are available at the administration office. Sponsorship opportunities are available for children from our home.
                  </p>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-lg mb-8 text-left">
                    <h4 className="font-bold text-black mb-4">Fee Structure Includes:</h4>
                    <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                      {["Tuition Fees", "Learning Materials", "Activity Fees", "Medical Care"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {item}
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full transition-all duration-300">
                      <Link to="/contact" className="flex items-center gap-2">
                        Request Fee Details <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200 }} className="mb-8">
              <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold text-black mb-6">Scholarships & Sponsorship</h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-16 h-1 bg-blue-600 mx-auto mb-6" />
            </motion.div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg text-gray-700 leading-relaxed mb-8">
              Through partnerships and kind sponsors, we ensure that every child — regardless of background — can access quality education.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full transition-all duration-300">
                  <Link to="/childrens-home" className="flex items-center gap-2">
                    Learn About Sponsorship <Home className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 rounded-full transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    Become a Sponsor <Users className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">Multiple ways to reach us for admissions</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Home, title: "Visit Us", desc: "Come to our school office for a tour and consultation", label: "Get Directions" },
                { icon: Phone, title: "Call Us", desc: "Speak directly with our admissions team", label: "Call Now" },
                { icon: Mail, title: "Email Us", desc: "Send us your inquiries and we'll respond promptly", label: "Send Email" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="p-8 text-center h-full hover:shadow-xl transition-all duration-300 border-blue-100">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }} className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        {item.label}
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-black to-blue-950 text-white relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-30" animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ background: "linear-gradient(45deg, #1e3a8a 0%, #1e40af 25%, #3b82f6 50%, #1e40af 75%, #1e3a8a 100%)", backgroundSize: "200% 200%" }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2 initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200 }} className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Enroll?
            </motion.h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "6rem" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-24 h-1 bg-blue-400 mx-auto mb-6" />
            <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Visit us, call, or email for more details. We're here to welcome your child into our family.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.1, rotate: 3 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us Today <Phone className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, rotate: -3 }} whileTap={{ scale: 0.95 }}>
                {/* <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full transition-all duration-300">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More About Us <Users className="w-5 h-5" />
                  </Link>
                </Button> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;