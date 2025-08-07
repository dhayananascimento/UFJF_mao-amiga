import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home,
  FileText,
  Heart,
  Calendar,
  Bell,
  MapPin,
  Clock,
  User
} from 'lucide-react';

const Necessidades = () => {
  const necessidades = [
    {
      id: 1,
      titulo: 'Solicitação #1',
      tipo: 'Kit de higiene pessoal',
      descricao: 'Uma família de baixa renda está em situação de rua, sem acesso a higiene na rua',
      local: 'Rua Tiradentes, 400 - Centro',
      status: 'Em andamento',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 2,
      titulo: 'Solicitação #1',
      tipo: 'Kit de higiene pessoal', 
      descricao: 'Uma família de baixa renda está em situação de rua, sem acesso a higiene na rua',
      local: 'Rua Tiradentes, 400 - Centro',
      status: 'Em andamento',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 3,
      titulo: 'Solicitação #2',
      tipo: 'Alimentação básica',
      descricao: 'Família com crianças pequenas necessita de alimentos básicos para subsistência',
      local: 'Av. Brasil, 1200 - Santa Efigênia',
      status: 'Pendente',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 4,
      titulo: 'Solicitação #3',
      tipo: 'Medicamentos',
      descricao: 'Idoso diabético precisa de medicamentos para controle da diabetes',
      local: 'Rua das Flores, 85 - Centro',
      status: 'Concluído',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 5,
      titulo: 'Solicitação #4',
      tipo: 'Roupas de inverno',
      descricao: 'Pessoas em situação de rua necessitam de roupas adequadas para o frio',
      local: 'Praça da Estação - Centro',
      status: 'Em andamento',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 6,
      titulo: 'Solicitação #5',
      tipo: 'Material escolar',
      descricao: 'Crianças de família carente precisam de material escolar para o ano letivo',
      local: 'Rua Amazonas, 300 - Funcionários',
      status: 'Pendente',
      statusColor: 'bg-red-100 text-red-800'
    }
  ];

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
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
                <Heart size={20} />
                <span>Necessidades</span>
              </a>
            </li>
            <li>
              <a href="/voluntario/eventos" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
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
              <p className="text-sm text-gray-600">Vo &gt; Necessidades</p>
              <h1 className="text-2xl font-semibold text-gray-800 mt-1">
                Necessidades
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {necessidades.map((necessidade) => (
              <Card key={necessidade.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      {necessidade.titulo}
                    </CardTitle>
                    <Badge className={`${necessidade.statusColor} border-0`}>
                      {necessidade.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tipo */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Tipo:</p>
                    <p className="text-sm text-gray-800">{necessidade.tipo}</p>
                  </div>

                  {/* Descrição */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Descrição:</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {necessidade.descricao}
                    </p>
                  </div>

                  {/* Local */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Local:</p>
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} className="text-gray-400" />
                      <p className="text-sm text-gray-700">{necessidade.local}</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Status:</p>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} className="text-gray-400" />
                      <p className="text-sm text-gray-700">{necessidade.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mensagem quando não há necessidades */}
          {necessidades.length === 0 && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                Nenhuma necessidade encontrada
              </h3>
              <p className="text-gray-500">
                Quando houver necessidades cadastradas, elas aparecerão aqui.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Necessidades;

