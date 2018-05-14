import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from 'todo/reducers'
import Layout from 'todo/containers/Layout'

const store = createStore(reducers, applyMiddleware(thunkMiddleware, createLogger()))

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}
