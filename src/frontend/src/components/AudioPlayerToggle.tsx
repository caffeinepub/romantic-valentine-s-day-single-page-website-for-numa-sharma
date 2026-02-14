import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayerToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/assets/audio/romantic-instrumental.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      // First time playing
      audioRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      // Toggle mute
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleAudio}
        size="icon"
        className="w-12 h-12 rounded-full bg-romantic-paper/90 backdrop-blur-sm border-2 border-romantic-champagne/30 hover:bg-romantic-paper shadow-romantic hover:scale-110 transition-all duration-300"
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-6 h-6 text-romantic-rose" />
        ) : (
          <Volume2 className="w-6 h-6 text-romantic-rose" />
        )}
      </Button>
    </div>
  );
}
