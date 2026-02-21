import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Info } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { AUDIO_CONFIG } from '@/constants/audio';

export default function AudioPlayerToggle() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element using shared constant
    audioRef.current = new Audio(AUDIO_CONFIG.path);
    audioRef.current.loop = AUDIO_CONFIG.loop;
    audioRef.current.volume = AUDIO_CONFIG.defaultVolume;

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
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 rounded-full bg-romantic-paper/70 backdrop-blur-sm border border-romantic-champagne/20 hover:bg-romantic-paper/90 shadow-sm"
          >
            <Info className="w-4 h-4 text-romantic-rose/70" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-romantic-paper border-romantic-champagne/30" align="end">
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="font-medium text-sm text-romantic-rose">Background Music</h4>
              <p className="text-xs text-romantic-rose/70">
                This is a royalty-free romantic instrumental substitute, not Ed Sheeran's "Perfect".
              </p>
            </div>
            <div className="space-y-1 pt-2 border-t border-romantic-champagne/20">
              <h5 className="font-medium text-xs text-romantic-rose/90">To use your own licensed music:</h5>
              <p className="text-xs text-romantic-rose/60 font-mono bg-romantic-champagne/10 p-2 rounded">
                Replace: {AUDIO_CONFIG.path}
              </p>
              <p className="text-xs text-romantic-rose/60">
                Place your legally licensed audio file at the path above in the frontend public directory.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>

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
