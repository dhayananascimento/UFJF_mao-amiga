import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  loginUser, 
  logoutUser, 
  registerUser, 
  getAuthenticatedUser, 
  isAuthenticated,
  hasPermission,
  updateUser
} from '../utils/auth';

// Criar o contexto
const AuthContext = createContext();

// Hook para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Provider do contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar se há usuário autenticado ao carregar a aplicação
  useEffect(() => {
    const checkAuthenticatedUser = () => {
      try {
        const authenticatedUser = getAuthenticatedUser();
        if (authenticatedUser) {
          setUser(authenticatedUser);
        }
      } catch (error) {
        console.error('Erro ao verificar usuário autenticado:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthenticatedUser();
  }, []);

  // Função de login
  const login = async (email, password, rememberMe = false) => {
    try {
      const result = loginUser(email, password);
      
      if (result.success) {
        setUser(result.user);
        return { success: true, user: result.user };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: 'Erro interno do sistema' };
    }
  };

  // Função de logout
  const logout = () => {
    try {
      logoutUser();
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return { success: false, error: 'Erro ao fazer logout' };
    }
  };

  // Função de registro
  const register = async (userData) => {
    try {
      const result = registerUser(userData);
      
      if (result.success) {
        // Após registrar, fazer login automaticamente
        setUser(result.user);
        return { success: true, user: result.user };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: 'Erro interno do sistema' };
    }
  };

  // Função para atualizar dados do usuário
  const updateProfile = async (updatedData) => {
    try {
      const result = updateUser(updatedData);
      
      if (result.success) {
        setUser(result.user);
        return { success: true, user: result.user };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      return { success: false, error: 'Erro ao atualizar perfil' };
    }
  };

  // Função para verificar permissões
  const checkPermission = (requiredCategory) => {
    return hasPermission(requiredCategory);
  };

  // Função para obter rota home baseada na categoria do usuário
  const getHomeRoute = () => {
    if (!user) return '/';
    
    switch (user.category) {
      case 'voluntario':
        return '/voluntario/home';
      case 'assistente':
        return '/assistente/home';
      case 'coordenador':
        return '/coordenador/home';
      default:
        return '/';
    }
  };

  // Valor do contexto
  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
    updateProfile,
    checkPermission,
    getHomeRoute
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

