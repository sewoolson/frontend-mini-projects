import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MuiDialogExample = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
       See Tips
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">{"How to practice mindfulness"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <li>Take a deep breath and focus on your breathing.</li>
            <li>Notice the sensations in your body without judgment.</li>
            <li>Name something you see, smell, hear, and feel in the present moment.</li>
            <li>Practice mindfulness meditation for a few minutes each day.</li>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No thanks.</Button>
          <Button onClick={handleClose} autoFocus>
            Ok, all set!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MuiDialogExample;
