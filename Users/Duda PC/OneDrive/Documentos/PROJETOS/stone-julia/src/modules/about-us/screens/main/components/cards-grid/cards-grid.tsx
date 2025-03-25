import { CardData } from '@/utils/about-us/cards-data';
import {
  Container,
  Grid2,
  Box,
  Typography,
  GridBaseProps,
} from '@mui/material';

export const CardsGrid = ({
  data,
  isBiggerThanLarge,
  props,
}: {
  data: CardData[];
  isBiggerThanLarge: boolean;
  props?: GridBaseProps;
}) => {
  return (
    <Container maxWidth={isBiggerThanLarge ? 'lg' : 'md'}>
      <Grid2 container mt={4} spacing={8}>
        {data.map((item) => (
          <Grid2
            display={'flex'}
            mt={4}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            key={item.title}
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 3,
            }}
            {...props}
          >
            <Box
              display={'flex'}
              alignItems={'flex-start'}
              justifyContent={'flex-start'}
              flexDirection={'column'}
            >
              <Typography variant="h5" fontWeight={700} mb={2}>
                {item.title}
              </Typography>
              <Typography variant="h6" fontWeight={700} mb={2}>
                {item.subtitle}
              </Typography>
              <Typography
                variant="h6"
                fontWeight={400}
                fontFamily={'sans-serif'}
              >
                {item.content}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};
