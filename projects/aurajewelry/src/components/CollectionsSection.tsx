import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Eternité',
    description: 'Anéis que simbolizam amor eterno',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    name: 'Lumière',
    description: 'Brincos que capturam a luz',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    name: 'Essence',
    description: 'Colares minimalistas atemporais',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
  },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-body text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Criações Exclusivas
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-wide text-foreground mb-6">
            Nossas Coleções
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Collections grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image container */}
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <div className="absolute inset-0 bg-charcoal" />
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
                
                {/* Border */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display text-2xl tracking-wide text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {collection.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs tracking-[0.2em] uppercase font-body">
                    Ver Coleção
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
