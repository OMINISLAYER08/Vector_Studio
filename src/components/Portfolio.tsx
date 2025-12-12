import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Brand Identity",
    category: "Logo Design",
    gradient: "from-gold/20 to-gold-dark/20",
  },
  {
    title: "E-commerce Premium",
    category: "Web Design",
    gradient: "from-gold-dark/20 to-gold/20",
  },
  {
    title: "Coleção Urban",
    category: "Camisas",
    gradient: "from-gold/30 to-transparent",
  },
  {
    title: "Startup Tech",
    category: "Logo Design",
    gradient: "from-transparent to-gold/20",
  },
  {
    title: "Landing Page",
    category: "Web Design",
    gradient: "from-gold/20 to-gold-light/20",
  },
  {
    title: "Edição Limitada",
    category: "Camisas",
    gradient: "from-gold-light/20 to-gold/20",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Nossos Trabalhos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            <span className="text-gradient-gold">Portfólio</span> de Projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-gold/50 transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} bg-secondary`} />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-32 h-32 border-2 border-gold rounded-full" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-sm font-medium">{item.category}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Icon */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="w-5 h-5 text-gold" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/vectorstudio2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            Ver mais no Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
