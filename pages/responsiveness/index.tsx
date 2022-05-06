import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material';

import React from 'react';

// Danger Box with orange color

const StyledBox = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.status.danger,
}));

// Neutral Box with gray-500 color

const StyledBoxNeutral = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.neutral?.main,
}));

// Neutral Box with gray-700 color

const StyledBoxDarker = styled(Box)(({ theme }) => ({
  height: '250px',
  width: '250px',
  backgroundColor: theme.palette.neutral?.darker,
}));

export default function ResponsivenessIndex() {
  return (
    <Stack alignItems='center'>
      <>
        <Typography variant='h3' component={'div'}>
          Responsiveness box component
        </Typography>
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
            bgcolor: 'secondary.main',
          }}
        />
        <Typography variant='h3' component={'div'}>
          Styled Box TS Component Danger red-500
        </Typography>
        <StyledBox />
        <Typography variant='h3' component={'div'}>
          Styled Box TS Component Neutral gray-500
        </Typography>
        <StyledBoxNeutral />
        <Typography variant='h3' component={'div'}>
          Styled Box TS Component Darker gray-700
        </Typography>
        <StyledBoxDarker />
        <Typography variant='h3' component={'div'}>
          Just Box component with inline-styled
        </Typography>
        <Box
          sx={{
            height: '250px',
            width: '250px',
            backgroundColor: 'black',
          }}
        />
      </>
    </Stack>
  );
}
