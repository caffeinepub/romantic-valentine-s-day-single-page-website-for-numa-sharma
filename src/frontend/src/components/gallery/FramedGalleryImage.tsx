import { useState } from 'react';

interface FramedGalleryImageProps {
  src: string;
  alt: string;
  delay?: number;
}

export default function FramedGalleryImage({ src, alt, delay = 0 }: FramedGalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="gallery-frame-container"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative group">
        <div className="gallery-frame overflow-hidden rounded-3xl shadow-romantic">
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Heart frame overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: 'url(/assets/generated/heart-frame-overlay.dim_1024x1024.png)',
              }}
            />
          </div>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-border" />
      </div>
    </div>
  );
}
