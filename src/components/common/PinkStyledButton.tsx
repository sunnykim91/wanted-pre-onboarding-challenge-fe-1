import React from 'react';
import { Button } from '@mui/material';

interface StyledButtonProps {
  text: string;
  onClickEvent?: () => void;
}

function PinkStyledButton({ text, onClickEvent }: StyledButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        background: '#FFC8DD',
        color: '#ffffff',
        '&:hover': {
          background: '#FFAFCC',
        },
      }}
      onClick={onClickEvent}
      size="large"
    >
      {text}
    </Button>
  );
}

export default PinkStyledButton;
