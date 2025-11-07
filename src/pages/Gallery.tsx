import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";
import cbcImage from "@/assets/cbc-learning.jpg";
import childrensHomeImage from "@/assets/childrens-home.jpg";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "academics", label: "Academics" },
    { id: "home", label: "Children's Home" },
    { id: "events", label: "Events & Activities" },
    { id: "sports", label: "Sports & Recreation" },
    { id: "arts", label: "Arts & Culture" },
  ];

  const images = [
    { src: heroImage, category: "academics", title: "Classroom Learning", description: "Students engaged in CBC lessons" },
    { src: cbcImage, category: "academics", title: "CBC Projects", description: "Hands-on learning activities" },
    { src: childrensHomeImage, category: "home", title: "Children's Care", description: "Daily life at the home" },
    { src: heroImage, category: "events", title: "School Events", description: "Academic day celebrations" },
    { src: cbcImage, category: "sports", title: "Sports Day", description: "Annual athletics competition" },
    { src: childrensHomeImage, category: "home", title: "Family Time", description: "Bonding and care" },
    { src: heroImage, category: "academics", title: "Science Lab", description: "STEM education in action" },
    { src: cbcImage, category: "arts", title: "Creative Arts", description: "Music and drama performances" },
    { src: childrensHomeImage, category: "events", title: "Graduation Day", description: "Celebrating achievements" },
    { src: heroImage, category: "academics", title: "Library Time", description: "Reading and research" },
    { src: cbcImage, category: "sports", title: "Football Team", description: "Inter-school competitions" },
    { src: childrensHomeImage, category: "home", title: "Meal Time", description: "Nutritious meals together" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Glimpses of life, learning, and love at Quest for Happiness Ministry
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                size="lg"
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12">Video Tour</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-4 bg-muted">
                <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">Virtual School Tour</p>
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground text-lg mb-6">
              Follow us on social media for more updates and photos
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg">Facebook</Button>
              <Button variant="outline" size="lg">Instagram</Button>
              <Button variant="outline" size="lg">YouTube</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
};

export default GalleryPage;
