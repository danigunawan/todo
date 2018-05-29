import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import AppLayout from './components/AppLayout'
import AppLogin from './components/AppLogin'
import store, { history } from './store'
import types from './store/types'
import api from './store/api'

export default class App extends Component {
  componentDidMount () {
    const host = 'http://localhost:3000'
    const token = document.head.querySelector('meta[name=csrf-token]')
    const csrfToken = token ? token.content : ''
    store.dispatch(api.actions[types.api.INITIALIZE](host, csrfToken))
  }

  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/login' component={AppLogin} />
            <Route path='/:filter?' component={AppLayout} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}
