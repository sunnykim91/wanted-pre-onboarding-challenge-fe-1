import React from 'react';
import { Snackbar, Alert } from '@mui/material';
interface TodoSnackbarProps {
  isSnackbarOpen: boolean;
  snackbarMsg: string;
  severity: 'error' | 'success';
  setIsSnackbarOpen: (isSnackbarOpen: boolean) => void;
}

function TodoSnackbar({
  isSnackbarOpen,
  snackbarMsg,
  severity,
  setIsSnackbarOpen,
}: TodoSnackbarProps) {
  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={3000}
      onClose={() => setIsSnackbarOpen(false)}
    >
      <Alert
        onClose={() => setIsSnackbarOpen(false)}
        severity={severity}
        sx={{ width: '100%' }}
      >
        {snackbarMsg}
      </Alert>
    </Snackbar>
  );
}

export default TodoSnackbar;
