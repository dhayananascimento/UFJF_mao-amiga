import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User, Settings } from 'lucide-react';
import logoMaoAmiga from '../assets/logo.png';

const Layout = ({ children, title, userType }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const getUserTypeLabel = (category) => {
    switch (category) {
      case 'voluntario':
        return 'Voluntário';
      case 'assistente':
        return 'Assistente Social';
      case 'coordenador':
        return 'Coordenador';
      default:
        return 'Usuário';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo e título */}
            <div className="flex items-center space-x-4">
              <img 
                src={logoMaoAmiga} 
                alt="Mão Amiga" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-500">{getUserTypeLabel(user?.category)}</p>
              </div>
            </div>

            {/* Informações do usuário e logout */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;

