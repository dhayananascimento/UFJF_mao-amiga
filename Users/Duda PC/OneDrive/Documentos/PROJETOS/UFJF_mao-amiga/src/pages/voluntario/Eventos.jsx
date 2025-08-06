import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Home,
  FileText,
  Heart,
  Calendar,
  Bell,
  Search,
  Plus
} from 'lucide-react';

const Eventos = () => {
  const [filtros, setFiltros] = useState({
    pesquisa: '',
    data: '',
    tipo: ''
  });

  const eventos = [
    {
      id: 1,
      nome: 'Mutirão de Limpeza',
      data: '13 abr',
      local: 'Praça da Liberdade',
      organizador: 'Prefeitura de BH',
      descricao: 'Limpeza e revitalização da praça'
    },
    {
      id: 2,
      nome: 'Distribuição de Alimentos',
      data: '30 mai',
      local: 'Centro Comunitário',
      organizador: 'ONG Esperança',
      descricao: 'Distribuição de cestas básicas'
    },
    {
      id: 3,
      nome: 'Campanha de Vacinação',
      data: '31 mar',
      local: 'UBS Santa Efigênia',
      organizador: 'Secretaria de Saúde',
      descricao: 'Vacinação contra gripe'
    },
    {
      id: 4,
      nome: 'Arrecadação de Roupas',
      data: '15 jun',
      local: 'Shopping Center',
      organizador: 'Voluntários Unidos',
      descricao: 'Coleta de roupas para doação'
    },
    {
      id: 5,
      nome: 'Oficina de Capacitação',
      data: '22 jul',
      local: 'Centro de Convenções',
      organizador: 'Instituto Social',
      descricao: 'Capacitação profissional'
    }
  ];

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handleParticipar = (eventoId) => {
    alert(`Inscrição realizada no evento ${eventoId}!`);
  };

  const handleCriarEvento = () => {
    alert('Funcionalidade de criar evento em desenvolvimento!');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        {/* User Info */}
        <div className="p-4 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">V</span>
            </div>
            <div>
              <p className="font-medium">Vo Voluntário</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="/voluntario/home" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Home size={20} />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="/voluntario/registros" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <FileText size={20} />
                <span>Registros</span>
              </a>
            </li>
            <li>
              <a href="/voluntario/necessidades" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Heart size={20} />
                <span>Necessidades</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
                <Calendar size={20} />
                <span>Eventos</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Logo */}
        <div className="p-6 border-t border-blue-500 mt-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Mão Amiga</h1>
              <p className="text-blue-200 text-sm">Juntos por Quem Precisa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Vo &gt; Eventos</p>
              <h1 className="text-2xl font-semibold text-gray-800 mt-1">
                Eventos de Ação Social
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-400" />
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">J</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Barra de Filtros */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Campo de Pesquisa */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Pesquise"
                  value={filtros.pesquisa}
                  onChange={(e) => handleFiltroChange('pesquisa', e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filtro por Data */}
              <div className="w-full lg:w-48">
                <Select value={filtros.data} onValueChange={(value) => handleFiltroChange('data', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Por data" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hoje">Hoje</SelectItem>
                    <SelectItem value="semana">Esta semana</SelectItem>
                    <SelectItem value="mes">Este mês</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Filtro por Tipo */}
              <div className="w-full lg:w-48">
                <Select value={filtros.tipo} onValueChange={(value) => handleFiltroChange('tipo', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Por tipo de evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mutirao">Mutirão</SelectItem>
                    <SelectItem value="distribuicao">Distribuição</SelectItem>
                    <SelectItem value="capacitacao">Capacitação</SelectItem>
                    <SelectItem value="campanha">Campanha</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Botão Criar Evento */}
              <Button 
                onClick={handleCriarEvento}
                className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
              >
                <Plus className="w-4 h-4 mr-2" />
                CRIAR NOVO EVENTO
              </Button>
            </div>
          </div>

          {/* Tabela de Eventos */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome do Evento
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Local
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Organizador
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descrição
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ação
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {eventos.map((evento, index) => (
                    <tr key={evento.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {evento.nome}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{evento.data}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{evento.local}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{evento.organizador}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs truncate">
                          {evento.descricao}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button
                          onClick={() => handleParticipar(evento.id)}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Participar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mensagem quando não há eventos */}
          {eventos.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Nenhum evento encontrado
              </h3>
              <p className="text-gray-500">
                Quando houver eventos disponíveis, eles aparecerão aqui.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Eventos;

