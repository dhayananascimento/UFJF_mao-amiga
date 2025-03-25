import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

// Imagens devem ser azul
const cardsSuccessStories = [
  {
    title: 
      'Supervisão Geral da Fábrica da Coca-Cola de Brasília - DF',
    imgSrc: 
      '/assets/home/clients/Coca_Cola.png',
    link: '',
  },

  {
    title:
      'Sistema de Automação para Gerenciamento de Energia Elétrica Arcelor Mittal Juiz de Fora - MG',
    imgSrc:
     '/assets/home/clients/Arcelor_Mittal.png',
    link: '',
  },

  {
    title: 
      'Supervisório da Sinalização da MRS Logística S.A.',
    imgSrc:
      '/assets/home/clients/MRS.png',
    link: '',
  },

  /*{
    title: 'Expedia Group: Using Automation to Drive Digital Business',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-expedia-group-logo.svg',
    link: '',
  },

  {
    title: 'ING Group Empowers End-Users with Self-Service Automation',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-ing-logo.svg',
    link: '',
  },

  {
    title: "BP's Cloud-First Approach with SaaS-Based Workload Automation",
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-bp-logo.svg',
    link: '',
  },

  {
    title:
      'Roche on How to Take Full Advantage of SAP with a SOAP                ',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-roche-logo.svg',
    link: '',
  },

  {
    title:
      'Achmea: Modern Workload Automation Platform Powers the Move to a Hybrid IT Environment',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-achmea-logo-sm.svg',
    link: '',
  },

  {
    title:
      'Colgate on Their Cloud-First SaaS Approach to Orchestration             ',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-colgate-logo.svg',
    link: '',
  },

  {
    title:
      'Expedia Group: Using Automation to Drive Digital Business                     ',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-expedia-group-logo.svg',
    link: '',
  },

  {
    title:
      'ING Group Empowers End-Users with Self-Service Automation           ',
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-ing-logo.svg',
    link: '',
  },

  {
    title: "BP's Cloud-First Approach with SaaS-Based Workload Automation",
    imgSrc:
      'https://www.stonebranch.com/fileadmin/logos/success_stories/stonebranch-bp-logo.svg',
    link: '',
  },*/
];

export function SuccesStoriesCarousel() {
  return (
    <Box
      sx={{
        '.swiper': {
          width: '100%',
          height: '300px',
          marginLeft: 'auto',
          marginRight: ' auto',
        },

        ' .swiper-slide': {
          textAlign: 'center',
          fontSize: ' 18px',
          background: ' #fff',
          display: ' flex',
          justifyContent: 'center',
          alignItems: 'center',
        },

        '.swiper-slide img': {
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        {cardsSuccessStories.map((card, index) => (
          <SwiperSlide key={index}>
            <Box
              bgcolor={'#F4F8FD'}
              p={2}
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="start"
              alignItems="center"
            >
              <Box position={'relative'} height={100} width={100}>
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Typography color="#0B3876" fontWeight={700}>
                {card.title}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
