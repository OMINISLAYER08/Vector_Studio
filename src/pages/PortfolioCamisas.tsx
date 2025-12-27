import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { getCamisas } from "@/lib/portfolioLoader"; // Import getCamisas

const Clock = () => {
  const [initialTime] = useState(new Date());

  useEffect(() => {
    let animationFrameId: number;

    const updateTime = () => {
      const now = new Date();
      const elapsedMs = now.getTime() - initialTime.getTime();

      // Calculate precise time components
      const totalSeconds = elapsedMs / 1000;
      const seconds = totalSeconds % 60;
      const totalMinutes = totalSeconds / 60;
      const minutes = totalMinutes % 60;
      const totalHours = totalMinutes / 60;
      const hours = (totalHours % 12) + (minutes / 60); // Add fractional hours based on minutes

      const secondDeg = seconds * 6;
      const minuteDeg = minutes * 6;
      const hourDeg = hours * 30;

      // Update the DOM directly for the hands
      const secondHand = document.getElementById('clock-second-hand');
      const minuteHand = document.getElementById('clock-minute-hand');
      const hourHand = document.getElementById('clock-hour-hand');

      if (secondHand) secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
      if (minuteHand) minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
      if (hourHand) hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;

      animationFrameId = requestAnimationFrame(updateTime);
    };

    animationFrameId = requestAnimationFrame(updateTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [initialTime]);

  return (
    <div className="relative w-20 h-20 rounded-full border-4 border-gold flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg shadow-gold/20">
      {/* Hour markings */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-2 bg-gold origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${i * 30}deg)`,
            top: '10%',
            left: '50%',
          }}
        />
      ))}

      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-gold rounded-full z-10"></div>

      {/* Hour Hand */}
      <div
        id="clock-hour-hand"
        className="absolute w-1 h-6 bg-gold origin-bottom rounded-full shadow-sm shadow-gold"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}
      ></div>

      {/* Minute Hand */}
      <div
        id="clock-minute-hand"
        className="absolute w-0.5 h-8 bg-gold origin-bottom rounded-full shadow-sm shadow-gold"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}
      ></div>

      {/* Second Hand */}
      <div
        id="clock-second-hand"
        className="absolute w-0.5 h-7 bg-gold origin-bottom rounded-full opacity-80"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}
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
                    <div className="p-4 sm:p-6 bg-gray-800/50 flex-grow border-t border-gold flex flex-col justify-center"> {/* Increased padding, added flex for vertical centering */}
                      {camisa.description.split('\n\n').map((paragraph, idx) => (
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
