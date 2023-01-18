import React from 'react';
import { Grid, Typography, Input, Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import {
  createTodoFromServer,
  fetchTodoFromServer,
  updateTodoFromServer,
} from '../../../store/thunk/todoThunk';
import { setInputContent, setInputTitle } from '../../../store/slice/todoSlice';

function TodoInput() {
  const { inputContent, inputTitle, currentTodo, isModifyMode } =
    useAppSelector(state => state.todosSlice);
  const dispatch = useAppDispatch();

  const handleClickBtn = async () => {
    if (isModifyMode) {
      dispatch(
        updateTodoFromServer({
          id: currentTodo.id,
          title: inputTitle,
          content: inputContent,
        }),
      );
    } else {
      dispatch(
        createTodoFromServer({ title: inputTitle, content: inputContent }),
      );
    }
    dispatch(fetchTodoFromServer());
    dispatch(setInputContent({ input: '' }));
    dispatch(setInputTitle({ input: '' }));
  };

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputTitle({
        input: e.target.value,
      }),
    );
  };

  const handleChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setInputContent({
        input: e.target.value,
      }),
    );
  };

  return (
    <Grid>
      <Typography> {isModifyMode ? '할일 수정' : '할일 추가'}</Typography>
      <Grid container gap={3} direction="column" marginTop={2}>
        <Grid container gap={3} alignItems="center">
          <Typography>제목</Typography>
          <Input value={inputTitle} onChange={handleChangeInputTitle} />
        </Grid>
        <Grid container gap={3}>
          <Typography>내용</Typography>
          <TextField value={inputContent} onChange={handleChangeInputContent} />
        </Grid>
        <Grid container justifyContent={'center'}>
          <Button onClick={handleClickBtn} variant="contained">
            {isModifyMode ? '수정하기' : '추가하기'}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TodoInput;
