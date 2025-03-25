/* eslint-disable @next/next/no-img-element */
'use client';

import { directorsData, leadershipTeamData } from '@/utils/about-us/cards-data';
import {
  Box,
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { CardsGrid } from './components/cards-grid/cards-grid';

const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

export function AboutUs() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box>
      <Container maxWidth={isBiggerThanLarge ? 'lg' : 'md'}>
        <Box
          position="absolute"
          width={!isBiggerThanLarge ? 450 : 750}
          height={!isBiggerThanLarge ? 350 : 550}
          top={0}
          right={0}
          zIndex={-1}
        >
          <Image src="/assets/inicio-lateral.svg" alt="logo" fill />
        </Box>
        <Box width="50%" mt={8}>
          <Typography
            variant="h3"
            fontWeight={600}
            mb={3}
            fontFamily={fontFamilyBoldVar}
          >
            <Typography
              component="span"
              color="primary.main"
              variant="h4"
              fontWeight={600}
              mb={20}
            >
              Sincronizando Tecnologia e Eficiência
            </Typography>
          </Typography>
          <Typography variant="h5" fontWeight={600} mb={4}>
            Sobre a Automateasy
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={4}
            fontFamily={'sans-serif'}
          >
            Com décadas de experiência, a Automateasy transforma o mercado de automação industrial
            e TI, desenvolvendo soluções inovadoras e acessíveis, sempre priorizando a experiência
            do usuário. Nossa missão é permitir que empresas automatizem qualquer processo com máxima
            eficiência e flexibilidade, oferecendo controle centralizado e inteligente para gerenciar
            e expandir ecossistemas de forma mais segura e ágil.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={4}
            fontFamily={'sans-serif'}
          >
          A Automateasy se destaca como uma força no controle de máquinas e processos, engenharia de software
          e implementação de sistemas de automação. Superamos as expectativas do mercado, desafiando limites e
          entregando serviços personalizados e tecnologia de ponta que fazem a diferença onde outros provedores 
          falham.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={500}
            mb={4}
            fontFamily={'sans-serif'}
          >
            Convidamos você a explorar{' '}
            <Link
              href="/home"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              nossa plataforma
            </Link>
            , conhecer nossos {' '}
            <Link
              href="/customer-successes"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              casos de sucessos
            </Link>
            , e entrar em{' '}
            <Link
              href="/contact"
              style={{ color: '#1976d2', textDecoration: 'none' }}
            >
              contato conosco
            </Link>{' '}
            para saber mais. 
          </Typography>
        </Box>

        <Box
          width="100%" // Definindo uma largura fixa
          height={535} // Definindo uma altura fixa
          position="relative" // Importante para uso correto do Next Image sem 'fill'
          display={'flex'}
          mt={8}
          mb={8}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            src={'/assets/about-us/Global.png'}
            alt="About Us Image"
            width={1210}
            height={600} // Altura ajustada
            style={{
              objectFit: 'fill', // Garante que a imagem não estoure os limites
            }}
          />
        </Box>
      </Container>
      <Box
        position="relative"
        left={0}
        right={0}
        width="100%"
        display={'flex'}
        height={248}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        sx={{
          background: `linear-gradient(
            130deg,
            #186cda 30%, 
            #186cda 50%, 
            #05b8d8 100%
          )`,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={400}
          mt={4}
          align="center"
          color="white"
          fontFamily={fontFamilyBoldVar}
        >
          Nossos Valores: A Essência do Nosso DNA  <br />
          e o Compromisso com Nossa Cultura de Trabalho
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mt={3}
          mb={4}
          align="center"
          color="white"
          fontFamily={'sans-serif'}
        >
          Esses valores são a base que guia nossos serviços e nossas promessas aos clientes,
          além de moldar a maneira como nos relacionamos uns com os outros, <br />
          criando um ambiente de colaboração e excelência.
        </Typography>
      </Box>
      <Box position="relative" left={0} right={0} width="100%">
        <img
          src={'/assets/about-us/stonebranch_about.jpg'}
          alt="About Us Image"
          width="100%"
          style={{
            objectFit: 'fill', // Garante que a imagem não estoure os limites
          }}
        />
      </Box>
      <Box
        position="relative"
        left={0}
        right={0}
        width="100%"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={216}
        flexDirection={'column'}
        sx={{
          background: `linear-gradient(
            130deg,
            #186cda 30%, 
            #186cda 50%, 
            #05b8d8 100%
          )`,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={400}
          mt={4}
          align="center"
          color="white"
          fontFamily={fontFamilyBoldVar}
        >
          Equipe de liderança da Automateasy
        </Typography>
        <Typography
          variant="h6"
          fontWeight={400}
          mb={4}
          mt={4}
          align="center"
          color="white"
          fontFamily={'sans-serif'}
        >
          A equipe de liderança da Automateasy é formada por empreendedores visionários e especialistas do setor,
          que trazem anos de experiência e inovação para  <br />  impulsionar o crescimento da empresa. Reconhecida por 
          sua visão estratégica e liderança de valor, nossa equipe é um pilar essencial para  <br />  o sucesso e a evolução
          contínua da empresa.
        </Typography>
      </Box>
      <CardsGrid
        data={leadershipTeamData}
        isBiggerThanLarge={isBiggerThanLarge}
      />
      <Box
        position="relative"
        left={0}
        right={0}
        width="100%"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={216}
        flexDirection={'column'}
        sx={{
          background: `linear-gradient(
            130deg,
            #186cda 30%, 
            #186cda 50%, 
            #05b8d8 100%
          )`,
        }}
      >
      </Box>
    </Box>
  );
}
