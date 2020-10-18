import { Todo, ADD_TODO, DELETE_TODO, TodoActionTypes } from "./types";

// TypeScript infers that this function is returning AddTodoAction
export function addTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
}

// TypeScript infers that this function is returning DeleteTodoAction
export function deleteTodo(id: number): TodoActionTypes {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
