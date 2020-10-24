import { combineReducers } from "redux";
import { todoReducer } from "./todos/reducers";

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
