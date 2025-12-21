import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const ManageSites = () => {
  return (
    <>
      <Header />
      <main className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/admin" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Painel
          </Link>
          <h1 className="text-3xl font-bold mb-8">Gerenciar Sites</h1>
          <p className="text-muted-foreground mb-8">Funcionalidade para adicionar, editar e remover projetos de sites em breve.</p>
          {/* Placeholder for Sites management UI */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ManageSites;
