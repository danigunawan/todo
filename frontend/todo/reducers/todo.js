import types from 'todo/types'
import createReducer from './createReducer'

const initialState = []

export default createReducer(initialState, {
  [types.todo.FETCH] (state, action) {
    return action.todos
  },
  [types.todo.UPDATE] (state, action) {
    return action.todos
  },
  [types.todo.DELETE] (state, action) {
    return action.todos
  },
  [types.todo.ADD] (state, action) {
    let newTodo = { text: action.text, completed: false }
    return [ ...state, newTodo ]
  },
  [types.todo.TOGGLE] (state, action) {
    return state.map((todo, index) => (index === action.id) ? ({ ...todo, completed: !todo.completed }) : todo)
  }
})
