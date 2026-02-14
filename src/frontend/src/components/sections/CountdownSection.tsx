import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CountdownTimer from '../CountdownTimer';

export default function CountdownSection() {
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
      className="py-20 px-4 max-w-4xl mx-auto"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-cursive text-center mb-12 text-romantic-rose glow-text">
          Counting Down to Valentine's Day
        </h2>
        
        <Card className="bg-romantic-paper/95 backdrop-blur-sm border-romantic-champagne/30 shadow-romantic">
          <CardContent className="p-8 md:p-12">
            <CountdownTimer />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
