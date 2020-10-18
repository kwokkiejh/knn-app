import { combineReducers, createStore } from "redux"
import { todoReducer } from './todos/reducers'

const rootReducer = combineReducers({
  todo: todoReducer
})

export default createStore(rootReducer);