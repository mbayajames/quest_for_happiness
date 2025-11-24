import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import {
  Heart, Award, Users, Building2, BookOpen,
  ChevronRight, Quote, Cross, Trophy, Home, Smile, Moon, Sun
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const About = () => {

  const founderMessage = {
    name: "Tabitha Mbaya",
    role: "Founder & Director, Quest for Happiness Ministry",
    message: "Our vision was to create a place where every child, regardless of background, could thrive academically and spiritually. Today, that dream continues to grow — nurturing leaders grounded in love, integrity, and faith. We believe that education combined with compassion can transform lives and communities, which is why we integrated our school with the children's home to provide holistic care and education.",
    signature: "Tabitha Mbaya"
  };

  const testimonials = [
    {
      name: "Mary Achieng'",
      role: "Parent",
      quote: "Quest for Happiness has transformed my daughter's confidence and academic performance. The teachers truly care about each child's wellbeing and growth.",
      avatar: "M"
    },
    {
      name: "John Kamau",
      role: "Alumni - Class of 2018",
      quote: "The foundation I received here prepared me not just for high school, but for life. The values and education continue to guide me in university.",
      avatar: "J"
    },
    {
      name: "Grace Nyong'o",
      role: "Community Leader",
      quote: "This school's integration with the children's home shows what true Christian education means - serving all children with love and excellence.",
      avatar: "G"
    },
    {
      name: "David Ochieng'",
      role: "Children's Home Graduate",
      quote: "Growing up in the children's home and attending this school gave me family, education, and hope for the future. I'm now pursuing my university dreams.",
      avatar: "D"
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      items: ["Top KCPE Results in County 2022", "100% Transition Rate to High School", "National Science Fair Winners 2021"]
    },
    {
      icon: Award,
      title: "Sports & Arts",
      items: ["County Football Champions 2023", "National Music Festival Awards", "Art Competition Winners"]
    },
    {
      icon: Heart,
      title: "Community Impact",
      items: ["500+ Children Supported Through Home", "Community Outreach Programs", "Environmental Conservation Projects"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Cross,
      title: "Faith-Based Education",
      description: "Christian values integrated throughout our curriculum and daily activities"
    },
    {
      icon: Home,
      title: "Integrated Children's Home",
      description: "Unique model providing education and care for vulnerable children"
    },
    {
      icon: Moon,
      title: "Day & Boarding Options",
      description: "Flexible learning environment with safe, modern boarding facilities and structured day programs"
    },
    {
      icon: BookOpen,
      title: "CBC Compliant",
      description: "Fully aligned with Competency-Based Curriculum requirements"
    },
    {
      icon: Smile,
      title: "Holistic Development",
      description: "Balancing academics, sports, arts, and character building"
    },
    {
      icon: Users,
      title: "Individual Attention",
      description: "Small class sizes and personalized learning approaches"
    },
    {
      icon: Building2,
      title: "Proven Track Record",
      description: "28 years of educational excellence and community service"
    }
  ];

  const teachingPhilosophy = [
    "Individualized learning plans for each student",
    "Activity-based and experiential learning",
    "Integration of technology in education",
    "Focus on critical thinking and problem-solving",
    "Character development and moral education",
    "Parent and community involvement"
  ];

  const boardingFeatures = [
    "Safe, modern dormitories with 24/7 supervision",
    "Balanced meals prepared with nutrition in mind",
    "Structured study hours and academic support",
    "Life skills and leadership development programs",
    "Weekend activities including sports and spiritual growth",
    "Dedicated house parents and counseling services"
  ];

  // Enhanced Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const floatVariant = {
    float: {
      y: [0, -15, 0],
    },
  };

  const pulseVariant = {
    pulse: {
      scale: [1, 1.06, 1],
      boxShadow: ["0 0 0 rgba(30,58,138,0)", "0 0 20px rgba(30,58,138,0.3)", "0 0 0 rgba(30,58,138,0)"],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section - Updated to include Day & Boarding */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 20% 80%, #60a5fa, transparent 50%), radial-gradient(circle at 80% 20%, #93c5fd, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-blue-300 rounded-full blur-2xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {"About Our School".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 60, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  className="inline-block"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 leading-relaxed"
            >
              A premier <span className="font-bold text-yellow-300">day and boarding</span> Christian school nurturing young minds from PP1 to Grade 9 since 1995
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats - Updated to reflect boarding */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "800+", label: "Students" },
              { value: "300+", label: "Boarders" },
              { value: "45+", label: "Qualified Teachers" },
              { value: "100%", label: "Transition Rate" },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  className="text-4xl font-bold text-blue-900 mb-2"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-blue-700 font-medium"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-12 items-start"
            >
              <motion.div variants={itemVariants} className="md:col-span-2">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(30,58,138,0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border-2 border-blue-200 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-transparent"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-6 relative z-10"
                  >
                    <motion.div 
                      variants={pulseVariant}
                      animate="pulse"
                      className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-2xl shadow-xl"
                    >
                      T
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">{founderMessage.name}</h3>
                      <p className="text-blue-600">{founderMessage.role}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10"
                  >
                    <Quote className="w-8 h-8 text-blue-400 mb-4" />
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      {founderMessage.message.split(" ").map((word, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.02 }}
                          className="inline-block"
                        >
                          {word}{" "}
                        </motion.span>
                      ))}
                    </p>
                    <div className="border-t border-blue-200 pt-4">
                      <motion.p
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-blue-900 font-semibold"
                      >
                        {founderMessage.signature}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-blue-900 rounded-2xl p-8 text-white text-center shadow-2xl"
              >
                <motion.div variants={floatVariant} animate="float" transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <Cross className="w-14 h-14 mx-auto mb-4 text-blue-200" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">Our Christian Foundation</h3>
                <p className="text-blue-100 mb-4">
                  Daily devotions, prayer sessions, and moral education are integral to our school life, 
                  helping students develop strong spiritual foundations.
                </p>
                <ul className="text-left space-y-2 text-blue-100">
                  {["Morning devotions", "Bible studies", "Christian values integration", "Community outreach"].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4 text-blue-300" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Now includes Day & Boarding */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Why Choose Our School?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Quest for Happiness School unique and the ideal choice for your child's education
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.06,
                  boxShadow: "0 25px 50px rgba(30,58,138,0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 group relative overflow-hidden h-full">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors relative z-10"
                  >
                    <item.icon className="w-6 h-6 text-blue-700" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 relative z-10">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Boarding Life Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Boarding Life at Quest for Happiness</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our boarding program offers a structured, nurturing, and enriching environment where students grow academically, socially, and spiritually
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                {boardingFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-blue-100"
                  >
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i % 2 === 0 ? <Moon className="w-5 h-5 text-blue-700" /> : <Sun className="w-5 h-5 text-yellow-600" />}
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Home className="w-8 h-8" />
                A Home Away From Home
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our boarding students enjoy modern dormitories, balanced nutrition, supervised study sessions, 
                and a family-like atmosphere guided by dedicated house parents. We foster independence, 
                responsibility, and lifelong friendships in a safe Christian environment.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-yellow-300">24/7</p>
                  <p className="text-sm">Care & Supervision</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-yellow-300">3</p>
                  <p className="text-sm">Nutritious Meals Daily</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Children's Home Integration - Updated to clarify boarding vs home */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold mb-6">Education with Compassion</h2>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Our unique integration with Quest for Happiness Children's Home creates a nurturing 
                  environment where all children — day scholars, boarders, and home residents — learn, grow, and thrive together.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Heart, title: "Inclusive Community", desc: "All students learn together in shared classrooms..." },
                    { icon: Home, title: "Holistic Support", desc: "Boarders and home residents receive extended care..." },
                    { icon: Users, title: "Family Environment", desc: "Building bonds across day, boarding, and home students..." }
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <point.icon className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-lg">{point.title}</h4>
                        <p className="text-blue-100">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 rounded-2xl p-8 border border-white/20 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Our Integrated Model</h3>
                {["Shared Learning", "Extended Care", "Emotional Support", "Life Skills"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 mb-3"
                  >
                    <h4 className="font-bold text-blue-200 mb-1">{item}</h4>
                    <p className="text-blue-100 text-sm">
                      {item === "Shared Learning" ? "Day, boarding, and home students in same classes" :
                       item === "Extended Care" ? "Boarders & home residents receive 24/7 support" :
                       item === "Emotional Support" ? "Counseling and mentorship for all students" :
                       "Practical skills for independent living and leadership"}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* [Rest of your sections remain unchanged: Mission & Vision, Teaching Philosophy, Academic Programs, etc.] */}
      {/* ... (keeping all other sections as in original) ... */}
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-900">What Parents & Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our community about their experiences at Quest for Happiness School
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center text-blue-700 font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Achievements */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrating our successes in academics, sports, and community impact
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 text-center border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 text-blue-700" />
                  <h3 className="text-xl font-bold mb-4 text-blue-900">{achievement.title}</h3>
                  <ul className="text-gray-600 space-y-2">
                    {achievement.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Teaching Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our educational approach
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teachingPhilosophy.map((philosophy, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <BookOpen className="w-8 h-8 mb-4 text-blue-700" />
                  <p className="text-gray-700">{philosophy}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;