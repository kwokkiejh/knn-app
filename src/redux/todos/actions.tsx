import { Todo, ADD_TODO, DELETE_TODO, ADD_SELECTED_TODO, CLEAR_SELECTED_TODO, TodoActionTypes } from "./types";

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

// TypeScript infers that this function is returning AddSelectedTodoAction
export function addSelectedTodo(selectedTodo: Todo): TodoActionTypes {
  return {
    type: ADD_SELECTED_TODO,
    payload: selectedTodo,
  };
}

// TypeScript infers that this function is returning ClearSelectedTodoAction
export function clearSelectedTodo(): TodoActionTypes {
  return {
    type: CLEAR_SELECTED_TODO,
  };
}
