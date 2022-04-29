import { Stack, TextField } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab';
import { useState } from 'react';

export default function PickIndex() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log(`TIME`, {
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  });
  console.log('DATE', {
    selectedDate: selectedDate && selectedDate.toLocaleDateString(),
  });
  console.log('DateTime', {
    selectedDateTime: selectedDateTime ,
  });
  return (
    <Stack alignItems={'center'}>
      <Stack spacing={4} sx={{ wdith: '250px' }}>
        <DatePicker
          label='Date Picker'
          renderInput={(params) => <TextField {...params} />}
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
        />
        <TimePicker
          label='Time Picker'
          renderInput={(params) => <TextField {...params} />}
          value={selectedTime}
          onChange={(newValue) => {
            setSelectedTime(newValue);
          }}
        />
        <DateTimePicker
          label='DateTime Picker'
          renderInput={(params) => <TextField {...params} />}
          value={selectedDateTime}
          onChange={(newValue) => {
            setSelectedDateTime(newValue);
          }}
        />
      </Stack>
    </Stack>
  );
}
