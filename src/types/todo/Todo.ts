export interface Todo {
  readonly id: string;
  title: string;
  content: string;
}

export interface TodoCreatePayload {
  title: string;
  content: string;
}

export interface TodoDeletePayload {
  id: string;
}

export interface TodoUpdatePayload {
  readonly id: string;
  title: string;
  content: string;
}
