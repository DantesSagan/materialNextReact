import { Stack, Tooltip, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import React from 'react';

export default function TooltipIndex({ checked }) {
  const textColor = checked ? 'black' : 'white';
  return (
    <Stack alignItems='center'>
      <Typography variant='h4'>Custom tooltip with hover effect</Typography>
      <div style={{ cursor: 'pointer' }}>
        <section className='mainButton'>
          <Delete sx={{ color: textColor }} />
          <div
            style={{
              cursor: 'text',
              border: '1px solid',
              borderColor: textColor,
              borderRadius: '15px',
              borderTopLeftRadius: '60px',
              borderBottomLeftRadius: '60px',
              padding: '2px',
              marginLeft: '5px',
              color: textColor,
              fontSize: '12px',
            }}
            className='dropButton'
          >
            Delete
          </div>
        </section>
      </div>
      <Typography variant='h4'>
        Tooltip with using MUI and Tooltip component {` =>`} IconButton {` =>`}{' '}
        DeleteIcon
      </Typography>
      <Tooltip title='delete' placement='right' arrow enterDelay={500} leaveDelay={300} >
        <IconButton>
          <Delete sx={{ color: textColor }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
