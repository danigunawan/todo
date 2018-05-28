import { combineReducers } from 'redux'
import todo from './todo'
import filter from './filter'
import api from './api'

export default combineReducers({
  todo: todo.reducers,
  filter: filter.reducers,
  api: api.reducers
})
