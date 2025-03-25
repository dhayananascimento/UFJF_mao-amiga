'use client';

import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, X, YouTube, LinkedIn } from '@mui/icons-material';

const footerLinks = [
  {
    title: 'Automatesy',
    links: [
      'Aviso Legal',
      'Termos de Uso',
      'Aviso de Privacidade',
      'Segurança Cibernética',
    ],
  },
  {
    title: 'Ajuda',
    links: ['Comunidade', 'Suporte Técnico', 'Treinamentos'],
  },
  {
    title: 'Recursos',
    links: [
      'Casos de Sucesso',
      /*'Data Sheets & Tech Briefs',
      'Analyst Reports',
      'Videos & Webcasts',*/
    ],
  },
  {
    title: 'Empresa',
    links: ['Sobre nós', 'Eventos', 'Carreiras', 'Parceiros', 'Contacte-nos'],
  },
];

const socialIcons = [
  { icon: <Facebook />, href: '#' },
  { icon: <Instagram />, href: '#' },
  { icon: <X />, href: '#' },
  { icon: <YouTube />, href: '#' },
  { icon: <LinkedIn />, href: '#' },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 4, mt: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="bold">
            Automateasy
          </Typography>
          {footerLinks[0].links.map((link, index) => (
            <Typography key={index} variant="body2">
              <Link href="#" color="inherit" underline="none">
                {link}
              </Link>
            </Typography>
          ))}
          <Typography variant="body2" sx={{ mt: 2 }}>
            © 2025 Automateasy
          </Typography>
        </Grid>
        {footerLinks.slice(1).map((section, index) => (
          <Grid item xs={12} sm={2} key={index}>
            <Typography variant="h6" fontWeight="bold">
              {section.title}
            </Typography>
            {section.links.map((link, idx) => (
              <Typography key={idx} variant="body2">
                <Link href="#" color="inherit" underline="none">
                  {link}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="bold">
            Siga-nos nas redes sociais
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            {socialIcons.map((social, index) => (
              <IconButton key={index} href={social.href} color="inherit">
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}