import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppLayout from './components/AppLayout'
import store from './store'
import types from './store/types'
import api from './store/api'

export default class App extends Component {
  componentDidMount () {
    const host = ''
    const token = document.head.querySelector('meta[name=csrf-token]')
    const csrfToken = token ? token.content : ''
    store.dispatch(api.actions[types.api.INITIALIZE](host, csrfToken))
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
