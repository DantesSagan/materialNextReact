import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React from 'react';
import { FileCopy, Save } from '@mui/icons-material';

export default function LoadingButtonIndex() {
  return (
    <Stack alignItems={'center'}>
      <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Outlined</LoadingButton>
        <LoadingButton loading variant='outlined'>
          Outlined
        </LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='Loading...'>
          Fetch data
        </LoadingButton>
        <LoadingButton loading variant='outlined' loadingIndicator='Loading...'>
          Fetch data
        </LoadingButton>
        <LoadingButton
          variant='outlined'
          loadingPosition='start'
          startIcon={<Save />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          loading
          variant='outlined'
          loadingPosition='start'
          startIcon={<Save />}
        >
          Save
        </LoadingButton>
        <LoadingButton
          variant='outlined'
          loadingPosition='start'
          startIcon={<FileCopy />}
        >
          File
        </LoadingButton>
      </Stack>
    </Stack>
  );
}
