import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Coleções', href: '#collections' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/40 py-2'
          : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex flex-col items-center group relative z-50">
            <span className={`font-display tracking-[0.3em] text-foreground group-hover:text-gold transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              AURA
            </span>
            <span className={`text-[10px] tracking-[0.3em] text-muted-foreground font-body uppercase transition-all duration-500 ${isScrolled ? 'opacity-0 h-0 hidden' : 'opacity-100'}`}>
              Jewelry
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs tracking-[0.2em] text-muted-foreground/80 hover:text-gold transition-colors duration-300 font-body uppercase group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="goldOutline"
              size={isScrolled ? "sm" : "default"}
              className={`transition-all duration-300 ${isScrolled ? 'text-xs px-4 h-8' : ''}`}
            >
              Agendar Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-gold transition-colors relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-xl flex items-center justify-center z-40 animate-fade-in">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl tracking-[0.2em] text-foreground hover:text-gold transition-colors duration-300 font-display italic"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-8 px-8">
                Agendar Visita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
