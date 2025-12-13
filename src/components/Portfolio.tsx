import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "Café Bourbon",
    category: "Logo Design",
    description: "Identidade visual para cafeteria premium",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=450&fit=crop",
  },
  {
    title: "TechFlow Solutions",
    category: "Web Design",
    description: "Site institucional moderno",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop",
  },
  {
    title: "Coleção Urban Style",
    category: "Camisas",
    description: "Linha de camisetas streetwear",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=450&fit=crop",
  },
  {
    title: "Bella Cucina",
    category: "Logo Design",
    description: "Logotipo para restaurante italiano",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=450&fit=crop",
  },
  {
    title: "FitLife Academy",
    category: "Web Design",
    description: "Plataforma para academia",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=450&fit=crop",
  },
  {
    title: "Rock Festival",
    category: "Camisas",
    description: "Camisetas para evento musical",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=450&fit=crop",
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
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/60 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-sm font-medium">{item.category}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
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
