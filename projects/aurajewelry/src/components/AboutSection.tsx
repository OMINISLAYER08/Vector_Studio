const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background decorative diamond */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <path
            d="M50 10 L75 35 L50 90 L25 35 Z M25 35 L50 45 L75 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-gold"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/20 -z-10" />
              <div className="absolute -inset-8 border border-gold/10 -z-20" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-background p-6 shadow-elegant">
              <p className="font-display text-4xl text-gold mb-1">25+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
                Anos de Tradição
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="md:pl-8">
            <p className="font-body text-xs tracking-[0.4em] text-gold uppercase mb-4">
              Nossa Essência
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8">
              Arte em
              <br />
              <span className="text-gold">Cada Detalhe</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-elegant text-lg leading-relaxed">
              <p>
                Na Aura, acreditamos que verdadeiro luxo reside na simplicidade refinada. 
                Cada peça é meticulosamente criada para transcender tendências passageiras.
              </p>
              <p>
                Nossos artesãos combinam técnicas ancestrais com design contemporâneo, 
                criando joias que contam histórias e celebram momentos únicos.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/30">
              {[
                { value: 'Artesanal', label: 'Feito à mão' },
                { value: 'Exclusivo', label: 'Design único' },
                { value: 'Atemporal', label: 'Elegância eterna' },
              ].map((item) => (
                <div key={item.value} className="text-center">
                  <p className="font-display text-lg text-gold mb-1">{item.value}</p>
                  <p className="text-xs text-muted-foreground font-body tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
