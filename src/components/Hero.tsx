import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const stats = [
    { value: "+50", label: "Projetos Entregues" },
    { value: "100%", label: "Satisfação" },
    // Removed "+5 Anos de Experiência"
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 md:bg-background/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8 shadow-gold/10"
          >
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Criatividade sem limites para sua marca
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Transformamos suas{" "}
            <span className="text-gradient-gold">ideias</span> em{" "}
            <span className="text-gradient-gold">designs incríveis</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            Logos marcantes, sites modernos e camisas personalizadas.
            Destaque-se no mercado com uma identidade visual única e profissional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="gold" size="xl" className="group shadow-gold/20 hover:shadow-gold/40 transition-shadow duration-300" onClick={() => window.open("https://wa.me/5519981753659?text=Quero%20o%20orçamento%20para%20meu%20projeto", "_blank")}>
              Solicite seu Orçamento
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="goldOutline" size="xl" className="backdrop-blur-sm bg-background/50 hover:bg-background/80" onClick={() => {
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver Portfólio
            </Button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl md:text-4xl font-bold text-gold font-display mb-1">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
