import React from 'react';
import { Grid } from '@mui/material';
import TopNavigationBar from '../common/TopNavigationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Grid container justifyContent="center" textAlign={'center'} gap={5}>
      <TopNavigationBar />
      <Grid container justifyContent="center" textAlign={'center'}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
