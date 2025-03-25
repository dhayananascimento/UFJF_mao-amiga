'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

const images = [
  '/assets/home/integrations/siemens.png',
  '/assets/home/integrations/docker.png',
  '/assets/home/integrations/plc.png',
  '/assets/home/integrations/windows.png',
  '/assets/home/integrations/node-red.png',
  '/assets/home/integrations/ia.png',
  '/assets/home/integrations/c-sharp.png',
  '/assets/home/integrations/android.png',
  '/assets/home/integrations/microsoft .net.png',
  '/assets/home/integrations/siemens.png',
  '/assets/home/integrations/docker.png',
  '/assets/home/integrations/plc.png',
  '/assets/home/integrations/windows.png',
  '/assets/home/integrations/node-red.png',
  '/assets/home/integrations/ia.png',
  '/assets/home/integrations/android.png',
  '/assets/home/integrations/microsoft .net.png',
];
export default function InfiniteCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      sx={{ overflow: 'hidden', width: '100%', py: 4, position: 'relative' }}
    >
      <Box
        position="absolute"
        sx={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 6%, rgba(255,255,255,0) 38%)',
          height: '100%',
          width: '100%',
          zIndex: 1,
        }}
      />
      <motion.div
        ref={carouselRef}
        style={{ display: 'flex', width: 'max-content' }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
      >
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            sx={{ mx: 1, height: 80, width: 80 }}
            position={'relative'}
          >
            <Image
              src={src}
              alt="Carousel"
              fill
              style={{
                borderRadius: '50%',
                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
              }}
            />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
