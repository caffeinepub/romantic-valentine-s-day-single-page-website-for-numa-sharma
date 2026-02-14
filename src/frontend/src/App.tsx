import { useEffect } from 'react';
import HeroSection from './components/sections/HeroSection';
import LoveMessageSection from './components/sections/LoveMessageSection';
import GallerySection from './components/sections/GallerySection';
import ReasonsSection from './components/sections/ReasonsSection';
import CountdownSection from './components/sections/CountdownSection';
import Footer from './components/Footer';
import RomanticBackground from './components/background/RomanticBackground';
import AudioPlayerToggle from './components/AudioPlayerToggle';
import SurpriseButton from './components/SurpriseButton';

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <RomanticBackground />
      
      <div className="relative z-10">
        <AudioPlayerToggle />
        
        <main>
          <HeroSection />
          <LoveMessageSection />
          <GallerySection />
          <ReasonsSection />
          <CountdownSection />
          
          <section className="py-16 flex justify-center">
            <SurpriseButton />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
