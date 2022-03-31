import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import React from 'react';

// I thinkg MUI good for quick set up css and standartization but bad for specially interfaces that you needed
// May be in big projects where need to create multiple pages with one design it's good
export default function MuiButton() {
  return (
    <Stack spacing={4} textAlign='center'>
      <Stack spacing={2} direction='row' display='inline-block'>
        MuiButton
        {/* In this case varian changes styling for type of using button */}
        {/* If adding href parameter button compoent will switch to "a" anchor tag */}
        <Button variant='text' href='https://google.com'>
          Text
        </Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='text'>Contained</Button>
      </Stack>
      {/* In this case we creating buttons in miscellaneous colors  */}
      <Stack display='inline-block' spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning'>
          Warning
        </Button>
        <Button variant='contained' color='info'>
          Info
        </Button>
        <Button variant='contained' color='success'>
          Success
        </Button>
        <Button variant='contained' color='text'>
          Text
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        {/* In this case we are seeing sizes of a buttons */}
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          Small
        </Button>
        <Button variant='contained' size='large'>
          Small
        </Button>
      </Stack>
      <Stack display='inline-block' spacing={2} direction='row'>
        {/* disableRipple turn off water waving effect on a place you click on */}
        {/* (icon before text) */}
        <Button vairant='contained' startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        {/* (icon after text) */}
        <Button vairant='contained' endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
