import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Stack, TextField, InputAdornment, Button } from '@mui/material';
import { useState } from 'react';

export default function FieldText() {
  const [toggle, setToggle] = useState(true);
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4} alignItems='center'>
      {/* 
      In this case we are using TextFild component that could be specified like you want 
      with other variant
      */}
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Second Name' variant='filled' />
        <TextField label='Last Name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        {/* In this case we are used color that will be covered when we focus to the input 
        And additionally we are set error where we don't fill this input will give us an error and if we type something in this input error is gone
        */}
        <TextField
          label='Small secondary'
          variant='outlined'
          color='secondary'
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          required
          helperText={!value ? 'Required' : 'Do not share you password'}
        />
        {/* Adding required property to specify this input with reduired assigned value */}
        <TextField
          label='Small secondary'
          variant='outlined'
          color='secondary'
          required
        />
        {/* In this case we added helperText to dispay below input text that you need */}
        <TextField
          style={{
            maxWidth: '200px',
            minWidth: '150px',
          }}
          type={type}
          label='Password'
          variant='outlined'
          color='secondary'
          helperText='Do not share password'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                {toggle ? (
                  <Button
                    style={{
                      maxWidth: '80px',
                      minWidth: '30px',
                    }}
                    size='small'
                    variant='text'
                    aria-label='toggle password visibility'
                    onClick={() => {
                      setType('text');
                      setToggle(!toggle);
                    }}
                  >
                    <VisibilityOff />
                  </Button>
                ) : (
                  <Button
                    style={{
                      maxWidth: '80px',
                      minWidth: '30px',
                    }}
                    size='small'
                    variant='text'
                    aria-label='toggle password invisible'
                    onClick={() => {
                      setType('password');
                      setToggle(!toggle);
                    }}
                  >
                    <Visibility />
                  </Button>
                )}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          inputProps={{ readOnly: true }}
          type='password'
          label='Read only'
          variant='outlined'
          color='secondary'
          helperText='Read only'
        />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />

        <TextField
          label='Amount'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
