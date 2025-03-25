import { Grid2Props } from '@mui/material';

export type PartnerImagesProps = {
  firts: Array<{
    id: number;
    url: string;
    link: string;
    props?: Grid2Props;
  }>;
};

export const partnersImagesData: PartnerImagesProps = {
  firts: [
    {
      id: 1,
      url: '/assets/home/clients/Arcelor_Mittal.png',
      link: 'https://brasil.arcelormittal.com/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 2,
      url: '/assets/home/clients/Bela_Schia.png',
      link: 'https://abir.org.br/associado/bela-ischia/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 3,
      url:'/assets/home/clients/Coca_Cola.png',
      link: 'https://www.coca-cola.com.br/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 4,
      url:'/assets/home/clients/MRS.png',
      link: 'https://www.mrs.com.br/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 5,
      url:'/assets/home/clients/Acura.jpg',
      link: 'https://www.acura.com/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 6,
      url:'/assets/home/clients/Altus.png',
      link: 'https://www.altus.com.br/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 7,
      url:'/assets/home/clients/Brasal_Refrigerantes.jpg',
      link: 'https://www.brasal.com.br/refrigerantes',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
    {
      id: 8,
      url:'/assets/home/clients/Paraibuna_Embalagens.png',
      link: 'https://www.paraibuna.com.br/',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
        justifyContent: 'flex-end',
      },
    },
    {
      id: 9,
      url:'/assets/home/clients/soft.jpg',
      link: '',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
        justifyContent: 'flex-end',
      },
    },
    {
      id: 10,
      url:'/assets/home/clients/Votorantim.png',
      link: '',
      props: {
        size: {
          xs: 6,
          sm: 4,
          md: 2.4,
          lg: 2.4,
          xl: 2,
        },
      },
    },
  ],
};

