import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const sagaMiddleware = createSagaMiddleware()

export const history = createHistory()

const store = createStore(reducers, applyMiddleware(sagaMiddleware, routerMiddleware(history), createLogger()))

sagaMiddleware.run(sagas)

export default store
