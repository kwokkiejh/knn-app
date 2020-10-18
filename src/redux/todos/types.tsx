export interface Todo {
  id: number;
  message: String;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction;
