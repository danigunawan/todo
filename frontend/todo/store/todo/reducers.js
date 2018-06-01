import { fromJS } from 'immutable'
import types from './types'
import helper from '../helper'

const initialState = fromJS({
  text: '',
  entities: { todos: {} },
  result: []
})

export default helper.createReducer(initialState, {
  [types.ADD]: (state, { todo }) => {
    return state
      .updateIn([ 'entities', 'todos' ], todos => todos.set(`${todo.id}`, fromJS(todo)))
      .updateIn(['result'], result => result.push(todo.id))
  },

  [types.DELETE]: (state, { id }) => {
    return state
      .updateIn([ 'entities', 'todos' ], todos => todos.delete(`${id}`))
      .updateIn(['result'], result => result.delete(result.indexOf(id)))
  },

  [types.FETCH]: (state, { todos }) => state.mergeDeep(todos),

  [types.SET_TEXT]: (state, { text }) => state.set('text', text),

  [types.UPDATE]: (state, { todo }) => state.updateIn([ 'entities', 'todos' ], todos => todos.set(`${todo.id}`, fromJS(todo)))
})
