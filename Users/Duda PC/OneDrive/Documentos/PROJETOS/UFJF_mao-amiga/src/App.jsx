import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import VoluntarioHome from './pages/voluntario/Home';
import RegistrarVisita from './pages/voluntario/RegistrarVisita';
import Necessidades from './pages/voluntario/Necessidades';
import Eventos from './pages/voluntario/Eventos';
import AssistenteHome from './pages/assistente/Home';
import CoordenadorHome from './pages/coordenador/Home';
import './App.css';

// Componente para redirecionar usuários autenticados
const AuthenticatedRedirect = () => {
  const { user, isAuthenticated } = useAuth();
  
  if (isAuthenticated && user) {
    switch (user.category) {
      case 'voluntario':
        return <Navigate to="/voluntario/home" replace />;
      case 'assistente':
        return <Navigate to="/assistente/home" replace />;
      case 'coordenador':
        return <Navigate to="/coordenador/home" replace />;
      default:
        return <Login />;
    }
  }
  
  return <Login />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rota de login */}
            <Route path="/" element={<AuthenticatedRedirect />} />
            
            {/* Rotas do Voluntário */}
            <Route 
              path="/voluntario/home" 
              element={
                <PrivateRoute requiredCategory="voluntario">
                  <VoluntarioHome />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/voluntario/registros" 
              element={
                <PrivateRoute requiredCategory="voluntario">
                  <RegistrarVisita />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/voluntario/necessidades" 
              element={
                <PrivateRoute requiredCategory="voluntario">
                  <Necessidades />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/voluntario/eventos" 
              element={
                <PrivateRoute requiredCategory="voluntario">
                  <Eventos />
                </PrivateRoute>
              } 
            />
            
            {/* Rotas do Assistente Social */}
            <Route 
              path="/assistente/home" 
              element={
                <PrivateRoute requiredCategory="assistente">
                  <AssistenteHome />
                </PrivateRoute>
              } 
            />
            
            {/* Rotas do Coordenador */}
            <Route 
              path="/coordenador/home" 
              element={
                <PrivateRoute requiredCategory="coordenador">
                  <CoordenadorHome />
                </PrivateRoute>
              } 
            />
            
            {/* Rota padrão - redireciona para home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

