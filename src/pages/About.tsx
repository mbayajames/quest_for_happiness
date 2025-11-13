import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Target, Eye, Heart, Award, Users, Building2, BookOpen, Clock, Star, ChevronRight, GraduationCap, Library, Microscope, Palette, Utensils, Bus, Quote, Cross, Trophy, Home, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "We create a safe, inclusive space where every student feels valued and supported to reach their full potential.",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Committed to delivering quality education that meets and exceeds national standards.",
    },
    {
      icon: Target,
      title: "Character Building",
      description: "Developing well-rounded individuals with strong moral values and leadership skills.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Fostering a sense of belonging and responsibility towards our school community and beyond.",
    },
  ];

  const history = [
    {
      year: "1995",
      title: "School Founded",
      description: "Established with a vision to provide quality education to the local community, starting with 50 students.",
    },
    {
      year: "2002",
      title: "First Graduating Class",
      description: "Celebrated our first KCPE class with outstanding results that set the standard for years to come.",
    },
    {
      year: "2010",
      title: "Campus Expansion",
      description: "Added new classrooms, science laboratories, and a modern library to accommodate growing enrollment.",
    },
    {
      year: "2017",
      title: "CBE Implementation",
      description: "Successfully transitioned to Competency-Based Curriculum, embracing innovative teaching methods.",
    },
    {
      year: "2023",
      title: "Digital Learning",
      description: "Integrated technology across all classrooms with smart boards and computer labs.",
    },
  ];

  const leadership = [
    {
      name: "Mrs. Grace Wanjiru",
      role: "Principal",
      description: "20+ years in educational leadership, passionate about student development and academic excellence.",
    },
    {
      name: "Mr. James Mwangi",
      role: "Deputy Principal - Academics",
      description: "Specialized in curriculum development and teacher mentorship programs.",
    },
    {
      name: "Mrs. Sarah Otieno",
      role: "Deputy Principal - Administration",
      description: "Expert in school operations and student welfare programs.",
    },
    {
      name: "Mr. David Omondi",
      role: "Head of Curriculum",
      description: "Leading our transition and implementation of the Competency-Based Education.",
    },
  ];

  const facilities = [
    {
      icon: Library,
      title: "Modern Library",
      description: "Well-stocked with books, digital resources, and quiet study areas",
    },
    {
      icon: Microscope,
      title: "Science Labs",
      description: "Fully equipped laboratories for Physics, Chemistry, and Biology",
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Art studio and music room for nurturing creative talents",
    },
    {
      icon: Utensils,
      title: "Dining Hall",
      description: "Clean, spacious dining area serving balanced meals",
    },
    {
      icon: GraduationCap,
      title: "Smart Classrooms",
      description: "Technology-enabled learning spaces with interactive boards",
    },
    {
      icon: Bus,
      title: "Transport",
      description: "Safe and reliable school bus service for students",
    },
  ];

  const academicPrograms = [
    {
      level: "Pre-Primary (PP1 - PP2)",
      description: "Play-based learning focusing on social, emotional, and cognitive development for ages 4-6 years",
      features: ["Literacy Foundation", "Numeracy Skills", "Creative Play", "Social Development", "Language Activities"]
    },
    {
      level: "Primary School (Grade 1 - 6)",
      description: "Comprehensive curriculum building strong foundational skills and preparing for junior school",
      features: ["All CBC Subjects", "Language & Communication", "Mathematics", "Environmental Activities", "Creative Arts"]
    },
    {
      level: "Junior School (Grade 7 - 9)",
      description: "Specialized pathways with career guidance and preparation for senior school",
      features: ["STEM Pathway", "Arts & Sports Pathway", "Career Guidance", "Leadership Development", "Exam Preparation"]
    },
  ];

  // New sections data
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-300 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About Our School</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Nurturing young minds from PP1 to Grade 9, building character, and preparing leaders for tomorrow since 1995
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-blue-50 border-y border-blue-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">800+</div>
              <div className="text-blue-700">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">45+</div>
              <div className="text-blue-700">Qualified Teachers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">28</div>
              <div className="text-blue-700">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-blue-700">Transition Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-2xl">
                      R
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">{founderMessage.name}</h3>
                      <p className="text-blue-600">{founderMessage.role}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{founderMessage.message}"
                  </p>
                  <div className="border-t border-blue-200 pt-4">
                    <p className="text-blue-900 font-semibold">{founderMessage.signature}</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-900 rounded-2xl p-8 text-white text-center">
                <Cross className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-4">Our Christian Foundation</h3>
                <p className="text-blue-100 mb-4">
                  Daily devotions, prayer sessions, and moral education are integral to our school life, 
                  helping students develop strong spiritual foundations.
                </p>
                <ul className="text-left space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-300" />
                    Morning devotions
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-300" />
                    Bible studies
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-300" />
                    Christian values integration
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-300" />
                    Community outreach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Why Choose Our School?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Quest for Happiness School unique and the ideal choice for your child's education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 group hover:-translate-y-1">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Children's Home Integration */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Education with Compassion</h2>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Our unique integration with Quest for Happiness Children's Home creates a nurturing 
                  environment where all children learn, grow, and thrive together — regardless of their background.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Inclusive Community</h4>
                      <p className="text-blue-100">Children from the home learn alongside day scholars, creating a diverse and compassionate learning environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Home className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Holistic Support</h4>
                      <p className="text-blue-100">Comprehensive care including education, shelter, nutrition, and emotional support for vulnerable children</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Family Environment</h4>
                      <p className="text-blue-100">Building strong bonds and relationships that extend beyond the classroom</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Our Integrated Model</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-bold text-blue-200 mb-2">📚 Shared Learning</h4>
                    <p className="text-blue-100 text-sm">All children participate in the same quality education programs</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-bold text-blue-200 mb-2">🏠 Extended Care</h4>
                    <p className="text-blue-100 text-sm">Children's home residents receive 24/7 care and support</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-bold text-blue-200 mb-2">❤️ Emotional Support</h4>
                    <p className="text-blue-100 text-sm">Counseling and mentorship programs for all students</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="font-bold text-blue-200 mb-2">🌱 Life Skills</h4>
                    <p className="text-blue-100 text-sm">Practical skills development for independent living</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="p-10 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide a positive , safe , healthy , nurturing and respectful environment in which all students have the opportunity to become productive members of the society .
              </p>
            </Card>

            <Card className="p-10 border-2 border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Eye className="w-10 h-10 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Well balanced men and women pocessing appropriate and relevant survival skills , having positive expectations and hope in a competitive world .
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Our Core Values</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              The principles that guide our educational philosophy and daily operations across all levels
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-8 text-center border-2 border-blue-50 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-blue-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">Our Teaching Philosophy</h2>
            <p className="text-lg text-gray-600 mb-12">
              We believe in educating the whole child through innovative approaches that foster 
              curiosity, critical thinking, and character development
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 text-center">Approach to Learning</h3>
                <ul className="space-y-4">
                  {teachingPhilosophy.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 text-center">Student Development</h3>
                <ul className="space-y-4">
                  {teachingPhilosophy.slice(3).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                        <ChevronRight className="w-4 h-4 text-blue-700" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Academic Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational pathways from Pre-Primary to Junior School designed to nurture every student's potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {academicPrograms.map((program, index) => (
              <Card key={index} className="p-6 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{program.level}</h3>
                <p className="text-gray-600 mb-4 text-sm">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Celebrating excellence in academics, sports, arts, and community service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center">{achievement.title}</h3>
                <ul className="space-y-3">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-blue-100">
                      <Trophy className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">What People Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our parents, students, and community members about their experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center font-bold text-blue-700">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-blue-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our History</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of educational excellence and community service spanning nearly three decades
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {history.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-lg">
                    {item.year}
                  </div>
                  {index !== history.length - 1 && (
                    <div className="w-1 h-full bg-blue-300 mt-2" />
                  )}
                </div>
                <Card className="p-6 flex-1 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art learning environments that support comprehensive education across all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="p-6 text-center border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 group">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <facility.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced educators dedicated to academic excellence and student development across all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-6 text-center border-2 border-blue-50 hover:border-blue-200 transition-all duration-300">
                <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">{leader.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-4xl font-bold mb-6 text-white">Accreditation & Recognition</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Fully registered and accredited by the Ministry of Education, Kenya. We maintain the highest 
              standards of educational quality and are compliant with all Competency-Based Curriculum requirements 
              for Pre-Primary, Primary, and Junior School levels.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <BookOpen className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <p className="font-semibold text-white">MOE Registered</p>
                <p className="text-blue-200 text-sm mt-2">Ministry of Education Certified</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <Award className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <p className="font-semibold text-white">CBC Compliant</p>
                <p className="text-blue-200 text-sm mt-2">Competency-Based Curriculum</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <Star className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <p className="font-semibold text-white">Quality Assured</p>
                <p className="text-blue-200 text-sm mt-2">Regular Quality Assessments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our School Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our school can help your child achieve their full potential from PP1 through Grade 9. 
            Schedule a visit or contact us for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Schedule a Visit
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Download Prospectus
            </button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              Sponsor a Child
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;