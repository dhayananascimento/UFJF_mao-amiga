import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, User, Lock, X, ArrowLeft, Upload } from 'lucide-react';
import logoMaoAmiga from '../assets/logo.png';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login, register, isAuthenticated, getHomeRoute } = useAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createStep, setCreateStep] = useState(1);
  const [loginError, setLoginError] = useState('');
  const [createError, setCreateError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Estados do formulário de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Estados do formulário de criação de conta
  const [createForm, setCreateForm] = useState({
    name: '',
    email: '',
    cpf: '',
    birthDate: '',
    phone: '',
    category: '',
    newPassword: '',
    photo: null
  });

  // Redirecionar se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      const homeRoute = getHomeRoute();
      navigate(homeRoute, { replace: true });
    }
  }, [isAuthenticated, navigate, getHomeRoute]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      const result = await login(email, password, rememberMe);
      
      if (result.success) {
        // O redirecionamento será feito pelo useEffect
      } else {
        setLoginError(result.error);
      }
    } catch (error) {
      setLoginError('Erro interno do sistema');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setShowForgotModal(true);
  };

  const handleCreateAccount = () => {
    setShowCreateModal(true);
    setCreateStep(1);
    setCreateError('');
  };

  const handleCreateNext = () => {
    // Validações básicas antes de avançar
    if (!createForm.name || !createForm.email || !createForm.cpf || !createForm.birthDate || !createForm.phone) {
      setCreateError('Todos os campos obrigatórios devem ser preenchidos');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(createForm.email)) {
      setCreateError('Email inválido');
      return;
    }

    setCreateError('');
    setCreateStep(2);
  };

  const handleCreateBack = () => {
    setCreateStep(1);
    setCreateError('');
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCreateError('');

    // Validações finais
    if (!createForm.category || !createForm.newPassword) {
      setCreateError('Categoria e senha são obrigatórios');
      setIsLoading(false);
      return;
    }

    if (createForm.newPassword.length < 6) {
      setCreateError('A senha deve ter pelo menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    try {
      const userData = {
        name: createForm.name,
        email: createForm.email,
        cpf: createForm.cpf,
        birthDate: createForm.birthDate,
        phone: createForm.phone,
        category: createForm.category,
        password: createForm.newPassword,
        photo: createForm.photo
      };

      const result = await register(userData);
      
      if (result.success) {
        // O redirecionamento será feito pelo useEffect
        setShowCreateModal(false);
        setCreateStep(1);
        // Limpar formulário
        setCreateForm({
          name: '',
          email: '',
          cpf: '',
          birthDate: '',
          phone: '',
          category: '',
          newPassword: '',
          photo: null
        });
      } else {
        setCreateError(result.error);
      }
    } catch (error) {
      setCreateError('Erro interno do sistema');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setCreateForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        handleInputChange('photo', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="login-container">
      {/* Background com formas orgânicas */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Logo e slogan */}
      <div className="logo-section">
        <div className="logo">
          <img 
            src={logoMaoAmiga} 
            alt="Mão Amiga - Juntos por Quem Precisa" 
            className="logo-image"
          />
        </div>
      </div>

      {/* Formulário de Login */}
      <div className="login-form-container">
        <div className="login-form">
          <h2>LOGIN</h2>
          <p className="login-subtitle">Preencha os dados do login para acessar</p>
          
          {loginError && (
            <div className="error-alert">
              <span>⚠</span>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <Label htmlFor="email">E-mail</Label>
              <div className="input-with-icon">
                <Input
                  id="email"
                  type="email"
                  placeholder="Informe o seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={loginError ? 'error' : ''}
                  required
                  disabled={isLoading}
                />
                <User className="input-icon" size={20} />
              </div>
            </div>

            <div className="form-group">
              <Label htmlFor="password">Senha</Label>
              <div className="input-with-icon">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Informe sua senha de acesso"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={loginError ? 'error' : ''}
                  required
                  disabled={isLoading}
                />
                <Lock className="input-icon" size={20} />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                  disabled={isLoading}
                />
                <Label htmlFor="remember">Lembrar-me</Label>
              </div>
              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
                disabled={isLoading}
              >
                Esqueceu sua senha?
              </button>
            </div>

            <Button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? 'ENTRANDO...' : 'ENTRAR'}
            </Button>

            <button
              type="button"
              className="create-account"
              onClick={handleCreateAccount}
              disabled={isLoading}
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>

      {/* Modal de Recuperação de Senha */}
      {showForgotModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>RECUPERAÇÃO DE SENHA</h3>
              <button
                className="close-button"
                onClick={() => setShowForgotModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <p className="modal-subtitle">
              Escolha uma das opções abaixo para redefinir sua senha
            </p>
            
            <div className="recovery-options">
              <div className="form-group">
                <Label>E-mail</Label>
                <div className="input-with-icon">
                  <Input
                    type="email"
                    value="clau***********@gmail.com"
                    disabled
                  />
                  <User className="input-icon" size={20} />
                </div>
                <Button className="recovery-button">
                  REDEFINIR SENHA VIA E-MAIL
                </Button>
              </div>

              <div className="form-group">
                <Label>Celular</Label>
                <div className="input-with-icon">
                  <Input
                    type="tel"
                    placeholder="(32)98866-**15"
                  />
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <Button className="recovery-button secondary">
                  REDEFINIR SENHA VIA SMS
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Criar Conta */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              {createStep === 2 && (
                <button
                  className="back-button"
                  onClick={handleCreateBack}
                  disabled={isLoading}
                >
                  <ArrowLeft size={24} />
                </button>
              )}
              <h3>CRIAR CONTA</h3>
              <button
                className="close-button"
                onClick={() => setShowCreateModal(false)}
                disabled={isLoading}
              >
                <X size={24} />
              </button>
            </div>

            {createError && (
              <div className="error-alert">
                <span>⚠</span>
                {createError}
              </div>
            )}

            {createStep === 1 ? (
              <form onSubmit={(e) => { e.preventDefault(); handleCreateNext(); }}>
                <div className="form-group">
                  <Label htmlFor="name">Nome*</Label>
                  <Input
                    id="name"
                    placeholder="Insira seu nome completo"
                    value={createForm.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="create-email">E-mail*</Label>
                  <Input
                    id="create-email"
                    type="email"
                    placeholder="Insira seu e-mail"
                    value={createForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="cpf">CPF*</Label>
                  <Input
                    id="cpf"
                    placeholder="000.000.000-00"
                    value={createForm.cpf}
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="birthDate">Data de Nascimento*</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={createForm.birthDate}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="phone">Celular*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={createForm.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button type="submit" className="advance-button" disabled={isLoading}>
                  {isLoading ? 'VALIDANDO...' : 'AVANÇAR'}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleCreateSubmit}>
                <div className="form-group">
                  <Label>Foto</Label>
                  <div className="photo-upload">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      style={{ display: 'none' }}
                      id="photo-upload"
                      disabled={isLoading}
                    />
                    <label htmlFor="photo-upload" className="upload-button">
                      <Upload size={20} />
                      Anexar foto de perfil
                    </label>
                    {createForm.photo && (
                      <span className="text-sm text-green-600">Foto anexada ✓</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <Label>Categoria*</Label>
                  <div className="radio-group">
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="assistente"
                        name="category"
                        value="assistente"
                        checked={createForm.category === 'assistente'}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        disabled={isLoading}
                      />
                      <Label htmlFor="assistente">Assistente Social</Label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="coordenador"
                        name="category"
                        value="coordenador"
                        checked={createForm.category === 'coordenador'}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        disabled={isLoading}
                      />
                      <Label htmlFor="coordenador">Coordenador</Label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="voluntario"
                        name="category"
                        value="voluntario"
                        checked={createForm.category === 'voluntario'}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        disabled={isLoading}
                      />
                      <Label htmlFor="voluntario">Voluntário</Label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <Label htmlFor="newPassword">Crie uma senha forte*</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="Combinação de letras, números e símbolos"
                    value={createForm.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button type="submit" className="create-button" disabled={isLoading}>
                  {isLoading ? 'CRIANDO...' : 'CRIAR'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

