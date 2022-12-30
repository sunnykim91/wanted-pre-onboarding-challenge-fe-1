import React from 'react';
import './App.css';
import RootRouter from './RootRouter';
import { Typography } from '@mui/material';

function App() {
  return (
    <>
      <Typography
        textAlign={'center'}
        variant="h2"
        style={{ marginBottom: '20px' }}
      >
        Wanted 프론트엔드 사전과제
      </Typography>
      <RootRouter />
    </>
  );
}

export default App;
