import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function CalculatorIndex({ checked }) {
  const [numberOne, setNumberOne] = useState<string>('');
  const [numberTwo, setNumberTwo] = useState<string>('');
  const [display, setDisplay] = useState<number | null>(null);

  const [calc, setCalc] = useState<string[]>([]);
  const array = ['20', '+', '10'];

  //   const Display = () => {
  //     for (let i = 0; i < calc.length; i++) {
  //       calc.charAt();
  //     }
  //   };

  // Convert parameters from strings to number
  const xStr = numberOne;
  const x: number = +xStr;
  const yStr = numberTwo;
  const y: number = +yStr;

  const calculate = () => {
    const options = [
      {
        '^': Math.pow(x, y),
      },
      {
        '*': x * y,
      },
      {
        '/': x / y,
      },
      {
        '+': x + y,
      },
      {
        '-': x - y,
      },
    ];
  };

  const allClear = () => {
    setNumberOne('');
    setNumberTwo('');
    setDisplay(0);
  };
  // const formatNumber = (num: number) => {
  //   return num.toString().replace(/[(\d)(.)]/g, /[(\d)(.)(\d{3})]/g);
  // };

  const inputText = checked ? 'black' : 'white';

  return (
    <Stack alignItems='center' justifyItems='center'>
      <Stack minWidth={200} maxWidth={400}>
        <Typography variant='h1'>Calculator</Typography>
        <TextField
          sx={{ input: { color: inputText } }}
          style={{ padding: '5px' }}
          focused
          value={numberOne}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setNumberOne(newValue);
          }}
        />
        <TextField
          sx={{ input: { color: inputText } }}
          style={{ padding: '5px' }}
          focused
          value={numberTwo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setNumberTwo(newValue);
          }}
        />{' '}
        <Typography variant='h2' padding={2} border='2px solid red'>
          <TextField
            sx={{ input: { color: inputText } }}
            placeholder='Display'
            value={display}
            onChange={() => setDisplay(display)}
          />
        </Typography>
        <Button onClick={allClear} style={{ fontSize: '28px' }}>
          Clear
        </Button>
        <Button
          onClick={() =>
            setDisplay((minus: any) => {
              minus += '';
              return minus
                .split('')
                .splice(0, minus.length - 1)
                .join('');
            })
          }
          style={{ fontSize: '28px' }}
        >
          C
        </Button>
        <Button
          style={{ fontSize: '28px' }}
          size='medium'
          color='primary'
          onClick={() => {
            setDisplay(x + y);
          }}
        >
          +
        </Button>
        <Button
          style={{ fontSize: '28px' }}
          size='medium'
          color='primary'
          onClick={() => {
            setDisplay(x - y);
          }}
        >
          -
        </Button>{' '}
        <Button
          style={{ fontSize: '28px' }}
          size='medium'
          color='primary'
          onClick={() => {
            setDisplay(x * y);
          }}
        >
          *
        </Button>
        <Button
          style={{ fontSize: '28px' }}
          size='medium'
          color='primary'
          onClick={() => {
            setDisplay(x / y);
          }}
        >
          /
        </Button>
        <Button
          style={{ fontSize: '28px' }}
          size='medium'
          color='primary'
          onClick={() => {
            setDisplay(x ** y);
          }}
        >
          ^
        </Button>
      </Stack>
    </Stack>
  );
}
