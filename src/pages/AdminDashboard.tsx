import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Ocorreu um erro ao tentar fazer logout.');
    }
  };

  return (
    <>
      <Header />
      <main className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Painel de Administração</h1>
          <p className="text-muted-foreground mb-8">Bem-vindo à área de administração. Aqui você poderá gerenciar o conteúdo do seu site.</p>

          <Button onClick={handleLogout} variant="destructive">
            Sair
          </Button>

          {/* Placeholder for admin functionalities */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gerenciar Logotipos</h2>
              <p className="text-muted-foreground mb-4">Adicione, edite ou remova logotipos do seu portfólio.</p>
              <Button onClick={() => navigate('/admin/logos')}>Ir para Logotipos</Button>
            </div>
            <div className="p-6 border border-border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gerenciar Sites</h2>
              <p className="text-muted-foreground mb-4">Adicione, edite ou remova projetos de sites.</p>
              <Button onClick={() => navigate('/admin/sites')}>Ir para Sites</Button>
            </div>
            <div className="p-6 border border-border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Gerenciar Camisas</h2>
              <p className="text-muted-foreground mb-4">Adicione, edite ou remova designs de camisas.</p>
              <Button onClick={() => navigate('/admin/camisas')}>Ir para Camisas</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;
