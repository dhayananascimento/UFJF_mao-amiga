import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home,
  Users,
  UserCheck,
  Calendar,
  MapPin,
  BarChart3,
  Bell,
  CheckCircle,
  Clock,
  User,
  Map
} from 'lucide-react';

const AssistenteSocialHome = () => {
  const tarefasPendentes = [
    'Revisar cadastro de Maria Silva',
    'Agendar acompanhamento João S.',
    'Confirmar visita domiciliar de Pedro R.',
    'Agendar acompanhamento João S.'
  ];

  const atendimentosRecentes = [
    { nome: 'Ana Souza', tipo: 'Atendimento inicial' },
    { nome: 'Carlos Almeida', tipo: 'Visita domiciliar' },
    { nome: 'Mariana Oliveira', tipo: 'Orientação' },
    { nome: 'Roberto Ferreira', tipo: 'Atendimento inicial' }
  ];

  const mapeamentoRapido = [
    { nome: 'Ana Souza', tipo: 'Atendimento inicial' },
    { nome: 'Carlos Almeida', tipo: 'Visita domiciliar' },
    { nome: 'Mariana Oliveira', tipo: 'Orientação' },
    { nome: 'Roberto Ferreira', tipo: 'Atendimento inicial' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-blue-500">
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

        {/* User Info */}
        <div className="p-4 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">AS</span>
            </div>
            <div>
              <p className="font-medium">Assistente</p>
              <p className="text-blue-200 text-sm">Social</p>
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
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Users size={20} />
                <span>Cadastros</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <UserCheck size={20} />
                <span>Atendimentos</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <Calendar size={20} />
                <span>Acompanhamento</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <MapPin size={20} />
                <span>Mapeamento</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <BarChart3 size={20} />
                <span>Relatórios</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Home &gt; Assistente Social</p>
              <h1 className="text-2xl font-semibold text-gray-800 mt-1">
                Página Inicial
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, Maria!</span>
              <Bell className="w-6 h-6 text-gray-400" />
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">M</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Minhas Tarefas Pendentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Minhas Tarefas Pendentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tarefasPendentes.map((tarefa, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span className="text-gray-700">{tarefa}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mapeamento Rápido */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Mapeamento Rápido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {mapeamentoRapido.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div>
                          <span className="text-gray-800 font-medium">{item.nome}</span>
                          <span className="text-gray-600"> - {item.tipo}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-6">
              {/* Atendimentos Recentes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <UserCheck className="w-5 h-5" />
                    <span>Atendimentos Recentes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {atendimentosRecentes.map((atendimento, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User size={16} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{atendimento.nome}</p>
                          <p className="text-sm text-gray-600">{atendimento.tipo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mapa */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg h-64 relative overflow-hidden">
                    {/* Simulação de mapa com pontos de calor */}
                    <div className="absolute inset-0">
                      {/* Pontos de calor simulados */}
                      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-orange-400 rounded-full opacity-60 blur-sm"></div>
                      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-orange-500 rounded-full opacity-70 blur-sm"></div>
                      <div className="absolute top-3/4 left-2/3 w-12 h-12 bg-yellow-400 rounded-full opacity-50 blur-sm"></div>
                      <div className="absolute top-1/3 left-2/3 w-14 h-14 bg-orange-300 rounded-full opacity-60 blur-sm"></div>
                      
                      {/* Linhas simulando ruas */}
                      <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-300 opacity-30"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 opacity-30"></div>
                      <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gray-300 opacity-30"></div>
                      <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-gray-300 opacity-30"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 opacity-30"></div>
                      <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-gray-300 opacity-30"></div>
                    </div>
                    
                    {/* Botão Ver Mapa Completo */}
                    <div className="absolute bottom-4 right-4">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="bg-white/90 hover:bg-white text-gray-700"
                      >
                        <Map className="w-4 h-4 mr-2" />
                        Ver Mapa Completo
                      </Button>
                    </div>
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

export default AssistenteSocialHome;

