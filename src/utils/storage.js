// Utilitários para gerenciar dados no localStorage

const STORAGE_KEYS = {
  USERS: 'mao_amiga_users',
  CURRENT_USER: 'mao_amiga_current_user'
};

// Função para obter dados do localStorage
export const getStorageData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Erro ao ler dados do localStorage:', error);
    return null;
  }
};

// Função para salvar dados no localStorage
export const setStorageData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Erro ao salvar dados no localStorage:', error);
    return false;
  }
};

// Função para remover dados do localStorage
export const removeStorageData = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Erro ao remover dados do localStorage:', error);
    return false;
  }
};

// Função para obter todos os usuários
export const getUsers = () => {
  return getStorageData(STORAGE_KEYS.USERS) || [];
};

// Função para salvar lista de usuários
export const saveUsers = (users) => {
  return setStorageData(STORAGE_KEYS.USERS, users);
};

// Função para obter usuário atual
export const getCurrentUser = () => {
  return getStorageData(STORAGE_KEYS.CURRENT_USER);
};

// Função para salvar usuário atual
export const setCurrentUser = (user) => {
  return setStorageData(STORAGE_KEYS.CURRENT_USER, user);
};

// Função para remover usuário atual (logout)
export const clearCurrentUser = () => {
  return removeStorageData(STORAGE_KEYS.CURRENT_USER);
};

// Função para limpar todos os dados
export const clearAllData = () => {
  removeStorageData(STORAGE_KEYS.USERS);
  removeStorageData(STORAGE_KEYS.CURRENT_USER);
};

