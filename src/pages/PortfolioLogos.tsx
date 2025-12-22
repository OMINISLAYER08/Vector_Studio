import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLogos } from "@/lib/portfolioLoader";

const PortfolioLogos = () => {
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
              <span className="text-gradient-gold">Portfólio</span> de Logotipos (Estático)
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Aqui estão todos os logotipos incríveis que criamos.
            </p>
          </div>

          {getLogos().length === 0 ? (
            <p className="text-center text-muted-foreground">Nenhum logotipo estático adicionado ainda.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getLogos().map((logo) => (
                <div key={logo.id} className="relative bg-card rounded-lg shadow-sm overflow-hidden border border-border flex flex-col">
                  <img src={logo.imageUrl} alt={logo.description} className="w-full h-48 object-cover" />
                  <div className="p-4 bg-gray-800/50 flex-grow border-t border-gold"> {/* Description area styled as a box */}
                    <p className="text-muted-foreground text-sm leading-relaxed">{logo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioLogos;
