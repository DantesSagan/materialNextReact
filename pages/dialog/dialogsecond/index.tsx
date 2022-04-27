import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

export function StatesFN() {
  const [openSecond, setOpenSecond] = useState<boolean>(false);
  return {
    openSecond,
    setOpenSecond,
  };
}

export default function DialogSecondIndex() {
  const { openSecond, setOpenSecond } = StatesFN();
  return (
    <>
      <Typography variant='h1'>Dialog Second</Typography>
      <Button onClick={() => setOpenSecond(!openSecond)}>
        OpenSecond dialog
      </Button>
      <Dialog
        open={openSecond}
        onClose={() => setOpenSecond(openSecond)}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'
      >
        <DialogTitle id='dialog-title'>Submit the test?Second</DialogTitle>
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
            onClick={() => setOpenSecond(!openSecond)}
          >
            Submit
          </Button>
          <Button
            variant='contained'
            color='error'
            onClick={() => setOpenSecond(!openSecond)}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
