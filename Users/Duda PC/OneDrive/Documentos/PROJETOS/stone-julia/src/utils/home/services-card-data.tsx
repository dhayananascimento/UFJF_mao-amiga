import {
  Service1Icon,
  Service2Icon,
  Service3Icon,
  Service4Icon,
  Service5Icon,
  Service6Icon,
} from '@/components/icons/home/home-icons';

export type ServicesCardProps = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

export const servicesCardData: ServicesCardProps[] = [
  {
    title: 'Automação Personalizada',
    description:
      'Desenvolvemos soluções sob medida para atender às necessidades exclusivas de sua empresa, utilizando tecnologia de ponta e uma abordagem criativa, garantindo máxima eficiência e inovação.',
    link: '',
    icon: (
      <Service1Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Controle de Processos',
    description:
      'Oferecemos sistemas completos e softwares supervisórios para o gerenciamento e controle de processos industriais, otimizando a eficiência e a confiabilidade operacional em tempo real.',
    link: '',
    icon: (
      <Service3Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Intêligencia Artificial',
    description:
      'Aplicamos IA para otimizar processos industriais, oferecendo soluções preditivas e inteligentes que aumentam a produtividade e reduzem custos operacionais.',
    link: '',
    icon: (
      <Service4Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Programação de CLPs',
    description:
      'Projetamos e desenvolvemos sistemas de CLPs personalizados para automação industrial, garantindo precisão, flexibilidade e confiabilidade em seus processos.',
    link: '',
    icon: (
      <Service5Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Automação Inteligente',
    description:
      ' Integramos tecnologias avançadas, oferecendo soluções modulares para automação de processos industriais e prediais. Com a aplicação de CLPs e automação de subestações, criamos sistemas conectados e inteligentes.',
    link: '',
    icon: (
      <Service2Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Integração de Sistemas',
    description:
      'Oferecemos soluções de integração de sistemas, conectando diferentes plataformas e equipamentos de maneira eficiente para proporcionar uma operação contínua e simplificada em sua indústria.',
    link: '',
    icon: (
      <Service6Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Sistemas Supervisórios',
    description:
      'Desenvolvemos sistemas supervisórios avançados, proporcionando controle e monitoramento completos de processos industriais, com interfaces intuitivas e comunicação em tempo real.',
    link: '',
    icon: (
      <Service6Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
  {
    title: 'Cursos e Treinamentos',
    description:
      'Oferecemos treinamentos completos sobre todas as ferramentas e tecnologias que desenvolvemos e utilizamos. Nossos cursos são personalizados para capacitar sua equipe, garantindo um domínio total sobre os sistemas de automação, CLPs, integração de sistemas, IA e muito mais.',
    link: '',
    icon: (
      <Service6Icon
        sx={{
          fontSize: 40,
        }}
      />
    ),
  },
];


