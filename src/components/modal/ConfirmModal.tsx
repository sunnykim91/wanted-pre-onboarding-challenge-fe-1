import React from 'react';
import { Button, DialogActions, DialogTitle } from '@mui/material';

interface ConfirmModalProps {
  content: string;
  onClose?: () => void;
  onClickConfirm: () => void;
}

export default function ConfirmModal({
  content,
  onClose,
  onClickConfirm,
}: ConfirmModalProps) {
  const handleSubmit = () => {
    onClickConfirm();
    onClose && onClose();
  };
  return (
    <>
      <DialogTitle>{content}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>취소</Button>
        <Button onClick={handleSubmit}>확인</Button>
      </DialogActions>
    </>
  );
}
