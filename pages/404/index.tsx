import { Button, Link, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Errorindex() {
  return (
    <Stack>
      <Typography variant='h1'>Page_not_found_404</Typography>
      <Typography variant='h1'>
        <Link underline='none' color='primary' href='/'>
          Home
        </Link>
      </Typography>
    </Stack>
  );
}
