import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Componente para proteger rotas que requerem autenticação
const PrivateRoute = ({ children, requiredCategory = null }) => {
  const { user, loading, isAuthenticated, checkPermission } = useAuth();
  const location = useLocation();

  // Mostrar loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Redirecionar para login se não estiver autenticado
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Verificar permissão específica se necessário
  if (requiredCategory && !checkPermission(requiredCategory)) {
    // Redirecionar para a página home do usuário se não tiver permissão
    const homeRoute = getHomeRouteForUser(user);
    return <Navigate to={homeRoute} replace />;
  }

  return children;
};

// Função auxiliar para obter rota home baseada na categoria
const getHomeRouteForUser = (user) => {
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

export default PrivateRoute;

