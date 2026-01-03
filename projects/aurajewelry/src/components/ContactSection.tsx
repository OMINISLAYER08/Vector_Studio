import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div>
            <p className="font-body text-xs tracking-[0.4em] text-gold uppercase mb-4">
              Visite-nos
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8">
              Entre em
              <br />
              <span className="text-gold">Contato</span>
            </h2>

            <p className="font-elegant text-lg text-muted-foreground mb-12 leading-relaxed">
              Agende uma visita exclusiva ao nosso atelier e descubra 
              peças únicas criadas especialmente para você.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: 'Endereço',
                  content: 'Rua das Joias, 123 - Centro\nSão Paulo, SP',
                },
                {
                  icon: Phone,
                  title: 'Telefone',
                  content: '+55 (11) 99999-9999',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  content: 'contato@aurajewelry.com',
                },
                {
                  icon: Clock,
                  title: 'Horário',
                  content: 'Seg - Sáb: 10h às 19h',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/30 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1 font-body">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground font-body text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-charcoal p-8 md:p-12 border border-border/30">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Agende sua Visita
            </h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block font-body">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-gold outline-none transition-colors font-body"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block font-body">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-gold outline-none transition-colors font-body"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block font-body">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-gold outline-none transition-colors font-body"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block font-body">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border/50 py-3 text-foreground focus:border-gold outline-none transition-colors resize-none font-body"
                  placeholder="Como podemos ajudá-la?"
                />
              </div>

              <Button variant="gold" size="lg" className="w-full mt-4">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
