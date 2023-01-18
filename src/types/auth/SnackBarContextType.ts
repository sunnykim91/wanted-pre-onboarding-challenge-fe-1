import { Dispatch, SetStateAction } from 'react';
import { AlertColor } from '@mui/material';

export interface SnackBarContextType {
  text: string;
  isShow: boolean;
  severity: AlertColor | undefined;
  setText: Dispatch<SetStateAction<string>>;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  setSeverity: Dispatch<SetStateAction<AlertColor | undefined>>;
}
