import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppLayout from './components/AppLayout'
import store from './store'
import types from './store/types'
import todo from './store/todo'
import uuid from './store/uuid'

export default class App extends Component {
  componentDidMount () {
    store.dispatch(todo.actions[types.todo.FETCH_API]())
    store.dispatch(uuid.actions[types.uuid.INITIALIZE]())
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/:filter?' component={AppLayout} />
        </Router>
      </Provider>
    )
  }
}
