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
  Users,
  Wrench,
  UserCheck
} from 'lucide-react';

const VoluntarioHome = () => {
  const atividadesRecentes = [
    'Participou no Mutirão de Limpeza',
    'Inscreveu-se em aulões de reforço',
    'Registrou nova necessidade',
    'Atualizou informações do perfil'
  ];

  const necessidades = [
    {
      local: 'Jardim América',
      cidade: 'Belo Horizonte',
      tipo: 'Doação Alimentos',
      icon: Heart
    },
    {
      local: 'Santa Clara',
      cidade: 'Belo Horizonte', 
      tipo: 'Reforma de Abrigo',
      icon: Wrench
    },
    {
      local: 'Centro',
      cidade: 'Contagem',
      tipo: 'Acompanhamento Idosos',
      icon: UserCheck
    }
  ];

  const eventosProximos = [
    {
      dia: '26',
      mes: 'Abr',
      titulo: 'Projeto cria comunitária',
      subtitulo: 'Evento de ação social'
    },
    {
      dia: '03',
      mes: 'Mai',
      titulo: 'Evento de ação social',
      subtitulo: 'Evento de ação social'
    },
    {
      dia: '10',
      mes: 'Mai',
      titulo: 'Mutirão de Limpeza',
      subtitulo: 'Evento de ação social'
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
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
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
              <p className="text-sm text-gray-600">Home &gt; Voluntário</p>
              <h1 className="text-2xl font-semibold text-gray-800 mt-1">
                Página Inicial
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, Juliana!</span>
              <Bell className="w-6 h-6 text-gray-400" />
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">J</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Minhas Atividades Recentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Minhas Atividades Recentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {atividadesRecentes.map((atividade, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">{atividade}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Necessidades */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>Necessidades</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {necessidades.map((necessidade, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <necessidade.icon size={16} className="text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">{necessidade.local}</h4>
                              <p className="text-sm text-gray-600">{necessidade.cidade}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={14} className="text-gray-400" />
                            <Badge variant="outline" className="text-xs">
                              {necessidade.tipo}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-6">
              {/* Eventos Próximos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Eventos Próximos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {eventosProximos.map((evento, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{evento.dia}</div>
                          <div className="text-sm text-gray-600">{evento.mes}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{evento.titulo}</h4>
                          <p className="text-sm text-gray-600">{evento.subtitulo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VoluntarioHome;

