import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-8 flex justify-center">
          <Heart className="w-16 h-16 text-romantic-rose animate-pulse" fill="currentColor" />
        </div>
        
        <h1 className="hero-name text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-cursive mb-6 text-romantic-rose glow-text">
          Numa Sharma
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-romantic-champagne font-light tracking-wide">
          My Forever Valentine
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <Heart className="w-6 h-6 text-romantic-blush animate-float" fill="currentColor" />
          <Heart className="w-8 h-8 text-romantic-rose animate-float-delayed" fill="currentColor" />
          <Heart className="w-6 h-6 text-romantic-blush animate-float" fill="currentColor" />
        </div>
      </div>
    </section>
  );
}
