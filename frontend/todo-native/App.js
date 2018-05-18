import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '../todo/store'
import AppLayout from './components/AppLayout'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppLayout />
      </Provider>
    )
  }
}
