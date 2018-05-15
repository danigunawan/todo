import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import AppLayout from './components/AppLayout'
import store from './store'

export default class App extends Component {
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
