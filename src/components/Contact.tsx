import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@vectorstudio2",
      href: "https://instagram.com/vectorstudio2",
      color: "hover:text-pink-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Envie uma mensagem",
      href: "https://wa.me/5500000000000",
      color: "hover:text-green-500",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@vectorstudio.com",
      href: "mailto:contato@vectorstudio.com",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Vamos Conversar
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Transforme sua <span className="text-gradient-gold">marca</span> hoje mesmo
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Entre em contato e receba um orçamento personalizado. 
            Estamos prontos para dar vida às suas ideias!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col items-center gap-4 p-6 bg-secondary/50 rounded-2xl border border-border hover:border-gold/50 transition-all duration-300 ${contact.color}`}
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{contact.label}</div>
                  <div className="text-sm text-muted-foreground">{contact.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              variant="gold"
              size="xl"
              className="group"
              onClick={() => window.open("https://wa.me/5500000000000", "_blank")}
            >
              <Send className="w-5 h-5" />
              Solicitar Orçamento Grátis
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
