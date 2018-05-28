import { combineReducers } from 'redux'
import todo from './todo'
import filter from './filter'
import auth from './auth'

export default combineReducers({
  todo: todo.reducers,
  filter: filter.reducers,
  api: auth.reducers
})
