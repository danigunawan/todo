import types from 'todo/types'
import createReducer from './createReducer'

const initialState = []

export default createReducer(initialState, {
  [types.todo.FETCH]: (state, action) => action.todos,
  [types.todo.UPDATE]: (state, action) => action.todos,
  [types.todo.DELETE]: (state, action) => action.todos,
  [types.todo.ADD]: (state, action) => ([ ...state, action.todo ]),
  [types.todo.TOGGLE] (state, action) {
    return state.map((todo, index) => (index === action.id) ? ({ ...todo, completed: !todo.completed }) : todo)
  }
})
