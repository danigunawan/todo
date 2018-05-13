import React, { Component } from 'react'
import Footer from 'todo/components/Footer'
import AddTodo from 'todo/containers/AddTodo'
import VisibleTodoList from 'todo/containers/VisibleTodoList'

export default class App extends Component {
  render () {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}
