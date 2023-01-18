import React, { useContext } from 'react';
import { Grid, Typography, Input, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useForm, Controller } from 'react-hook-form';
import { SignUpInputType } from '../../types/auth/SignUpInputType';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '../../utils/schema/authSchema';
import { SnackBarContext } from '../../utils/SnackBar/SnackBarProvider';
import { SnackBarContextType } from '../../types/auth/SnackBarContextType';

function SingUpPage() {
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

  const handleClickCancelBtn = () => {
    navigate(-1);
  };

  const onSubmit = async (data: SignUpInputType) => {
    try {
      const res = await api.signup(data.email, data.password);
      setSeverity('success');
      setText(res.data.message);
      setIsShow(true);
      navigate('/login');
    } catch (err: any) {
      setSeverity('error');
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
      <Typography variant="h4">회원가입</Typography>
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
            <Button variant="contained" onClick={handleClickCancelBtn}>
              취소
            </Button>
            <Button variant="contained" type="submit">
              회원가입
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}

export default SingUpPage;
