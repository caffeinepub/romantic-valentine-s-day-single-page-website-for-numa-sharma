import { useEffect, useRef, useState } from 'react';
import FramedGalleryImage from '../gallery/FramedGalleryImage';

const galleryImages = [
  { src: '/assets/generated/gallery-01.dim_1200x900.png', alt: 'Romantic moment 1' },
  { src: '/assets/generated/gallery-02.dim_1200x900.png', alt: 'Romantic moment 2' },
  { src: '/assets/generated/gallery-03.dim_1200x900.png', alt: 'Romantic moment 3' },
  { src: '/assets/generated/gallery-04.dim_1200x900.png', alt: 'Romantic moment 4' },
  { src: '/assets/generated/gallery-05.dim_1200x900.png', alt: 'Romantic moment 5' },
  { src: '/assets/generated/gallery-06.dim_1200x900.png', alt: 'Romantic moment 6' },
  { src: '/assets/Messenger_creation_358DDD99-4DC4-4B99-9AB8-F8F5604864CA.jpeg', alt: 'Our beautiful moment' },
  { src: '/assets/Messenger_creation_358DDD99-4DC4-4B99-9AB8-F8F5604864CA-1.jpeg', alt: 'A special memory' },
];

export default function GallerySection() {
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
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-cursive text-center mb-12 text-romantic-rose glow-text">
          Our Beautiful Moments
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {galleryImages.map((image, index) => (
            <FramedGalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
