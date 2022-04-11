import { Box, FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';

export default function SwitchIndex({ checked, setChecked }) {
  console.log(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label='Dark mode'
        control={
          checked ? (
            <Switch size='small' color='success' />
          ) : (
            <Switch size='small' color='primary' />
          )
        }
        onChange={handleChange}
      />
    </Box>
  );
}
