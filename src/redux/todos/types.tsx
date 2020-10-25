export interface Todo {
  id: number;
  title: string;
  message: string;
}

export interface TodoState {
  todo: Todo | {};
}

export interface TodosState {
  todos: Todo[];
}

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_SELECTED_TODO = "ADD_SELECTED_TODO";
export const CLEAR_SELECTED_TODO = "CLEAR_SELECTED_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface AddSelectedTodoAction {
  type: typeof ADD_SELECTED_TODO;
  payload: Todo;
}

interface ClearSelectedTodoAction {
  type: typeof CLEAR_SELECTED_TODO;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | AddSelectedTodoAction | ClearSelectedTodoAction;
