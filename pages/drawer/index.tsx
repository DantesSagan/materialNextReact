import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DrawerIndex({ checked }) {
  // Drawer - Выдвижной ящик
  const [hide, setHide] = useState(true);
  const borderColor = checked ? 'black' : 'white';
  const bgColor = checked ? 'white' : 'black';
  return (
    <>
      <Typography variant='h3' component='div'>
        Click to open side panel
      </Typography>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'
        onClick={() => setHide(!hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: bgColor,
            border: '1px solid',
            borderColor: borderColor,
            color: borderColor,
          },
        }}
        anchor='left'
        open={hide}
        onClose={() => setHide(!hide)}
      >
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h5' component='div'>
            Side Panel
          </Typography>
          <Typography variant='h6' component='div'>
            <Link href='/'>Home</Link>
            <br />
            <Link href='/'>Home</Link>
            <br />
            <Link href='/'>Home</Link>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
