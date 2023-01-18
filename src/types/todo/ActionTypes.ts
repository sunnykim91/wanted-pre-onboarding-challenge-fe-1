import { Todo } from './Todo';

export interface SetCurrentTodoAction {
  todo: Todo;
}

export interface SetInputAction {
  input: string;
}

export interface SetFlagAction {
  flag: boolean;
}
