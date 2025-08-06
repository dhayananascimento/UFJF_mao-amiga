# Planejamento - Sistema de Autenticação e Roteamento

## Análise da Aplicação Atual

### Estrutura Existente:
- **Framework**: React com Vite
- **UI**: Radix UI + Tailwind CSS
- **Roteamento**: React Router DOM já instalado
- **Estado**: React hooks (useState)
- **Página atual**: Apenas Login.jsx com modais para criar conta

### Funcionalidades Atuais:
- Formulário de login com validação básica
- Modal de recuperação de senha
- Modal de criação de conta (2 etapas)
- Tipos de usuário: Assistente Social, Coordenador, Voluntário

## Implementação Proposta

### 1. Sistema de Banco Local
- **LocalStorage** para persistência de dados
- **Estrutura de dados**:
  ```javascript
  {
    users: [
      {
        id: string,
        name: string,
        email: string,
        cpf: string,
        birthDate: string,
        phone: string,
        category: 'assistente' | 'coordenador' | 'voluntario',
        password: string (hash),
        photo: string (base64),
        createdAt: timestamp
      }
    ],
    currentUser: user | null
  }
  ```

### 2. Sistema de Autenticação
- **Context API** para gerenciar estado global de autenticação
- **Hooks customizados**: useAuth, useLocalStorage
- **Proteção de rotas** com componente PrivateRoute
- **Logout automático** em caso de dados inválidos

### 3. Estrutura de Roteamento
```
src/
├── pages/
│   ├── Login.jsx (existente)
│   ├── voluntario/
│   │   ├── Home.jsx
│   │   └── [outras páginas futuras]
│   ├── assistente/
│   │   ├── Home.jsx
│   │   └── [outras páginas futuras]
│   └── coordenador/
│       ├── Home.jsx
│       └── [outras páginas futuras]
├── contexts/
│   └── AuthContext.jsx
├── hooks/
│   ├── useAuth.js
│   └── useLocalStorage.js
├── components/
│   ├── PrivateRoute.jsx
│   └── ui/ (existente)
└── utils/
    ├── auth.js
    └── storage.js
```

### 4. Páginas Home por Perfil
- **Voluntário**: Dashboard com ações disponíveis, histórico de atividades
- **Assistente Social**: Painel de casos, relatórios, cadastros
- **Coordenador**: Visão geral, gestão de equipes, relatórios gerenciais

### 5. Navegação e Layout
- **Header** com informações do usuário logado
- **Sidebar** com menu específico por perfil
- **Logout** disponível em todas as páginas

## Próximos Passos
1. Implementar sistema de autenticação e contexto
2. Criar estrutura de pastas e roteamento
3. Desenvolver páginas home específicas
4. Integrar com o formulário de login existente
5. Testes e validação

