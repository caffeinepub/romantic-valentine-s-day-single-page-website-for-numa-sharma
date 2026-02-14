import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import SurpriseModal from './SurpriseModal';

export default function SurpriseButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className="surprise-button text-xl px-12 py-8 rounded-full bg-gradient-to-r from-romantic-rose to-romantic-blush hover:from-romantic-blush hover:to-romantic-rose text-white font-cursive shadow-romantic hover:shadow-romantic-lg hover:scale-105 transition-all duration-300"
      >
        <Sparkles className="w-6 h-6 mr-3" />
        Click for a Surprise
        <Sparkles className="w-6 h-6 ml-3" />
      </Button>
      
      <SurpriseModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
