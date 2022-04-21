import { Mail } from '@mui/icons-material';
import { Stack, Badge, Typography, Box } from '@mui/material';
import React from 'react';

export default function BadgeIndex({ checked }) {
  const inputText = checked ? 'black' : 'white';
  const bgHover = checked ? 'red' : 'gray';
  return (
    <Stack spacing={2} alignItems='center' textAlign='center'>
      {/* If you have email and not reading massages you may be need badge 
        that displayed number of massages or notifications
        */}
      <Box
        alignItems='center'
        sx={{
          border: '2px solid',
          borderRadius: '15px',
          borderColor: inputText,
          textAlign: 'center',
          color: inputText,
          padding: '16px',
          '&:hover': {
            backgroundColor: bgHover,
          },
        }}
      >
        <Typography variant='h4' component='div'>
          If you have email and not reading massages you may be need badge that
          displayed number of massages or notifications
        </Typography>
        <Badge badgeContent={5} color='primary'>
          <Mail />
        </Badge>
      </Box>
      <Box
        alignItems='center'
        sx={{
          border: '2px solid',
          borderRadius: '15px',
          borderColor: inputText,
          textAlign: 'center',
          color: inputText,
          padding: '16px',
          '&:hover': {
            backgroundColor: bgHover,
          },
        }}
      >
        {/* showZero property displayed 0 (massages or smth) in right-corner of notifications */}
        <Typography variant='h4' component='div'>
          showZero property displayed 0 (massages or smth) in right-corner of
          notifications
        </Typography>
        <Badge badgeContent={15} color='secondary' showZero>
          <Mail />
        </Badge>
      </Box>
      <Box
        alignItems='center'
        sx={{
          border: '2px solid',
          borderRadius: '15px',
          borderColor: inputText,
          textAlign: 'center',
          color: inputText,
          padding: '16px',
          '&:hover': {
            backgroundColor: bgHover,
          },
        }}
      >
        <Typography variant='h4' component='div'>
          If number of notifications will be over 9000, displayed number will be
          99+ numbers
        </Typography>
        {/* If number of notifications will be over 9000, displayed number will be 99+ numbers */}
        <Badge badgeContent={150} color='secondary' showZero>
          <Mail />
        </Badge>
      </Box>
      <Box
        alignItems='center'
        sx={{
          border: '2px solid',
          borderRadius: '15px',
          borderColor: inputText,
          textAlign: 'center',
          color: inputText,
          padding: '16px',
          '&:hover': {
            backgroundColor: bgHover,
          },
        }}
      >
        <Typography variant='h4' component='div'>
          If number of notifications will be over 9000, you can specify it with
          property max={9999} {` `}
          or number what you want
        </Typography>
        {/* If number of notifications will be over 9000, displayed number will be 99+ numbers */}
        <Badge badgeContent={9999} color='secondary' showZero max={9999}>
          <Mail />
        </Badge>
      </Box>
      <Box
        alignItems='center'
        sx={{
          border: '2px solid',
          borderRadius: '15px',
          borderColor: inputText,
          textAlign: 'center',
          color: inputText,
          padding: '16px',
          '&:hover': {
            backgroundColor: bgHover,
          },
        }}
      >
        <Typography variant='h4' component='div'>
          Or just specify by variant={"dot"}
        </Typography>
        {/* If number of notifications will be over 9000, displayed number will be 99+ numbers */}
        <Badge
          variant='dot'
          badgeContent={9999}
          color='secondary'
          showZero
          max={9999}
        >
          <Mail />
        </Badge>
      </Box>
    </Stack>
  );
}
