import { Todo, ADD_TODO, DELETE_TODO, TodoActionTypes } from './types'

// TypeScript infers that this function is returning AddTodoAction
export function addTodo(newTodo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

// TypeScript infers that this function is returning DeleteTodoAction
export function deleteTodo(id: number): TodoActionTypes {
  return {
    type: DELETE_TODO,
    meta: {
      id
    }
  }
}

// import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

// let nextTodoId = 0;

// export const addTodo = (content: String) => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content,
//   },
// });

// export const toggleTodo = (id: Number) => ({
//   type: TOGGLE_TODO,
//   payload: { id },
// });


