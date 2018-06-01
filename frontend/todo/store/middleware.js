import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const saga = createSagaMiddleware()

export const history = createHistory()

export default applyMiddleware(
  saga,
  routerMiddleware(history),
  createLogger()
)
