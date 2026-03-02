import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Added this import
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import photo1 from "@/assets/PHOTO-2025-11-24-01-25-04.jpg";
import photo2 from "@/assets/PHOTO-2025-11-24-01-25-36.jpg";
import photo3 from "@/assets/PHOTO-2025-11-24-01-27-33.jpg";
import photo4 from "@/assets/PHOTO-2025-11-24-01-28-43.jpg";
import photo5 from "@/assets/515438115_1147517194080720_2831107953577639694_n.jpg";
import photo6 from "@/assets/PHOTO-2025-11-24-01-29-20.jpg";
import photo7 from "@/assets/PHOTO-2025-11-24-01-30-22.jpg";
import photo8 from "@/assets/PHOTO-2025-11-24-01-31-12.jpg";
import photo9 from "@/assets/PHOTO-2025-11-24-01-31-13.jpg";
import photo10 from "@/assets/PHOTO-2025-11-24-01-32-04.jpg";
import photo11 from "@/assets/486180182_1068557711976669_2660399759322226140_n.jpg";
import photo12 from "@/assets/PHOTO-2025-11-24-01-28-45.jpg";
import photo13 from "@/assets/PHOTO-2025-11-24-01-32-04 2.jpg";
import photo14 from "@/assets/PHOTO-2025-11-24-01-32-05.jpg";
import photo15 from "@/assets/15941096_1256234387756771_4097434785718417836_n.jpg";
import photo16 from "@/assets/16178940_1273605056019704_1944159042752649888_o.jpg";
import photo17 from "@/assets/16179058_1273606126019597_7402022737354161487_o.jpg";
import photo18 from "@/assets/16179188_1273601802686696_8716757129255651559_o.jpg";
import photo19 from "@/assets/16251864_1273582512688625_1141664087420189029_o.jpg";
import photo20 from "@/assets/16300030_1273579216022288_6056021412768970730_o.jpg";
import photo21 from "@/assets/16300038_1273600876020122_795006948993547727_o.jpg";
import photo22 from "@/assets/16403074_1281455575234652_8894653432897842957_o.jpg";
import photo23 from "@/assets/16487784_1281450538568489_3062899438082817939_o.jpg";
import photo24 from "@/assets/45717031_1969571826423020_8051366145715863552_n.jpg";
import photo25 from "@/assets/45733595_1969571636423039_3574708723639123968_n.jpg";
import photo26 from "@/assets/45763756_1969589169754619_8919331323445772288_n.jpg";
import photo27 from "@/assets/45788070_1969585803088289_5280575055351250944_n.jpg";
import photo28 from "@/assets/82492415_2745378432175685_2768946062608564224_n.jpg";
import photo29 from "@/assets/82597761_2745412528838942_2247595861041217536_n.jpg";
import photo30 from "@/assets/82952005_2747415108638684_3640447836669083648_n.jpg";
import photo31 from "@/assets/83482421_2745418255505036_8170587647509528576_n.jpg";
import photo32 from "@/assets/83769127_2747422155304646_5659726229847146496_n.jpg";
import photo33 from "@/assets/84041874_2749381691775359_6844568421024137216_n.jpg";
import photo34 from "@/assets/84467952_2754400587940136_3460813930480271360_n.jpg";
import photo35 from "@/assets/465028379_8657470624299740_1888177700985474277_n.jpg";
import photo36 from "@/assets/35CFE510-39BE-4ECF-94AE-89D22565CD8D.jpeg";
import photo37 from "@/assets/0060C8F3-CEDA-460C-9DCA-1820DFE5AD34.jpeg";
import photo38 from "@/assets/212FF738-553B-45F1-9A43-00EDB571B335.jpeg";
import photo39 from "@/assets/324C14D7-EF7E-4588-9DF6-4CFA1B2CBC9A.jpeg";
import photo40 from "@/assets/0989C362-39DF-49AA-B3B9-3DA34A351474.jpeg";
import photo41 from "@/assets/05284B1A-6DAB-4D0E-8728-2401597962CB.jpeg";
import photo42 from "@/assets/8493B259-2A5F-490F-9230-B0EAE71E2F01_1_105_c.jpeg";
import photo43 from "@/assets/8635DF24-D4A5-4362-9B32-1F43C74DD918.jpeg";
import photo44 from "@/assets/A0FE7894-B6E4-4E63-A732-DA70BF5279DF.jpeg";
import photo45 from "@/assets/AEF083E4-DB16-4F37-AD03-E91C20EF3463.jpeg";
import photo46 from "@/assets/BA930180-F653-4CC5-860D-34D64D3782F1.jpeg";
import photo50 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.41.jpeg";
import photo51 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.43.jpeg";
import photo52 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.45.jpeg";
import photo53 from "@/assets/WhatsApp Image 2023-04-03 at 01.18.36.jpeg";
import photo54 from "@/assets/WhatsApp Image 2023-04-03 at 02.42.55.jpeg";
import photo55 from "@/assets/WhatsApp Image 2023-04-04 at 23.38.13.jpeg";
import photo56 from "@/assets/PHOTO-2026-02-23-04-56-33.jpg";
import photo57 from "@/assets/PHOTO-2026-02-23-04-57-30.jpg";
import photo58 from "@/assets/PHOTO-2026-02-23-04-58-30.jpg";
import photo59 from "@/assets/PHOTO-2026-02-23-05-00-22.jpg";
import photo60 from "@/assets/PHOTO-2026-02-23-05-02-50.jpg";
import photo61 from "@/assets/PHOTO-2026-02-23-05-05-57.jpg";
import photo62 from "@/assets/PHOTO-2026-02-23-05-07-15.jpg";
import photo63 from "@/assets/PHOTO-2026-02-23-05-08-15.jpg";
import photo64 from "@/assets/PHOTO-2026-02-23-05-09-54.jpg";
import photo65 from "@/assets/PHOTO-2026-02-23-05-12-08.jpg";
import photo66 from "@/assets/PHOTO-2026-02-23-05-13-24.jpg";
import photo67 from "@/assets/PHOTO-2026-02-23-05-14-10.jpg";
import photo68 from "@/assets/PHOTO-2026-02-23-05-15-27.jpg";
import photo69 from "@/assets/PHOTO-2026-02-23-05-16-37.jpg";
import photo70 from "@/assets/PHOTO-2026-02-23-05-17-35.jpg";
import photo71 from "@/assets/PHOTO-2026-02-23-05-18-30.jpg";
import photo72 from "@/assets/PHOTO-2026-02-23-05-19-15.jpg";
import photo73 from "@/assets/PHOTO-2026-02-23-05-20-06.jpg";
import photo74 from "@/assets/PHOTO-2026-02-23-05-20-49.jpg";
import photo75 from "@/assets/464069793_8588462357867234_2389732815945287865_n.jpg";
import photo76 from "@/assets/480740660_1046947450804362_9126967595876651031_n.jpg";
import photo77 from "@/assets/480962952_1046947674137673_3079006825770371397_n.jpg";
import photo78 from "@/assets/481046914_1047578094074631_4355613992284958397_n.jpg";
import photo79 from "@/assets/481116568_1046947744137666_4228504898625980706_n.jpg";
import photo80 from "@/assets/481214117_1046947657471008_1492289149291152034_n.jpg";
import photo81 from "@/assets/481218593_1046947467471027_6916066743495429974_n.jpg";
import photo82 from "@/assets/481272045_1046947650804342_141478251571235094_n.jpg";
import photo83 from "@/assets/481304138_1046947464137694_1815785147255671817_n.jpg";
import photo84 from "@/assets/82902621_2751405988239596_7768075394271412224_n.jpg";
import photo85 from "@/assets/82903624_2750424705004391_4470374499103014912_n.jpg";
import photo86 from "@/assets/82952005_2747415108638684_3640447836669083648_n (1).jpg";
import photo87 from "@/assets/83028716_2750424741671054_3260114511079669760_n.jpg";
import photo88 from "@/assets/83341415_2750426621670866_8322993067359469568_n.jpg";
import photo89 from "@/assets/83708894_2761496480563880_8312137004942884864_n.jpg";
import photo90 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.41 2.jpeg";
import photo91 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.45 2.jpeg";
import photo92 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.48 (1).jpeg";
import photo93 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.49.jpeg";
import photo94 from "@/assets/WhatsApp Image 2023-04-01 at 00.47.50.jpeg";
import photo95 from "@/assets/82597761_2745412528838942_2247595861041217536_n-1.jpg";
import {
  Camera,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  Trophy,
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
    { id: "academics", label: "Academics", icon: Camera },
    { id: "childrens-home", label: "Children's Home", icon: Heart },
    { id: "events", label: "Events", icon: Trophy },
  ];

  const images = [
    { src: photo1, category: "academics", title: "Classroom Learning", description: "Students engaged in CBE lessons" },
    { src: photo2, category: "academics", title: "CBE Projects", description: "Hands-on learning activities" },
    { src: photo3, category: "childrens-home", title: "Children's Care", description: "Daily life at the home" },
    { src: photo4, category: "events", title: "School Events", description: "Academic day celebrations" },
    { src: photo5, category: "events", title: "Sports Day", description: "Annual athletics competition" },
    { src: photo6, category: "childrens-home", title: "Family Time", description: "Bonding and care" },
    { src: photo7, category: "academics", title: "Science Lab", description: "STEM education in action" },
    { src: photo8, category: "academics", title: "Creative Arts", description: "Music and drama performances" },
    { src: photo9, category: "events", title: "Graduation Day", description: "Celebrating achievements" },
    { src: photo10, category: "academics", title: "Library Time", description: "Reading and research" },
    { src: photo11, category: "events", title: "Football Team", description: "Inter-school competitions" },
    { src: photo12, category: "academics", title: "Art Class", description: "Creative expression" },
    { src: photo13, category: "academics", title: "Group Activity", description: "Collaborative learning" },
    { src: photo14, category: "academics", title: "Music Lesson", description: "Learning instruments" },
    { src: photo15, category: "academics", title: "School Assembly", description: "Morning gathering" },
    { src: photo16, category: "academics", title: "Class Photo", description: "Students together" },
    { src: photo17, category: "childrens-home", title: "Play Time", description: "Outdoor activities" },
    { src: photo18, category: "academics", title: "Study Group", description: "Peer learning" },
    { src: photo19, category: "academics", title: "School Building", description: "Our campus" },
    { src: photo20, category: "events", title: "Sports Field", description: "Athletics ground" },
    { src: photo21, category: "academics", title: "Computer Lab", description: "Digital learning" },
    { src: photo22, category: "academics", title: "Teacher Training", description: "Professional development" },
    { src: photo23, category: "events", title: "Community Service", description: "Giving back" },
    { src: photo24, category: "events", title: "Annual Day", description: "School celebration" },
    { src: photo25, category: "events", title: "Science Fair", description: "Innovation showcase" },
    { src: photo26, category: "events", title: "Art Exhibition", description: "Creative display" },
    { src: photo27, category: "events", title: "Music Concert", description: "Musical performance" },
    { src: photo28, category: "events", title: "Sports Meet", description: "Athletic competition" },
    { src: photo29, category: "events", title: "Cultural Day", description: "Traditions celebration" },
    { src: photo30, category: "events", title: "Field Trip", description: "Educational outing" },
    { src: photo31, category: "academics", title: "Library", description: "Reading corner" },
    { src: photo32, category: "academics", title: "Drama Club", description: "Theater performance" },
    { src: photo33, category: "events", title: "Dance Practice", description: "Choreography session" },
    { src: photo34, category: "academics", title: "Science Lab", description: "Laboratory experiments" },
    { src: photo35, category: "academics", title: "Yoga Class", description: "Mind and body" },
    { src: photo36, category: "academics", title: "Campus View", description: "School scenery" },
    { src: photo37, category: "academics", title: "Classroom", description: "Learning space" },
    { src: photo38, category: "academics", title: "Student Activities", description: "After school programs" },
    { src: photo39, category: "academics", title: "Workshop", description: "Skill building" },
    { src: photo40, category: "academics", title: "Mentorship", description: "Guiding students" },
    { src: photo41, category: "academics", title: "Project Work", description: "Hands-on projects" },
    { src: photo42, category: "academics", title: "Group Discussion", description: "Team collaboration" },
    { src: photo43, category: "academics", title: "Outdoor Class", description: "Nature learning" },
    { src: photo44, category: "events", title: "Awards Ceremony", description: "Recognizing achievements" },
    { src: photo45, category: "academics", title: "Staff Members", description: "Our team" },
    { src: photo46, category: "academics", title: "Education Program", description: "Learning initiatives" },
    { src: photo50, category: "events", title: "Community Event", description: "Local gathering" },
    { src: photo51, category: "events", title: "Outreach Program", description: "Community support" },
    { src: photo52, category: "events", title: "Volunteer Work", description: "Helping hands" },
    { src: photo53, category: "events", title: "Fundraising", description: "Support campaign" },
    { src: photo54, category: "events", title: "Partnership Event", description: "Collaboration" },
    { src: photo55, category: "events", title: "Donation Drive", description: "Giving back" },
    { src: photo56, category: "events", title: "Recent Event 1", description: "Community gathering" },
    { src: photo57, category: "events", title: "Recent Event 2", description: "School activity" },
    { src: photo58, category: "academics", title: "Classroom Moment 1", description: "Learning in progress" },
    { src: photo59, category: "academics", title: "Classroom Moment 2", description: "Student engagement" },
    { src: photo60, category: "events", title: "Recent Event 3", description: "Community event" },
    { src: photo61, category: "childrens-home", title: "Home Life 1", description: "Daily activities" },
    { src: photo62, category: "childrens-home", title: "Home Life 2", description: "Children activities" },
    { src: photo63, category: "academics", title: "Learning Session 1", description: "Class activities" },
    { src: photo64, category: "events", title: "Event Activities", description: "Celebration moments" },
    { src: photo65, category: "academics", title: "Learning Session 2", description: "Study time" },
    { src: photo66, category: "events", title: "School Gathering", description: "Assembly time" },
    { src: photo67, category: "childrens-home", title: "Home Moments 1", description: "Care activities" },
    { src: photo68, category: "academics", title: "Classroom Interaction", description: "Student learning" },
    { src: photo69, category: "events", title: "Event Celebration", description: "Special occasion" },
    { src: photo70, category: "childrens-home", title: "Home Moments 2", description: "Family time" },
    { src: photo71, category: "academics", title: "Study Activity", description: "Academic work" },
    { src: photo72, category: "events", title: "Community Activity", description: "Group event" },
    { src: photo73, category: "childrens-home", title: "Home Care", description: "Children care" },
    { src: photo74, category: "academics", title: "Learning Moment", description: "Class moment" },
    { src: photo75, category: "events", title: "Social Event 1", description: "Community gathering" },
    { src: photo76, category: "childrens-home", title: "Children Together 1", description: "Group activity" },
    { src: photo77, category: "academics", title: "Academic Program 1", description: "Educational program" },
    { src: photo78, category: "events", title: "Social Event 2", description: "Celebration event" },
    { src: photo79, category: "childrens-home", title: "Children Together 2", description: "Bonding time" },
    { src: photo80, category: "academics", title: "Academic Program 2", description: "Learning initiative" },
    { src: photo81, category: "events", title: "Event Moment 1", description: "Special event" },
    { src: photo82, category: "childrens-home", title: "Home Activities 1", description: "Daily life" },
    { src: photo83, category: "academics", title: "Class Session", description: "Teaching moment" },
    { src: photo84, category: "events", title: "Event Moment 2", description: "Community event" },
    { src: photo85, category: "childrens-home", title: "Home Activities 2", description: "Care moments" },
    { src: photo86, category: "academics", title: "School Activities", description: "Academic activities" },
    { src: photo87, category: "events", title: "Celebration Event", description: "Festival moment" },
    { src: photo88, category: "childrens-home", title: "Home Life 3", description: "Living space" },
    { src: photo89, category: "academics", title: "Teaching Moment", description: "Educational delivery" },
    { src: photo90, category: "events", title: "Community Moment 1", description: "Social gathering" },
    { src: photo91, category: "childrens-home", title: "Children Moment 1", description: "Kid activities" },
    { src: photo92, category: "academics", title: "School Moment 1", description: "Academic scene" },
    { src: photo93, category: "events", title: "Community Moment 2", description: "Group activity" },
    { src: photo94, category: "childrens-home", title: "Children Moment 2", description: "Play time" },
    { src: photo95, category: "academics", title: "School Moment 2", description: "Educational setting" },
  ];

  const filteredImages =
    activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

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
                <div className="relative h-60 md:h-80 overflow-hidden">
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
              { title: "CBE Innovation Fair", desc: "Our learners showcased incredible creativity during the annual CBE exhibition.", img: photo1 },
              { title: "Charity Walk", desc: "A walk to raise funds for our Children's Home and community outreach programs.", img: photo2 },
              { title: "Sports Festival", desc: "A day of fun, teamwork, and sportsmanship among our students.", img: photo3 },
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
