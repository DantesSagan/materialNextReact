import { Typography } from '@mui/material';

import React from 'react';

export default function MuiTypography() {
  return (
    <div style={{ textAlign: 'center' }}>
      MuiTypography
      {/* Typography Applies the theme typography styles. */}
      <Typography variant='h1' gutterBottom>
        h1
      </Typography>
      <Typography variant='h2'>h2</Typography>
      <Typography variant='h3'>h3</Typography>
      {/* If we need a component with h1 tag instead of h4 tag displaying on html elements */}
      {/* gutterBottom needed for bottom margin is dependented on the variant larger variants more margin than smaller variants */}
      <Typography variant='h4' component='h1' gutterBottom>
        h4
      </Typography>
      <Typography variant='h5'>h5</Typography>
      <Typography variant='h6'>h6</Typography>
      {/* subtitle1 and subtitle 2 have h6 tag elements */}
      <Typography variant='subtitle1'>subtitle1</Typography>
      <Typography variant='subtitle2'>subtitle2</Typography>
      {/* body1 with paragraph tag as elements 
      body1 - default value of the varian prop like just without a variant='body1 || body2'
      */}
      <Typography variant='body1'>body1</Typography>
      <Typography variant='body2'>body2</Typography>
    </div>
  );
}
