import {
  TodoState,
  TodosState,
  TodoActionTypes,
  ADD_TODO,
  DELETE_TODO,
  ADD_SELECTED_TODO,
  CLEAR_SELECTED_TODO,
} from "./types";

const initialTodosState: TodosState = {
  todos: [],
};

const initialTodoState: TodoState = {
  todo: {},
};

export function todosReducer(state = initialTodosState, action: TodoActionTypes): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export function todoReducer(state = initialTodoState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_SELECTED_TODO:
      return {
        todo: action.payload,
      };
    case CLEAR_SELECTED_TODO:
      return initialTodoState;
    default:
      return state;
  }
}
