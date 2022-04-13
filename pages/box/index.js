import { Box, Divider, Stack } from '@mui/material';
import React from 'react';

export default function IndexBox() {
  return (
    // Stack it's lika a div tag with default styling like direction:column
    <Stack
      margin={'15px'}
      alignItems='center'
      sx={{
        border: '1px solid black',
      }}
      direction='column'
      divider={<Divider orientation='vertical' flexItem />}
      // Spacing work like spacing={8px * "number-value"} in example below 16 px
      spacing={2}
    >
      {/* // Box component it's also a div tag by default and you can specify like "span"
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
