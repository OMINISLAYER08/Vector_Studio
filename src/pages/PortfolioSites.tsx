import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSites } from "@/lib/portfolioLoader"; // Import getSites

const PortfolioSites = () => {
  const sites = getSites(); // Get sites dynamically

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
              Aqui estão todos os sites modernos e funcionais que desenvolvemos.
            </p>
          </div>

          {sites.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gold text-2xl font-bold mb-4">Em Breve</p>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Estamos atualizando nosso portfólio com novos projetos de alta performance.
                Fique atento para novidades!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sites.map((site) => (
                <div key={site.id} className="relative bg-card rounded-lg shadow-sm shadow-gold-subtle overflow-hidden border border-border flex flex-col">
                  <img src={site.imageUrl} alt={site.description} className="w-full h-64 object-contain" />
                  <div className="p-4 sm:p-6 bg-gray-800/50 flex-grow border-t border-gold flex flex-col justify-center"> {/* Increased padding, added flex for vertical centering */}
                    {site.description.split('\n\n').map((paragraph, idx) => (
                      idx === 0 ? (
                        <p key={idx} className="text-gold text-lg font-bold mb-2 leading-relaxed hyphens-none text-shadow-gold"> {/* Highlight first paragraph as title/slogan */}
                          {paragraph}
                        </p>
                      ) : (
                        <p key={idx} className="text-gray-300 text-base leading-relaxed mb-1 hyphens-none"> {/* Lighter gray, larger font for body */}
                          {paragraph}
                        </p>
                      )
                    ))}

                    {site.projectUrl && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <a
                          href={site.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-gold hover:bg-gold-light px-4 py-2 rounded-md transition-colors w-full justify-center md:w-auto"
                        >
                          Visitar Site
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        </a>
                      </div>
                    )}
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

export default PortfolioSites;
