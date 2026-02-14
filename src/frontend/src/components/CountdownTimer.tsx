import { useValentinesCountdown } from '../hooks/useValentinesCountdown';
import { Heart } from 'lucide-react';

export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useValentinesCountdown();

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="countdown-unit">
          <div className="countdown-value text-4xl md:text-6xl font-bold text-romantic-rose glow-text">
            {days}
          </div>
          <div className="countdown-label text-sm md:text-base text-romantic-champagne uppercase tracking-wider mt-2">
            Days
          </div>
        </div>
        
        <div className="countdown-unit">
          <div className="countdown-value text-4xl md:text-6xl font-bold text-romantic-rose glow-text">
            {hours}
          </div>
          <div className="countdown-label text-sm md:text-base text-romantic-champagne uppercase tracking-wider mt-2">
            Hours
          </div>
        </div>
        
        <div className="countdown-unit">
          <div className="countdown-value text-4xl md:text-6xl font-bold text-romantic-rose glow-text">
            {minutes}
          </div>
          <div className="countdown-label text-sm md:text-base text-romantic-champagne uppercase tracking-wider mt-2">
            Minutes
          </div>
        </div>
        
        <div className="countdown-unit">
          <div className="countdown-value text-4xl md:text-6xl font-bold text-romantic-rose glow-text">
            {seconds}
          </div>
          <div className="countdown-label text-sm md:text-base text-romantic-champagne uppercase tracking-wider mt-2">
            Seconds
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center gap-3">
        <Heart className="w-6 h-6 text-romantic-rose animate-pulse" fill="currentColor" />
        <Heart className="w-8 h-8 text-romantic-blush animate-pulse" fill="currentColor" />
        <Heart className="w-6 h-6 text-romantic-rose animate-pulse" fill="currentColor" />
      </div>
    </div>
  );
}
