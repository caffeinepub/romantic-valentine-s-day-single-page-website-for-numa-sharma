import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function LoveMessageSection() {
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
          A Love Letter for You
        </h2>
        
        <Card className="love-letter-card bg-romantic-paper/95 backdrop-blur-sm border-romantic-champagne/30 shadow-romantic">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-romantic-text font-serif leading-relaxed">
              <p className="text-lg md:text-xl first-letter:text-5xl first-letter:font-cursive first-letter:text-romantic-rose first-letter:mr-2 first-letter:float-left">
                My Dearest Numa,
              </p>
              
              <p className="text-base md:text-lg">
                Every moment with you feels like a beautiful dream that I never want to end. 
                Your smile lights up my darkest days, and your laughter is the sweetest melody 
                my heart has ever known.
              </p>
              
              <p className="text-base md:text-lg">
                You are the reason I believe in magic, in destiny, and in the power of true love. 
                With you, I've discovered a happiness I never knew existed, a love so deep and 
                pure that it fills every corner of my soul.
              </p>
              
              <p className="text-base md:text-lg">
                Thank you for being my partner, my best friend, and my forever Valentine. 
                I promise to cherish you, support you, and love you with all that I am, 
                today and always.
              </p>
              
              <p className="text-lg md:text-xl text-right font-cursive text-romantic-rose mt-8">
                Forever yours,<br />
                With endless love ❤️
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
