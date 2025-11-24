import {
  Heart,
  Home,
  Utensils,
  BookHeart,
  HandHeart,
  Sparkles,
  CheckCircle,
  Quote,
  Users,
  School,
  Shield,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrensHomeImage from "../assets/PHOTO-2025-11-24-01-31-13.jpg";
import { motion } from "framer-motion";

const ChildrensHome = () => {
  const services = [
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Comfortable dormitories providing a family-like environment",
      delay: 0.1,
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Three balanced meals daily ensuring proper nutrition",
      delay: 0.2,
    },
    {
      icon: BookHeart,
      title: "Education",
      description: "Full access to quality CBE education alongside peers",
      delay: 0.3,
    },
    {
      icon: Heart,
      title: "Counseling & Care",
      description: "Professional support for emotional and spiritual wellbeing",
      delay: 0.4,
    },
  ];

  const stats = [
    { icon: Users, number: "120+", label: "Children Supported" },
    { icon: School, number: "95%", label: "School Attendance" },
    { icon: Shield, number: "24/7", label: "Care & Protection" },
    { icon: Star, number: "15+", label: "Years of Service" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const pulseGlow = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(37, 99, 235, 0)",
        "0 0 0 10px rgba(37, 99, 235, 0.1)",
        "0 0 0 0 rgba(37, 99, 235, 0)"
      ]
    },
    transition: { duration: 2, repeat: Infinity }
  };

  return (
    <section id="childrens-home" className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-6 shadow-lg"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-10 h-10 text-white" fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
            Children's Home
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Providing <span className="font-semibold text-blue-600">shelter</span>,{" "}
            <span className="font-semibold text-blue-600">education</span>, and{" "}
            <span className="font-semibold text-blue-600">love</span> to orphaned, 
            abandoned, and vulnerable children
          </p>
          <motion.div 
            className="flex justify-center gap-3 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[...Array(5)].map((_, i) => (
              <Sparkles
                key={i}
                className="w-6 h-6 text-blue-500 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <Card className="p-6 bg-white border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-black mb-6 flex items-center gap-3">
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              A Home Full of Hope
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Our Children's Home is more than just a shelter—it's a family. We provide
              comprehensive care for children who need it most, ensuring they receive the same
              quality education and opportunities as their peers. Every child lives, learns, and
              grows in an environment filled with love, dignity, and hope.
            </p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative border-l-4 border-blue-600 pl-6 py-4 mb-8 bg-gradient-to-r from-blue-50 to-white rounded-r-lg overflow-hidden"
            >
              <Quote className="absolute -top-3 -left-3 w-12 h-12 text-blue-200 -z-10" />
              <p className="text-lg italic text-gray-800 font-medium relative z-10">
                "Every child deserves a home and a chance to dream."
              </p>
            </motion.blockquote>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white group shadow-lg relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <HandHeart className="mr-2 w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Sponsor a Child</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all duration-300"
              >
                Become a Volunteer
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover="animate"
              variants={pulseGlow}
            >
              <img
                src={childrensHomeImage}
                alt="Children's Home"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-7 h-7 text-green-400" fill="currentColor" />
                </motion.div>
                <p className="text-lg font-bold">120+ Children Supported</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-12">
            What We Provide
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="p-6 text-center h-full bg-white border-2 border-gray-100 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 group">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-blue-100 transition-colors duration-300"
                  >
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div
            variants={pulseGlow}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white shadow-2xl border-0 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 pattern-dots" />
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block relative"
              >
                <Heart className="w-16 h-16 mx-auto mb-4 text-white" fill="currentColor" />
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 relative z-10">
                Currently Supporting <motion.span 
                  className="text-yellow-300 inline-block"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >120+ Children</motion.span>
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed relative z-10">
                With your help, we can continue to provide education, care, and hope to vulnerable
                children. Every contribution makes a lasting difference in a child's life.
              </p>
              {/* <Button
                size="lg"
                variant="secondary"
                onClick={scrollToContact}
                className="bg-white text-blue-700 hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
              >
                Make an Impact Today
              </Button> */}
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChildrensHome;