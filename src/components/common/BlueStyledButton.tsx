import React from 'react';
import { Button } from '@mui/material';

interface StyledButtonProps {
  text: string;
  onClickEvent?: () => void;
}

function BlueStyledButton({ text, onClickEvent }: StyledButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        background: '#BDE0FE',
        color: '#ffffff',
        '&:hover': {
          background: '#A2D2FF',
        },
      }}
      onClick={onClickEvent}
    >
      {text}
    </Button>
  );
}

export default BlueStyledButton;
