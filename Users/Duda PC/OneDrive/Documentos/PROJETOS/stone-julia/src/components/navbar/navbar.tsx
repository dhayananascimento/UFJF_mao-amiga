'use client';

import { Search } from '@mui/icons-material';
import {
  Box,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { NavbarMenuItem } from '../navbar-menu-item/navbar-menu-item';
import { navbarData } from '@/utils/navbar-data';
import { useEffect, useState } from 'react';

export function Navbar() {
  const theme = useTheme();
  const isBiggerThanLarge = useMediaQuery(theme.breakpoints.up('xl'));
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Box height={120} />
      <Box
        sx={{
          top: 0,
          bgcolor: !isTop ? 'white' : 'transparent',
          transition: 'all 0.3s',
          boxShadow: !isTop ? '0px 10px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
        position="fixed"
        zIndex={10}
        width="100%"
      >
        <Container
          sx={{
            display: 'flex',
            // bgcolor: !trigger ? 'red' : 'transparent',
            py: 2,
            padding: '8px 0px !important',
            alignItems: 'center',
          }}
          maxWidth={isBiggerThanLarge ? 'lg' : 'md'}
        >
          <Box sx={{}}>
            <Image
              src="/assets/Logo.png"
              alt="logo"
              width={200}
              height={40}
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box flex={1} pl={5} display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width={'100%'}
            >
              <Box display="flex" alignItems="center" pr={7} gap={2}>
                <IconButton
                  sx={{
                    bgcolor: 'secondary.main',
                  }}
                >
                  <Search
                    sx={{
                      fontSize: 26,
                      color: 'white',
                    }}
                  />
                </IconButton>
              </Box>
              <Box display="flex" alignItems="center" gap={2} color={'red'}>
                {navbarData.map((item) => (
                  <NavbarMenuItem {...item} key={item.title} onScroll={!isTop}/>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
