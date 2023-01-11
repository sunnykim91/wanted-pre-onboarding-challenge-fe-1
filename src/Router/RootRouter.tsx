import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNavigationBar from '../components/common/TopNavigationBar';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import MainPage from '../pages/main/MainPage';
import SingUpPage from '../pages/signup/SingUpPage';

function RootRouter() {
  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Grid
        container
        style={{ marginTop: '200px' }}
        justifyContent="center"
        textAlign={'center'}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingUpPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default RootRouter;
