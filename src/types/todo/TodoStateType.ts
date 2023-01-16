import { Todo } from './Todo';

export type TodoStateType = {
  inputTitle: string;
  inputContent: string;
  loading: boolean;
  currentTodo: Todo;
  todos: Todo[];
};
