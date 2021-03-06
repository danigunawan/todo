import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import api from './api'
import auth from './auth'
import filter from './filter'
import todo from './todo'

export default combineReducers({
  api: api.reducers,
  auth: auth.reducers,
  todo: todo.reducers,
  filter: filter.reducers,
  router: routerReducer
})
