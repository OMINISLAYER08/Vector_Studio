import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLogos, type PortfolioItem } from "@/lib/portfolioLoader";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const PortfolioLogos = () => {
  const [selectedLogo, setSelectedLogo] = useState<PortfolioItem | null>(null);
  const logos = getLogos();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <>
      <Header />
      <main className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Início
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
              <span className="text-gradient-gold drop-shadow-sm">Portfólio</span>{" "}
              <span className="text-foreground">de Logotipos</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Descubra a identidade única que criamos para marcas visionárias.
            </p>
          </motion.div>

          {logos.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground"
            >
              Nenhum logotipo adicionado ainda.
            </motion.p>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {logos.map((logo) => (
                <Dialog key={logo.id}>
                  <DialogTrigger asChild>
                    <motion.div
                      variants={item}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="group cursor-pointer relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 shadow-lg hover:shadow-gold/10 flex flex-col h-full"
                      onClick={() => setSelectedLogo(logo)}
                    >
                      {/* Image Container */}
                      <div className="relative h-64 w-full bg-gradient-to-br from-black/80 to-black/40 p-6 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={logo.imageUrl}
                          alt={logo.description}
                          className="w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-gold font-medium flex items-center gap-2 border border-gold/30 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md">
                            <ZoomIn className="w-4 h-4" />
                            Visualizar
                          </span>
                        </div>
                      </div>

                      {/* Content Container */}
                      <div className="p-6 flex-grow flex flex-col justify-center border-t border-white/5 bg-gradient-to-b from-transparent to-black/20">
                        {logo.description.split("\n\n").map((paragraph, idx) =>
                          idx === 0 ? (
                            <h3
                              key={idx}
                              className="text-gold text-xl font-bold mb-3 leading-tight font-display tracking-wide"
                            >
                              {paragraph}
                            </h3>
                          ) : (
                            <p
                              key={idx}
                              className="text-muted-foreground text-sm leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    </motion.div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl w-[95vw] bg-black/95 border-gold/20 p-0 overflow-hidden shadow-2xl shadow-gold/20 backdrop-blur-xl">
                    <VisuallyHidden.Root>
                      <DialogTitle>{logo.description.split("\n\n")[0]}</DialogTitle>
                    </VisuallyHidden.Root>
                    <div className="relative flex flex-col md:flex-row h-[85dvh] md:h-[750px]">
                      {/* Close Button */}
                      <DialogClose className="absolute top-4 right-4 z-50 text-white/50 hover:text-white bg-black/50 rounded-full p-2 transition-colors">
                        <X className="w-6 h-6" />
                      </DialogClose>

                      {/* Image Side */}
                      <div className="w-full md:w-2/3 bg-radial-gradient flex items-center justify-center p-8 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-black to-black -z-10" />
                        <img
                          src={logo.imageUrl}
                          alt={logo.description}
                          className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                        />
                      </div>

                      {/* Info Side */}
                      <div className="w-full md:w-1/3 border-l border-white/10 bg-card/30 flex flex-col h-full overflow-hidden">
                        <ScrollArea className="h-full w-full p-8">
                          <h2 className="text-2xl md:text-3xl font-bold text-gold font-display mb-6">
                            {logo.description.split("\n\n")[0]}
                          </h2>
                          <div className="space-y-4 text-gray-300">
                            {logo.description.split("\n\n").slice(1).map((paragraph, idx) => (
                              <p key={idx} className="leading-relaxed text-sm md:text-base">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioLogos;
