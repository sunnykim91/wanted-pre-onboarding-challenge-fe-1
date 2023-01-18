import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SetInputAction,
  SetCurrentTodoAction,
  SetFlagAction,
} from '../../types/todo/ActionTypes';
import { TodoStateType } from '../../types/todo/TodoStateType';
import { fetchTodoFromServer } from '../thunk/todoThunk';

const initialState: TodoStateType = {
  inputTitle: '',
  inputContent: '',
  loading: false,
  currentTodo: {
    id: '',
    content: '',
    title: '',
  },
  todos: [],
  isModifyMode: false,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setCurrentTodo(
      state: TodoStateType,
      action: PayloadAction<SetCurrentTodoAction>,
    ) {
      state.currentTodo = action.payload.todo;
    },
    setInputTitle(state: TodoStateType, action: PayloadAction<SetInputAction>) {
      state.inputTitle = action.payload.input;
    },
    setInputContent(
      state: TodoStateType,
      action: PayloadAction<SetInputAction>,
    ) {
      state.inputContent = action.payload.input;
    },
    setIsModifyMode(
      state: TodoStateType,
      action: PayloadAction<SetFlagAction>,
    ) {
      state.isModifyMode = action.payload.flag;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodoFromServer.pending, state => {
      state.loading = true;
    }),
      builder.addCase(fetchTodoFromServer.fulfilled, (state, { payload }) => {
        state.todos = payload;
        state.loading = false;
      });
  },
});

export const {
  setInputTitle,
  setInputContent,
  setCurrentTodo,
  setIsModifyMode,
} = todoSlice.actions;

export default todoSlice.reducer;
