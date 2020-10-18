import {
    TodoState,
    TodoActionTypes,
    ADD_TODO,
    DELETE_TODO
  } from './types'
  
  const initialState: TodoState = {
    todos: []
  }
  
  export function todoReducer(
    state = initialState,
    action: TodoActionTypes
  ): TodoState {
    switch (action.type) {
      case ADD_TODO:
        return {
          todos: [...state.todos, action.payload]
        }
      case DELETE_TODO:
        return {
          todos: state.todos.filter(
            todo => todo.id !== action.meta.id
          )
        }
      default:
        return state
    }
  }



// import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

// interface Action<TPayload> {
//     type: string;
//     payload: TPayload;
// }

// interface InitialState {
//   allIds: [],
//   byIds: {}
// };

// export default function(state: InitialState, action: Action<any>) {
//   switch (action.type) {
//     case ADD_TODO: {
//       const { id, content } = action.payload;
//       return {
//         ...state,
//         allIds: [...state.allIds, id],
//         byIds: {
//           ...state.byIds,
//           [id]: {
//             content,
//             completed: false
//           }
//         }
//       };
//     }
//     default:
//       return state;
//   }
// }


