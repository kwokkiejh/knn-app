import { combineReducers } from "redux"
import { todoReducer } from './todos/reducers'

const rootReducer = combineReducers({
  todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>