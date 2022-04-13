import { Box, Stack } from '@mui/material';
import React from 'react';

export default function IndexBox() {
  return (
    <Stack alignItems='center'>
      {/* // Box component it's a div tag by default and you can specify like "span"
      or smth else */}
      <Box
        alignItems='center'
        sx={{
          border: '2px solid black',
          borderRadius: '15px',
          textAlign: 'center',
          backgroundColor: 'primary.main',
          color: 'white',
          height: '150px',
          width: '150px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'red',
          },
        }}
      >
        Blue box
      </Box>
      <Box
        padding={'16px'}
        color={'white'}
        textAlign='center'
        border={'2px solid red'}
        borderRadius={'15px'}
        height='150px'
        width='150px'
        bgcolor={'success.light'}
        p={2}
      >
        Green box
      </Box>
    </Stack>
  );
}
