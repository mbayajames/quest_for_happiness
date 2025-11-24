'use client';

import { Target, Eye, Heart, Award, Sparkles, Users, BookOpen, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Every child deserves care, respect, and a nurturing environment",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to quality CBE education and holistic development",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-100",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Building character through honesty, discipline, and accountability",
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-200",
    },
    {
      icon: Eye,
      title: "Service",
      description: "Empowering children to serve communities with kindness",
      color: "from-blue-800 to-blue-900",
      bgColor: "bg-blue-300",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Children Helped" },
    { icon: BookOpen, number: "50+", label: "Qualified Teachers" },
    { icon: Home, number: "10+", label: "Years of Service" },
    { icon: Award, number: "100%", label: "Success Rate" },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.85
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
        mass: 0.8
      },
    },
  };

  const cardHover = {
    whileHover: {
      y: -12,
      scale: 1.03,
      transition: {
        duration: 0.3,
        type: "spring" as const,
        stiffness: 400
      }
    },
    whileTap: { scale: 0.97 },
  };

  const floatingAnimation: Variants = {
    animate: {
      y: [0, -18, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };


  const numberReveal: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15 + 0.4,
        type: "spring" as const,
        stiffness: 200
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Users className="w-32 h-32 text-blue-900" />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <BookOpen className="w-32 h-32 text-blue-900" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            type: "spring" as const,
            stiffness: 110,
            damping: 15
          }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" as const, stiffness: 250, damping: 15 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-full p-4 shadow-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight bg-gradient-to-r from-blue-900 to-black bg-clip-text text-transparent"
          >
            About  Our  Ministry
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-800 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Founded on <span className="text-blue-700 font-semibold">faith</span>,{" "}
            <span className="text-blue-700 font-semibold">love</span>, and a vision to transform lives through{" "}
            <span className="text-blue-700 font-semibold">education and care</span>
          </motion.p>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-6 rounded-full origin-left"
            style={{ width: 120 }}
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" as const, stiffness: 200 }}
                className="bg-blue-100 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-3"
              >
                <stat.icon className="w-6 h-6 text-blue-700" />
              </motion.div>
              
              <motion.p 
                custom={index}
                variants={numberReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold text-black mb-1"
              >
                {stat.number}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6 }}
                className="text-gray-700 font-medium text-sm"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div 
            variants={itemVariants} 
            className="group relative"
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.05 }}
            />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 h-full">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:shadow-lg"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6, type: "spring" as const }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-black mb-6"
              >
                Our Mission
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-gray-800 leading-relaxed text-lg"
              >
                To educate and care for children in a loving, faith-based environment where{" "}
                <span className="text-blue-700 font-semibold bg-blue-50 px-1 rounded">every child</span>—
                regardless of background—can learn, grow, and thrive. We integrate academic excellence with
                compassionate care, ensuring orphaned, abandoned, and vulnerable children receive
                the same quality CBE education as their peers.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="group relative"
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ scale: 1.05 }}
            />
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-blue-100 h-full">
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all group-hover:scale-110 group-hover:shadow-lg"
                whileHover={{ rotate: -360, scale: 1.2 }}
                transition={{ duration: 0.6, type: "spring" as const }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <Eye className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-black mb-6"
              >
                Our Vision
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-gray-800 leading-relaxed text-lg"
              >
                To be a <span className="text-blue-700 font-semibold bg-blue-50 px-1 rounded">beacon of hope</span> and
                transformation in education, raising a generation of confident, compassionate, and
                competent individuals who will positively impact society. We envision a community
                where every child has access to quality CBE education and the love they deserve.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-black mb-4 bg-gradient-to-r from-blue-900 to-black bg-clip-text text-transparent"
            >
              Our Core Values
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 text-lg max-w-2xl mx-auto"
            >
              The fundamental principles that guide our mission and define our character
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -8 }}
              >
                <motion.div {...cardHover}>
                  <Card className="p-8 text-center border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 h-full flex flex-col justify-center relative overflow-hidden group">
                    {/* Animated background gradient */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      variants={floatingAnimation}
                      animate="animate"
                      className={`bg-gradient-to-br ${value.color} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, type: "spring" as const, stiffness: 200 }}
                    >
                      <value.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <motion.h4 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="text-2xl font-bold text-black mb-4 group-hover:text-blue-800 transition-colors"
                    >
                      {value.title}
                    </motion.h4>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors"
                    >
                      {value.description}
                    </motion.p>

                    {/* Animated bottom bar */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.8 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating decorative dots */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-3">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -25, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 bg-blue-600 rounded-full shadow-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;