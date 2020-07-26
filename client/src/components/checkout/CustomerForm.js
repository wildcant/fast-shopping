import { TextField } from '@material-ui/core';
import React from 'react';

export default () => (
  <>
    <TextField
      fullWidth
      required
      margin="dense"
      label="Full Name"
      variant="outlined"
    />
    <TextField
      fullWidth
      required
      margin="dense"
      label="ID"
      variant="outlined"
    />
    <TextField
      fullWidth
      required
      margin="dense"
      label="Address"
      variant="outlined"
    />
    <TextField
      fullWidth
      margin="dense"
      label="Phone Number"
      variant="outlined"
    />
    <TextField
      fullWidth
      required
      margin="dense"
      label="Email"
      variant="outlined"
    />
  </>
);
