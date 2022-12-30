import React from 'react';
import {
  Grid,
  Typography,
  Input,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';

function SingUpPage() {
  const navigate = useNavigate();
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState<boolean>(false);
  const [isEmailValidCheck, setIsEmailValidCheck] =
    React.useState<boolean>(false);
  const [severity, setSeverity] = React.useState<'error' | 'success'>('error');
  const [isPwValidCheck, setIsPwValidCheck] = React.useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const pwRegex = new RegExp('[A-Za-z0-9]{8,15}');

  const handleChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emailRegex.test(e.target.value)) {
      setIsEmailValidCheck(false);
    } else {
      setIsEmailValidCheck(true);
    }
    setEmail(e.target.value);
  };

  const handleChangeInputPassword = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (pwRegex.test(e.target.value)) {
      setIsPwValidCheck(false);
    } else {
      setIsPwValidCheck(true);
    }

    setPassword(e.target.value);
  };

  const handleClickCancelBtn = () => {
    navigate(-1);
  };

  const handleClickSignUpBtn = async () => {
    try {
      if (isEmailValidCheck || isPwValidCheck) {
        setSnackbarMsg('이메일 또는 패스워드를 확인해주세요');
        setIsSnackbarOpen(true);
        return;
      }
      const res = await api.signup(email, password);
      setSeverity('success');
      setSnackbarMsg(res.data.message);
      setIsSnackbarOpen(true);
      navigate('/login');
    } catch (err: any) {
      setSeverity('error');
      if (err.response.data.details) {
        setSnackbarMsg(err.response.data.details);
      } else {
        setSnackbarMsg(err.response.data.message);
      }
      setIsSnackbarOpen(true);
    }
  };

  return (
    <Grid container justifyContent={'center'} gap={3}>
      <Grid container justifyContent={'center'} gap={2}>
        <Typography variant="h6">이메일</Typography>
        <Input value={email} onChange={handleChangeInputEmail} />
        <Grid container justifyContent={'center'}>
          {isEmailValidCheck ? (
            <Typography style={{ fontSize: '0.8em', color: 'red' }}>
              *이메일 형식에 맞지 않습니다.
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'} gap={2}>
        <Typography variant="h6">비밀번호</Typography>
        <Input value={password} onChange={handleChangeInputPassword} />
        <Grid container justifyContent={'center'}>
          {isPwValidCheck ? (
            <Typography style={{ fontSize: '0.8em', color: 'red' }}>
              *비밀번호 형식에 맞지 않습니다.(영문,숫자 8자 이상)
            </Typography>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Grid container justifyContent={'center'} gap={2}>
        <Button onClick={handleClickCancelBtn} variant="outlined">
          취소
        </Button>
        <Button onClick={handleClickSignUpBtn} variant="contained">
          회원가입
        </Button>
      </Grid>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default SingUpPage;
