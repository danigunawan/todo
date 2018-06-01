import React, { Component } from 'react'
import { Provider } from 'react-redux'
import auth from './store/auth'
import store from './store'
import AppLayout from './components/AppLayout'
import sagas from './store/sagas'
import { saga } from './store/middleware'

saga.run(sagas)

export default class App extends Component {
  componentDidMount () {
    store.dispatch(auth.actions[auth.types.INITIALIZE]('https://krevoe.com'))
    store.dispatch(auth.actions[auth.types.LOGIN]('dm.laziuk@gmail.com', 'radioroks'))
  }
  render () {
    return (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    )
  }
}
