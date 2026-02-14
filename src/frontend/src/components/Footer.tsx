import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 text-center border-t border-romantic-champagne/20 bg-romantic-paper/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-romantic-text font-serif">
          <span>Made with endless love for</span>
          <Heart className="w-5 h-5 text-romantic-rose animate-pulse inline-block" fill="currentColor" />
          <span className="font-cursive text-romantic-rose glow-text">Numa Sharma</span>
          <Heart className="w-5 h-5 text-romantic-rose animate-pulse inline-block" fill="currentColor" />
        </div>
      </div>
    </footer>
  );
}
