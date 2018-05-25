import React, { Component } from 'react'
import AppHeader from './AppHeader'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

export default class AppLayout extends Component {
  render () {
    return (
      <div>
        <AppHeader /> <br />
        <TodoAdd /> <br />
        <TodoList />
      </div>
    )
  }
}
