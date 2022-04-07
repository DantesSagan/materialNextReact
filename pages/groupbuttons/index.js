import { Stack, Button, ButtonGroup } from '@mui/material';

import React from 'react';

export default function MuiButton() {
  return (
    <Stack direction='row' display='inline-block' textAlign='center'>
      {/* You can specify thig group on buttons with variant/orientation*/}
      <ButtonGroup
        variant='contained'
        orientation='vertical'
        size='small'
        color='secondary'
        aria-label='alignment button group'
      >
        <Button variant='contained' onClick={() => alert('Left clicked')}>
          Left
        </Button>
        <Button variant='contained'>Center</Button>
        <Button variant='contained'>Right</Button>
      </ButtonGroup>
    </Stack>
  );
}
