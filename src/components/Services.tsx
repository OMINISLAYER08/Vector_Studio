import { motion } from "framer-motion";
import { Palette, Globe, Shirt, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design de Logos",
    description: "Logos exclusivos e memoráveis que representam a essência da sua marca. Criamos identidades visuais que se destacam.",
    features: ["Logo principal", "Variações de cor", "Manual de marca", "Arquivos em alta"],
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites modernos, responsivos e otimizados para converter visitantes em clientes. Do landing page ao e-commerce.",
    features: ["Design responsivo", "SEO otimizado", "Alta velocidade", "Suporte contínuo"],
  },
  {
    icon: Shirt,
    title: "Camisas Personalizadas",
    description: "Camisas exclusivas com designs únicos para sua marca, eventos ou equipe. Qualidade premium garantida.",
    features: ["Arte exclusiva", "Tecido de qualidade", "Todos os tamanhos", "Entrega rápida"],
    isNew: true,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            O que fazemos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções criativas completas para elevar sua marca ao próximo nível
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-secondary/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-gold"
            >
              {service.isNew && (
                <div className="absolute -top-3 -right-3 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  NOVO
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contato"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
                whileHover={{ x: 5 }}
              >
                Saiba mais
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
