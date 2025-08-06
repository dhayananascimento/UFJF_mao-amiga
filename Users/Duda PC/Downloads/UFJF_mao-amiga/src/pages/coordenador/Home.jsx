import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../contexts/AuthContext';
import logo from '@/assets/logo.png'; // <- Adiciona import da logo
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  Home,
  Users,
  MapPin,
  UserCheck,
  BarChart3,
  Bell,
  ChevronRight,
  Map, 
  LogOut
} from 'lucide-react';

const CoordenadorHome = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  // Dados para o gráfico de atendimentos por mês
  const atendimentosPorMes = [
    { mes: 'Jan', atendimentos: 45 },
    { mes: 'Fev', atendimentos: 52 },
    { mes: 'Mar', atendimentos: 48 },
    { mes: 'Abr', atendimentos: 61 },
    { mes: 'Mai', atendimentos: 55 },
    { mes: 'Jun', atendimentos: 67 },
    { mes: 'Jul', atendimentos: 71 },
    { mes: 'Ago', atendimentos: 69 },
    { mes: 'Set', atendimentos: 78 },
    { mes: 'Out', atendimentos: 85 },
    { mes: 'Nov', atendimentos: 92 },
    { mes: 'Dez', atendimentos: 88 }
  ];

  // Dados para o gráfico de pizza - Pessoas por perfil
  const pessoasPorPerfil = [
    { name: 'Idoso', value: 45.8, color: '#1e40af' },
    { name: 'Adulto', value: 25.8, color: '#3b82f6' },
    { name: 'Criança', value: 28.4, color: '#60a5fa' }
  ];

  // Dados para necessidades mais frequentes
  const necessidadesFrequentes = [
    { mes: 'Jan', necessidades: 20 },
    { mes: 'Fev', necessidades: 25 },
    { mes: 'Mar', necessidades: 30 },
    { mes: 'Abr', necessidades: 28 },
    { mes: 'Mai', necessidades: 35 },
    { mes: 'Jun', necessidades: 42 },
    { mes: 'Jul', necessidades: 38 },
    { mes: 'Ago', necessidades: 45 },
    { mes: 'Set', necessidades: 40 },
    { mes: 'Out', necessidades: 48 },
    { mes: 'Nov', necessidades: 52 },
    { mes: 'Dez', necessidades: 47 }
  ];

  const equipesAtividade = [
    'Visita domiciliar',
    'Entrevista', 
    'Acompanhamento'
  ];

  const relatoriosRecentes = [
    'Relatório Semanal de Atendimentos',
    'Análise de Concentração Populacional'
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        {/* User Info */}
        <div className="p-4 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">CS</span>
            </div>
            <div>
              <p className="font-medium">Coordenador</p>
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
                <span>Gestão de cadastros</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <MapPin size={20} />
                <span>Mapeamento e Análise</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <UserCheck size={20} />
                <span>Monitoramento de Equipes</span>
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

        {/* Logo na parte inferior */}
        <div className="p-6 border-t border-blue-500 mt-auto">
          <div>
            <img src={logo} alt="Logo Mão Amiga" style={{ width: '200px' }} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Home &gt; Coordenador</p>
              <h1 className="text-2xl font-semibold text-gray-800 mt-1">
                Visão Geral e Indicadores Chaves
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Olá, Carlos!</span>
              <Bell className="w-6 h-6 text-gray-400" />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-5 w-5" />
              </Button>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">C</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Total de Atendimentos por Mês */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Total de Atendimentos por Mês</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={atendimentosPorMes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="atendimentos" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Pessoas Cadastradas por Perfil */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pessoas Cadastradas por Perfil</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pessoasPorPerfil}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                      label={({ value }) => `${value}%`}
                    >
                      {pessoasPorPerfil.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  {pessoasPorPerfil.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Necessidades Mais Frequentes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Necessidades Mais Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={necessidadesFrequentes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="necessidades" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monitoramento de Equipes em Campo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monitoramento de Equipes em Campo</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Mapa simulado */}
                <div className="bg-gray-100 rounded-lg h-48 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
                    {/* Simulação de ruas */}
                    <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-300"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300"></div>
                    <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gray-300"></div>
                    <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-gray-300"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300"></div>
                    <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-gray-300"></div>
                    
                    {/* Marcadores de equipes */}
                    <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin size={12} className="text-white" />
                    </div>
                    <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin size={12} className="text-white" />
                    </div>
                    <div className="absolute top-1/2 left-1/5 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin size={12} className="text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="font-semibold text-gray-800">3 equipes em atividade</p>
                  <ul className="space-y-2">
                    {equipesAtividade.map((atividade, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{atividade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Relatórios Recentes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Relatórios Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatoriosRecentes.map((relatorio, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <span className="text-gray-700">{relatorio}</span>
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  ))}
                </div>
                
                {/* Seção duplicada conforme protótipo */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">Relatórios Recentes</h3>
                  <div className="space-y-4">
                    {relatoriosRecentes.map((relatorio, index) => (
                      <div key={`dup-${index}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <span className="text-gray-700">{relatorio}</span>
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoordenadorHome;

