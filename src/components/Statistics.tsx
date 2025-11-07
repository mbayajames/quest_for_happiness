import { useEffect, useRef, useState } from "react";
import { BookOpen, Heart, Users, Calendar } from "lucide-react";

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
      icon: BookOpen,
      value: 450,
      suffix: "+",
      label: "Students Enrolled",
      color: "text-blue-500",
      delay: "delay-100",
    },
    {
      icon: Heart,
      value: 120,
      suffix: "+",
      label: "Children Cared For",
      color: "text-primary",
      delay: "delay-200",
    },
    {
      icon: Users,
      value: 25,
      suffix: "+",
      label: "Dedicated Teachers",
      color: "text-blue-700",
      delay: "delay-300",
    },
    {
      icon: Calendar,
      value: 10,
      suffix: "+",
      label: "Years of Service",
      color: "text-primary",
      delay: "delay-500",
    },
  ];

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end]); // Removed 'isVisible' — controlled by parent

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Making a difference in the lives of children, one student at a time
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`text-center animate-scale-in ${stat.delay}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-foreground/90" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {isVisible ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;