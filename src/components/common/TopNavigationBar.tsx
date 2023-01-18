import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function TopNavigationBar() {
  const navigate = useNavigate();

  const handleClickLoginButton = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#FFAFCC' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: '#ffffff', flexGrow: 1 }}
          >
            TODO LIST
          </Typography>
          <Button onClick={handleClickLoginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
