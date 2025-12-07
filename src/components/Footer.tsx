import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <span className="text-primary-foreground font-display font-bold text-lg">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gradient-gold font-display font-bold text-lg leading-tight">Vector</span>
              <span className="text-muted-foreground text-xs font-body tracking-widest uppercase">Studio</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>© 2024 Vector Studio. Feito com</span>
            <Heart className="w-4 h-4 text-gold fill-gold" />
          </motion.div>

          {/* Social */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://instagram.com/vectorstudio2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@vectorstudio2</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
