import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType } from '../../types/auth/AuthStateType';
import { SetInputAction } from '../../types/todo/ActionTypes';

const initialState: AuthStateType = {
  inputId: '',
  inputPassword: '',
  inputPasswordConfirm: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInputId(state: AuthStateType, action: PayloadAction<SetInputAction>) {
      state.inputId = action.payload.input;
    },
    setInputPassword(
      state: AuthStateType,
      action: PayloadAction<SetInputAction>,
    ) {
      state.inputPassword = action.payload.input;
    },
    setInputPasswordConfirm(
      state: AuthStateType,
      action: PayloadAction<SetInputAction>,
    ) {
      state.inputPasswordConfirm = action.payload.input;
    },
  },
});

export const { setInputId, setInputPasswordConfirm, setInputPassword } =
  authSlice.actions;

export default authSlice.reducer;
