import { NavbarItem } from '@/entities/navbar';

export const navbarData: NavbarItem[] = [
  {
    title: 'Sobre',
    link: '/about-us',
    options: [
      {
        id: '1',
        title: 'Manufacturing Automation',
        href: '#',
      },
      {
        id: '2',
        title: 'Scientific Systems',
        href: '#',
      },
    ],
  },
  {
    title: 'Contato',
    link: '/contact-us',
    options: [
      {
        id: '1',
        title: 'AI Systems Development',
        href: '#',
      },
      {
        id: '2',
        title: 'Vision Systems',
        href: '#',
      },
    ],
  },
];
