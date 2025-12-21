import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react'; 

// Changed to Globe for consistency

const ADMIN_EMAILS = [
  "omnslayer@gmail.com",
  "venamciofrancisco@gmail.com"
];

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const email = user.email;
        if (email && ADMIN_EMAILS.includes(email)) {
          navigate('/admin'); // Redirect to admin dashboard
        } else {
          // Optional: redirect regular users to a different page or show an error
          navigate('/'); // Redirect to homepage for non-admins
          alert('Apenas administradores podem acessar esta página.');
          auth.signOut(); // Sign out non-admins
        }
      } else {
        // User is signed out
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error during Google login:', error);
      alert('Ocorreu um erro ao tentar fazer login com o Google.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 border border-border rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Login de Administrador</h1>
        <Button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2">
          <Globe className="w-5 h-5" />
          Entrar com Google
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Apenas administradores cadastrados podem acessar.
        </p>
      </div>
    </div>
  );
};

export default Login;
