import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CollectionsSection from '@/components/CollectionsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aura Jewelry | Joalheria Exclusiva - Luxo Essencial</title>
        <meta 
          name="description" 
          content="Aura Jewelry - Design que transcende o tempo. Joias minimalistas criadas para exaltar a elegância natural. Luxo essencial em cada detalhe." 
        />
        <meta name="keywords" content="joalheria, joias, luxo, anéis, colares, brincos, ouro, diamante" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <CollectionsSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
