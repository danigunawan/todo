import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import AppLayout from './components/AppLayout'
import AppLogin from './components/AppLogin'
import store from './store'
import auth from './store/auth'
import sagas from './store/sagas'
import { history, saga } from './store/middleware'

saga.run(sagas)

export default class App extends Component {
  componentDidMount () {
    const host = 'http://localhost:3000'
    store.dispatch(auth.actions[auth.types.INITIALIZE](host))
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
