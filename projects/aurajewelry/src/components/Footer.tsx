import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-charcoal-deep border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-2xl tracking-[0.3em] text-foreground mb-1">
              AURA
            </span>
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-body uppercase">
              Jewelry
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-border/30 hover:border-gold hover:text-gold text-muted-foreground transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-border/30 hover:border-gold hover:text-gold text-muted-foreground transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-body tracking-wide text-center md:text-right">
            © 2024 Aura Jewelry. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
