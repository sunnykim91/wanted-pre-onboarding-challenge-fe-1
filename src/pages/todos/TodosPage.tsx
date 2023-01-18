import React, { useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchTodoFromServer } from '../../store/thunk/todoThunk';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';
import {
  setInputContent,
  setInputTitle,
  setIsModifyMode,
} from '../../store/slice/todoSlice';

function TodosPage() {
  const dispatch = useAppDispatch();

  const handleClickAddTodoBtn = () => {
    dispatch(setIsModifyMode({ flag: false }));
    dispatch(setInputContent({ input: '' }));
    dispatch(setInputTitle({ input: '' }));
  };

  const fetchTodo = async () => {
    dispatch(fetchTodoFromServer());
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <Grid container justifyContent={'space-around'} gap={2} padding={2}>
      <Grid>
        <Typography variant="h6">할일 목록</Typography>
        <TodoList />
        <Button variant="contained" onClick={handleClickAddTodoBtn}>
          할일 추가 하기
        </Button>
      </Grid>

      <Grid>
        <TodoInput />
      </Grid>
    </Grid>
  );
}

export default TodosPage;
