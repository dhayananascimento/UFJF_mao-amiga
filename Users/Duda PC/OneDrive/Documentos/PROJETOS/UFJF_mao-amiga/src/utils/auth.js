import { getUsers, saveUsers, getCurrentUser, setCurrentUser, clearCurrentUser } from './storage';

// Função simples para hash de senha (em produção, usar bcrypt ou similar)
const hashPassword = (password) => {
  // Implementação simples para demonstração
  // Em produção, usar uma biblioteca de hash segura
  return btoa(password + 'mao_amiga_salt');
};

// Função para verificar senha
const verifyPassword = (password, hashedPassword) => {
  return hashPassword(password) === hashedPassword;
};

// Função para gerar ID único
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Função para validar email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar CPF (validação básica)
const isValidCPF = (cpf) => {
  const cleanCPF = cpf.replace(/\D/g, '');
  return cleanCPF.length === 11;
};

// Função para registrar novo usuário
export const registerUser = (userData) => {
  try {
    // Validações
    if (!userData.name || !userData.email || !userData.password || !userData.category) {
      throw new Error('Todos os campos obrigatórios devem ser preenchidos');
    }

    if (!isValidEmail(userData.email)) {
      throw new Error('Email inválido');
    }

    if (!isValidCPF(userData.cpf)) {
      throw new Error('CPF inválido');
    }

    if (userData.password.length < 6) {
      throw new Error('A senha deve ter pelo menos 6 caracteres');
    }

    const users = getUsers();
    
    // Verificar se email já existe
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('Este email já está cadastrado');
    }

    // Verificar se CPF já existe
    const existingCPF = users.find(user => user.cpf === userData.cpf);
    if (existingCPF) {
      throw new Error('Este CPF já está cadastrado');
    }

    // Criar novo usuário
    const newUser = {
      id: generateId(),
      name: userData.name,
      email: userData.email,
      cpf: userData.cpf,
      birthDate: userData.birthDate,
      phone: userData.phone,
      category: userData.category,
      password: hashPassword(userData.password),
      photo: userData.photo || null,
      createdAt: new Date().toISOString()
    };

    // Salvar usuário
    users.push(newUser);
    saveUsers(users);

    // Retornar usuário sem a senha
    const { password, ...userWithoutPassword } = newUser;
    return { success: true, user: userWithoutPassword };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Função para fazer login
export const loginUser = (email, password) => {
  try {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios');
    }

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      throw new Error('Email ou senha incorretos');
    }

    if (!verifyPassword(password, user.password)) {
      throw new Error('Email ou senha incorretos');
    }

    // Salvar usuário atual (sem a senha)
    const { password: _, ...userWithoutPassword } = user;
    setCurrentUser(userWithoutPassword);

    return { success: true, user: userWithoutPassword };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Função para fazer logout
export const logoutUser = () => {
  clearCurrentUser();
  return { success: true };
};

// Função para obter usuário atual
export const getAuthenticatedUser = () => {
  return getCurrentUser();
};

// Função para verificar se usuário está autenticado
export const isAuthenticated = () => {
  const user = getCurrentUser();
  return user !== null;
};

// Função para verificar se usuário tem permissão específica
export const hasPermission = (requiredCategory) => {
  const user = getCurrentUser();
  if (!user) return false;
  
  // Coordenador tem acesso a tudo
  if (user.category === 'coordenador') return true;
  
  // Verificar categoria específica
  return user.category === requiredCategory;
};

// Função para atualizar dados do usuário
export const updateUser = (updatedData) => {
  try {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      throw new Error('Usuário não autenticado');
    }

    const users = getUsers();
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
      throw new Error('Usuário não encontrado');
    }

    // Atualizar dados (exceto senha e categoria)
    const updatedUser = {
      ...users[userIndex],
      ...updatedData,
      id: currentUser.id, // Manter ID original
      category: users[userIndex].category, // Manter categoria original
      password: users[userIndex].password, // Manter senha original
      updatedAt: new Date().toISOString()
    };

    users[userIndex] = updatedUser;
    saveUsers(users);

    // Atualizar usuário atual
    const { password, ...userWithoutPassword } = updatedUser;
    setCurrentUser(userWithoutPassword);

    return { success: true, user: userWithoutPassword };

  } catch (error) {
    return { success: false, error: error.message };
  }
};

