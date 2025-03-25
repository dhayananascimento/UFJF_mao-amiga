import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Grid2,
} from '@mui/material';
import Image from 'next/image';
const fontFamilyBoldVar = 'var(--font-ample-soft-bold)';

const images = [
  [
    {
      url: '/assets/home/certificates/Cert_Duns.png',
      width: 10000,
      height: 10000,
    },
   {
      url: '/assets/home/certificates/Cert_Siemens.avif',
    },
  ],
  
];


export function ProvenExperience() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box
      sx={{
        backgroundImage:
          'url(/assets/home/proven-experience.svg), linear-gradient(135deg, #186cda, #6ba1e7)',
        backgroundSize: 'auto 90%, cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50vw, 0 0',
        backgroundAttachment: 'fixed, scroll',
      }}
    >
      <Container
        maxWidth={isBiggerThanLarge ? 'lg' : 'md'}
        sx={{
          py: 6,
        }}
      >
        <Stack gap={4} direction="row">
          <Stack direction="column" justifyContent="flex-start" maxWidth={434}>
            <Typography
              fontFamily={fontFamilyBoldVar}
              variant="h4"
              fontWeight={900}
              color="white"
            >
              Experiência Comprovada
            </Typography>
            <Typography
              fontFamily={'sans-serif'}
              variant="h6"
              mb={1}
              mt={2}
              fontSize="1.125rem"
              color="white"
            >
              Classificada por empresas líderes, a Automateasy é sua
              parceira de automação inteligente em tempo real – para o que vier a seguir.
            </Typography>
            <Stack direction="row" alignItems="center" gap={4}>
              <Box
              //  position={'relative'}
              //  width="100%"
              //  maxWidth={180}
              //  height={180}
              >
                
              </Box>
              
            </Stack>
          </Stack>
          <Stack direction="column" alignItems="flex-end" width="100%">
            {images.map((row, index) => (
              <Grid2
                container
                key={index}
                width="100%"
                justifyContent="center"
                spacing={2}
              >
                {row.map((image, index) => (
                  <Grid2
                    key={index}
                    size={{
                      xs: 6,
                      sm: 4,
                      md: 2,
                    }}
                  >
                    <Box
                      position={'relative'}
                      width="100%"
                      maxWidth={140}
                      height={140}
                    >
                      <Image
                        fill
                        style={{
                          objectFit: 'contain',
                        }}
                        alt=""
                        src={image.url}
                      />
                    </Box>
                  </Grid2>
                ))}
              </Grid2>
            ))}
          </Stack>
        </Stack>
        <Stack direction="row" gap={10} mt={5} justifyContent="space-between" maxWidth={1700}>
          <Stack>
            <Typography
              variant="h3"
              fontFamily={fontFamilyBoldVar}
              fontWeight={900}
              color="white"
            >
              90 +
            </Typography>
            <Typography variant="body1" fontFamily={'sans-serif'} color="white">
              Processos automatizados
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h3"
              fontFamily={fontFamilyBoldVar}
              fontWeight={900}
              color="white"
            >
              99%
            </Typography>
            <Typography variant="body1" fontFamily={'sans-serif'} color="white">
              Taxa de retenção de clientes
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h3"
              fontFamily={fontFamilyBoldVar}
              fontWeight={900}
              color="white"
            >
              150 +
            </Typography>
            <Typography variant="body1" fontFamily={'sans-serif'} color="white">
              Integrações realizadas com sucesso
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h3"
              fontFamily={fontFamilyBoldVar}
              fontWeight={900}
              color="white"
            >
              350 +
            </Typography>
            <Typography variant="body1" fontFamily={'sans-serif'} color="white">
              Empresas de destaque transformando seus processos com a gente
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
