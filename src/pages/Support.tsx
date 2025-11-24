import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Users,
  HandHeart,
  Shield,
  MessageCircle,
  Share2,
  Calendar,
  Baby,
  CheckCircle2,
  Quote,
  Book,
} from "lucide-react";
import { Link } from "react-router-dom"; // ← For React Router
// import Link from "next/link";       // ← Uncomment if using Next.js

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Support = () => {
  const monthlyOptions = [1000, 2000, 5000, 10000];
  const projects = [
    { name: "Dormitory Renovation", raised: 68, goal: "2,500,000 KES" },
    { name: "New Classroom Block", raised: 42, goal: "4,800,000 KES" },
    { name: "Feeding Program (6 Months)", raised: 81, goal: "1,200,000 KES" },
    { name: "Bedding & Mattresses", raised: 35, goal: "850,000 KES" },
  ];

  const impactBreakdown = [
    { label: "Education Programs", value: 40, color: "bg-blue-500" },
    { label: "Children’s Home Care", value: 30, color: "bg-green-500" },
    { label: "Community Outreach", value: 20, color: "bg-purple-500" },
    { label: "Ministry Operations", value: 10, color: "bg-orange-500" },
  ];

  const scripture = [
    { verse: "Luke 6:38", text: "Give, and it will be given to you..." },
    { verse: "Proverbs 19:17", text: "Whoever is kind to the poor lends to the Lord..." },
    { verse: "Matthew 25:40", text: "Whatever you did for one of the least of these..." },
    { verse: "Acts 20:35", text: "It is more blessed to give than to receive." },
  ];

  const faqs = [
    { q: "Is my donation secure?", a: "Yes! All transactions are encrypted and processed securely." },
    { q: "Can I give anonymously?", a: "Absolutely. Just select 'Anonymous' during checkout." },
    { q: "Can I sponsor more than one child?", a: "Yes! Many partners sponsor 2–5 children." },
    { q: "Do you accept international donations?", a: "Yes! Via PayPal, bank transfer, or Wise." },
  ];

  // WhatsApp & Email links
  const whatsappNumber = "+254758827745";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/^\+/, "")}?text=${encodeURIComponent(
    "Hello! I would like to support your ministry ❤️"
  )}`;
  const emailLink = `mailto:questhappiness77@gmail.com?subject=${encodeURIComponent(
    "Support & Partnership Inquiry"
  )}&body=${encodeURIComponent("Hello,\n\nI am interested in supporting your work. Please let me know how I can give or sponsor a child.\n\nThank you!")}`;

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Partner With Us in Changing Lives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Your gift brings hope, education, food, and the love of Jesus to vulnerable children in Kenya.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              <Link to="/contact">
                <HandHeart className="mr-2" /> Give Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/contact">
                <Baby className="mr-2" /> Sponsor a Child
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Monthly Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Become a Monthly Partner</h2>
            <p className="text-xl text-gray-600">Join our family of faithful givers</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {monthlyOptions.map((amount) => (
              <motion.div
                key={amount}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-shadow cursor-pointer border-2 border-blue-100">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-blue-600">{amount.toLocaleString()} KES</p>
                  <p className="text-gray-600">per month</p>
                  <Button asChild className="mt-6 w-full bg-blue-600">
                    <Link to="/contact">Partner at this Level</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              <strong>Auto-deduction</strong> via M-Pesa STK Push every 1st of the month. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Breakdown */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Where Your Money Goes</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {impactBreakdown.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-8" indicatorClassName={`${item.color} rounded-full`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Current Fundraising Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.name} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <Progress value={project.raised} className="mb-4 h-4" />
                {/* <div className="flex justify-between text-sm mb-4">
                  <span>{project.raised}% funded</span>
                  <span>Goal: {project.goal}</span>
                </div> */}
                <Button asChild className="w-full">
                  <Link to="/contact">Support This Project</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Stories of Changed Lives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Grace, Age 12", text: "Because of my sponsor, I now go to school and dream of being a doctor!" },
              { name: "Pastor John", text: "This ministry is a true reflection of Christ’s love in action." },
              { name: "Monthly Partner", text: "Giving monthly is easy and I love seeing the real impact!" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <Quote className="w-10 h-10 text-blue-500 mb-4" />
                  <p className="italic text-gray-700 mb-6">"{t.text}"</p>
                  <p className="font-bold text-blue-600">— {t.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Give Your Time</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            You can also serve through teaching, mentorship, visitation, or helping in our feeding program.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              <Calendar className="mr-2" /> Volunteer With Us
            </Link>
          </Button>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why You Can Trust Us</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Fully Registered</h3>
              <p>Registered with the Government of Kenya • NGO Number: OP.218/051/20000/1234</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Annual Reports</h3>
              <p>We publish audited financial reports every year. Download latest report →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Giving */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <Book className="w-16 h-16 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-center mb-12">Why We Give</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scripture.map((s) => (
              <div key={s.verse} className="text-center">
                <p className="font-bold text-yellow-300 mb-2">{s.verse}</p>
                <p className="italic">"{s.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Requests */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Pray With Us</h2>
          <p className="text-xl mb-8">Your prayers move mountains</p>
          <Button asChild size="lg">
            <Link to="/contact">Send Us Your Prayer</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section – Updated Links */}
      <section className="py-16 bg-blue-50 text-center">
        <div className="container mx-auto px-4">
          <Share2 className="w-12 h-12 mx-auto mb-6 text-blue-600" />
          <h3 className="text-2xl font-bold mb-6">Share This Page</h3>
          <div className="flex flex-wrap justify-center gap-8 text-3xl">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https://yourwebsite.com/support&text=Help%20change%20lives%20in%20Kenya!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-800 transition"
            >
              X
            </a>
            <a
              href={emailLink}
              className="text-red-600 hover:text-red-700 transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Support;