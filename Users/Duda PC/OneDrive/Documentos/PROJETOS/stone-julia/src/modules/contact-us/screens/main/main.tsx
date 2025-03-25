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
      <Container maxWidth={isBiggerThanLarge ? 'lg' : 'md'}>
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
                Contact Us
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                Please complete the form below.
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                A member of the Stonebranch team will be in touch with you
                shortly.
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={600}
                mb={4}
              >
                Contact Us
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
                Stonebranch Support
              </Typography>
              <Typography
                color="primary.main"
                fontFamily={'sans-serif'}
                variant="h6"
                fontWeight={400}
              >
                If you are experiencing a problem with an installed product
                <br />
                please call support at the following numbers.
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
                    For Europe, call:
                  </Typography>
                  <Typography
                    color="#1251A3"
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +49 69 967 583 70
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                  >
                    Or email Stonebranch support at <br />
                    <Link
                      href="mailto:support@stonebranch.com"
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
                      support@stonebranch.com
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
                  <Typography
                    color="#1251A3"
                    fontFamily={'sans-serif'}
                    variant="h5"
                    fontWeight={500}
                    mb={6}
                  >
                    For North America, call:
                  </Typography>
                  <Typography
                    color="#1251A3"
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +1-877-366-7887
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                    mb={6}
                  >
                    and select option 6 or
                  </Typography>

                  <Typography
                    color="#1251A3"
                    variant="h4"
                    fontWeight={700}
                    mb={6}
                  >
                    +1-678-366-7887
                  </Typography>
                  <Typography
                    color="primary.main"
                    fontFamily={'sans-serif'}
                    variant="h6"
                    fontWeight={400}
                  >
                    and select option 6
                  </Typography>
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
              Global Locations
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={500}
              mb={4}
            >
              Stonebranch has points of support all over the world, and still
              you can reach us everywhere! Find your best contact partner
              nearby. We are happy to help you with any issue with our
              professional customer support. Find out more.
            </Typography>
            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              Stonebranch, Inc. (Headquarters)
            </Typography>
            <Typography
              color="primary.main"
              variant="h6"
              fontWeight={600}
              mb={4}
            >
              United States of America, Canada
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              4550 North Point Parkway, Suite 400 <br />
              Alpharetta, GA, 30022, USA
            </Typography>

            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
            >
              Sales (toll-free): {''}
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
                +1 877 336 7808
              </Link>
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
                +1 678 366 7887
              </Link>
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Fax: +1 678 366 7717
            </Typography>

            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              Stonebranch GmbH – EMEA Head Office
            </Typography>
            <Typography
              color="primary.main"
              variant="h6"
              fontWeight={600}
              mb={4}
            >
              Austria, Belgium, Denmark, Finland, Germany, Luxembourg,
              Netherlands, Norway, Sweden, Switzerlan
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Europa-Allee 54
              <br />
              60327 Frankfurt am Main, Germany
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
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
                +49 69 743048500
              </Link>
            </Typography>
            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              Stonebranch Sdn. Bhd. – APAC Office
            </Typography>
            <Typography
              color="primary.main"
              variant="h6"
              fontWeight={600}
              mb={4}
            >
              Malaysia, Indonesia, South Korea, China, Japan, New Zealand,
              Australia, Thailand, Singapore, Philippines, Vietnam, etc.
            </Typography>

            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Business Registration Number: 201901046644 (1355974-T)
              <br />
              A-23-10, Menara The MET
              <br />
              No 20, Jalan Dutamas 2,
              <br />
              50480 Kuala Lampur
              <br />
              Malaysia
            </Typography>

            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
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
                +603 7624 8068
              </Link>
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
              fontWeight={400}
            >
              Fax: +603 7652 2868
            </Typography>
            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              France
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Stonebranch SAS
              <br />
              29-31 Rue de Courcelles
              <br />
              75008 Paris, France
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
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
                +33 1 83 75 04 06
              </Link>
            </Typography>

            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              Greece
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Limited Liability Company
              <br />
              Daring Star Software Systems LTD
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Headquarters: <br />
              4550 North Point Parkway, Suite 400
              <br />
              Alpharetta, GA, 30022, USA
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              GEMI number: 000124096901000
              <br />
              Tax Registration Number: 997788579
              <br />
              Menelaou 9,
              <br />
              15124 Marousi, Greece
              <br />
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
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
                +30 210 6100762
              </Link>
            </Typography>

            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              North Macedonia
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Daring Star Automation Services Dooel Skopje
              <br />
              Kliment Ohridski Νο.16
              <br />
              1000 Skopje, North Macedonia
            </Typography>

            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
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
                +389 2 551 3278
              </Link>
            </Typography>

            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              Spain
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Stonebranch Spain, S.L.
              <br />
              C/ Caléndula, 93
              <br />
              Miniparc III - Edif. E<br />
              El Soto de la Moraleja
              <br />
              28109 Alcobendas
              <br />
              Madrid, Spain
            </Typography>

            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              mb={4}
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
                +34 917 912 963
              </Link>
            </Typography>

            <Typography
              color="primary.main"
              variant="h5"
              fontWeight={600}
              mb={4}
            >
              United Kingdom, Ireland
            </Typography>
            <Typography
              color="primary.main"
              fontFamily={'sans-serif'}
              variant="h6"
              fontWeight={400}
              mb={4}
            >
              Aviation House
              <br />
              125 Kingsway
              <br />
              London WC2B 6NH, United Kingdom
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
