import React from 'react';
import { Grid, Typography, Input, Button, Paper, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import TodoSnackbar from '../component/TodoSnackbar';
import PinkStyledButton from '../../components/common/PinkStyledButton';
import BlueStyledButton from '../../components/common/BlueStyledButton';

function LoginPage() {
  const navigate = useNavigate();
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState<boolean>(false);
  const [isEmailValidCheck, setIsEmailValidCheck] =
    React.useState<boolean>(false);
  const [isPwValidCheck, setIsPwValidCheck] = React.useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState<string>('');
  const [severity, setSeverity] = React.useState<'error' | 'success'>('error');
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

  const handleClickLoginBtn = async () => {
    try {
      const res = await api.login(email, password);
      localStorage.setItem('token', res.data.token);
      setSeverity('success');
      setSnackbarMsg(res.data.message);
      setIsSnackbarOpen(true);
      navigate('/main');
    } catch (err: any) {
      setSeverity('error');
      if (err.response.data.message === 'Not Found') {
        setSnackbarMsg('회원정보를 찾을 수 없습니다.');
      }
      if (err.response.data.details) {
        setSnackbarMsg(err.response.data.details);
      } else {
        setSnackbarMsg(err.response.data.message);
      }
      setIsSnackbarOpen(true);
    }
  };

  const handleClickSignUpBtn = () => {
    navigate('/signup');
  };

  return (
    <Paper sx={{ width: '25%', padding: '20px', background: '#FFF6BD' }}>
      <Grid container justifyContent={'center'} gap={3}>
        <Typography variant="h4">로그인</Typography>
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
          <PinkStyledButton text="로그인" onClickEvent={handleClickLoginBtn} />
          <BlueStyledButton
            text="회원가입"
            onClickEvent={handleClickSignUpBtn}
          />
        </Grid>
        <TodoSnackbar
          isSnackbarOpen={isSnackbarOpen}
          setIsSnackbarOpen={setIsSnackbarOpen}
          severity={severity}
          snackbarMsg={snackbarMsg}
        />
      </Grid>
    </Paper>
  );
}

export default LoginPage;
