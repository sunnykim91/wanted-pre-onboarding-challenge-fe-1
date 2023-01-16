import React from 'react';
import { Grid, Typography, Input, Button, Paper, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import TodoSnackbar from '../component/TodoSnackbar';
import BlueStyledButton from '../../components/common/BlueStyledButton';
import PinkStyledButton from '../../components/common/PinkStyledButton';

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
    <Paper sx={{ width: '25%', padding: '20px', background: '#FFF6BD' }}>
      <Grid container justifyContent={'center'} gap={3}>
        <Typography variant="h4">회원가입</Typography>
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
          <PinkStyledButton text="취소" onClickEvent={handleClickCancelBtn} />
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

export default SingUpPage;
