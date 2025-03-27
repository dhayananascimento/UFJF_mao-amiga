'use client';

import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { PartnersImages } from './components/partners-images/partners-images';
import { ServicesCard } from './components/services-card/services-card';
import { servicesCardData } from '@/utils/home/services-card-data';
import { ProvenExperience } from './components/proven-experience/proven-experience';
import { PlanetCards } from './components/planet-cards/plannet-cards';
import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import InfiniteCarousel from './components/card-velocity/card-velocity';
import Footer from '@/components/footes/footer';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function Home() {
  const theme = useTheme();
  const isBiggerThanXLarge = useMediaQuery(theme.breakpoints.up('xl'));
  const { scrollY } = useScroll();

  const [scroll, setScroll] = useState(0);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScroll(latest);
  });
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <Box>
      <Container maxWidth={isBiggerThanXLarge ? 'xl' : 'lg'}>
        <Box
          position="absolute"
          width={!isBiggerThanXLarge ? 450 : 750}
          height={!isBiggerThanXLarge ? 350 : 550}
          top={0}
          right={0}
          zIndex={-1}
        >
          <Image src="/assets/inicio-lateral.svg" alt="logo" fill />
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            flexDirection: { xs: 'column', lg: 'row' },
          }}
          justifyContent="space-between"
          gap={2}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            fontSize={46}
            mb={3}
            fontFamily={fontFamilyBoldVar}
          >
            <Typography
              component="span"
              color="secondary.main"
              fontFamily={fontFamilyBoldVar}
              variant="h3"
              fontSize={46}
              fontWeight={900}
              mb={20}
            >
              Automação Inteligente em <br /> Tempo Real
            </Typography>{' '}
            - Preparados para o <br /> que vier a seguir
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: isBiggerThanXLarge ? 650 : 650,
              height: isBiggerThanXLarge ? 380 : 380,
            }}
          >
            <Image
              alt="Automateasy"
              fill
              style={{
                objectFit: 'contain',
              }}
              src="/assets/home/VIDEO_AUTOMATEASY_03.gif"
            />
          </Box>
        </Stack>
        <Typography
          variant="h6"
          fontWeight={400}
          mb={4}
          fontFamily={'sans-serif'}
        >
          Centralize o controle e elimine os silos de automação. Transformamos{' '}
          <br /> o chão de fábrica com IA, supervisórios avançados e integração
          de sistemas
          <br /> para um futuro conectado e eficiente.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: 'secondary.main',
            color: 'white',
            borderRadius: 0.6,
            letterSpacing: 1.6,
            fontSize: 16,
          }}
        >
          Saber mais
        </Button>
        <PartnersImages />
        <Typography
          variant="h3"
          fontFamily={fontFamilyBoldVar}
          fontWeight={900}
          mb={1}
          mt={8}
          textAlign={'center'}
          color="secondary.main"
        >
          <Typography
            component="span"
            variant="h3"
            fontFamily={fontFamilyBoldVar}
            fontWeight={700}
            mb={20}
            color="primary"
          >
            Automação Inteligente e Personalizada <br />
          </Typography>{' '}
          para Impulsionar o seu negócio
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          my={3}
          fontFamily={'sans-serif'}
          textAlign={'center'}
        >
          Soluções complres que integram tecnologia de ponta, otimizam processos
          e reduzem custos,
          <br /> atendendo às demandas específicas da sua empresa com qualidade
          e inovação.
        </Typography>
        <Grid2 container spacing={3} justifyContent="center" mb={7}>
          {servicesCardData.map((item) => (
            <Grid2
              key={item.title}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 4,
                xl: 4,
              }}
            >
              <ServicesCard {...item} />
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <ProvenExperience />
      <Box bgcolor={'#E7F1FE'} py={4}>
        <Container>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="start"
            gap={14}
          >
            <PlanetCards
              items={[
                'Inteligência Artificial',
                'Integração de Sistemas',
                'Orquestração de Processos',
                'Soluções Personalizadas',
                'Otimização de Infraestrutura',
                'Gestão Inteligente de Dados',
              ]}
              rotation={scroll / 16}
              radius={240}
            />
            <Stack maxWidth={400} gap={2}>
              <Typography
                variant="h4"
                fontFamily={fontFamilyBoldVar}
                fontWeight={900}
                mb={1}
                mt={8}
                color="secondary.main"
              >
                <Typography
                  component="span"
                  variant="h4"
                  fontFamily={fontFamilyBoldVar}
                  fontWeight={700}
                  mb={20}
                  color="primary"
                >
                  Automação Inteligente <br />
                </Typography>{' '}
                - Transformando o Futuro
              </Typography>
              <Typography
                fontFamily={'sans-serif'}
                color="#575757"
                fontSize={17}
              >
                Automação avançada, baseada em IA e integração de sistemas,
                criada para transformar operações industriais hoje e no futuro.
              </Typography>
              <Typography fontFamily={'sans-serif'} color="#575757">
                Clique nos hexagonos para saber mais sobre os pilares essenciais
                para automatizar, integrar e otimizar sua operação industrial.
                Quebre os silos de automação, centralize o controle e maximize a
                eficiência em todo o seu ambiente.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  maxWidth: 200,
                  letterSpacing: 2,
                  mt: 4,
                }}
              >
                Explore agora
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Stack direction="row" gap={4} alignItems="center" py={4}>
          <Stack maxWidth={250} direction="column" gap={2}>
            <Typography
              variant="h5"
              fontSize={30}
              fontFamily={fontFamilyBoldVar}
              fontWeight={900}
              color="secondary.main"
            >
              <Typography
                component="span"
                variant="h5"
                fontSize={30}
                fontFamily={fontFamilyBoldVar}
                fontWeight={700}
                mb={20}
                color="primary"
              >
                Integrações limitadas apenas por
              </Typography>{' '}
              sua imaginação
            </Typography>
            <Typography color="#575757" fontFamily={'sans-serif'}>
              Integre-se com qualquer plataforma
            </Typography>
            <Button
              sx={{
                bgcolor: '#FF7154',
                color: 'white',
                height: 30,
                width: 'max-content',
                fontSize: 12,
                letterSpacing: 1.6,
              }}
            >
              EXPLORE TODAS AS INTEGRAÇÕES
            </Button>
          </Stack>
          <InfiniteCarousel />
        </Stack>
      </Container>
      {/* <Box minHeight={500}>
        <Container>
          <SuccesStoriesCarousel />
        </Container>
      </Box> */}
      <Footer />
    </Box>
  );
}
