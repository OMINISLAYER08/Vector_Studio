import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Only Firestore is needed now
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Trash2, Edit, Plus, Loader2 } from 'lucide-react';

// Cloudinary Configuration
const CLOUDINARY_CLOUD_NAME = 'dc6okxwio';
const CLOUDINARY_UPLOAD_PRESET = 'Vector-Site';
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

interface LogoItem {
  id: string;
  imageUrl: string;
  description: string;
}

const ManageLogos = () => {
  const navigate = useNavigate();
  const [logos, setLogos] = useState<LogoItem[]>([]);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [newDescription, setNewDescription] = useState('');
  const [editingLogo, setEditingLogo] = useState<LogoItem | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    const querySnapshot = await getDocs(collection(db, 'logos'));
    const fetchedLogos: LogoItem[] = [];
    querySnapshot.forEach((doc) => {
      fetchedLogos.push({ id: doc.id, ...doc.data() } as LogoItem);
    });
    setLogos(fetchedLogos.sort((a, b) => a.description.localeCompare(b.description))); // Sort alphabetically
  };

  const resetForm = () => {
    setNewImage(null);
    setImagePreview(null);
    setNewDescription('');
    setEditingLogo(null);
    setIsUploading(false);
    if(fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddOrUpdateLogo = async () => {
    if (editingLogo) {
      // Logic for updating an existing logo record in Firestore (image might not change)
      if (!newDescription.trim()) {
        alert('Por favor, adicione uma descrição.');
        return;
      }
    } else {
      // Logic for adding a new logo
      if (!newImage) {
        alert('Por favor, selecione uma imagem.');
        return;
      }
      if (!newDescription.trim()) {
        alert('Por favor, adicione uma descrição.');
        return;
      }
    }

    setIsUploading(true);

    try {
      let imageUrl = editingLogo ? editingLogo.imageUrl : '';

      if (newImage) {
        // Upload image to Cloudinary
        const formData = new FormData();
        formData.append('file', newImage);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        const response = await fetch(CLOUDINARY_UPLOAD_URL, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Cloudinary upload failed');
        }

        const data = await response.json();
        imageUrl = data.secure_url; // Get the secure URL from Cloudinary

        // If editing and uploaded a new image, the old Cloudinary image will remain unless manually deleted
        // Cloudinary deletion from frontend without exposing API secret is complex.
        // For this basic setup, we'll only update the Firestore record.
      }

      if (editingLogo) {
        // Update existing logo record in Firestore
        const logoRef = doc(db, 'logos', editingLogo.id);
        await updateDoc(logoRef, { imageUrl, description: newDescription });
      } else {
        // Add new logo record to Firestore
        await addDoc(collection(db, 'logos'), { imageUrl, description: newDescription });
      }

      resetForm();
      fetchLogos();
    } catch (error) {
      console.error('Error adding/updating logo:', error);
      alert('Ocorreu um erro ao salvar o logotipo. Verifique o console para mais detalhes.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteLogo = async (id: string, imageUrl: string) => {
    if (window.confirm('Tem certeza de que deseja excluir este logotipo?')) {
      try {
        await deleteDoc(doc(db, 'logos', id));
        // Note: The image in Cloudinary will not be deleted from here.
        // Manual deletion from Cloudinary dashboard or a backend service is required.
        fetchLogos();
      } catch (error) {
        console.error('Error deleting logo:', error);
        alert('Ocorreu um erro ao excluir o logotipo.');
      }
    }
  };

  const handleEditClick = (logo: LogoItem) => {
    setEditingLogo(logo);
    setImagePreview(logo.imageUrl);
    setNewDescription(logo.description);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/admin" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Painel
          </Link>
          <h1 className="text-3xl font-bold mb-8">Gerenciar Logotipos</h1>

          {/* Add/Edit Form */}
          <div className="bg-card p-6 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">{editingLogo ? 'Editar Logotipo' : 'Adicionar Novo Logotipo'}</h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image Upload Block */}
              <div className="flex-shrink-0">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                {!imagePreview ? (
                   <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-64 h-64 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <Plus className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-muted-foreground">Enviar Imagem</p>
                  </div>
                ) : (
                  <div className="relative w-64 h-64">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                     <Button variant="outline" size="sm" onClick={() => {setNewImage(null); setImagePreview(null); if(fileInputRef.current) fileInputRef.current.value = '';}} className="absolute top-2 right-2">
                       Alterar
                     </Button>
                  </div>
                )}
              </div>
              
              {/* Description & Save */}
              {(imagePreview || editingLogo) && (
                <div className="flex-grow">
                  <label htmlFor="description" className="block text-sm font-medium mb-1">Descrição</label>
                  <Textarea
                    id="description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Descreva o logotipo..."
                    rows={5}
                  />
                  <div className="mt-6 flex items-center gap-4">
                    <Button onClick={handleAddOrUpdateLogo} disabled={isUploading}>
                      {isUploading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Salvando...</>
                      ) : (
                        editingLogo ? 'Atualizar Logotipo' : 'Adicionar Logotipo'
                      )}
                    </Button>
                    {editingLogo && (
                      <Button variant="outline" onClick={resetForm} disabled={isUploading}>
                        Cancelar Edição
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* List of Logos */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Logotipos Existentes</h2>
            {logos.length === 0 ? (
              <p className="text-muted-foreground">Nenhum logotipo adicionado ainda.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {logos.map((logo) => (
                  <div key={logo.id} className="relative bg-card rounded-lg shadow-sm overflow-hidden border border-border group">
                    <div className="aspect-square bg-muted">
                      <img src={logo.imageUrl} alt={logo.description} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground text-sm truncate">{logo.description}</p>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="outline" size="icon" onClick={() => handleEditClick(logo)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteLogo(logo.id, logo.imageUrl)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
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

export default ManageLogos;