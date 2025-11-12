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
  Award,
  School,
  BookMarked
} from "lucide-react";
import { Link } from "react-router-dom";

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

  const schoolPrograms = [
    {
      icon: BookMarked,
      title: "Pre-Primary",
      grades: "PP1 & PP2",
      description: "Early years foundation with play-based learning",
      features: ["Literacy & Numeracy", "Creative Arts", "Social Skills", "Physical Development"]
    },
    {
      icon: School,
      title: "Lower Primary",
      grades: "Grade 1-3",
      description: "Building strong academic foundations",
      features: ["CBC Curriculum", "Language Skills", "Environmental Activities", "Digital Literacy"]
    },
    {
      icon: Award,
      title: "Upper Primary",
      grades: "Grade 4-6",
      description: "Preparing for junior school transition",
      features: ["Subject Specialization", "Project-Based Learning", "Talent Development", "Leadership Skills"]
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-black to-blue-950">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-8 h-8 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-10 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-500"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-full animate-bounce">
              <GraduationCap className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Admissions
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 animate-slide-in-left"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in-up delay-300">
            Join <span className="text-blue-300 font-semibold">Quest for Happiness Ministry</span> - Where Every Child's Journey Begins
          </p>
          <div className="mt-8 animate-fade-in-up delay-500">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full animate-pulse hover:animate-none">
              Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Welcome to Our Family</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-slide-up">
              A Place Where Children <span className="text-blue-600">Thrive</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed animate-slide-up delay-200">
              We welcome learners from diverse backgrounds to join our CBC-based primary and junior school.
              Quest for Happiness Ministry provides a supportive learning environment for all children,
              including those from our Children's Home. Every child deserves quality education in a nurturing,
              loving community.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Academic Programs</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Comprehensive CBC curriculum for all levels</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {schoolPrograms.map((program, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300 bg-white group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{program.title}</h3>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  {program.grades}
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-2 text-left">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-fade-in">
              Admission Process
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Simple steps to join our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {admissionSteps.map((step, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-blue-100 hover:border-blue-300 bg-white group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-800 text-blue-100 px-4 py-2 rounded-full mb-4">
                <ClipboardCheck className="w-5 h-5" />
                <span>Required Documents</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Admission Requirements</h2>
              <p className="text-lg text-blue-200">What you'll need to complete enrollment</p>
            </div>

            <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="space-y-6">
                {requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-lg text-white group-hover:text-blue-200 transition-colors">
                      {requirement}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
                <Calendar className="w-5 h-5" />
                <span>Academic Year 2024</span>
              </div>
              <h2 className="text-4xl font-bold text-black mb-4">Academic Calendar</h2>
              <p className="text-lg text-gray-600">Important dates and term schedules</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {termDates.map((term, index) => (
                <Card key={index} className="p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">{term.term}</h3>
                    <p className="text-blue-600 font-semibold">{term.duration}</p>
                  </div>
                  <ul className="space-y-3">
                    {term.events.map((event, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Information */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black mb-6">Fee Information</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Our school fees are affordable and payable per term. Details are available at the
                  administration office. Sponsorship opportunities are available for children from our home.
                </p>
                <div className="bg-white p-6 rounded-lg mb-8 text-left">
                  <h4 className="font-bold text-black mb-4">Fee Structure Includes:</h4>
                  <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Tuition Fees
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Learning Materials
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Activity Fees
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Medical Care
                    </li>
                  </ul>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full transition-all duration-300 hover:scale-105">
                  <Link to="/contact" className="flex items-center gap-2">
                    Request Fee Details <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce hover:animate-none transition-all duration-300">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">Scholarships & Sponsorship</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through partnerships and kind sponsors, we ensure that every child — regardless of background —
              can access quality education. Our sponsorship program provides full or partial support for
              vulnerable children, including those from our Children's Home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/childrens-home" className="flex items-center gap-2">
                  Learn About Sponsorship <Home className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/contact" className="flex items-center gap-2">
                  Become a Sponsor <Users className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">Multiple ways to reach us for admissions</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come to our school office for a tour and consultation</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Get Directions
                </Button>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our admissions team</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Call Now
                </Button>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your inquiries and we'll respond promptly</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Send Email
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-black to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
              Ready to Enroll?
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Visit us, call, or email for more details. We're here to welcome your child into our family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 animate-bounce hover:animate-none">
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today <Phone className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us <Users className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;