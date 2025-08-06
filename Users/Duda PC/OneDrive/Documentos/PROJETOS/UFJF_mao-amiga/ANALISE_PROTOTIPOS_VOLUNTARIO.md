# Análise dos Protótipos - Páginas do Voluntário

## 1. Página Registrar Visita (`/voluntario/registros`)

### Layout e Estrutura:
- **Sidebar azul** com navegação do voluntário
- **Header** com título "Registrar Visita"
- **Layout em duas colunas**: Formulário à esquerda, mapa à direita

### Componentes do Formulário:
1. **Data da Visita**
   - Campo de input com placeholder "dd/mm/aaaa"

2. **Pessoas Encontradas**
   - Campo numérico com placeholder "Número ou nomes"

3. **Observações**
   - Textarea para observações detalhadas

4. **Necessidades Identificadas** (Checkboxes):
   - Alimentação
   - Abrigo
   - Saúde

5. **Local da Visita**
   - Mapa interativo à direita

6. **Necessidades Identificadas** (Lista à direita):
   - Alimentação
   - Abrigo
   - Saúde

7. **Ações Realizadas** (Lista à direita):
   - Forneceu alimentação
   - Ofereceu abrigo
   - Encaminhou a assistência social

8. **Botão de Ação**:
   - "SALVAR REGISTRO" (azul)

## 2. Página Necessidades (`/voluntario/necessidades`)

### Layout e Estrutura:
- **Sidebar azul** com navegação do voluntário
- **Header** com título "Necessidades"
- **Layout em cards** organizados em grid

### Componentes dos Cards:
1. **Card de Necessidade #1**:
   - **Título**: "Solicitação #1"
   - **Tipo**: Kit de higiene pessoal
   - **Descrição**: "Uma família de baixa renda está em situação de rua, sem acesso a higiene na rua"
   - **Local**: Rua Tiradentes, 400 - Centro
   - **Status**: Em andamento

2. **Card de Necessidade #2**:
   - **Título**: "Solicitação #1" 
   - **Tipo**: Kit de higiene pessoal
   - **Descrição**: "Uma família de baixa renda está em situação de rua, sem acesso a higiene na rua"
   - **Local**: Rua Tiradentes, 400 - Centro
   - **Status**: Em andamento

### Características dos Cards:
- Design limpo com bordas arredondadas
- Informações organizadas hierarquicamente
- Status visível
- Layout responsivo

## 3. Página Eventos (`/voluntario/eventos`)

### Layout e Estrutura:
- **Sidebar azul** com navegação do voluntário
- **Header** com título "Eventos de Ação Social"
- **Barra de filtros** no topo
- **Lista de eventos** em formato tabular

### Barra de Filtros:
1. **Campo de Pesquisa**: "Pesquise"
2. **Filtro por Data**: Dropdown "Por data"
3. **Filtro por Tipo**: Dropdown "Por tipo de evento"
4. **Botão**: "CRIAR NOVO EVENTO" (azul)

### Lista de Eventos (5 eventos mostrados):
Cada evento contém:
1. **Nome do Evento**: "Nome do Evento"
2. **Data**: "13 abr" / "30 mai" / "31 mar"
3. **Local**: "Organizador" / "Organizador/breve"
4. **Organizador**: "Descrição breve"
5. **Descrição**: "Descrição breve"
6. **Botão**: "Participar" (azul)

### Estrutura da Tabela:
- Headers: Nome do Evento, Data, Local, Organizador, Descrição, Ação
- Linhas alternadas para melhor legibilidade
- Botões de ação consistentes

## Elementos Comuns das Páginas:

### Sidebar (Consistente):
- Logo "Mão Amiga"
- Navegação:
  - Início
  - Registros (ativo na página 1)
  - Necessidades (ativo na página 2)
  - Eventos (ativo na página 3)

### Header (Consistente):
- Breadcrumb: "Vo > [Página Atual]"
- Título da página
- Avatar do usuário no canto superior direito
- Ícone de notificação

### Design System:
- **Cor primária**: Azul (#3b82f6)
- **Backgrounds**: Branco para conteúdo, cinza claro para fundo
- **Tipografia**: Sans-serif moderna
- **Botões**: Azuis com bordas arredondadas
- **Cards**: Sombras suaves, bordas arredondadas
- **Inputs**: Bordas cinzas, focus azul

## Funcionalidades a Implementar:

### Página Registrar Visita:
- Formulário funcional com validação
- Mapa interativo (simulado)
- Checkboxes para necessidades
- Salvamento de dados

### Página Necessidades:
- Grid responsivo de cards
- Dados dinâmicos das necessidades
- Status coloridos
- Layout adaptativo

### Página Eventos:
- Sistema de filtros funcionais
- Tabela responsiva
- Botões de participação
- Modal para criar evento

## Dados de Exemplo:

### Necessidades:
- Tipos: Kit higiene, Alimentação, Abrigo, Saúde
- Locais: Endereços reais de BH/Contagem
- Status: Em andamento, Concluído, Pendente

### Eventos:
- Tipos: Mutirão, Distribuição, Capacitação
- Datas: Variadas ao longo do ano
- Organizadores: ONGs, Prefeitura, Voluntários
- Locais: Diversos bairros

