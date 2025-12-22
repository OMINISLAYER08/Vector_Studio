import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { getCamisas } from "@/lib/portfolioLoader"; // Import getCamisas

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1800); // Update every 1.8 seconds
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="relative w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center bg-gray-800">
      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-gold rounded-full z-10"></div>

      {/* Hour Hand */}
      <div
        className="absolute h-6 w-0.5 bg-gold origin-bottom rounded-t-sm"
        style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
      ></div>

      {/* Minute Hand */}
      <div
        className="absolute h-8 w-0.5 bg-gold origin-bottom rounded-t-sm"
        style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
      ></div>

      {/* Second Hand */}
      <div
        className="absolute h-7 w-0.5 bg-red-500 origin-bottom rounded-t-sm"
        style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
      ></div>
    </div>
  );
};

const PortfolioCamisas = () => {
  const camisas = getCamisas(); // Get camisas dynamically

  return (
    <>
      <Header />
      <main className="py-24 bg-background min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Início
          </Link>
          <div className="flex flex-col items-center justify-center mb-16 space-y-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-2">
              <span className="text-gradient-gold">Camisas</span> Personalizadas
            </h1>
            {camisas.length === 0 ? (
              <>
                <p className="text-gold text-2xl md:text-3xl font-semibold animate-pulse">
                  Em Breve!
                </p>
                <div className="flex items-center gap-4">
                  <Clock />
                  <p className="text-muted-foreground max-w-2xl text-lg md:text-xl">
                    Nossa coleção exclusiva de estampas e designs para vestuário está sendo preparada com muito carinho. Fique ligado!
                  </p>
                </div>
              </>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {camisas.map((camisa) => (
                  <div key={camisa.id} className="relative bg-card rounded-lg shadow-sm shadow-gold-subtle overflow-hidden border border-border flex flex-col">
                                      <img src={camisa.imageUrl} alt={camisa.description} className="w-full h-64 object-contain" />
                                      <div className="p-6 bg-gray-800/50 flex-grow border-t border-gold flex flex-col justify-center"> {/* Increased padding, added flex for vertical centering */}
                                        {camisa.description.split('\n\n').map((paragraph, idx) => (
                                          idx === 0 ? (
                                            <p key={idx} className="text-gold text-lg font-bold mb-2 leading-relaxed hyphens-none"> {/* Highlight first paragraph as title/slogan */}
                                              {paragraph}
                                            </p>
                                          ) : (
                                            <p key={idx} className="text-gray-300 text-base leading-relaxed mb-1 hyphens-none"> {/* Lighter gray, larger font for body */}
                                              {paragraph}
                                            </p>
                                          )
                                        ))}
                                      </div>                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioCamisas;
