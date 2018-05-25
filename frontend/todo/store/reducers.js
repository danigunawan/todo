import { combineReducers } from 'redux'
import todo from './todo'
import filter from './filter'
import uuid from './uuid'

export default combineReducers({
  todo: todo.reducers,
  filter: filter.reducers,
  uuid: uuid.reducers
})
