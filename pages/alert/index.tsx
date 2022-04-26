import { Check } from '@mui/icons-material';
import { Stack, Alert, AlertTitle, Typography, Button } from '@mui/material';

export default function AlertIndex({ checked }) {
  const bgColor = checked ? 'inherit' : 'white';
  return (
    <Stack spacing={2}>
      <Stack alignItems={'center'}>
        {/* Default alerts variants */}
        <Typography variant='h3'>Default alerts variants</Typography>
        <Alert severity='error'>This is an error alert</Alert>
        <Alert severity='warning'>This is an error alert</Alert>
        <Alert severity='info'>This is an error alert</Alert>
        <Alert severity='success'>This is an error alert</Alert>
        {/* Outlined alerts variants */}
        <Typography variant='h3'>Outlined alerts variants</Typography>
        {/* By default bg color with variant='outlined' is inherit but for better white/dark mode switching i've done this to white */}
        <Alert
          variant='outlined'
          severity='error'
          sx={{ backgroundColor: bgColor }}
        >
          This is an error alert
        </Alert>
        <Alert
          variant='outlined'
          severity='warning'
          sx={{ backgroundColor: bgColor }}
        >
          This is an error alert
        </Alert>
        <Alert
          variant='outlined'
          severity='info'
          sx={{ backgroundColor: bgColor }}
        >
          This is an error alert
        </Alert>
        <Alert
          variant='outlined'
          severity='success'
          sx={{ backgroundColor: bgColor }}
        >
          This is an error alert
        </Alert>
        {/* Filled alert variants */}
        <Typography variant='h3'>Filled alerts variants</Typography>
        <Alert
          variant='filled'
          severity='error'
          onClose={() => alert('Close alert')}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant='filled' severity='warning'>
          <AlertTitle>Warning</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant='filled' severity='info'>
          <AlertTitle>Info</AlertTitle>
          This is an error alert
        </Alert>
        <Alert
          variant='filled'
          severity='success'
          icon={<Check fontSize='inherit' />}
          action={
            <Button color='inherit' size='small'>
              UNDO
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is an error alert
        </Alert>
      </Stack>
    </Stack>
  );
}
