import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Import db from your firebase config

interface LogoItem {
  id: string;
  imageUrl: string;
  description: string;
}

const PortfolioLogos = () => {
  const [logos, setLogos] = useState<LogoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "logos"));
        const fetchedLogos: LogoItem[] = [];
        querySnapshot.forEach((doc) => {
          fetchedLogos.push({ id: doc.id, ...doc.data() } as LogoItem);
        });
        setLogos(fetchedLogos);
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

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
              <span className="text-gradient-gold">Portfólio</span> de Logotipos
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Aqui estão todos os logotipos incríveis que criamos.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-muted-foreground">Carregando logotipos...</p>
          ) : logos.length === 0 ? (
            <p className="text-center text-muted-foreground">Nenhum logotipo adicionado ainda.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logos.map((logo) => (
                <div key={logo.id} className="relative bg-card rounded-lg shadow-sm overflow-hidden border border-border">
                  <img src={logo.imageUrl} alt={logo.description} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-muted-foreground text-sm">{logo.description}</p>
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
