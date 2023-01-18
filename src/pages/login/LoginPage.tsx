import React, { useContext } from 'react';
import { Grid, Typography, Input, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpInputType } from '../../types/auth/SignUpInputType';
import { authSchema } from '../../utils/schema/authSchema';
import { SnackBarContext } from '../../utils/SnackBar/SnackBarProvider';
import { SnackBarContextType } from '../../types/auth/SnackBarContextType';

function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpInputType>({
    resolver: yupResolver(authSchema),
  });
  const { setIsShow, setSeverity, setText } =
    useContext<SnackBarContextType>(SnackBarContext);
  const navigate = useNavigate();

  const handleClickSignUpBtn = () => {
    navigate('/signup');
  };

  const onSubmit = async (data: SignUpInputType) => {
    try {
      const res = await api.login(data.email, data.password);
      localStorage.setItem('token', res.data.token);
      setSeverity('success');
      setText(res.data.message);
      setIsShow(true);
      navigate('/todos');
    } catch (err: any) {
      setSeverity('error');
      if (err.response.data.message === 'Not Found') {
        setText('회원정보를 찾을 수 없습니다.');
      }
      if (err.response.data.details) {
        setText(err.response.data.details);
      } else {
        setText(err.response.data.message);
      }
      setIsShow(true);
    }
  };

  return (
    <Grid container direction={'column'} gap={3}>
      <Typography variant="h4">로그인</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction={'column'} gap={3}>
          <Grid container justifyContent={'center'} gap={2}>
            <Typography variant="h6">이메일</Typography>
            <Controller
              name="email"
              rules={{ required: true }}
              control={control}
              defaultValue={''}
              render={({ field }) => <Input {...field} />}
            />
            <Grid container justifyContent={'center'} sx={{ color: 'red' }}>
              {errors.email && errors.email.message}
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'} gap={2}>
            <Typography variant="h6">패스워드</Typography>
            <Controller
              name="password"
              rules={{ required: true }}
              control={control}
              defaultValue={''}
              render={({ field }) => <Input {...field} type="password" />}
            />
            <Grid container justifyContent={'center'} sx={{ color: 'red' }}>
              {errors.password && errors.password.message}
            </Grid>
          </Grid>
          <Grid container justifyContent={'center'} gap={2}>
            <Button variant="contained" type="submit">
              로그인
            </Button>
            <Button variant="contained" onClick={handleClickSignUpBtn}>
              회원가입
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default LoginPage;
