import React, { useEffect } from 'react';
import {
  Grid,
  Typography,
  Input,
  Button,
  ListItem,
  TextField,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Todo } from '../../types/todo/Todo';

function MainPage() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = React.useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = React.useState<Todo>({
    id: '',
    content: '',
    title: '',
  });
  const [inputTitle, setInputTitle] = React.useState<string>('');
  const [inputContent, setInputContent] = React.useState<string>('');
  const [isAddMode, setIsAddMode] = React.useState<boolean>(false);
  const [isModifyMode, setIsModifyMode] = React.useState<boolean>(false);

  const handleClickAddTodoSubmitBtn = async () => {
    try {
      if (isModifyMode) {
        await api.updateTodo(currentTodo.id, inputTitle, inputContent);
      } else {
        await api.createTodo(inputTitle, inputContent);
      }

      fetchTodo();
      setInputTitle('');
      setInputContent('');
    } catch (err: any) {
      if (err.message === 'token expired') {
        navigate('/login');
      }
    }
  };

  const handleClickAddTodoButton = async () => {
    setInputTitle('');
    setInputContent('');
    setIsAddMode(true);
    setIsModifyMode(false);
  };

  const fetchTodo = async () => {
    try {
      const res = await api.getTodos();
      setTodoList(res.data.data);
    } catch (err: any) {
      if (err.message === 'token expired') {
        navigate('/login');
      }
    }
  };

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const handleClickDeleteIcon = async (id: string) => {
    try {
      await api.deleteTodo(id);
      fetchTodo();
    } catch (err: any) {
      if (err.message === 'token expired') {
        navigate('/login');
      }
    }
  };

  const handleClickUpdateIcon = (todo: Todo) => {
    setIsModifyMode(true);
    setIsAddMode(false);
    setCurrentTodo(todo);
    setInputTitle(todo.title);
    setInputContent(todo.content);
  };

  const handleClickCancelButton = () => {
    if (isModifyMode) {
      setIsModifyMode(false);
    }
    if (isAddMode) {
      setIsAddMode(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  //웹 접근성 측면

  // 삭제 수정시 모달창

  return (
    <Grid container justifyContent={'space-around'} gap={5} padding={2}>
      <Grid>
        <Grid container justifyContent={'space-between'}>
          <Typography variant="h6">목록 영역</Typography>
          <Button onClick={handleClickAddTodoButton} variant="contained">
            추가하기
          </Button>
        </Grid>
        {todoList.map((todo: Todo) => {
          return (
            <ListItem key={todo.id}>
              <Grid container justifyContent={'flex-start'} gap={3}>
                <Grid>
                  <Typography variant="subtitle1">
                    제목 : {todo.title}
                  </Typography>
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
      </Grid>
      {isAddMode || isModifyMode ? (
        <Grid>
          <Grid
            container
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography variant="h6">상세 영역</Typography>
            <Typography variant="subtitle2">
              {isAddMode ? '<추가>' : '<수정>'}
            </Typography>
          </Grid>
          <Grid container gap={3} direction="column" marginTop={2}>
            <Grid>
              <Typography>제목</Typography>
              <Input value={inputTitle} onChange={handleChangeInputTitle} />
            </Grid>
            <Grid>
              <Typography>내용</Typography>
              <TextField
                value={inputContent}
                onChange={handleChangeInputContent}
              />
            </Grid>
            <Grid container gap={2}>
              <Button onClick={handleClickCancelButton} variant="outlined">
                취소
              </Button>
              <Button onClick={handleClickAddTodoSubmitBtn} variant="contained">
                {isAddMode ? '추가하기' : '수정하기'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default MainPage;
