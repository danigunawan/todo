import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import todo from './todo'
import filter from './filter'

const reducers = combineReducers({
  todo: todo.reducers,
  filter: filter.reducers
})

export default createStore(reducers, applyMiddleware(thunk, createLogger()))
