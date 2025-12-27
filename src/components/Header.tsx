import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);

    // Extract the element id from href (remove #)
    const elementId = href.replace("#", "");

    if (location.pathname !== "/") {
      // If not on home page, navigate to home with hash
      navigate("/");
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-b border-gold"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2"
        >
          <motion.img
            src={logo}
            alt="Vector Studio Logo"
            className="w-14 h-14 rounded-full object-cover shadow-gold"
            whileHover={{ scale: 1.05 }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href)}
              className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <Button variant="gold" size="lg" onClick={() => window.open("https://wa.me/5519981753659", "_blank")}>
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
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-left text-muted-foreground hover:text-gold transition-colors duration-300 font-medium py-2 bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <Button variant="gold" size="lg" className="mt-2 w-full" onClick={() => window.open("https://wa.me/5519981753659", "_blank")}>
              Orçamento Grátis
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
