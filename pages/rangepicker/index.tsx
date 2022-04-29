import { Stack, TextField, TextFieldProps } from '@mui/material';
import { DateRange, DateRangePicker } from '@mui/lab';
import { Box } from '@mui/system';
import React, { useState } from 'react';

export default function RangePickerIndex() {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log(value);
  return (
    <Stack alignItems='center'>
      <Box width='500px'>
        <DateRangePicker
          value={value}
          startText='Check-in'
          endText='Check-out'
          onChange={(newValue: React.SetStateAction<DateRange<Date>>) => {
            setValue(newValue);
          }}
          renderInput={(
            startProps: JSX.IntrinsicAttributes & TextFieldProps,
            endProps: JSX.IntrinsicAttributes & TextFieldProps
          ) => {
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>;
          }}
        />
      </Box>
    </Stack>
  );
}
