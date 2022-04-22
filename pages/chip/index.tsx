import { Face } from '@mui/icons-material';
import { Stack, Chip, Avatar } from '@mui/material';
import React, { useState } from 'react';

export default function ChipIndex() {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack spacing={1} alignItems='center'>
      <Stack direction='row' spacing={1}>
        {/* label will be displayed like text within Chip component */}
        <Chip label='Chip' color='primary' size='small' icon={<Face />} />
        {/*  */}
        <Chip
          label='Chip outlined'
          color='primary'
          size='small'
          variant='outlined'
          avatar={<Avatar>S</Avatar>}
        />
        <Chip label='Click' color='success' onClick={() => alert('Hello')} />
        <Chip
          label='Delete'
          color='error'
          onClick={() => alert('delete')}
          onDelete={() => alert('Delete handler called')}
        />
        {chips.map((chip) => {
          return (
            <div key={chip}>
              <Chip
                color='secondary'
                key={chip}
                label={chip}
                onDelete={() => handleDelete(chip)}
              />
            </div>
          );
        })}
      </Stack>
    </Stack>
  );
}
