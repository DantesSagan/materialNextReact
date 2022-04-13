import { Box, Divider, Grid, Paper, Stack } from '@mui/material';
import React from 'react';

export default function IndexBox() {
  return (
    // Paper component need to build card component
    <Paper
      style={{
        padding: '32px',
        backgroundColor: 'white',
        margin: '256px',
      }}
      elevation={4}
    >
      {/* // Stack it's like a div tag with default styling like direction:column */}
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
        {/*
      1 Grid component under the hood uses the flexbox module
      2 The Grid consists of 12 columns
      3 Each item in the grid can take up one or more columns as its width
      4 There are five breakpoints each corresponding to a certain device width
      5 xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors
      6 We can assign integer values to each breakpoint which indicates how many of the 12
    available columns are occupied by that item when the viewport satisfies that breakpoint constraints
    If you need to select some many similar text or component that you need to change. Select with combination of the buttons Ctrl + D text and then press Ctrl + F2, and this is select all  occurrences.
       */}
        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 2
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 3
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box bgcolor='primary.light' p={2}>
              Item 4
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}
