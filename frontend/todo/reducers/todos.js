import types from 'todo/types'
import createReducer from './createReducer'

const initialState = []

export default createReducer(initialState, {
  [types.todo.ADD_TODO]: (state, action) => {
    let newTodo = { text: action.text, completed: false }
    return [ ...state, newTodo ]
  },
  [types.todo.TOGGLE_TODO]: (state, action) => {
    return state.map((todo, index) => (index === action.index) ? ({ ...todo, completed: !todo.completed }) : todo)
  }
})
