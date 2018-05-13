import types from 'todo/types'
import createReducer from './createReducer'

const initialState = types.filter.SHOW_ALL

export default createReducer(initialState, {
  [types.filter.SET_FILTER]: (state, action) => action.filter
})
