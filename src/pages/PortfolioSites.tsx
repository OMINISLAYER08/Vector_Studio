import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PortfolioSites = () => {
  return (
    <>
      <Header />
      <main className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <div className="text-center mb-16">
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-gradient-gold">Portfólio</span> de Sites
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Aqui estarão todos os sites modernos e funcionais que desenvolvemos. Em breve!
            </p>
          </div>
          {/* Placeholder for sites grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Os futuros sites serão adicionados aqui */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioSites;
