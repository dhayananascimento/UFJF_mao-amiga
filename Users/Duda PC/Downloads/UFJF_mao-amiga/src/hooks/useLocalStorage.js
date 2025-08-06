import { useState, useEffect } from 'react';

// Hook customizado para gerenciar dados no localStorage
export const useLocalStorage = (key, initialValue) => {
  // Função para obter valor inicial do localStorage
  const getStoredValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erro ao ler ${key} do localStorage:`, error);
      return initialValue;
    }
  };

  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Função para atualizar o valor
  const setValue = (value) => {
    try {
      // Permitir que value seja uma função para casos como setState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Salvar no estado
      setStoredValue(valueToStore);
      
      // Salvar no localStorage
      if (valueToStore === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  };

  // Sincronizar com mudanças no localStorage de outras abas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error(`Erro ao sincronizar ${key} do localStorage:`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
};

