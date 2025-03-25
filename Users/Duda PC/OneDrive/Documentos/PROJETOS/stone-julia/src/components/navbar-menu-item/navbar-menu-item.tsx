import { NavbarItem } from '@/entities/navbar';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export const NavbarMenuItem = (data: NavbarItem) => {
  const [anchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <Box>
      <Link href={data.link || '#'}>
        <Button
          // endIcon={<KeyboardArrowDown sx={{
          //   color: data.onScroll ? 'primary.main' : 'white',
          // }}/>}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          // onMouseEnter={handleClick}
          sx={{
            textTransform: 'none',
            padding: '0',
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              color: data.onScroll ? 'primary.main' : 'white',
            }}
          >
            {data.title}
          </Typography>
        </Button>
      </Link>
      {/* <Menu
        onMouseLeave={handleClose}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {data.options.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.title}
          </MenuItem>
        ))}
      </Menu> */}
    </Box>
  );
};
