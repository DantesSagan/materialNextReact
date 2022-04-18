import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import { CatchingPokemon } from '@mui/icons-material';
import React from 'react';

export default function NavbarIndex() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon />
        </IconButton>
        <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
          PokemonAPp
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button variant='contained' color='primary'>
            Features
          </Button>
          <Button variant='contained' color='secondary'>
            Features1
          </Button>
          <Button variant='contained' color='error'>
            Features2
          </Button>
          <Button variant='contained' color='warning'>
            Features3
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
