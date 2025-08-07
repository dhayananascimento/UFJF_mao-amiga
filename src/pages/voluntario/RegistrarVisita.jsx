import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Home,
  FileText,
  Heart,
  Calendar,
  Bell,
  MapPin,
  Save
} from 'lucide-react';

const RegistrarVisita = () => {
  const [formData, setFormData] = useState({
    dataVisita: '',
    pessoasEncontradas: '',
    observacoes: '',
    necessidadesIdentificadas: {
      alimentacao: false,
      abrigo: false,
      saude: false
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (necessidade, checked) => {
    setFormData(prev => ({
      ...prev,
      necessidadesIdentificadas: {
        ...prev.necessidadesIdentificadas,
        [necessidade]: checked
      }
    }));
  };

  const handleSalvarRegistro = () => {
    console.log('Dados do registro:', formData);
    alert('Registro salvo com sucesso!');
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
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
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
              <p className="text-sm text-gray-600">Vo &gt; Registros</p>
              <h1 className="text-2xl font-semibold text-gray-800 mt-1">
                Registrar Visita
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulário - Coluna Esquerda */}
            <div className="space-y-6">
              {/* Data da Visita */}
              <div className="space-y-2">
                <Label htmlFor="dataVisita" className="text-sm font-medium text-gray-700">
                  Data da Visita
                </Label>
                <Input
                  id="dataVisita"
                  type="text"
                  placeholder="dd/mm/aaaa"
                  value={formData.dataVisita}
                  onChange={(e) => handleInputChange('dataVisita', e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Pessoas Encontradas */}
              <div className="space-y-2">
                <Label htmlFor="pessoasEncontradas" className="text-sm font-medium text-gray-700">
                  Pessoas Encontradas
                </Label>
                <Input
                  id="pessoasEncontradas"
                  type="text"
                  placeholder="Número ou nomes"
                  value={formData.pessoasEncontradas}
                  onChange={(e) => handleInputChange('pessoasEncontradas', e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Observações */}
              <div className="space-y-2">
                <Label htmlFor="observacoes" className="text-sm font-medium text-gray-700">
                  Observações
                </Label>
                <Textarea
                  id="observacoes"
                  placeholder="Digite suas observações sobre a visita..."
                  value={formData.observacoes}
                  onChange={(e) => handleInputChange('observacoes', e.target.value)}
                  className="w-full h-32 resize-none"
                />
              </div>

              {/* Necessidades Identificadas */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  Necessidades Identificadas
                </Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="alimentacao"
                      checked={formData.necessidadesIdentificadas.alimentacao}
                      onCheckedChange={(checked) => handleCheckboxChange('alimentacao', checked)}
                    />
                    <Label htmlFor="alimentacao" className="text-sm text-gray-700">
                      Alimentação
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="abrigo"
                      checked={formData.necessidadesIdentificadas.abrigo}
                      onCheckedChange={(checked) => handleCheckboxChange('abrigo', checked)}
                    />
                    <Label htmlFor="abrigo" className="text-sm text-gray-700">
                      Abrigo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="saude"
                      checked={formData.necessidadesIdentificadas.saude}
                      onCheckedChange={(checked) => handleCheckboxChange('saude', checked)}
                    />
                    <Label htmlFor="saude" className="text-sm text-gray-700">
                      Saúde
                    </Label>
                  </div>
                </div>
              </div>

              {/* Botão Salvar */}
              <Button 
                onClick={handleSalvarRegistro}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                SALVAR REGISTRO
              </Button>
            </div>

            {/* Mapa e Informações - Coluna Direita */}
            <div className="space-y-6">
              {/* Local da Visita */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Local da Visita</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Mapa simulado */}
                  <div className="bg-gray-100 rounded-lg h-64 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
                      {/* Simulação de ruas */}
                      <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-300"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300"></div>
                      <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gray-300"></div>
                      <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-gray-300"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300"></div>
                      <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-gray-300"></div>
                      
                      {/* Marcador de localização */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <MapPin size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Necessidades Identificadas - Lista */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Necessidades Identificadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Alimentação</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Abrigo</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Saúde</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ações Realizadas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ações Realizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Forneceu alimentação</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Ofereceu abrigo</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Encaminhou a assistência social</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegistrarVisita;

