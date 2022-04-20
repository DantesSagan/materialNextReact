import { Avatar, AvatarGroup, Stack } from '@mui/material';
import React from 'react';

export default function AvaterIndex() {
  return (
    <Stack spacing={4} alignItems={'center'}>
      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>1</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>2</Avatar>
      </Stack>
      <Stack direction='row' spacing={1}>
        <Avatar
          src='https://randomuser.me/api/portraits/women/79.jpg'
          alt='Jane'
          sx={{ bgcolor: 'primary.light' }}
        >
          1
        </Avatar>
        <Avatar
          src='https://source.unsplash.com/random'
          sx={{ bgcolor: 'success.light' }}
          alt='Random'
        >
          2
        </Avatar>
        {/*there is no spacing overlaping of the avatars and with prop = "max" 
        will be displayed only (numbers of avatars that you wanted to displayed) and +2,+3,+4 and e.t.c
        */}
        <AvatarGroup max={1}>
          <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jane'
            sx={{ bgcolor: 'primary.light' }}
          >
            1
          </Avatar>
          <Avatar
            src='https://source.unsplash.com/random'
            sx={{ bgcolor: 'success.light' }}
            alt='Random'
          >
            2
          </Avatar>
          <Avatar
            src='https://source.unsplash.com/random'
            sx={{ bgcolor: 'success.light' }}
            alt='Random'
          >
            2
          </Avatar>
        </AvatarGroup>
      </Stack>
      {/* if you wanted to change size of avatars you can specify by height and width */}
      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light', height: 48, width: 48 }}>
          1
        </Avatar>
        <Avatar sx={{ bgcolor: 'success.light', height: 48, width: 48 }}>
          2
        </Avatar>
      </Stack>
    </Stack>
  );
}
