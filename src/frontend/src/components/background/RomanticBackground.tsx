import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  rotation: number;
  speed: number;
  drift: number;
  size: number;
  opacity: number;
}

export default function RomanticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize petals
    const petalCount = window.innerWidth < 768 ? 15 : 25;
    petalsRef.current = Array.from({ length: petalCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      rotation: Math.random() * 360,
      speed: 0.5 + Math.random() * 1,
      drift: (Math.random() - 0.5) * 0.5,
      size: 8 + Math.random() * 12,
      opacity: 0.3 + Math.random() * 0.4,
    }));

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal) => {
        // Update position
        petal.y += petal.speed;
        petal.x += petal.drift;
        petal.rotation += 1;

        // Reset if out of bounds
        if (petal.y > canvas.height) {
          petal.y = -20;
          petal.x = Math.random() * canvas.width;
        }
        if (petal.x < -20) petal.x = canvas.width + 20;
        if (petal.x > canvas.width + 20) petal.x = -20;

        // Draw heart-shaped petal
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.globalAlpha = petal.opacity;

        // Draw heart shape
        ctx.fillStyle = '#d4526e'; // romantic-rose color
        ctx.beginPath();
        const size = petal.size;
        ctx.moveTo(0, size / 4);
        ctx.bezierCurveTo(-size / 2, -size / 4, -size, size / 8, 0, size);
        ctx.bezierCurveTo(size, size / 8, size / 2, -size / 4, 0, size / 4);
        ctx.fill();

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Background gradient image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
        }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-romantic-white/95 via-romantic-blush/90 to-romantic-white/95" />
      
      {/* Animated petals canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
    </>
  );
}
