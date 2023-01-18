import React, { useEffect } from 'react';
import { Grid, Typography, ListItem, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useModal } from '../../../utils/modal/ModalProvider';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import {
  deleteTodoFromServer,
  fetchTodoFromServer,
} from '../../../store/thunk/todoThunk';
import ConfirmModal from '../../../components/modal/ConfirmModal';
import {
  setCurrentTodo,
  setInputContent,
  setInputTitle,
  setIsModifyMode,
} from '../../../store/slice/todoSlice';
import { Todo } from '../../../types/todo/Todo';

function TodoList() {
  const open = useModal();
  const { todos } = useAppSelector(state => state.todosSlice);
  const dispatch = useAppDispatch();

  const fetchTodo = async () => {
    dispatch(fetchTodoFromServer());
  };

  const deleteTodo = (id: string) => {
    dispatch(deleteTodoFromServer({ id }));
    fetchTodo();
  };

  const handleClickDeleteIcon = async (id: string) => {
    open(
      <ConfirmModal
        content="삭제 하시겠습니까?"
        onClickConfirm={() => deleteTodo(id)}
      />,
    );
  };

  const handleClickUpdateIcon = (todo: Todo) => {
    dispatch(setIsModifyMode({ flag: true }));
    dispatch(setCurrentTodo({ todo }));
    dispatch(
      setInputTitle({
        input: todo.title,
      }),
    );
    dispatch(
      setInputContent({
        input: todo.content,
      }),
    );
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      {todos.map((todo: Todo) => {
        return (
          <ListItem key={todo.id}>
            <Grid container justifyContent={'flex-start'} gap={3}>
              <Grid>
                <Typography variant="subtitle1">제목 : {todo.title}</Typography>
              </Grid>

              <Grid>
                <Tooltip title="편집">
                  <EditIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClickUpdateIcon(todo)}
                  />
                </Tooltip>
              </Grid>
              <Grid>
                <Tooltip title="삭제">
                  <DeleteIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClickDeleteIcon(todo.id)}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </>
  );
}

export default TodoList;
