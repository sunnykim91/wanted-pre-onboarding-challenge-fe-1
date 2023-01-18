import React, {
  createContext,
  cloneElement,
  useContext,
  useState,
} from 'react';
import { Dialog } from '@mui/material';

type ModalOpenFn = (children: React.ReactNode) => void;

export const ModalContext = createContext<ModalOpenFn | null>(null);

function ModalProvider({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<React.ReactNode | null>(null);

  const openModal: ModalOpenFn = (children: any) => {
    setModal(
      cloneElement(children, {
        ...children.props,
        onClose: handleClose,
        onSubmit: handleSubmit,
      }),
    );
    setOpen(true);

    return false;
  };

  const handleSubmit = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalContext.Provider value={openModal}>
        {children}
      </ModalContext.Provider>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        {modal}
      </Dialog>
    </>
  );
}
export function useModal() {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}

export default ModalProvider;
