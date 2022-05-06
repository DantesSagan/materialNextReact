import { Box, Stack } from '@mui/material';
import React from 'react';

export default function ResponsivenessIndex() {
  return (
    <Stack alignItems='center'>
      <Box
        sx={{
          height: '300px',
          width: {
            xs: 100, // 0
            sm: 200, // 600 when viewport 600 and above and etc
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
          },
          bgcolor: 'primary.main',
        }}
      >
        responsivenessindex responsiveness
      </Box>
    </Stack>
  );
}
