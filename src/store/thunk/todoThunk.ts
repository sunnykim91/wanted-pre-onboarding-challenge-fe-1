import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

import {
  Todo,
  TodoCreatePayload,
  TodoDeletePayload,
  TodoUpdatePayload,
} from '../../types/todo/Todo';

export const fetchTodoFromServer = createAsyncThunk<Todo[]>(
  `tood/fetchTodo`, // 액션 이름을 정의해 주도록 합니다.
  async () => {
    try {
      return (await api.getTodos()).data.data;
    } catch (e: any) {
      console.log(e);
    }
  },
);

export const createTodoFromServer = createAsyncThunk(
  `tood/createTodo`, // 액션 이름을 정의해 주도록 합니다.
  async (arg: TodoCreatePayload) => {
    try {
      await api.createTodo(arg.title, arg.content);
    } catch (e: any) {
      console.log(e);
    }
  },
);

export const deleteTodoFromServer = createAsyncThunk(
  `tood/deleteTodo`, // 액션 이름을 정의해 주도록 합니다.
  async (arg: TodoDeletePayload) => {
    try {
      await api.deleteTodo(arg.id);
    } catch (e: any) {
      console.log(e);
    }
  },
);

export const updateTodoFromServer = createAsyncThunk(
  `tood/updateTodo`, // 액션 이름을 정의해 주도록 합니다.
  async (arg: TodoUpdatePayload) => {
    try {
      await api.updateTodo(arg.id, arg.title, arg.content);
    } catch (e: any) {
      console.log(e);
    }
  },
);
