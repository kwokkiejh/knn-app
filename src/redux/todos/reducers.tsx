import { TodoState, TodoActionTypes, ADD_TODO, DELETE_TODO } from "./types";

const initialState: TodoState = {
  todos: [],
};

// export function typedAction<T extends string>(type: T): { type: T };
// export function typedAction<T extends string, P extends any>(type: T, payload: P): { type: T; payload: P };
// export function typedAction(type: string, payload?: any) {
//   return { type, payload };
// }

// export const login = (username: string) => {
//   return typedAction(ADD_TODO, username);
// };
// export const logout = () => {
//   return typedAction(DELETE_TODO);
// };
// type UserAction = ReturnType<typeof login | typeof logout>;

export function todoReducer(state = initialState, action: TodoActionTypes): TodoState {
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
