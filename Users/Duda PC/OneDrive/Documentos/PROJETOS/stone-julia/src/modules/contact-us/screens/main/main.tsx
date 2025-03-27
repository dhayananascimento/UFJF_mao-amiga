'use client';

import {
  Box,
  Card,
  Container,
  Divider,
  Grid2,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ContactUsForm } from '../../components/contact-us-form';

export function ContactUs() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Box>
      <Container maxWidth={isBiggerThanLarge ? 'xl' : 'lg'}>
        <Grid2 container mt={8} spacing={8} mb={8}>
          <Grid2
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 8,
            }}
          >
            <Card
              elevation={6}
              sx={{
                padding: '1.5rem',
              }}
            >
              <Typography
                color="primary.main"
                variant="h4"
                fontWeight={600}
                mb={4}
              >
                Contate-nos
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                Por favor, preencha o formulário abaixo
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                Um membro da Automateasy entrará em contato com você
                em breve
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={600}
                mb={4}
              >
                Contate-nos
              </Typography>
              <ContactUsForm />
            </Card>
            <Card
              elevation={6}
              sx={{
                marginTop: '2rem',
                padding: '1.5rem',
              }}
            >
              <Typography color="#1251A3" variant="h5" fontWeight={600} mb={4}>
                Automateasy Suporte
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                Se você estiver tendo um problema com um produto 
                <br />
                entre em contato com o suporte nos seguintes números
              </Typography>
              <Divider variant="fullWidth" />
              <Grid2 container mt={4} spacing={4}>
                <Grid2
                  size={{
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                  }}
                >
                  <Typography
                    color="#1251A3"
                    fontFamily={'sans-serif'}
                    variant="h5"
                    fontWeight={500}
                    mb={6}
                  >
                    Ligue para:
                  </Typography>
                  <Typography
                    color="#1251A3"
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +55 32 3214-9346
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                  >
                    Ou envie um e-mail para o suporte da Automateasy: <br />
                    <Link
                      href="contato@autoamteasy.com.br"
                      sx={{
                        color: '#186CDA', // Define a cor azul
                        textDecoration: 'none', // Remove o sublinhado padrão
                        fontWeight: 600,
                        '&:hover': {
                          color: '#186CDA', // Cor mais escura no hover
                          textDecoration: 'underline', // Adiciona sublinhado ao passar o mouse
                        },
                      }}
                    >
                      contato@automateasy.com.br
                    </Link>
                  </Typography>
                </Grid2>
                <Grid2
                  size={{
                    xs: 12,
                    sm: 12,
                    md: 6,
                    lg: 6,
                  }}
                >
                </Grid2>
              </Grid2>
            </Card>
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 4,
            }}
          >
            <Typography
              color="primary.main"
              variant="h4"
              fontWeight={600}
              mb={4}
            >
              Localização
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={500}
              mb={4}
            >
              A Automateasy está sempre pronta para atender você. Nossa equipe especializada
              está disponível para oferecer suporte técnico e esclarecer qualquer dúvida sobre 
              nossos produtos e serviços. Entre em contato conosco e conte com um atendimento 
              profissional e dedicado para suas necessidades em automação industrial e TI.
            </Typography>
            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              Automateasy (Sede)
            </Typography>
            <Typography
              color="primary.main"
              variant="h6"
              fontWeight={600}
              mb={4}
            >
              Juiz de Fora, Minas Gerais 
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
               R. Ataliba de Barros, 182 <br />
               Sala 1310 - São Mateus <br/>  36025-275
            </Typography>

            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
            >
              Phone: {''}
              <Link
                href="phone:support@stonebranch.com"
                sx={{
                  color: '#186CDA', // Define a cor azul
                  textDecoration: 'none', // Remove o sublinhado padrão
                  fontWeight: 600,
                  '&:hover': {
                    color: '#186CDA', // Cor mais escura no hover
                    textDecoration: 'underline', // Adiciona sublinhado ao passar o mouse
                  },
                }}
              >
                +55 32 3214-9346
              </Link>
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
