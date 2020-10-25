import { combineReducers } from "redux";
import { todosReducer, todoReducer } from "./todos/reducers";

export const rootReducer = combineReducers({
  todos: todosReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
