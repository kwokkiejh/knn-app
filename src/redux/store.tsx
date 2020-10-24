import { combineReducers } from "redux";
import { todosReducer } from "./todos/reducers";

export const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
