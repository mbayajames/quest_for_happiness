import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";
import cbeImage from "@/assets/cbc-learning.jpg";
import childrensHomeImage from "@/assets/childrens-home.jpg";
import { 
  Camera, 
  Home, 
  BookOpen, 
  Calendar,
  ChevronRight,
  Play
} from "lucide-react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All", icon: Camera },
    { id: "academics", label: "Academics", icon: BookOpen },
    { id: "home", label: "Children's Home", icon: Home },
    { id: "events", label: "Events", icon: Calendar },
  ];

  const images = [
    { src: heroImage, category: "academics", title: "Classroom Learning" },
    { src: cbeImage, category: "academics", title: "CBE Projects" },
    { src: childrensHomeImage, category: "home", title: "Children's Care" },
    { src: heroImage, category: "events", title: "School Events" },
    { src: cbeImage, category: "academics", title: "Student Activities" },
    { src: childrensHomeImage, category: "home", title: "Daily Life" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            <Camera className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-medium text-sm">Our Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Moments of <span className="text-blue-600">Joy & Learning</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Glimpses of life, learning, and love at Quest for Happiness Ministry
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-500 ease-out transform hover:scale-105 ${
                  activeCategory === category.id 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg border-blue-600" 
                    : "bg-white text-gray-700 hover:text-blue-600 hover:border-blue-400 border-gray-200 hover:bg-blue-50"
                } px-6 py-3 rounded-full font-medium flex items-center gap-2`}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer border-0 shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 bg-black"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredImage === index ? "scale-110 brightness-110" : "scale-100 brightness-90"
                  }`}
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 ${
                  hoveredImage === index ? "opacity-100" : "opacity-80"
                }`} />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-medium uppercase tracking-wide">
                        {image.category}
                      </span>
                    </div>
                    <div className={`transform transition-all duration-500 ${
                      hoveredImage === index ? "scale-100 rotate-0" : "scale-0 rotate-90"
                    }`}>
                      <div className="bg-blue-600 rounded-full p-2 shadow-lg">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Content */}
                  <div className={`transform transition-all duration-500 ${
                    hoveredImage === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-90"
                  }`}>
                    <h3 className="text-white font-bold text-xl mb-2 leading-tight">
                      {image.title}
                    </h3>
                    <p className="text-blue-200 text-sm font-medium flex items-center gap-1">
                      View More
                      <ChevronRight className="w-4 h-4" />
                    </p>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-1000 ${
                  hoveredImage === index ? "translate-x-full" : "-translate-x-full"
                }`} />
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-pulse-slow">
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100 max-w-2xl mx-auto">
            <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-3">
              Want to see more of our work and impact?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Explore our complete collection of memories and moments that define our mission.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
            >
              View Full Gallery
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Gallery;