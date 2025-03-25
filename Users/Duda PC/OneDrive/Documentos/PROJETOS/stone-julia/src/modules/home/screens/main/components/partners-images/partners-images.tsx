import { partnersImagesData } from '@/utils/home/partners-images-data';
import { Box, Grid2 } from '@mui/material';
import Image from 'next/image';

export function PartnersImages() {
  return (
    <Grid2
      container
      spacing={1}
      justifyContent="space-between"
      mt={4}
    >
      {partnersImagesData.firts.map((item) => (
        <Grid2
          display={'flex'}
          justifyContent={item.id > 7 ? 'flex-end' : 'flex-start'}
          key={item.id}
          {...item.props}
        >
          <Box position={'relative'} width={120} height={120}>
            <Image
              src={item.url}
              alt="logo"
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
}
