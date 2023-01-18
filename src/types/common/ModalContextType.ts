import { Dispatch, SetStateAction } from 'react';

export interface ModalContextType {
  text: string;
  open: boolean;
  setText: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
