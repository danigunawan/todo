import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppLayout from './components/AppLayout'
import store from './store'
import types from './store/types'
import auth from './store/auth'

export default class App extends Component {
  componentDidMount () {
    const token = document.head.querySelector('meta[name=csrf-token]')
    store.dispatch(auth.actions[types.api.INITIALIZE]('', token ? token.content : ''))
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
