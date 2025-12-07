import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a 
          href="#inicio"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
            <span className="text-primary-foreground font-display font-bold text-xl">V</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gradient-gold font-display font-bold text-xl leading-tight">Vector</span>
            <span className="text-muted-foreground text-xs font-body tracking-widest uppercase">Studio</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          <Button variant="gold" size="lg">
            Orçamento Grátis
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="gold" size="lg" className="mt-2">
              Orçamento Grátis
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
