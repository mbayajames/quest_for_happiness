import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";
import cbeImage from "@/assets/cbc-learning.jpg";
import childrensHomeImage from "@/assets/childrens-home.jpg";
import {
  Camera,
  Play,
  Facebook,
  Instagram,
  Youtube,
  Home,
  Calendar,
  Trophy,
  Palette,
  BookOpen,
  Heart,
  Users,
  Award,
  Clock
} from "lucide-react";

interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const categories = [
    { id: "all", label: "All Photos", icon: Camera },
    { id: "academics", label: "Academics", icon: BookOpen },
    { id: "home", label: "Children's Home", icon: Home },
    { id: "events", label: "Events & Activities", icon: Calendar },
    { id: "sports", label: "Sports & Recreation", icon: Trophy },
    { id: "arts", label: "Arts & Culture", icon: Palette },
  ];

  const images = [
    { src: heroImage, category: "academics", title: "Classroom Learning", description: "Students engaged in CBE lessons" },
    { src: cbeImage, category: "academics", title: "CBE Projects", description: "Hands-on learning activities" },
    { src: childrensHomeImage, category: "home", title: "Children's Care", description: "Daily life at the home" },
    { src: heroImage, category: "events", title: "School Events", description: "Academic day celebrations" },
    { src: cbeImage, category: "sports", title: "Sports Day", description: "Annual athletics competition" },
    { src: childrensHomeImage, category: "home", title: "Family Time", description: "Bonding and care" },
    { src: heroImage, category: "academics", title: "Science Lab", description: "STEM education in action" },
    { src: cbeImage, category: "arts", title: "Creative Arts", description: "Music and drama performances" },
    { src: childrensHomeImage, category: "events", title: "Graduation Day", description: "Celebrating achievements" },
    { src: heroImage, category: "academics", title: "Library Time", description: "Reading and research" },
    { src: cbeImage, category: "sports", title: "Football Team", description: "Inter-school competitions" },
    { src: childrensHomeImage, category: "home", title: "Meal Time", description: "Nutritious meals together" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Camera className="w-6 h-6 text-blue-300" />
              <span className="text-blue-100 font-medium">Visual Journey</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              Glimpses of life, learning, and love at Quest for Happiness Ministry
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  size="lg"
                  className={`transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg' 
                      : 'bg-white text-black border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-fade-in"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                      <p className="text-blue-200 text-sm mb-4">{image.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
                          {(() => {
                            const category = categories.find(cat => cat.id === image.category);
                            const IconComponent = category?.icon;
                            return IconComponent ? <IconComponent className="w-3 h-3" /> : null;
                          })()}
                          {categories.find(cat => cat.id === image.category)?.label}
                        </span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick category badge */}
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {categories.find(cat => cat.id === image.category)?.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Memorable Moments Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-6 border border-blue-200">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Special Events</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-10">Memorable Moments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CBC Innovation Fair", desc: "Our learners showcased incredible creativity during the annual CBC exhibition.", img: cbeImage },
              { title: "Charity Walk", desc: "A walk to raise funds for our Children's Home and community outreach programs.", img: childrensHomeImage },
              { title: "Sports Festival", desc: "A day of fun, teamwork, and sportsmanship among our students.", img: heroImage },
            ].map((event, index) => (
              <Card 
                key={event.title} 
                className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.desc}</p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Spotlight Section */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3 mb-6 border border-blue-200">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Celebrating Excellence</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Student Spotlight</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Celebrating learners who inspire through excellence, creativity, and kindness.
          </p>
          <div className="flex overflow-x-auto gap-6 px-4 pb-4 snap-x scrollbar-hide">
            {[
              { name: "Grace Wanjiku", title: "Top Performer - Science", img: heroImage, achievement: "Best Science Project 2024" },
              { name: "Brian Mwangi", title: "Best in Sports", img: cbeImage, achievement: "Football Team Captain" },
              { name: "Mary Atieno", title: "Art & Creativity Award", img: childrensHomeImage, achievement: "National Art Competition Winner" },
              { name: "David Kimani", title: "Community Service", img: heroImage, achievement: "Youth Volunteer of the Year" },
              { name: "Sarah Odhiambo", title: "Mathematics Champion", img: cbeImage, achievement: "County Math Olympiad Gold" },
            ].map((student, index) => (
              <div 
                key={student.name} 
                className="snap-center min-w-[280px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-blue-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img src={student.img} alt={student.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-blue-800 mb-1">{student.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{student.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{student.achievement}</p>
                  <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
            <Award className="w-5 h-5 text-blue-200" />
            <span className="text-blue-100 font-medium">Making a Difference</span>
          </div>
          <h2 className="text-4xl font-bold mb-10">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Students", icon: Users },
              { number: "50+", label: "Teachers", icon: Users },
              { number: "10+", label: "Years of Service", icon: Clock },
              { number: "100+", label: "Events Captured", icon: Camera },
            ].map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="animate-fade-in bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-orange-50 rounded-full px-6 py-3 mb-6 border border-orange-200">
            <Heart className="w-5 h-5 text-orange-600" />
            <span className="text-orange-700 font-medium">Dedicated Team</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Behind the Scenes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our dedicated teachers and staff make learning joyful and impactful every day.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[heroImage, cbeImage, childrensHomeImage].map((img, i) => (
              <Card
                key={i}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-fade-in"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={img}
                    alt="Behind the scenes"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {["Mentoring Future Leaders", "Creative Teaching", "Caring Environment"][i]}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Corner Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-6 border border-blue-200">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Alumni Corner</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our alumni continue to shine in various professions and communities around the world.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Jane Njoroge", role: "Software Engineer", img: cbeImage, quote: "The foundation I got here shaped my career." },
              { name: "Paul Ochieng", role: "Teacher", img: childrensHomeImage, quote: "Giving back to the community that raised me." },
              { name: "Lucy Wambui", role: "Entrepreneur", img: heroImage, quote: "Entrepreneurship skills started in school projects." },
            ].map((alumni) => (
              <Card
                key={alumni.name}
                className="p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-200 text-center animate-fade-in"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100">
                  <img src={alumni.img} alt={alumni.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{alumni.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{alumni.role}</p>
                <p className="text-gray-600 italic text-sm mb-4">"{alumni.quote}"</p>
                <div className="w-8 h-1 bg-blue-500 rounded-full mx-auto"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3 mb-4 border border-blue-200">
              <Play className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Virtual Experience</span>
            </div>
            <h2 className="text-4xl font-bold text-black mb-4">Video Tour</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a virtual journey through our facilities and see our community in action
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Card className="p-1 bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-white p-8 rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-white rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200 group cursor-pointer hover:border-blue-400 transition-all duration-300">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                    <p className="text-2xl font-bold text-black mb-2">Virtual School Tour</p>
                    <p className="text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Our Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-black text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
            <Heart className="w-5 h-5 text-red-200" />
            <span className="text-white font-medium">Make a Difference</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Help us continue providing quality education and care for children in need through your support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              Donate Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-black text-white rounded-full px-6 py-3 mb-6">
            <Camera className="w-5 h-5" />
            <span className="font-medium">Join Our Community</span>
          </div>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Follow us on social media for real-time updates, behind-the-scenes moments, and more inspiring photos from our journey
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <Youtube className="w-5 h-5 mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-blue-200">{selectedImage.description}</p>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GalleryPage;