import { useEffect, useRef, useState } from "react";
import { Heart, Users, GraduationCap, Award } from "lucide-react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: GraduationCap,
      value: 450,
      suffix: "+",
      label: "Students Enrolled",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      delay: "delay-100",
    },
    {
      icon: Heart,
      value: 120,
      suffix: "+",
      label: "Children Cared For",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      delay: "delay-200",
    },
    {
      icon: Users,
      value: 25,
      suffix: "+",
      label: "Dedicated Teachers",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      delay: "delay-300",
    },
    {
      icon: Award,
      value: 10,
      suffix: "+",
      label: "Years of Service",
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      delay: "delay-500",
    },
  ];

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end]);

    return (
      <span ref={countRef} className="count-up-number">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Our Impact in <span className="text-blue-600">Numbers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Making a meaningful difference in the lives of children, one student at a time through quality education and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${stat.delay}`}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-5"></div>
              
              <div className={`
                relative rounded-2xl p-8 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl
                border-2 ${stat.borderColor} ${stat.bgColor} backdrop-blur-sm
                group-hover:border-blue-300 group-hover:bg-white
              `}>
                {/* Icon container with animation */}
                <div className={`
                  w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                  ${stat.bgColor} border-2 ${stat.borderColor} group-hover:border-blue-300
                `}>
                  <stat.icon 
                    className={`w-8 h-8 ${stat.color} transition-colors duration-300`} 
                  />
                </div>
                
                {/* Counter number */}
                <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color} transition-colors duration-300`}>
                  {isVisible ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                
                {/* Label */}
                <p className="text-gray-700 font-semibold text-lg group-hover:text-black transition-colors duration-300">
                  {stat.label}
                </p>
                
                {/* Bottom accent line */}
                <div className={`w-12 h-1 ${stat.bgColor.replace('bg-', 'bg-')} mx-auto mt-4 rounded-full group-hover:bg-blue-500 transition-colors duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in delay-700">
          <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <span className="text-gray-700 font-medium">Growing stronger every day</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;