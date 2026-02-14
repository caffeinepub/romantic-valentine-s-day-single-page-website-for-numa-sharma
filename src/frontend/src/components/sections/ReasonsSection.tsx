import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Heart } from 'lucide-react';

const reasons = [
  {
    title: 'Your Beautiful Smile',
    content: 'Your smile brightens my entire world and makes every day worth living. It\'s the first thing I think of when I wake up.',
  },
  {
    title: 'Your Kind Heart',
    content: 'Your compassion and kindness towards everyone around you inspire me to be a better person every single day.',
  },
  {
    title: 'Your Infectious Laughter',
    content: 'The sound of your laughter is my favorite melody. It fills my heart with joy and makes all my worries disappear.',
  },
  {
    title: 'Your Unwavering Support',
    content: 'You believe in me even when I doubt myself. Your support gives me the strength to chase my dreams.',
  },
  {
    title: 'Your Intelligence',
    content: 'Our conversations fascinate me. Your perspective on life and your wisdom never cease to amaze me.',
  },
  {
    title: 'Your Sense of Humor',
    content: 'You make me laugh like no one else can. Your wit and playfulness bring so much joy into my life.',
  },
  {
    title: 'Your Gentle Touch',
    content: 'Every touch from you feels like magic. Your embrace is my safe haven, my home.',
  },
  {
    title: 'Your Dreams and Ambitions',
    content: 'I love how passionate you are about your goals. Watching you pursue your dreams inspires me endlessly.',
  },
  {
    title: 'Your Understanding Nature',
    content: 'You understand me in ways no one else does. You see the real me and love me for who I am.',
  },
  {
    title: 'Your Beautiful Soul',
    content: 'Beyond everything visible, it\'s your beautiful soul that captured my heart. You are truly one of a kind.',
  },
  {
    title: 'The Way You Love',
    content: 'The way you love me makes me feel cherished, valued, and complete. Your love is my greatest treasure.',
  },
  {
    title: 'Simply Being You',
    content: 'I love you for being authentically, wonderfully, perfectly you. You are my everything, Numa.',
  },
];

export default function ReasonsSection() {
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
        <h2 className="text-4xl md:text-5xl font-cursive text-center mb-4 text-romantic-rose glow-text">
          Reasons Why I Love You
        </h2>
        <p className="text-center text-romantic-champagne mb-12 text-lg">
          Click to reveal each special reason ❤️
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {reasons.map((reason, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="reason-card bg-romantic-paper/90 backdrop-blur-sm border-romantic-champagne/30 rounded-2xl px-6 shadow-romantic"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-romantic-rose flex-shrink-0" fill="currentColor" />
                  <span className="text-lg md:text-xl font-serif text-romantic-text">
                    {reason.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-romantic-text/80 pb-6 pl-8 font-serif leading-relaxed">
                {reason.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
