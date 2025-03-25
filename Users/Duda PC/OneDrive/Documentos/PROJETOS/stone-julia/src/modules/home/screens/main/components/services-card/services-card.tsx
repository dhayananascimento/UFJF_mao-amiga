import { ServicesCardProps } from '@/utils/home/services-card-data';
import { Box, Button, Card, Stack, Typography } from '@mui/material';

export const ServicesCard = ({
  description,
  icon,
  title,
}: ServicesCardProps) => {
  return (
    <Card
      sx={{
        bgcolor: '#E7F1FE',
        p: 3,
        height: '100%',
        position: 'relative',
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          scale: 1.05,
        },
      }}
    >
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Box mb={3}>{icon}</Box>
        <Typography
          variant="h4"
          fontWeight={700}
          mb={3}
          maxWidth={200}
          fontFamily={'var(--font-ample-soft-bold)'}
          color="#0B3876"
        >
          {title}
        </Typography>
        <Typography variant="body1" fontWeight={400} mb={3}>
          {description}
        </Typography>
        <Stack direction="column" alignItems="flex-start">
          <Button
            variant="contained"
            size="medium"
            sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              mt: 4,
              borderRadius: 0.6,
              letterSpacing: 1.6,
              fontSize: 14,
              px: 3,
            }}
          >
            Saber mais
          </Button>
        </Stack>
        <Box
          position="absolute"
          height={'100%'}
          width="100%"
          sx={{
            backgroundImage: `url('/assets/home/services-bg-home.svg')`,
            zIndex: 2,
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            top: 0, // Ajuste a posição para que a imagem cubra até o início do card
            left: 0,
          }}
        />
        <Box
          position="absolute"
          height={'200px'}
          width="100%"
          sx={{
            backgroundImage: `url('/assets/home/services-bg-home2.svg')`,
            zIndex: 1,
            top: 0,
          }}
        />
      </Stack>
    </Card>
  );
};
