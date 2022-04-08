import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';

export default function IndexRadioButton() {
  const [value, setValue] = useState('');

  console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Stack alignItems='center'>
      <Box>
        <FormControl id='job-experience-group-label'>
          Years of experience
        </FormControl>
        <RadioGroup
          name='job-experience-group'
          aria-labelledby='job-experience-group-label'
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            control={<Radio size='small' color='secondary' />}
            label='0-2'
            value='0-2'
          />
          <FormControlLabel
            control={<Radio size='medium' color='primary' />}
            label='3-5'
            value='3-5'
          />
          <FormControlLabel
            control={<Radio size='medium' color='error' />}
            label='6-10'
            value='6-10'
          />
        </RadioGroup>
      </Box>
    </Stack>
  );
}
