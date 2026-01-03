import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep via-background to-background" />

      {/* Ambient Glows (Parallax Layer 1) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px]" />
      </div>

      {/* Subtle gold accent lines (Parallax Layer 2) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}
      >
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      {/* Hero Diamond Background (Parallax Layer 3) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(calc(-50% + ${mousePosition.x * 20}px), calc(-50% + ${mousePosition.y * 20}px))` }}
      >
        <svg width="600" height="600" viewBox="0 0 100 100" className="animate-float">
          <path
            d="M50 10 L75 35 L50 90 L25 35 Z M25 35 L50 45 L75 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-gold animate-draw"
          />
          <path
            d="M50 45 L50 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-gold animate-draw delay-500"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title */}
          <div className="overflow-hidden mb-6">
            <p className="font-body text-xs md:text-sm tracking-[0.5em] text-gold uppercase animate-fade-up">
              Joalheria Exclusiva
            </p>
          </div>

          {/* Main title */}
          <h1 className="font-display text-7xl md:text-9xl tracking-[0.1em] text-foreground mb-8 relative">
            <span className="block overflow-hidden">
              <span className="block animate-fade-up" style={{ animationDelay: '200ms' }}>
                AURA
              </span>
            </span>
          </h1>

          {/* Central Logo Animated */}
          <div className="flex justify-center mb-10 overflow-visible h-16">
            <svg width="60" height="60" viewBox="0 0 100 100" className="text-gold drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <path
                d="M50 15 L70 35 L50 85 L30 35 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="animate-draw"
                style={{ animationDelay: '400ms' }}
              />
              <path
                d="M30 35 L50 45 L70 35"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="animate-draw"
                style={{ animationDelay: '600ms' }}
              />
              <path
                d="M50 45 L50 85"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="animate-draw"
                style={{ animationDelay: '800ms' }}
              />
            </svg>
          </div>

          {/* Tagline */}
          <p className="font-elegant text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-6 animate-fade-in opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
            Design que transcende o tempo
          </p>

          <p className="font-body text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-12 leading-loose animate-fade-in opacity-0" style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}>
            Joias minimalistas criadas para exaltar a elegância natural de quem as veste.
            <br />
            <span className="text-gold/90 font-medium mt-2 block">Luxo essencial em cada detalhe.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up opacity-0" style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}>
            <Button variant="gold" size="xl" className="min-w-[200px] shadow-gold hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-500">
              Explorar Coleções
            </Button>
            <Button variant="elegant" size="xl" className="min-w-[200px] border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all duration-500">
              Nossa História
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '2000ms', animationFillMode: 'forwards' }}>
        <a href="#collections" className="flex flex-col items-center group">

          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-muted-foreground to-transparent group-hover:via-gold transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold/80 animate-accordion-down" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
