import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Helena Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "A Aura Jewelry superou todas as minhas expectativas. O anel de noivado que meu marido escolheu é simplesmente perfeito. O atendimento foi impecável do início ao fim.",
    product: "Anel Solitário Eternité"
  },
  {
    id: 2,
    name: "Carolina Mendes",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Comprei um colar para presentear minha mãe no aniversário de 60 anos. Ela chorou de emoção. A qualidade é excepcional e o design é atemporal.",
    product: "Colar Pérolas Clássicas"
  },
  {
    id: 3,
    name: "Fernanda Oliveira",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Já sou cliente há 5 anos e não troco por nada. Cada peça que tenho da Aura é especial e única. O acabamento é impecável.",
    product: "Brincos Gota de Ouro"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-charcoal-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-elegant">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-charcoal/50 backdrop-blur-sm border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-charcoal" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-ivory/80 font-elegant leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Product Tag */}
              <div className="mb-6">
                <span className="text-xs text-gold/60 tracking-wider uppercase">
                  {testimonial.product}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 mb-6" />

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center border border-gold/20">
                  <span className="text-gold font-display text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-ivory font-display text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-ivory/50 text-xs font-elegant">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display text-gold mb-2">500+</div>
            <p className="text-ivory/60 text-sm font-elegant tracking-wider uppercase">Clientes Satisfeitos</p>
          </div>
          <div className="w-px h-12 bg-gold/20 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display text-gold mb-2">25+</div>
            <p className="text-ivory/60 text-sm font-elegant tracking-wider uppercase">Anos de Experiência</p>
          </div>
          <div className="w-px h-12 bg-gold/20 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display text-gold mb-2">100%</div>
            <p className="text-ivory/60 text-sm font-elegant tracking-wider uppercase">Joias Certificadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
