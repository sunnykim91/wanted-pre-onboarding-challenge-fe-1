/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import { SnackBarContextType } from '../../types/auth/SnackBarContextType';

interface SnackBarProps {
  children: React.ReactNode;
}

export const SnackBarContext = createContext<SnackBarContextType>({
  text: '',
  isShow: false,
  severity: 'success',
  setIsShow: () => {},
  setSeverity: () => {},
  setText: () => {},
});

function SnackBarProvider({ children }: SnackBarProps) {
  const [text, setText] = React.useState('');
  const [isShow, setIsShow] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    'success',
  );

  return (
    <SnackBarContext.Provider
      value={{ text, isShow, severity, setText, setIsShow, setSeverity }}
    >
      {children}
      <Snackbar
        open={isShow}
        autoHideDuration={3000}
        onClose={() => setIsShow(false)}
      >
        <Alert
          onClose={() => setIsShow(false)}
          severity={severity}
          sx={{ width: '100%' }}
        >
          {text}
        </Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;
