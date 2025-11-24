import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Added this import
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";
import cbeImage from "@/assets/cbc-learning.jpg";
import childrensHomeImage from "@/assets/childrens-home.jpg";
import "./Gallery.css";
import {
  Camera,
  Facebook,
  Instagram,
  Youtube,
  Home,
  Calendar,
  Trophy,
  Palette,
  BookOpen,
  Heart,
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
  const navigate = useNavigate(); // ← Added this hook

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
    : images.filter((img) => img.category === activeCategory);

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
                      ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg"
                      : "bg-white text-black border-gray-300 hover:border-blue-600 hover:text-blue-600"
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
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-fade-in gallery-card"
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
                            const category = categories.find((cat) => cat.id === image.category);
                            const IconComponent = category?.icon;
                            return IconComponent ? <IconComponent className="w-3 h-3" /> : null;
                          })()}
                          {categories.find((cat) => cat.id === image.category)?.label}
                        </span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Camera className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick category badge */}
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {categories.find((cat) => cat.id === image.category)?.label}
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
            <Trophy className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-medium">Special Events</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-10">Memorable Moments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "CBC Innovation Fair", desc: "Our learners showcased incredible creativity during the annual CBC exhibition.", img: cbeImage },
              { title: "Charity Walk", desc: "A walk to raise funds for our Children's Home and community outreach programs.", img: childrensHomeImage },
              { title: "Sports Festival", desc: "A day of fun, teamwork, and sportsmanship among our students.", img: heroImage },
            ].map((event) => (
              <Card key={event.title} className="overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-fade-in memorable-card">
                <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Spotlight, Impact, Behind the Scenes, Alumni, Video sections unchanged */}
      {/* ... [All the sections you already had – no changes needed here] ... */}

      {/* Support Our Mission Section – UPDATED BUTTONS */}
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
            <Button
              onClick={() => navigate("/contact")} // ← Takes user to Contact page
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Button>
            <Button
              onClick={() => navigate("/contact")} // ← Takes user to Contact page
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
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
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Facebook className="w-5 h-5 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="lg" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
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
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
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