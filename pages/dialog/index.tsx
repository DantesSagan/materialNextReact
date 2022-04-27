import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { StatesFN } from './dialogsecond';

export default function DialogIndex() {
  const [open, setOpen] = useState<boolean>(false);
  const { openSecond, setOpenSecond } = StatesFN();

  
  return (
    <>
      <Typography variant='h1'>Dialog Main</Typography>
      <Button onClick={() => setOpen(!open)}>Open dialog</Button>
      <Button onClick={() => setOpenSecond(!openSecond)}>
        <Link href='/dialog/dialogsecond'>Open Second dialog</Link>
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(open)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Are you sure you want to submit test? You will not be able to edit
            after submitting!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            variant='contained'
            color='success'
            onClick={() => setOpen(!open)}
          >
            Submit
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => setOpen(!open)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
