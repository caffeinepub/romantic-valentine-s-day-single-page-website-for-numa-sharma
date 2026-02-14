import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurpriseModal({ isOpen, onClose }: SurpriseModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-romantic-paper border-romantic-champagne/30 shadow-romantic-lg">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <Heart className="w-16 h-16 text-romantic-rose animate-pulse" fill="currentColor" />
          </div>
          <DialogTitle className="text-3xl md:text-4xl font-cursive text-center text-romantic-rose glow-text">
            A Special Message
          </DialogTitle>
          <DialogDescription className="text-center text-xl md:text-2xl text-romantic-text font-serif leading-relaxed pt-6">
            Numa Sharma, you are my forever Valentine ❤️
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex justify-center gap-3 mt-6">
          <Heart className="w-5 h-5 text-romantic-rose animate-float" fill="currentColor" />
          <Heart className="w-6 h-6 text-romantic-blush animate-float-delayed" fill="currentColor" />
          <Heart className="w-5 h-5 text-romantic-rose animate-float" fill="currentColor" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
