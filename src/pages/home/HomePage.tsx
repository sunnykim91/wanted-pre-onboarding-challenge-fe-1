import React from 'react';
import { Grid } from '@mui/material';
import TodoImg from '../../assets/image/todoimage.png';

function HomePage() {
  return (
    <>
      <Grid container textAlign={'center'} gap={3} direction="column">
        <Grid>
          <img src={TodoImg} alt="메인로고이미지" />
        </Grid>
      </Grid>
    </>
  );
}

export default HomePage;
